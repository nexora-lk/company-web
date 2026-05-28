'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let cancelled = false;
        let cleanup: (() => void) | undefined;

        (async () => {
            const { gsap } = await import('gsap');
            if (cancelled) return;

            const container = containerRef.current;
            if (!container) return;

            const heading = container.querySelector('h1');
            const description = container.querySelector('.error-desc');
            const buttons = container.querySelectorAll('.error-button');

            const tl = gsap.timeline();

            // Stagger animation for elements
            tl.from(heading, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
            })
                .from(
                    description,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        ease: 'power2.out',
                    },
                    '-=0.4'
                )
                .from(
                    buttons,
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                        ease: 'power2.out',
                        stagger: 0.15,
                    },
                    '-=0.3'
                );

            cleanup = () => {
                tl.kill();
            };
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-bg">
            {/* Background accent */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 right-40 w-96 h-96 rounded-full opacity-5 blur-3xl bg-accent"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-5 blur-3xl bg-accent"></div>
            </div>

            {/* Content */}
            <div ref={containerRef} className="relative z-10">
                <main className="max-w-content mx-auto px-6 lg:px-10 min-h-screen flex flex-col items-center justify-center py-20">
                    {/* Error code */}
                    <div className="mb-12 text-center">
                        <div className="font-display text-[180px] sm:text-[240px] lg:text-[300px] leading-none tracking-tightish text-accent/20 font-light">
                            404
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[84px] leading-[1.1] tracking-tightish text-center max-w-[600px] mb-6">
                        Page not <em className="serif-em">found</em>
                    </h1>

                    {/* Description */}
                    <div className="error-desc max-w-[480px] text-center mb-12">
                        <p className="text-[16px] lg:text-[18px] text-mute leading-[1.8]">
                            The page you're looking for has wandered off into our plantation fields.
                            Let's get you back on track.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hairline w-16 mb-12"></div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link href="/" className="error-button btn btn-primary text-sm">
                            <span>Return Home</span>
                            <span className="arrow">→</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="error-button btn btn-ghost text-sm"
                        >
                            <span>Go Back</span>
                            <span className="arrow">←</span>
                        </button>
                    </div>

                    {/* Footer suggestion */}
                    <div className="mt-20 text-center">
                        <p className="eyebrow mb-4">Popular pages</p>
                        <nav className="flex flex-wrap gap-6 justify-center">
                            <Link
                                href="/about"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink"
                            >
                                About
                            </Link>
                            <Link
                                href="/services/plantation"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink"
                            >
                                Services
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/investment"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink"
                            >
                                Investment
                            </Link>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    );
}
