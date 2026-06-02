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
                <section className="max-w-content mx-auto px-5 sm:px-6 md:px-8 lg:px-10 min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 xl:py-24">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-3 mb-16">
                        <Link href="/" className="num ulink">
                            [ Home ]
                        </Link>
                        <span className="num">/</span>
                        <span className="num text-accent">404</span>
                        <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    </div>

                    {/* Error code */}
                    <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
                        <div className="font-display text-[120px] xs:text-[150px] sm:text-[200px] md:text-[240px] lg:text-[300px] xl:text-[360px] leading-none tracking-tightish text-accent/20 font-light">
                            404
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-[40px] xs:text-[48px] sm:text-[56px] md:text-[68px] lg:text-[84px] xl:text-[96px] leading-[1.1] tracking-tightish text-center max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] mb-6">
                        Page not <em className="serif-em">found</em>
                    </h1>

                    {/* Description */}
                    <div className="error-desc max-w-[95%] xs:max-w-[85%] sm:max-w-[480px] md:max-w-[540px] text-center mb-10 sm:mb-12">
                        <p className="text-[14.5px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-mute leading-[1.7] md:leading-[1.8]">
                            The page you're looking for seems to have taken a detour. Explore our
                            portfolio to discover what we're cultivating.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hairline w-16 mb-12"></div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center w-full sm:w-auto">
                        <Link href="/" className="error-button btn btn-primary text-[14px] sm:text-[14.5px] justify-center py-3.5 sm:py-[0.85rem] px-6 sm:px-8">
                            <span>Return Home</span>
                            <span className="arrow">→</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="error-button btn btn-ghost text-[14px] sm:text-[14.5px] justify-center py-3.5 sm:py-[0.85rem] px-6 sm:px-8"
                        >
                            <span>Go Back</span>
                            <span className="arrow">←</span>
                        </button>
                    </div>

                    {/* Services links */}
                    <div className="mt-16 sm:mt-20 md:mt-24 text-center w-full">
                        <p className="eyebrow mb-6 sm:mb-8 text-[11px] sm:text-[12px]">Explore our services</p>
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-[280px] xs:max-w-[400px] md:max-w-[600px] mx-auto">
                            <Link
                                href="/services/plantation"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                Plantation
                            </Link>
                            <Link
                                href="/services/microfinance"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                Micro Finance
                            </Link>
                            <Link
                                href="/services/gems"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                Gems & Jewelry
                            </Link>
                            <Link
                                href="/services/fmcg"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                FMCG
                            </Link>
                            <Link
                                href="/services/ngo"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                NGO Projects
                            </Link>
                            <Link
                                href="/services/real-estate"
                                className="text-[14px] text-mute hover:text-accent transition-colors duration-300 ulink font-medium"
                            >
                                Real Estate
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
