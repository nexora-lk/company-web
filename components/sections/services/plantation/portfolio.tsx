'use client';

import { useState, useEffect, useRef } from 'react';
import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const estates = [
    {
        title: 'Batticlo 1',
        zone: '01',
        images: [
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780799962/WhatsApp_Image_2026-06-06_at_23.03.37_hjtjvb.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780799961/WhatsApp_Image_2026-06-06_at_23.03.36_2_xficaj.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780799961/WhatsApp_Image_2026-06-06_at_23.03.36_1_ngkd0d.jpg',
        ],
        alt: 'Batticlo 1 cultivation zones',
    },
    {
        title: 'Pasikuda Estate',
        zone: '02',
        images: [
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802301/WhatsApp_Image_2026-06-06_at_23.05.32_1_pycfcu.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802302/WhatsApp_Image_2026-06-06_at_23.05.33_lyac5a.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802302/WhatsApp_Image_2026-06-06_at_23.05.32_2_ia5dd7.jpg',
        ],
        alt: 'Pasikuda cultivation',
    },
    {
        title: 'Alankulama Estate',
        zone: '03',
        images: [
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802542/WhatsApp_Image_2026-06-06_at_23.10.22_2_zcyug9.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802542/WhatsApp_Image_2026-06-06_at_23.10.24_1_gn26ov.jpg',
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780802542/WhatsApp_Image_2026-06-06_at_23.10.23_u6sbev.jpg',
        ],
        alt: 'Agricultural field harvesting',
    },
];

export default function PortfolioSection() {
    const [selected, setSelected] = useState<typeof estates[number] | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    /* Scroll lock */
    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [selected]);

    /* Keyboard navigation */
    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (fullscreen) { setFullscreen(false); setZoomed(false); }
                else { setSelected(null); }
            }
            if (selected.images.length > 1) {
                if (e.key === 'ArrowRight') { setZoomed(false); setActiveIdx(p => (p + 1) % selected.images.length); }
                if (e.key === 'ArrowLeft') { setZoomed(false); setActiveIdx(p => (p - 1 + selected.images.length) % selected.images.length); }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selected, fullscreen]);

    const openEstate = (estate: typeof estates[number]) => {
        setSelected(estate);
        setActiveIdx(0);
        setFullscreen(false);
        setZoomed(false);
    };
    const closeAll = () => { setSelected(null); setFullscreen(false); setZoomed(false); };

    return (
        <section id="properties" className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40 bg-surface relative overflow-hidden">
            <Leaf variant="bl" />

            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10 relative z-10">
                {/* ── Section header ─────────────────────────────────── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20 reveal">
                    <div className="max-w-full lg:max-w-3xl">
                        <div className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Estate Portfolio</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink">
                            Our estates. <em className="serif-em text-accent">One</em>
                            <br />
                            quarterly ledger.
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[440px] lg:text-right">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            Each estate is managed by a regional team and audited by KPMG on the same quarterly basis. Investors may visit any estate at any time.
                        </p>
                    </div>
                </div>

                {/* ── Estate Cards Grid ───────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
                    {estates.map((estate, idx) => (
                        <article
                            key={idx}
                            className="svc-card group relative rounded-[20px] sm:rounded-[24px] overflow-hidden bg-surface min-h-[360px] xs:min-h-[400px] sm:min-h-[440px] md:min-h-[480px] shadow-sm hover:shadow-xl transition-all duration-700 reveal cursor-pointer"
                            onClick={() => openEstate(estate)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View ${estate.title} images`}
                            onKeyDown={e => e.key === 'Enter' && openEstate(estate)}
                        >
                            <Photo
                                src={estate.images[0]}
                                alt={estate.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                            {/* Hover reveal */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-ink/10 backdrop-blur-[2px]">
                                <div className="p-4 rounded-full bg-surface/20 backdrop-blur-md text-white border border-white/30 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <ZoomIn className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Multi-image badge */}
                            {estate.images.length > 1 && (
                                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/50 backdrop-blur-md border border-white/20 shadow-sm z-10 transition-transform duration-500 group-hover:-translate-y-1">
                                    <span className="num text-white font-medium text-[10px] tracking-widest uppercase">{estate.images.length} photos</span>
                                </div>
                            )}

                            {/* Card content */}
                            <div className="relative h-full p-6 xs:p-8 sm:p-10 flex flex-col justify-between text-ondark pointer-events-none z-10 transition-transform duration-500 group-hover:translate-y-1">
                                <span className="num text-white/60 font-medium text-[10px] xs:text-[11px] uppercase tracking-widest">
                                    Zone {estate.zone}
                                </span>
                                <div>
                                    <h3 className="font-display text-[28px] xs:text-[32px] sm:text-[36px] leading-[0.98] tracking-tightish">
                                        {estate.title}
                                    </h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* Level 1 Pop-up: Estate photo gallery                        */}
            {/* ─────────────────────────────────────────────────────────── */}
            {selected && !fullscreen && (
                <div
                    className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 md:p-8"
                    style={{
                        background: 'color-mix(in oklab, var(--c-bg) 88%, transparent)',
                        backdropFilter: 'blur(12px) saturate(130%)',
                        WebkitBackdropFilter: 'blur(12px) saturate(130%)',
                        animation: 'popIn 0.3s cubic-bezier(0.16,1,0.3,1) both',
                    }}
                    onClick={closeAll}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selected.title} photo gallery`}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes popIn { from { opacity:0; transform:scale(0.97) translateY(6px); } to { opacity:1; transform:none; } }
                        @keyframes zoomIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:none; } }
                    `}} />

                    <div
                        ref={dialogRef}
                        className="relative bg-surface rounded-[18px] sm:rounded-[22px] w-full max-w-[600px] overflow-hidden"
                        style={{
                            boxShadow: '0 1px 0 0 var(--c-line), 0 24px 68px -12px rgba(20,24,26,0.18), 0 8px 20px -8px rgba(20,24,26,0.08)',
                            border: '1px solid var(--c-line)',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* ── Header ── */}
                        <div className="px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/8 text-accent">
                                    <span className="text-[11px] sm:text-xs font-semibold">{selected.zone}</span>
                                </span>
                                <div className="min-w-0">
                                    <h4 className="font-display text-[16px] sm:text-[18px] text-ink tracking-tightish leading-tight truncate">
                                        {selected.title}
                                    </h4>
                                    <p className="num text-mute mt-0.5">
                                        {selected.images.length} {selected.images.length === 1 ? 'photograph' : 'photographs'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeAll}
                                className="flex-shrink-0 p-2 -mr-1.5 rounded-xl bg-transparent hover:bg-bg text-mute hover:text-ink transition-all duration-200 cursor-pointer"
                                aria-label="Close gallery"
                            >
                                <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        {/* ── Divider ── */}
                        <div className="mx-5 sm:mx-6 hairline"></div>

                        {/* ── Images ── */}
                        <div className="p-4 sm:p-5">
                            <div className={`grid gap-2 sm:gap-2.5 ${selected.images.length === 1 ? 'grid-cols-1'
                                : selected.images.length === 2 ? 'grid-cols-2'
                                    : 'grid-cols-3'
                                }`}>
                                {selected.images.map((src, i) => (
                                    <div
                                        key={i}
                                        className="ph group/thumb rounded-xl sm:rounded-[14px] overflow-hidden cursor-zoom-in"
                                        style={{ aspectRatio: selected.images.length === 1 ? '16/10' : '4/3' }}
                                        onClick={() => { setActiveIdx(i); setFullscreen(true); }}
                                    >
                                        <img
                                            src={src}
                                            alt={`${selected.title} — photo ${i + 1}`}
                                            className="w-full h-full object-cover"
                                            loading={i === 0 ? 'eager' : 'lazy'}
                                        />
                                        <div className="ph-meta">
                                            {String(i + 1).padStart(2, '0')} · {selected.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Footer ── */}
                        <div className="mx-5 sm:mx-6 hairline"></div>
                        <div className="px-5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
                            <span className="num text-mute text-[11px]">
                                Select a photo to expand
                            </span>
                            <div className="flex items-center gap-1.5">
                                {selected.images.map((_, i) => (
                                    <span
                                        key={i}
                                        className="block w-[5px] h-[5px] rounded-full bg-accent/25"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ─────────────────────────────────────────────────────────── */}
            {/* Level 2: Expanded zoom viewer                               */}
            {/* ─────────────────────────────────────────────────────────── */}
            {selected && fullscreen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none"
                    style={{
                        background: 'color-mix(in oklab, var(--c-bg) 94%, transparent)',
                        backdropFilter: 'blur(24px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(140%)',
                        animation: 'zoomIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
                    }}
                    onClick={() => { setFullscreen(false); setZoomed(false); }}
                >
                    {/* ── Top bar ── */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 pointer-events-none">
                        <div className="flex items-center gap-2.5 pointer-events-auto">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/8 text-accent">
                                <span className="text-[11px] font-semibold">{selected.zone}</span>
                            </span>
                            <div>
                                <span className="eyebrow text-ink/50! text-[10px]">{selected.title}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => { setFullscreen(false); setZoomed(false); }}
                            className="pointer-events-auto p-2.5 rounded-xl bg-surface border border-line hover:border-ink/15 text-mute hover:text-ink transition-all duration-200 cursor-pointer"
                            style={{ boxShadow: '0 2px 8px rgba(20,24,26,0.06)' }}
                            aria-label="Close viewer"
                        >
                            <X className="w-4.5 h-4.5" />
                        </button>
                    </div>

                    {/* ── Image area ── */}
                    <div
                        className="relative flex items-center justify-center w-full max-w-5xl px-4 sm:px-20"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Prev */}
                        {selected.images.length > 1 && (
                            <button
                                onClick={e => { e.stopPropagation(); setZoomed(false); setActiveIdx(p => (p - 1 + selected.images.length) % selected.images.length); }}
                                className="absolute left-2 sm:left-5 z-10 p-2.5 sm:p-3 rounded-xl bg-surface border border-line hover:border-ink/15 text-mute hover:text-ink transition-all duration-200 hover:-translate-x-0.5 cursor-pointer"
                                style={{ boxShadow: '0 2px 8px rgba(20,24,26,0.06)' }}
                                aria-label="Previous photo"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Image frame */}
                        <div
                            className="overflow-hidden rounded-[16px] sm:rounded-[20px] border border-line"
                            style={{ boxShadow: '0 24px 68px -12px rgba(20,24,26,0.16), 0 8px 20px -8px rgba(20,24,26,0.06)' }}
                        >
                            <div
                                className={`transition-transform duration-500 ease-out ${zoomed ? 'scale-[1.8] cursor-zoom-out' : 'cursor-zoom-in'}`}
                                onClick={() => setZoomed(z => !z)}
                            >
                                <img
                                    src={selected.images[activeIdx]}
                                    alt={`${selected.title} — view ${activeIdx + 1}`}
                                    className="max-w-full max-h-[72vh] sm:max-h-[76vh] object-contain block select-none"
                                    draggable={false}
                                />
                            </div>
                        </div>

                        {/* Next */}
                        {selected.images.length > 1 && (
                            <button
                                onClick={e => { e.stopPropagation(); setZoomed(false); setActiveIdx(p => (p + 1) % selected.images.length); }}
                                className="absolute right-2 sm:right-5 z-10 p-2.5 sm:p-3 rounded-xl bg-surface border border-line hover:border-ink/15 text-mute hover:text-ink transition-all duration-200 hover:translate-x-0.5 cursor-pointer"
                                style={{ boxShadow: '0 2px 8px rgba(20,24,26,0.06)' }}
                                aria-label="Next photo"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* ── Bottom bar ── */}
                    <div
                        className="absolute bottom-5 sm:bottom-6 flex flex-col items-center gap-2.5"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Dot navigation */}
                        {selected.images.length > 1 && (
                            <div
                                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-line pointer-events-auto"
                                style={{ boxShadow: '0 2px 8px rgba(20,24,26,0.06)' }}
                            >
                                {selected.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setZoomed(false); setActiveIdx(i); }}
                                        className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeIdx
                                            ? 'w-5 h-[6px] bg-accent'
                                            : 'w-[6px] h-[6px] bg-ink/15 hover:bg-ink/30'
                                            }`}
                                        aria-label={`Photo ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                        <p className="num text-mute text-[11px]">
                            {activeIdx + 1} / {selected.images.length} · {zoomed ? 'click to zoom out' : 'click to zoom in'}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}