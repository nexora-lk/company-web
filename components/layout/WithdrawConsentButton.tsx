'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';

export function WithdrawConsentButton() {
    const { resetConsent } = useCookieConsent();

    return (
        <button
            onClick={resetConsent}
            className="ulink px-3 py-3 inline-flex items-center min-h-[44px] cursor-pointer bg-transparent border-none p-0 text-inherit text-[12px]"
        >
            Cookie preferences
        </button>
    );
}
