'use client';

import MobileMenu from '@/components/layout/MobileMenu';
import Photo from '@/components/ui/Photo';
import { brand, primaryNav } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed w-full top-0 z-50 nav-blur border-b border-line lg:border-transparent">
            <div className="max-w-content mx-auto px-6 md:px-8 lg:px-10 xl:px-12 h-16 xl:h-20 flex items-center justify-between gap-4 xl:gap-6">
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
                        <span className="font-display text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[18px] tracking-tightish whitespace-nowrap transition-colors duration-300 group-hover:text-accent lg:text-white lg:drop-shadow-sm">
                            {brand.name}
                        </span>
                        <span className="text-[10px] tracking-[0.22em] uppercase text-mute lg:text-white/80 lg:drop-shadow-sm mt-0.5">
                            {brand.tagline}
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center h-[44px] xl:h-[50px] gap-1 xl:gap-1.5 bg-surface border border-line rounded-full px-1.5 xl:px-2">
                    {primaryNav.map((link) => {
                        const isActive =
                            pathname === link.href || (link.href === '/' && pathname === '/');

                        if (link.children) {
                            return (
                                <div key={link.label} className="relative group">
                                    <button
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-label={`${link.label} menu`}
                                        className={`px-3.5 xl:px-4 h-[34px] xl:h-[40px] rounded-full text-[13px] xl:text-[14px] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer border-none bg-transparent ${
                                            isActive
                                                ? 'bg-bg text-ink font-medium shadow-xs'
                                                : 'text-mute hover:text-ink hover:bg-bg/50'
                                        }`}
                                    >
                                        {link.label}
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="opacity-60 transition-transform duration-300 group-hover:rotate-180"
                                        >
                                            <path
                                                d="M2.5 4.5L6 8L9.5 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                        <div className="bg-bg border border-line rounded-2xl shadow-sm p-2 w-45 xl:w-52 flex flex-col gap-1">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="px-4 py-2.5 rounded-md text-[13px] xl:text-[14px] text-mute hover:text-ink hover:bg-surface transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                className={`px-3.5 xl:px-4 h-[34px] xl:h-[40px] flex items-center justify-center rounded-full text-[13px] xl:text-[14px] transition-all duration-300 ${
                                    isActive
                                        ? 'bg-bg text-ink font-medium shadow-xs'
                                        : 'text-mute hover:text-ink hover:bg-bg/50'
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <Link
                    href="/#contact"
                    className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap btn btn-primary !min-h-0 h-[44px] xl:h-[50px] text-[13px] xl:text-[14px] px-5 xl:px-6 rounded-full transition-all duration-300 hover:gap-3 group"
                >
                    <span>Get in touch</span>
                    <span className="inline-block transform rotate-320 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
                <MobileMenu />
            </div>
        </header>
    );
}
