'use client';

import MobileMenu from '@/components/layout/MobileMenu';
import Photo from '@/components/ui/Photo';
import { brand, primaryNav } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed w-full top-0 z-50 nav-blur lg:bg-bg/80 lg:backdrop-blur-xl border-b border-line">
            <div className="max-w-content mx-auto px-6 md:px-8 lg:px-10 xl:px-12 h-16 xl:h-20 flex items-center justify-between gap-4 xl:gap-6">
                {/* ── Logo ── */}
                <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
                    <div className="relative w-9 sm:w-10 xl:w-11 h-9 sm:h-10 xl:h-11 overflow-hidden flex items-center justify-center p-0.5 sm:p-1">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png"
                            alt={brand.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                    <span className="hidden sm:flex flex-col leading-none">
                        <span className="font-display text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[18px] tracking-tightish whitespace-nowrap transition-colors duration-300 group-hover:text-accent">
                            {brand.name}
                        </span>
                        <span className="text-[10px] tracking-[0.22em] uppercase text-mute mt-0.5">
                            {brand.tagline}
                        </span>
                    </span>
                </Link>

                {/* ── Desktop Nav ── */}
                <nav className="hidden lg:flex items-center h-[44px] xl:h-[50px] gap-0.5 xl:gap-1">
                    {primaryNav.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            pathname.startsWith(link.href + '/') ||
                            (link.href === '/' && pathname === '/');

                        if (link.children) {
                            const isParentActive = link.children.some(
                                (c) => pathname === c.href || pathname.startsWith(c.href + '/')
                            );
                            return (
                                <div key={link.label} className="relative group">
                                    <button
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-label={`${link.label} menu`}
                                        className={`px-4 xl:px-4.5 h-[36px] xl:h-[40px] rounded-full text-[13.5px] xl:text-[14px] font-medium transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border-none ${
                                            isParentActive
                                                ? 'bg-accent/10 text-accent'
                                                : 'text-ink/80 hover:text-ink hover:bg-ink/5'
                                        }`}
                                    >
                                        {link.label}
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="opacity-50 transition-transform duration-300 group-hover:rotate-180"
                                        >
                                            <path
                                                d="M2.5 4.5L6 8L9.5 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                        <div className="bg-bg border border-line rounded-2xl shadow-lg p-1.5 w-48 xl:w-52 flex flex-col gap-0.5">
                                            {link.children.map((child) => {
                                                const childActive =
                                                    pathname === child.href ||
                                                    pathname.startsWith(child.href + '/');
                                                return (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className={`px-4 py-2.5 rounded-full text-[13px] xl:text-[13.5px] font-medium transition-colors ${
                                                            childActive
                                                                ? 'bg-accent/10 text-accent'
                                                                : 'text-ink/70 hover:text-ink hover:bg-surface'
                                                        }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                className={`px-4 xl:px-4.5 h-[36px] xl:h-[40px] flex items-center justify-center rounded-full text-[13.5px] xl:text-[14px] font-medium transition-all duration-200 ${
                                    isActive
                                        ? 'bg-accent/10 text-accent'
                                        : 'text-ink/80 hover:text-ink hover:bg-ink/5'
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* ── CTA Button ── */}
                <Link
                    href="/#contact"
                    className="hidden lg:inline-flex items-center justify-center gap-3 whitespace-nowrap btn btn-primary !min-h-0 h-[40px] xl:h-[46px] text-[13px] xl:text-[13.5px] font-semibold px-5 xl:px-6 rounded-full transition-all duration-200 hover:gap-4 group"
                >
                    <span>Get in touch</span>
                    <svg
                        width="15"
                        height="11"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-200 group-hover:translate-x-1"
                    >
                        <path
                            d="M10 1L15 6M15 6L10 11M15 6H1"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>

                <MobileMenu />
            </div>
        </header>
    );
}
