'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/ui/ArrowIcon';

// ── Background video playlist ───────────────────────────────────────────────
const BG_VIDEOS = [
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780332964/plantation_h4uxzp.mp4',
        label: 'Plantation',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780332129/gem_hlhxaz.mp4',
        label: 'Gem & Ocean',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780331821/real_estate_jrkcio.mp4',
        label: 'Real Estate',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780331759/microfinance_rfyjc4.mp4',
        label: 'Microfinance',
    },
];

// ── Trust metrics ───────────────────────────────────────────────────────────
const TRUST = [
    { value: '6', label: 'Operating sectors' },
    { value: '100%', label: 'Operator-owned' },
    { value: 'LKR 200K+', label: 'Minimum entry' },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const advance = (from: number) => {
        setCurrent((prev) => {
            if (prev !== from) return prev;
            return (prev + 1) % BG_VIDEOS.length;
        });
    };

    useEffect(() => {
        BG_VIDEOS.forEach((_, i) => {
            const el = videoRefs.current[i];
            if (!el) return;
            if (i === current) {
                el.currentTime = 0;
                el.play().catch(() => { });
            } else {
                el.pause();
            }
        });
    }, [current]);

    return (
        <section
            className="relative overflow-hidden min-h-[100svh] flex flex-col bg-[#070b29]"
            aria-label="Hero"
        >
            {/* ── Background videos ──────────────────────────────────────── */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                {BG_VIDEOS.map((v, i) => (
                    <video
                        key={`${v.src}-${i}`}
                        ref={(el) => { videoRefs.current[i] = el; }}
                        muted
                        playsInline
                        preload={i === 0 ? 'auto' : 'metadata'}
                        onEnded={() => advance(i)}
                        onError={() => advance(i)}
                        className={`absolute inset-0 w-full h-full min-w-full min-h-full max-w-none object-cover transition-opacity duration-1000 ${i === current ? 'hero-kenburns' : ''}`}
                        style={{ opacity: i === current ? 1 : 0, pointerEvents: 'none' }}
                    >
                        <source src={v.src} type="video/mp4" />
                    </video>
                ))}

                {/* Layered overlays — legibility + brand-tinted vignette */}
                <div className="absolute inset-0 bg-[#070b29]/50 sm:bg-[#070b29]/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b29] via-[#070b29]/35 to-[#070b29]/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070b29]/55 via-transparent to-transparent" />
                <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(115% 85% at 50% 38%, transparent 45%, rgba(7,11,41,0.55) 100%)' }}
                />
            </div>

            {/* ── Hero content — vertically centered ───────────────────────── */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center
                            px-5 sm:px-8 md:px-12 lg:px-16
                            pt-28 sm:pt-32 md:pt-36
                            pb-32 sm:pb-32 md:pb-36">

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                    <span className="h-px w-7 sm:w-10 bg-gradient-to-r from-transparent to-[#d4af37]/70" />
                    <span className="eyebrow text-[9.5px] sm:text-[11px] tracking-[0.22em] uppercase font-medium text-[#f1ece0]/70">
                        Prestige Glamour Group of Company
                    </span>
                    <span className="h-px w-7 sm:w-10 bg-gradient-to-l from-transparent to-[#d4af37]/70" />
                </div>

                {/* Headline */}
                <h1 className="font-display
                               text-[50px] xs:text-[58px] sm:text-[66px] md:text-[78px] lg:text-[94px] xl:text-[112px]
                               leading-[0.92] tracking-tight text-[#f1ece0]
                               max-w-[13ch] sm:max-w-[15ch] md:max-w-[17ch] lg:max-w-[20ch] xl:max-w-none">
                    Invest in Sri Lanka
                    <br />
                    Get{' '}
                    <span className="bg-gradient-to-r from-[#f5d98b] via-[#d4af37] to-[#f5d98b] bg-clip-text text-transparent">
                        Real Returns
                    </span>
                </h1>

                {/* Sub-paragraph — tightened */}
                <p className="mt-7 sm:mt-8 md:mt-9
                              max-w-[92%] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[680px]
                              text-[#f1ece0]/75
                              text-[15px] sm:text-[16.5px] md:text-[17.5px]
                              leading-[1.65] sm:leading-[1.7]">
                    Sri Lanka&apos;s most transparent investment platform — and we&apos;re not fund
                    managers. We operate the assets ourselves: plantations, gem mines, real estate,
                    microfinance, and consumer goods. Real operations, real returns.
                </p>

                {/* CTAs */}
                <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <Link
                        href="#services"
                        id="hero-cta-primary"
                        className="btn group w-full sm:w-auto min-w-0 sm:min-w-[210px] justify-center
                                   bg-[#f1ece0] text-[#132074] font-semibold
                                   shadow-xl shadow-black/25
                                   transition-all duration-300
                                   hover:-translate-y-0.5 hover:bg-[#d4af37] hover:text-[#0a0e4d]
                                   hover:shadow-2xl hover:shadow-[#d4af37]/20"
                    >
                        Explore Investment Options
                        <ArrowIcon size={15} className="ml-0.5 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/investment#calculator"
                        id="hero-cta-secondary"
                        className="btn w-full sm:w-auto min-w-0 sm:min-w-[210px] justify-center
                                   text-[#f1ece0] bg-[#f1ece0]/5 backdrop-blur-md
                                   border border-[#f1ece0]/20
                                   transition-all duration-300
                                   hover:bg-[#f1ece0]/10 hover:border-[#f1ece0]/40"
                    >
                        Calculate Your Returns
                    </Link>
                </div>

                {/* Trust strip */}
                <div className="reveal mt-10 sm:mt-12 flex items-stretch justify-center
                                gap-5 sm:gap-9 md:gap-12">
                    {TRUST.map((m, i) => (
                        <div key={m.label} className="flex items-stretch">
                            {i > 0 && (
                                <span className="mr-5 sm:mr-9 md:mr-12 w-px self-stretch bg-[#f1ece0]/15" />
                            )}
                            <div className="flex flex-col items-center">
                                <span className="font-display text-[20px] sm:text-[26px] md:text-[30px] leading-none text-[#f1ece0]">
                                    {m.value}
                                </span>
                                <span className="mt-2 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#f1ece0]/55">
                                    {m.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Now-playing label + video dot indicators — bottom centre ── */}
            <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 flex flex-col items-center gap-2.5 reveal">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#f1ece0]/45">
                    {BG_VIDEOS[current].label}
                </span>
                <div className="flex justify-center gap-2">
                    {BG_VIDEOS.map((v, i) => (
                        <button
                            key={i}
                            id={`hero-video-dot-${i}`}
                            aria-label={`Show ${v.label} background`}
                            aria-pressed={i === current}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 no-min-target ${i === current
                                ? 'bg-[#d4af37] w-7'
                                : 'bg-[#f1ece0]/35 w-1.5 hover:bg-[#f1ece0]/60'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ── Scroll nudge — md+ only ───────────────────────────────── */}
            <div className="absolute bottom-7 right-5 sm:right-6 z-20 hidden md:flex flex-col items-center gap-2 text-[#f1ece0]/40">
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase rotate-90 origin-center mb-2">Scroll</span>
                <span
                    className="w-px h-8 sm:h-10 bg-gradient-to-b from-[#f1ece0]/40 to-transparent"
                    style={{ animation: 'scrollNudge 2s ease-in-out infinite' }}
                />
            </div>

            <style>{`
                @keyframes scrollNudge {
                    0%, 100% { opacity: 0.4; transform: scaleY(1); }
                    50%       { opacity: 1;   transform: scaleY(1.15); }
                }
                @media (prefers-reduced-motion: no-preference) {
                    @keyframes heroKenburns {
                        from { transform: scale(1); }
                        to   { transform: scale(1.08); }
                    }
                    .hero-kenburns { animation: heroKenburns 14s ease-out forwards; }
                }
            `}</style>
        </section>
    );
}
