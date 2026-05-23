'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const initial = useRef(true);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const el = ref.current;
        if (!el) return;

        // First paint: content is already visible via CSS animation — skip GSAP.
        if (initial.current) {
            initial.current = false;
            return;
        }

        let cleanup: (() => void) | undefined;
        let cancelled = false;

        (async () => {
            const { gsap } = await import('gsap');
            if (cancelled) return;

            // Subsequent navigations: quick fade-in.
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: 8 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    clearProps: 'willChange',
                }
            );

            cleanup = () => {
                gsap.killTweensOf(el);
            };
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, [pathname]);

    return (
        <main
            id="main-content"
            ref={ref}
            className="page-enter"
        >
            {children}
        </main>
    );
}
