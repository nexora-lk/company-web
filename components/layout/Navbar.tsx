'use client';

import MobileMenu from '@/components/layout/MobileMenu';
import { brand, primaryNav } from '@/data/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 nav-blur border-b border-line">
            <div className="max-w-content mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center p-1">
                        <Image
                            src="/logo.png"
                            alt={brand.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                    <span className="hidden sm:flex flex-col leading-none">
                        <span className="font-display text-[15px] lg:text-[17px] tracking-tightish whitespace-nowrap transition-colors duration-300 group-hover:text-accent">
                            {brand.name}
                        </span>
                        <span className="text-[10px] tracking-[0.22em] uppercase text-mute mt-0.5">
                            {brand.tagline}
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1 bg-surface border border-line rounded-full px-1.5 py-1">
                    {primaryNav.map((link) => {
                        const isActive =
                            pathname === link.href || (link.href === '/' && pathname === '/');

                        if (link.children) {
                            return (
                                <div key={link.label} className="relative group">
                                    <button
                                        className={`px-3.5 py-1.5 rounded-full text-[13px] transition-all duration-300 flex items-center gap-1 cursor-pointer border-none bg-transparent ${
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
                                        <div className="bg-bg border border-line rounded-[16px] shadow-sm p-2 w-[180px] flex flex-col gap-1">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="px-4 py-2.5 rounded-[10px] text-[13px] text-mute hover:text-ink hover:bg-surface transition-colors"
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
                                className={`px-3.5 py-1.5 rounded-full text-[13px] transition-all duration-300 ${
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
                    className="hidden lg:inline-flex items-center gap-2 whitespace-nowrap btn btn-primary text-sm px-4 py-2 transition-all duration-300 hover:gap-3 group"
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
