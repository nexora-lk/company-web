'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
    value: number;
    duration?: number;
};

/**
 * Counts up to `value` once it scrolls into view.
 * SSR-safe (renders the final value without JS) and respects reduced-motion.
 */
export default function CountUp({ value, duration = 1600 }: CountUpProps) {
    const [display, setDisplay] = useState(value);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            setDisplay(value);
            return;
        }

        // Reset to 0 so the count animates from the start when revealed.
        setDisplay(0);

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting || started.current) return;
                    started.current = true;
                    io.disconnect();

                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
                        setDisplay(Math.round(eased * value));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                });
            },
            { threshold: 0.4 },
        );

        io.observe(el);
        return () => io.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{display.toLocaleString()}</span>;
}
