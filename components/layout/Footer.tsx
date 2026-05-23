import Photo from '@/components/ui/Photo';
import { brand, footerColumns, footerLegal } from '@/data/navigation';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-ink text-ondark pt-20 pb-10">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-10 lg:gap-14">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="relative w-16 h-16 overflow-hidden flex items-center justify-center">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png"
                                    alt={brand.name}
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="leading-tight">
                                <div className="font-display text-[20px]">{brand.name}</div>
                            </div>
                        </div>
                        <p className="font-display text-[36px] lg:text-[44px] leading-[1.05] tracking-tightish max-w-110">
                            Six businesses. One <em className="serif-em">island</em>.<br />
                            Cultivating the long return since 1998.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link className="btn bg-bg! text-ink!" href="/#contact">
                                Speak with our team <span className="arrow">→</span>
                            </Link>
                            <a
                                className="btn border-ondark/30! text-ondark! btn-ghost hover:border-ondark!"
                                href="#"
                            >
                                2025 Impact Report <span className="arrow">↗</span>
                            </a>
                        </div>
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

                <div className="hairline mt-16 bg-[rgba(241,236,224,0.18)]!"></div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-ondark/60">
                    <div>© 1998 – 2026 Prestige Glamour Group (Pvt) Ltd. Colombo, Sri Lanka.</div>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
