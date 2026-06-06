'use client';

import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '@/components/ui/ArrowIcon';

// ── Background video playlist ───────────────────────────────────────────────
const BG_VIDEOS = [
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780332964/plantation_h4uxzp.mp4',
        label: 'Wildlife · Sri Lanka',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780332129/gem_hlhxaz.mp4',
        label: 'Ocean · Coastal Life',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780331821/real_estate_jrkcio.mp4',
        label: 'Culture · Heritage',
    },
    {
        src: 'https://res.cloudinary.com/ddxvnb0nk/video/upload/q_auto/f_auto/v1780331759/microfinance_rfyjc4.mp4',
        label: 'Landscape · Highlands',
    },
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
                el.play().catch(() => {});
            } else {
                el.pause();
            }
        });
    }, [current]);

    return (
        <section
            className="relative overflow-hidden min-h-[100svh] flex flex-col bg-[#14181a]"
            aria-label="Hero"
        >
            {/* ── Background videos ──────────────────────────────────────── */}
            <div className="absolute inset-0 z-0">
                {BG_VIDEOS.map((v, i) => (
                    <video
                        key={`${v.src}-${i}`}
                        ref={(el) => { videoRefs.current[i] = el; }}
                        muted
                        playsInline
                        preload={i === 0 ? 'auto' : 'metadata'}
                        onEnded={() => advance(i)}
                        onError={() => advance(i)}
                        className="absolute inset-0 w-full h-full min-w-full min-h-full max-w-none object-cover transition-opacity duration-700"
                        style={{ opacity: i === current ? 1 : 0, pointerEvents: 'none' }}
                    >
                        <source src={v.src} type="video/mp4" />
                    </video>
                ))}
                {/* Layered dark overlays for all screen sizes */}
                <div className="absolute inset-0 bg-[#14181a]/55 sm:bg-[#14181a]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14181a]/90 via-[#14181a]/20 to-[#14181a]/25" />
            </div>

            {/* ── Live scene badge — hidden on xs, visible sm+ ───────────── */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1.5 sm:px-3 rounded-full bg-[#f1ece0]/10 backdrop-blur-sm border border-[#f1ece0]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d4a] shrink-0 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-medium text-[#f1ece0]/80 tracking-widest uppercase">
                    {BG_VIDEOS[current].label}
                </span>
            </div>

            {/* ── Hero content — vertically fills viewport ─────── */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center
                            px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
                            pt-16 sm:pt-24 md:pt-28 lg:pt-32
                            pb-32 sm:pb-28 md:pb-32 lg:pb-36">

                {/* Mobile top spacer to push text to the visual center */}
                <div className="flex-[1] sm:hidden" />

                {/* Main Text Block */}
                <div className="flex flex-col items-center w-full mt-0 sm:mt-auto">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 md:mb-8">
                        <span className="h-px w-6 sm:w-8 md:w-10 bg-[#f1ece0]/30" />
                        <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase font-medium text-[#f1ece0]/60">
                            Prestige Glamour Group of Company
                        </span>
                        <span className="h-px w-6 sm:w-8 md:w-10 bg-[#f1ece0]/30" />
                    </div>

                    {/* Headline */}
                    <h1 className="font-display
                                   text-[52px]
                                   xs:text-[60px]
                                   sm:text-[66px]
                                   md:text-[76px]
                                   lg:text-[96px]
                                   xl:text-[118px]
                                   2xl:text-[128px]
                                   leading-[0.9] tracking-tight text-[#f1ece0]
                                   max-w-[13ch] sm:max-w-[14ch] md:max-w-[16ch] lg:max-w-[18ch] xl:max-w-none">
                        Invest in Sri Lanka.
                        <br />
                        Get Real Returns.
                    </h1>

                    {/* Sub-paragraph */}
                    <p className="mt-5 sm:mt-7 md:mt-8 lg:mt-9
                                  max-w-[100%] xs:max-w-[95%] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[660px] xl:max-w-[720px]
                                  text-[#f1ece0]/75
                                  text-[15px] xs:text-[16px] sm:text-[16.5px] md:text-[17px] lg:text-[18px] xl:text-[19px]
                                  leading-[1.7] sm:leading-[1.75] lg:leading-[1.8]">
                        Prestige Glamour Working Capital Solutions is Sri Lanka&apos;s most transparent investment platform. We are not a fund manager — we are the actual operators. We run plantations, cut gemstones, finance entrepreneurs, develop real estate, and distribute consumer goods. When you invest with us, you invest in real assets, real operations, and real returns. Anyone with capital is welcome — from LKR 200,000 to LKR 200 million.
                    </p>
                </div>

                {/* Mobile bottom spacer to push buttons to the bottom */}
                <div className="flex-[1.5] sm:hidden" />

                {/* CTAs */}
                <div className="mt-8 sm:mt-9 md:mt-11 mb-0 sm:mb-auto
                                flex flex-col sm:flex-row
                                items-center gap-3 sm:gap-4 w-full sm:w-auto reveal">
                    <a
                         href="#services"
                         id="hero-cta-primary"
                         className="btn btn-primary
                                    w-full sm:w-auto
                                    min-w-0 sm:min-w-[200px] lg:min-w-[220px]
                                    justify-center
                                    text-[15.5px] sm:text-[15px] lg:text-[15.5px]
                                    py-[0.9rem] sm:py-[0.85rem] lg:py-[0.9rem]
                                    shadow-lg sm:shadow-none"
                     >
                         Explore Investment Options <ArrowIcon size={15} className="ml-1" />
                     </a>
                    <a
                        href="#contact"
                        id="hero-cta-secondary"
                        className="btn
                                   w-full sm:w-auto
                                   min-w-0 sm:min-w-[200px] lg:min-w-[220px]
                                   justify-center
                                   text-[15.5px] sm:text-[15px] lg:text-[15.5px]
                                   py-[0.9rem] sm:py-[0.85rem] lg:py-[0.9rem]"
                        style={{
                            background: 'rgba(20,24,26,0.3)',
                            color: '#f1ece0',
                            border: '1px solid rgba(241,236,224,0.15)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        Calculate Your Returns
                    </a>
                </div>
            </div>

            {/* ── Video dot indicators — bottom centre ─────────────────── */}
            <div className="absolute bottom-5 sm:bottom-7 md:bottom-8 left-0 right-0 z-20 flex justify-center gap-2 reveal">
                {BG_VIDEOS.map((v, i) => (
                    <button
                        key={i}
                        id={`hero-video-dot-${i}`}
                        aria-label={`Play video: ${v.label}`}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 no-min-target ${
                            i === current
                                ? 'bg-[#f1ece0] w-6 sm:w-7'
                                : 'bg-[#f1ece0]/35 w-1.5 hover:bg-[#f1ece0]/60'
                        }`}
                    />
                ))}
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
            `}</style>
        </section>
    );
}
