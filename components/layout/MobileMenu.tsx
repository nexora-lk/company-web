'use client';

import { brand, primaryNav } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { gsap as GsapType } from 'gsap';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function MobileMenu() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<ReturnType<typeof GsapType.timeline> | null>(null);

    // Build or update the GSAP timeline on state change.
    useEffect(() => {
        if (typeof window === 'undefined') return;

        let cancelled = false;
        let cleanup: (() => void) | undefined;

        (async () => {
            const { gsap } = await import('gsap');
            if (cancelled) return;

            const panel = panelRef.current;
            const backdrop = backdropRef.current;
            if (!panel || !backdrop) return;

            const links = panel.querySelectorAll<HTMLElement>('.mobile-link');
            const bottomBar = panel.querySelector<HTMLElement>('.mobile-bottom');

            // Kill previous timeline
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }

            if (open) {
                // Make elements visible for animation
                panel.style.visibility = 'visible';
                panel.style.pointerEvents = 'auto';
                backdrop.style.visibility = 'visible';
                backdrop.style.pointerEvents = 'auto';

                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out' },
                });

                tl.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 })
                    .fromTo(
                        panel,
                        { y: -16, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: 'power4.out' },
                        '<0.05'
                    )
                    .fromTo(
                        links,
                        { x: -20, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.04,
                            ease: 'power3.out',
                        },
                        '<0.1'
                    );

                if (bottomBar) {
                    tl.fromTo(
                        bottomBar,
                        { opacity: 0, y: 8 },
                        { opacity: 1, y: 0, duration: 0.35 },
                        '<0.08'
                    );
                }

                tlRef.current = tl;
            } else {
                // Close animation
                const tl = gsap.timeline({
                    defaults: { ease: 'power2.in' },
                    onComplete: () => {
                        panel.style.visibility = 'hidden';
                        panel.style.pointerEvents = 'none';
                        backdrop.style.visibility = 'hidden';
                        backdrop.style.pointerEvents = 'none';
                    },
                });

                tl.to(panel, { y: -8, opacity: 0, duration: 0.25 }).to(
                    backdrop,
                    { opacity: 0, duration: 0.2 },
                    '<'
                );

                tlRef.current = tl;
            }

            cleanup = () => {
                if (tlRef.current) {
                    tlRef.current.kill();
                    tlRef.current = null;
                }
            };
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, [open]);

    // Escape to close & Auto-close on scroll
    useEffect(() => {
        if (!open) return;

        const initialScroll = window.scrollY;
        
        const onScroll = () => {
            // Close if user scrolls more than 20px in either direction
            if (Math.abs(window.scrollY - initialScroll) > 20) {
                setOpen(false);
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const close = useCallback(() => setOpen(false), []);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="grid place-items-center w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-line text-midnight-blue"
            >
                <span className="relative block w-4.5 h-3.5">
                    <span
                        className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ${
                            open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                        }`}
                    />
                    <span
                        className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-ink transition-all duration-200 ${
                            open ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ${
                            open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                        }`}
                    />
                </span>
            </button>

            {/* Backdrop */}
            <div
                ref={backdropRef}
                onClick={close}
                aria-hidden="true"
                className="fixed inset-0 top-16 xl:top-20 z-40 bg-ink/85"
                style={{ visibility: 'hidden', pointerEvents: 'none', opacity: 0 }}
            />

            {/* Panel */}
            <nav
                id="mobile-nav"
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className="fixed inset-x-0 top-16 xl:top-20 z-40 origin-top border-b border-line bg-bg shadow-[0_24px_60px_-28px_rgba(7,11,41,0.45)]"
                style={{ visibility: 'hidden', pointerEvents: 'none', opacity: 0 }}
            >
                <div className="max-w-content mx-auto px-6 md:px-8 py-5 md:py-7 overflow-y-auto max-h-[calc(100vh-120px)] xl:max-h-[calc(100vh-140px)]">
                    {/* ── Eyebrow rule ── */}
                    <div className="mobile-link flex items-center gap-4 pb-3">
                        <span className="eyebrow">Navigate</span>
                        <span className="h-px flex-1 bg-line" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-sapphire-blue/55 font-medium">
                            {brand.tagline}
                        </span>
                    </div>

                    <ul className="flex flex-col">
                        {primaryNav.map((link, i) => {
                            const isActive =
                                pathname === link.href ||
                                pathname.startsWith(link.href + '/') ||
                                (link.href === '/' && pathname === '/');
                            return (
                                <li
                                    key={link.label}
                                    className="mobile-link border-b border-line last:border-0"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={close}
                                        aria-current={isActive ? 'page' : undefined}
                                        className="group relative flex items-center gap-4 py-3.5 md:py-4"
                                    >
                                        {/* active / hover left rail */}
                                        <span
                                            className={`absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-accent transition-all duration-300 ${
                                                isActive
                                                    ? 'h-5 opacity-100'
                                                    : 'h-0 opacity-0 group-hover:h-4 group-hover:opacity-60'
                                            }`}
                                        />
                                        <span className="num shrink-0 w-7 text-mute/55 transition-colors group-hover:text-accent">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span
                                            className={`flex-1 font-display text-[22px] md:text-[26px] tracking-tightish transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-sapphire-blue font-medium'
                                                    : 'text-midnight-blue group-hover:text-sapphire-blue'
                                            }`}
                                        >
                                            {link.label}
                                        </span>
                                        <ArrowIcon
                                            size={18}
                                            className={`arrow shrink-0 transition-colors ${
                                                isActive
                                                    ? 'text-sapphire-blue'
                                                    : 'text-mute/60 group-hover:text-sapphire-blue'
                                            }`}
                                        />
                                    </Link>

                                    {link.children && (
                                        <ul className="grid grid-cols-2 gap-1.5 pb-4 -mt-0.5">
                                            {link.children.map((child) => {
                                                const childActive =
                                                    pathname === child.href ||
                                                    pathname.startsWith(child.href + '/');
                                                return (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={child.href}
                                                            onClick={close}
                                                            aria-current={
                                                                childActive ? 'page' : undefined
                                                            }
                                                            className={`group/c flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px] md:text-[14px] transition-colors ${
                                                                childActive
                                                                    ? 'bg-sapphire-blue/[0.07] text-sapphire-blue font-medium'
                                                                    : 'text-mute hover:bg-sapphire-blue/[0.05] hover:text-sapphire-blue'
                                                            }`}
                                                        >
                                                            <span
                                                                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                                                                    childActive
                                                                        ? 'bg-accent'
                                                                        : 'bg-line group-hover/c:bg-accent'
                                                                }`}
                                                            />
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* ── Footer CTA ── */}
                    <div className="mobile-bottom mt-6 flex flex-col gap-3">
                        <Link
                            href="/#contact"
                            onClick={close}
                            className="btn btn-primary w-full justify-center text-[14px] md:text-[15px]"
                        >
                            Get in touch
                            <ArrowIcon size={15} className="arrow ml-0.5" />
                        </Link>
                        <p className="text-center text-[11px] tracking-[0.16em] uppercase text-mute/70">
                            {brand.name} · Est. 2013
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}
