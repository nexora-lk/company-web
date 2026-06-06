'use client';

import { useState, useEffect } from 'react';
import { useCookieConsent, ConsentCategories } from '@/hooks/useCookieConsent';

// ─── Toggle Switch ─────────────────────────────────────────────────────────
function Toggle({
    checked,
    onChange,
    disabled = false,
    id,
}: {
    checked: boolean;
    onChange?: (v: boolean) => void;
    disabled?: boolean;
    id: string;
}) {
    return (
        <label
            className={`relative inline-flex items-center ${
                disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
            }`}
        >
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.checked)}
                aria-labelledby={id}
            />
            <div
                className="w-11 h-6 bg-ondark/30 rounded-full peer 
                           peer-focus:ring-2 peer-focus:ring-[#1e7cd6] peer-focus:ring-offset-2 peer-focus:ring-offset-bg
                           peer-checked:bg-[#1e7cd6] 
                           after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
                           after:bg-white after:rounded-full after:h-[18px] after:w-[18px] 
                           after:transition-all peer-checked:after:translate-x-[20px]"
            ></div>
        </label>
    );
}

// ─── Details Panel ─────────────────────────────────────────────────────────
const DETAILS: Record<keyof ConsentCategories, { title: string; description: string; cookies: string }> = {
    necessary: {
        title: 'Necessary',
        description: 'These cookies are required for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.',
        cookies: 'pg_cookie_consent',
    },
    preferences: {
        title: 'Preferences',
        description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features such as language preferences and region.',
        cookies: 'pg_lang, pg_region',
    },
    statistics: {
        title: 'Statistics',
        description: 'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously, improving our content and user experience.',
        cookies: '_ga, _gid, _ga_*',
    },
    marketing: {
        title: 'Marketing',
        description: 'These cookies are used to track visitors across websites in order to display relevant advertisements. They help make advertising more engaging and more valuable to publishers and third-party advertisers.',
        cookies: '_fbp, _gcl_au',
    },
};

// ─── Main Component ────────────────────────────────────────────────────────
export default function CookieConsent() {
    const { decided, consent, allowAll, denyAll, saveSelection } = useCookieConsent();

    const [mounted, setMounted] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [local, setLocal] = useState<ConsentCategories>({
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false,
    });

    useEffect(() => { setMounted(true); }, []);
    useEffect(() => { setLocal(consent); }, [consent]);

    // Don't render during SSR or after user has decided
    if (!mounted || decided) return null;

    const categories = Object.keys(DETAILS) as Array<keyof ConsentCategories>;

    return (
        <>
            {/* Backdrop — subtle, doesn't block page */}
            <div
                className="fixed inset-0 bg-black/35 z-[9998] backdrop-blur-[2px] pointer-events-none"
                aria-hidden="true"
            />

            {/* Banner */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Cookie consent"
                className="fixed bottom-0 left-0 right-0 z-[9999] bg-ink border-t border-ondark/10 shadow-[0_-8px_40px_rgba(0,0,0,0.5)] font-body"
            >
                <div className="max-w-content mx-auto px-6 py-6 md:px-8 lg:px-10 xl:px-12">
                    {/* ── Main row ── */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 lg:items-start">
                        
                        {/* Left — branding */}
                        <div className="flex-shrink-0 pt-1 lg:block hidden">
                            <svg width="100" height="28" viewBox="0 0 120 32" fill="none" aria-label="Prestige Glamour">
                                <text x="0" y="22" fontFamily="system-ui" fontWeight="700" fontSize="13" fill="currentColor" className="text-ondark">
                                    Prestige
                                </text>
                                <text x="0" y="32" fontFamily="system-ui" fontSize="9" fill="currentColor" className="text-ondark/60">
                                    cookie notice
                                </text>
                            </svg>
                        </div>

                        {/* Centre — text */}
                        <div className="flex-1 min-w-0">
                            <p className="font-display text-[18px] md:text-[20px] text-ondark mb-2">
                                This website uses cookies
                            </p>
                            <p className="text-[13px] text-ondark/70 leading-relaxed max-w-[680px]">
                                We use cookies to personalise content and ads, to provide social media features and to analyse
                                our traffic. We also share information about your use of our site with our analytics partners
                                who may combine it with other information that you&apos;ve provided to them or that they&apos;ve
                                collected from your use of their services.
                            </p>

                            {/* ── Toggles row ── */}
                            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 items-center">
                                {categories.map(key => (
                                    <div key={key} className="flex items-center gap-2.5">
                                        <span
                                            id={`label-${key}`}
                                            className="text-[13px] font-semibold text-ondark/90 whitespace-nowrap"
                                        >
                                            {DETAILS[key].title}
                                        </span>
                                        <Toggle
                                            id={`label-${key}`}
                                            checked={key === 'necessary' ? true : local[key]}
                                            disabled={key === 'necessary'}
                                            onChange={v => setLocal(prev => ({ ...prev, [key]: v }))}
                                        />
                                    </div>
                                ))}

                                {/* Show details toggle */}
                                <button
                                    onClick={() => setShowDetails(v => !v)}
                                    className="bg-transparent border-none text-ondark/60 hover:text-ondark text-[13px] cursor-pointer flex items-center gap-1.5 py-1 min-h-[44px] transition-colors ml-auto md:ml-0"
                                    aria-expanded={showDetails}
                                >
                                    Show details
                                    <svg
                                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        className={`transition-transform duration-200 ${showDetails ? 'rotate-90' : ''}`}
                                    >
                                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right — buttons */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[180px] flex-shrink-0 mt-2 lg:mt-0">
                            <button
                                onClick={allowAll}
                                className="btn bg-bg! text-ink! w-full justify-center px-6"
                            >
                                Allow all
                            </button>

                            <button
                                onClick={() => saveSelection(local)}
                                className="btn border-ondark/30! text-ondark! btn-ghost hover:border-ondark! w-full justify-center px-6"
                            >
                                Allow selection
                            </button>

                            <button
                                onClick={denyAll}
                                className="btn border-transparent! text-ondark/60! hover:text-ondark! bg-transparent! hover:bg-ondark/10! w-full justify-center px-6"
                            >
                                Deny
                            </button>
                        </div>
                    </div>

                    {/* ── Expanded details ── */}
                    {showDetails && (
                        <div className="mt-6 border-t border-ondark/10 pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {categories.map(key => (
                                <div
                                    key={key}
                                    className="bg-ondark/5 border border-ondark/10 rounded-lg p-5"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-semibold text-[13px] text-ondark/90">
                                            {DETAILS[key].title}
                                        </span>
                                        <Toggle
                                            id={`detail-label-${key}`}
                                            checked={key === 'necessary' ? true : local[key]}
                                            disabled={key === 'necessary'}
                                            onChange={v => setLocal(prev => ({ ...prev, [key]: v }))}
                                        />
                                    </div>
                                    <p className="text-[12px] text-ondark/60 leading-relaxed mb-4">
                                        {DETAILS[key].description}
                                    </p>
                                    <div className="text-[11px] text-ondark/50">
                                        <span className="text-ondark/60 font-semibold">Cookies: </span>
                                        <code className="font-mono bg-black/30 px-1.5 py-0.5 rounded-[3px]">
                                            {DETAILS[key].cookies}
                                        </code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
