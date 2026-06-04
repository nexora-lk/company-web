import Photo from '@/components/ui/Photo';
import { brand, footerColumns, footerLegal } from '@/data/navigation';
import Link from 'next/link';
import { WithdrawConsentButton } from '@/components/layout/WithdrawConsentButton';

export default function Footer() {
    return (
        <footer className="bg-ink text-ondark pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-8 sm:pb-10 lg:pb-12 xl:pb-14">
            <div className="max-w-content mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="relative w-16 h-16 overflow-hidden flex items-center justify-center">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/logo_eszhjw.png"
                                    alt={brand.name}
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain"
                                    sizes="60px"
                                />
                            </div>
                            <div className="leading-tight">
                                <div className="font-display text-[20px]">{brand.name}</div>
                            </div>
                        </div>
                        <p className="font-display text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.05] tracking-tightish max-w-110">
                            Six investment vehicles. One <em className="serif-em">island.</em>.<br />
                            Building investor wealth since 2013.
                        </p>
                    </div>

                    {footerColumns.map((col) => (
                        <div key={col.title} className="col-span-6 md:col-span-3 lg:col-span-2">
                            <div className="num text-ondark/60! mb-5">{col.title}</div>
                            <ul className="space-y-1.5 text-[14px]">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            className="ulink hover:opacity-100 opacity-90 py-2 inline-block"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className="num text-ondark/60! mb-5">Newsletter — Quarterly only</div>
                        <div className="flex gap-2 border-b border-ondark/30 pb-3">
                            <input
                                id="newsletter-email"
                                className="bg-transparent flex-1 outline-none placeholder:text-ondark/40 text-[14px]"
                                placeholder="you@company.com"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                className="no-min-target touch-target-expand text-[14px] flex items-center gap-2"
                                aria-label="Subscribe to newsletter"
                            >
                                Subscribe <span className="arrow">→</span>
                            </button>
                        </div>
                        <p className="text-[12px] text-ondark/55 mt-4 leading-relaxed">
                            Four letters a year. Field notes from the estates, the workshop, and the
                            trading floor.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-ondark/70 -ml-3">
                            <a
                                className="ulink px-3 py-3 inline-flex items-center min-h-[44px]"
                                href="#"
                                aria-label="Visit our Instagram page"
                            >
                                Instagram
                            </a>
                            <a
                                className="ulink px-3 py-3 inline-flex items-center min-h-[44px]"
                                href="#"
                                aria-label="Visit our LinkedIn page"
                            >
                                LinkedIn
                            </a>
                            <a
                                className="ulink px-3 py-3 inline-flex items-center min-h-[44px]"
                                href="#"
                                aria-label="Visit our YouTube channel"
                            >
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hairline mt-12 sm:mt-16 xl:mt-20 bg-[rgba(241,236,224,0.18)]!"></div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-ondark/60">
                    <a
                        href="https://nextora.lk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ulink hover:opacity-100 opacity-90"
                        aria-label="Visit Nextora homepage"
                    >
                        © 2026.nextora.lk - All Right Reserved
                    </a>
                    <div className="flex flex-wrap items-center gap-2 -mr-3">
                        {footerLegal.map((link) => (
                            <a
                                key={link.label}
                                className="ulink px-3 py-3 inline-flex items-center min-h-[44px]"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                        <WithdrawConsentButton />
                    </div>
                </div>
            </div>
        </footer>
    );
}
