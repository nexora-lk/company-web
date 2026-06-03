'use client';

import Photo from '@/components/ui/Photo';
import Link from 'next/link';

export default function PlantationInvestmentBanner() {
    return (
        <section className="pb-20 xs:pb-24 md:pb-32 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="relative rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden min-h-[400px] xs:min-h-[460px] sm:min-h-[540px] flex items-end reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780458651/kasturi-laxmi-mohit-uv6lUONd19w-unsplash_dhygmt.jpg"
                        alt="Tea plantation worker at harvest"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/95 via-ink/60 to-ink/20" />

                    <div className="relative w-full p-6 xs:p-10 lg:p-14 xl:p-16 text-ondark">
                        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-end reveal">

                            <div className="col-span-12 lg:col-span-8 reveal">
                                <span className="num text-ondark/80! text-[10px] xs:text-[11px] uppercase tracking-widest">[ Plantation Management ]</span>
                                <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish mt-4 sm:mt-6">
                                    Leased Properties, Property <em className="serif-em">Management </em> 
                                    & Joint Ventures.
                                </h2>
                                <p className="mt-5 sm:mt-7 max-w-full sm:max-w-[540px] text-ondark/80 text-[15px] xs:text-[16px] sm:text-lg leading-relaxed font-light reveal">
                                    Maximizing Value Through Strategic Plantation Investments and Sustainable Growth. Join our 2026 expansion round today.
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end mt-6 lg:mt-0 reveal">
                                <Link
                                    href="/investment"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! w-full sm:w-auto justify-center text-[14px] sm:text-[15px] px-8 py-4 sm:py-5"
                                >
                                    Explore Opportunities <span className="arrow">→</span>
                                </Link>
                                <p className="text-ondark/60 text-xs sm:text-[13px] leading-relaxed max-w-[280px] lg:text-right reveal">
                                    Strategic partnerships available for landholders and institutional partners.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
