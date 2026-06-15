'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Photo from '@/components/ui/Photo';
import { galleryImages } from '@/data/gallery';

// Tile rhythm. Mobile (2-col) keeps a varied, masonry feel; md+ uses a
// self-tessellating cycle of 7 that ALWAYS fills complete 12-col rows
// (rows of 4×col-span-3 and 3×col-span-4, each summing to 12), so the
// desktop grid never leaves holes. Class strings are written in full so
// Tailwind keeps them at build time.
const SPANS = [
    'col-span-2 row-span-2 md:col-span-4 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-4 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-4 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-3 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-3 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-3 md:row-span-1',
    'col-span-1 row-span-1 md:col-span-3 md:row-span-1',
];

// Insert a Cloudinary transform right after /image/upload/ (chained, non-destructive).
const tx = (src: string, t: string) => src.replace('/image/upload/', `/image/upload/${t}/`);
const fullSrc = (src: string) => tx(src, 'w_1600,q_auto,f_auto,c_limit');
const thumbSrc = (src: string) => tx(src, 'w_180,h_120,c_fill,q_auto,f_auto');

const pad = (n: number) => String(n).padStart(2, '0');

export default function GalleryGrid() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);
    const total = galleryImages.length;
    const railRef = useRef<HTMLDivElement>(null);

    // Portal target is only available on the client.
    useEffect(() => setMounted(true), []);

    const close = useCallback(() => setOpenIndex(null), []);
    const next = useCallback(
        () => setOpenIndex((i) => (i === null ? i : (i + 1) % total)),
        [total],
    );
    const prev = useCallback(
        () => setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total)),
        [total],
    );

    // Keyboard navigation + scroll lock while the lightbox is open.
    useEffect(() => {
        if (openIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [openIndex, close, next, prev]);

    // Keep the active thumbnail centred in the rail.
    useEffect(() => {
        if (openIndex === null || !railRef.current) return;
        const el = railRef.current.querySelector<HTMLElement>(`[data-thumb="${openIndex}"]`);
        el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }, [openIndex]);

    const active = openIndex === null ? null : galleryImages[openIndex];

    return (
        <section id="gallery" className="py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <header className="reveal mb-9 sm:mb-12">
                    {/*<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">*/}
                    {/*    <span className="num text-[10px] sm:text-[11px]">[ The Archive ]</span>*/}
                    {/*    <span className="hairline-strong w-[80px] sm:w-[120px]" />*/}
                    {/*    <span className="eyebrow text-[10px] sm:text-[11px]">1998 — 2026</span>*/}
                    {/*</div>*/}
                    <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                        <h2 className="col-span-12 lg:col-span-8 font-display text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] text-midnight-blue leading-[0.98] tracking-tightish">
                            Every <em className="serif-em text-sapphire-blue">photograph</em>,
                            <br />
                            in one place.
                        </h2>
                        <p className="col-span-12 lg:col-span-4 text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7] lg:pb-2">
                            A single, scrolling record of the group — branch openings, plantation
                            field days, hospitality and the small ceremonies in between.
                        </p>
                    </div>

                    {/* Meta strip */}
                    <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-4">
                        <span className="flex items-baseline gap-2">
                            <span className="font-display text-[22px] sm:text-[26px] leading-none tabular-nums text-sapphire-blue">
                                {pad(total)}
                            </span>
                            <span className="eyebrow text-[10px] sm:text-[11px]">Photographs</span>
                        </span>
                        <span className="hidden sm:block h-4 w-px bg-line" />
                        <span className="flex items-center gap-2 text-mute text-[12px] sm:text-[13px]">
                            <Maximize2 size={13} className="text-accent" />
                            Tap any frame to enlarge
                        </span>
                    </div>
                </header>

                {/* Masonry grid — every image lazy-loaded */}
                <div className="grid grid-flow-row-dense md:grid-flow-row grid-cols-2 md:grid-cols-12 auto-rows-[150px] sm:auto-rows-[170px] md:auto-rows-[210px] lg:auto-rows-[230px] xl:auto-rows-[250px] gap-2 sm:gap-3">
                    {galleryImages.map((img, i) => (
                        <button
                            type="button"
                            key={`${img.src}-${i}`}
                            onClick={() => setOpenIndex(i)}
                            className={`ph group text-left ${SPANS[i % SPANS.length]}`}
                            aria-label={`Open photograph ${i + 1}${img.caption ? `: ${img.caption}` : ''}`}
                        >
                            <Photo
                                src={img.src}
                                alt={img.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />

                            {/* Sapphire veil on hover */}
                            <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-sapphire-blue/75 via-sapphire-blue/10 to-transparent opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-500" />

                            {/* Gold hairline that draws in along the bottom */}
                            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-normal-gold group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-500" />

                            {/* Expand glyph, top-right */}
                            <span className="pointer-events-none absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-bg/90 text-sapphire-blue opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 motion-safe:transition motion-safe:duration-300">
                                <Maximize2 size={14} />
                            </span>

                            {/* Ghost index, bottom-left */}
                            <span className="pointer-events-none absolute bottom-2.5 left-3 font-display text-[15px] leading-none tabular-nums text-ondark/90 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 motion-safe:transition motion-safe:duration-300">
                                {pad(i + 1)}
                            </span>

                            {img.caption && <div className="ph-meta">{img.caption}</div>}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox — portalled to <body> so position:fixed escapes the
                transformed smooth-scroll wrapper and pins to the viewport. */}
            {mounted &&
                active &&
                createPortal(
                    <div
                        className="lb-in fixed inset-0 z-[100] flex flex-col bg-midnight-blue/95 backdrop-blur-xl"
                        role="dialog"
                    aria-modal="true"
                    aria-label="Photograph viewer"
                    onClick={close}
                >
                    {/* Top bar */}
                    <div
                        className="flex items-center justify-between px-5 sm:px-8 py-4 text-ondark"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="num text-ondark/85 text-[12px] sm:text-[13px]">
                            {pad((openIndex ?? 0) + 1)}
                            <span className="opacity-50"> / {pad(total)}</span>
                        </span>
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ondark hover:bg-white/20 motion-safe:transition"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Stage */}
                    <div
                        className="relative flex-1 flex items-center justify-center px-3 sm:px-20 min-h-0"
                        onClick={close}
                    >
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            aria-label="Previous"
                            className="absolute left-2 sm:left-6 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-ondark hover:bg-white/20 hover:text-light-gold motion-safe:transition"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            key={active.src}
                            src={fullSrc(active.src)}
                            alt={active.alt}
                            loading="lazy"
                            decoding="async"
                            onClick={(e) => e.stopPropagation()}
                            className="lb-img-in max-h-full max-w-[92vw] rounded-lg object-contain shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
                        />

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            aria-label="Next"
                            className="absolute right-2 sm:right-6 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-ondark hover:bg-white/20 hover:text-light-gold motion-safe:transition"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>

                    {/* Caption + thumbnail rail */}
                    <div className="px-3 sm:px-8 pb-4 sm:pb-6 pt-2" onClick={(e) => e.stopPropagation()}>
                        {active.caption && (
                            <p className="text-center text-ondark/70 text-[12px] sm:text-[13px] mb-3">
                                {active.caption}
                            </p>
                        )}
                        <div
                            ref={railRef}
                            className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {galleryImages.map((g, i) => (
                                <button
                                    key={`${g.src}-thumb-${i}`}
                                    type="button"
                                    data-thumb={i}
                                    onClick={() => setOpenIndex(i)}
                                    aria-label={`View photograph ${i + 1}`}
                                    aria-current={i === openIndex}
                                    className={`relative shrink-0 overflow-hidden rounded-md motion-safe:transition ${
                                        i === openIndex
                                            ? 'ring-2 ring-normal-gold'
                                            : 'opacity-45 hover:opacity-100'
                                    }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={thumbSrc(g.src)}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="h-12 w-[72px] sm:h-14 sm:w-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    </div>,
                    document.body,
                )}
        </section>
    );
}
