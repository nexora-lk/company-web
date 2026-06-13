'use client';

import { primaryNav } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function MobileMenu() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<any>(null);

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
                className="fixed inset-x-0 top-16 xl:top-20 z-40 origin-top border-b border-line bg-bg"
                style={{ visibility: 'hidden', pointerEvents: 'none', opacity: 0 }}
            >
                <div className="max-w-content mx-auto px-6 md:px-8 py-6 md:py-8 overflow-y-auto max-h-[calc(100vh-120px)] xl:max-h-[calc(100vh-140px)]">
                    <ul className="flex flex-col">
                        {primaryNav.map((link) => {
                            const isActive =
                                pathname === link.href || (link.href === '/' && pathname === '/');
                            return (
                                <li
                                    key={link.label}
                                    className="mobile-link border-b border-line last:border-0"
                                >
                                    <div className="flex flex-col">
                                        <Link
                                            href={link.href}
                                            onClick={close}
                                            className={`flex items-center justify-between py-3.5 md:py-4 font-display text-[22px] md:text-[26px] tracking-tightish transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-sapphire-blue font-medium'
                                                    : 'text-midnight-blue hover:text-sapphire-blue'
                                            }`}
                                        >
                                            {link.label}
                                            <ArrowIcon
                                                size={20}
                                                className={`${isActive ? 'text-midnight-blue' : 'text-mute'}`}
                                            />
                                        </Link>
                                        {link.children && (
                                            <ul className="pl-4 pb-4 space-y-2">
                                                {link.children.map((child) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={child.href}
                                                            onClick={close}
                                                            className="text-[15px] md:text-[16px] text-mute hover:text-ink transition-colors block py-1.5 md:py-2"
                                                        >
                                                            — {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mobile-bottom mt-6 flex items-center justify-between">
                        <Link
                            href="/#contact"
                            onClick={close}
                            className="btn btn-primary text-[14px] md:text-[15px] py-2! px-4! md:py-2.5! md:px-5!"
                        >
                            Get in touch <ArrowIcon size={14} className="ml-1" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
