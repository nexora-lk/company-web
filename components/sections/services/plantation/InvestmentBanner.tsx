'use client';

import Photo from '@/components/ui/Photo';
import Link from 'next/link';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Leaf from "@/components/ui/Leaf";

export default function PlantationInvestmentBanner() {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-18 xl:py-20 bg-bg">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="relative rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden min-h-[360px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px] flex items-end reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780458651/kasturi-laxmi-mohit-uv6lUONd19w-unsplash_dhygmt.jpg"
                        alt="Tea plantation worker at harvest"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/95 via-ink/65 to-ink/15" />

                    <div className="relative w-full p-6 sm:p-10 lg:p-14 xl:p-16 text-ondark">
                        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-end">

                            <div className="col-span-12 lg:col-span-8 reveal">
                                <span className="num text-ondark/60 text-[10px] sm:text-[11px] uppercase tracking-widest block mb-4 sm:mb-6">[ Plantation Management ]</span>
                                <h2 className="font-display text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[72px] leading-[1.0] sm:leading-[0.98] tracking-tightish">
                                    Leased Properties, Property <em className="serif-em">Management</em>{' '}
                                    & Joint Ventures.
                                </h2>
                                <p className="mt-4 sm:mt-6 max-w-full sm:max-w-[540px] text-ondark/75 text-[14px] sm:text-[16px] md:text-[17px] leading-[1.7] reveal">
                                    Maximizing Value Through Strategic Plantation Investments and Sustainable Growth. Join our 2026 expansion round today.
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 lg:items-end mt-4 sm:mt-6 lg:mt-0 reveal">
                                <Link
                                    href="/investment"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! w-full sm:w-auto justify-center text-[14px] sm:text-[15px] px-8 py-4 sm:py-5"
                                >
                                    Explore Opportunities <ArrowIcon size={14} className="ml-1" />
                                </Link>
                                <p className="text-ondark/55 text-[12px] sm:text-[13px] leading-[1.65] max-w-[280px] lg:text-right">
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

