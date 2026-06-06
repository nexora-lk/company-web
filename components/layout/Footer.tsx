import Photo from '@/components/ui/Photo';
import { brand, footerColumns } from '@/data/navigation';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-ink text-ondark pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-4 sm:pb-5 lg:pb-6 xl:pb-7">
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
                            Six investment vehicles. One <em className="serif-em">island</em>.<br />
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
                </div>

                <div className="hairline mt-12 sm:mt-16 xl:mt-20 bg-[rgba(241,236,224,0.18)]!"></div>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-6 text-[12px] text-ondark/60">
                    <a
                        href="https://nextora.lk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ulink hover:opacity-100 opacity-90"
                        aria-label="Visit Nextora homepage"
                    >
                        © 2026.nextora.lk - All Right Reserved
                    </a>
                </div>
            </div>
        </footer>
    );
}
