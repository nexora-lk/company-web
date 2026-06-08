'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, type ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Reveal = dynamic(() => import('./Reveal'), { ssr: false });
const Interactions = dynamic(() => import('./Interactions'), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LenisCtx = createContext<any>(null);

/** Access the Lenis instance from any client component. */
export function useLenis() {
    return useContext(LenisCtx);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenisRef = useRef<any>(null);
    const pathname = usePathname();

    useEffect(() => {
        // Bail out when the user prefers no motion — leave native scroll.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let cancelled = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cleanup: (() => void) | undefined;

        (async () => {
            try {
                // Import sequentially to avoid chunk loading race conditions
                const { default: Lenis } = await import('lenis');
                if (cancelled) return;

                const { default: gsap } = await import('gsap');
                if (cancelled) return;

                const { ScrollTrigger } = await import('gsap/ScrollTrigger');
                if (cancelled) return;

                // Register plugin after loading
                gsap.registerPlugin(ScrollTrigger);

                const lenis = new Lenis({
                    autoRaf: false,
                    lerp: 0.08,
                    smoothWheel: true,
                    wheelMultiplier: 0.9,
                    touchMultiplier: 1,
                    syncTouch: false, // Use native scroll speed on touch/mobile
                });

                lenisRef.current = lenis;

                // ── Single RAF loop ──────────────────────────────────────────
                const onTick = (time: number) => lenis.raf(time * 1000);
                gsap.ticker.add(onTick);
                gsap.ticker.lagSmoothing(0);

                // ── Sync ScrollTrigger on every virtual scroll ───────────────
                lenis.on('scroll', ScrollTrigger.update);

                // Mark <html> so CSS can adapt.
                document.documentElement.classList.add('lenis', 'lenis-smooth');

                // Initial refresh after layout settles.
                requestAnimationFrame(() => ScrollTrigger.refresh());

                cleanup = () => {
                    gsap.ticker.remove(onTick);
                    lenis.destroy();
                    lenisRef.current = null;
                    document.documentElement.classList.remove('lenis', 'lenis-smooth');
                };
            } catch (error) {
                // Gracefully handle GSAP/Lenis load failures
                console.warn('Smooth scroll initialization failed:', error);
                // Continue with native scrolling
            }
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, [pathname]);

    // Scroll to top or hash on route change.
    useEffect(() => {
        const lenis = lenisRef.current;
        const hash = window.location.hash;

        // 1. Handle cross-page navigation with hash
        if (hash && hash !== '#') {
            setTimeout(() => {
                const target = document.querySelector(hash);
                if (target) {
                    if (lenis) {
                        lenis.scrollTo(target, { offset: -100, duration: 1.5 });
                    } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 600); // Slightly longer delay to ensure full render
        } else {
            // No hash? Scroll to top
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        }

        // 2. Handle same-page hash clicks (e.g., #contact, #services)
        const handleHashClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (href?.startsWith('#') && href.length > 1) {
                const targetEl = document.querySelector(href);
                if (targetEl && lenis) {
                    e.preventDefault();
                    lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
                    window.history.pushState(null, '', href);
                }
            }
        };

        document.addEventListener('click', handleHashClick);
        return () => document.removeEventListener('click', handleHashClick);
    }, [pathname]);

    return (
        <LenisCtx.Provider value={lenisRef}>
            {children}
            <Reveal />
            <Interactions />
        </LenisCtx.Provider>
    );
}
