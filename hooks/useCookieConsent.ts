'use client';

import { useState, useEffect, useCallback } from 'react';

export type ConsentCategories = {
    necessary: boolean;   // always true, can't be toggled
    preferences: boolean;
    statistics: boolean;
    marketing: boolean;
};

export type ConsentState = {
    decided: boolean;           // has the user made a choice?
    consent: ConsentCategories;
    allowAll: () => void;
    denyAll: () => void;
    saveSelection: (categories: ConsentCategories) => void;
    resetConsent: () => void;   // for "withdraw consent" link in footer
};

const STORAGE_KEY = 'pg_cookie_consent';
const CONSENT_VERSION = 'v1'; // bump this to re-ask users after policy changes

const DEFAULT_CONSENT: ConsentCategories = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
};

function readStoredConsent(): { decided: boolean; consent: ConsentCategories } {
    if (typeof window === 'undefined') return { decided: false, consent: DEFAULT_CONSENT };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { decided: false, consent: DEFAULT_CONSENT };
        const parsed = JSON.parse(raw);
        // If policy version changed, re-ask
        if (parsed.version !== CONSENT_VERSION) return { decided: false, consent: DEFAULT_CONSENT };
        return { decided: true, consent: { ...DEFAULT_CONSENT, ...parsed.consent } };
    } catch {
        return { decided: false, consent: DEFAULT_CONSENT };
    }
}

function writeConsent(consent: ConsentCategories) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: CONSENT_VERSION, consent, timestamp: Date.now() })
    );
}

// ─── Fire gtag consent update ──────────────────────────────────────────────
function applyGtagConsent(consent: ConsentCategories) {
    if (typeof window === 'undefined' || !(window as any).gtag) return;
    (window as any).gtag('consent', 'update', {
        analytics_storage: consent.statistics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        functionality_storage: consent.preferences ? 'granted' : 'denied',
        personalization_storage: consent.preferences ? 'granted' : 'denied',
    });
}

export function useCookieConsent(): ConsentState {
    const [decided, setDecided] = useState(false);
    const [consent, setConsent] = useState<ConsentCategories>(DEFAULT_CONSENT);

    useEffect(() => {
        const stored = readStoredConsent();
        setDecided(stored.decided);
        setConsent(stored.consent);
        if (stored.decided) applyGtagConsent(stored.consent);
    }, []);

    const commit = useCallback((next: ConsentCategories) => {
        const final = { ...next, necessary: true };
        writeConsent(final);
        setConsent(final);
        setDecided(true);
        applyGtagConsent(final);
    }, []);

    const allowAll = useCallback(() => {
        commit({ necessary: true, preferences: true, statistics: true, marketing: true });
    }, [commit]);

    const denyAll = useCallback(() => {
        commit({ necessary: true, preferences: false, statistics: false, marketing: false });
    }, [commit]);

    const saveSelection = useCallback((categories: ConsentCategories) => {
        commit(categories);
    }, [commit]);

    const resetConsent = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setDecided(false);
        setConsent(DEFAULT_CONSENT);
    }, []);

    return { decided, consent, allowAll, denyAll, saveSelection, resetConsent };
}
