import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Foundation Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            5% of group profits. <em className="serif-em">Invested</em>
                            <br />
                            in the communities that sustain us.
                        </h2>

                        <div className="mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.75] text-mute max-w-155">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    T
                                </span>
                                he PGG Foundation was established in 2015 with a clear mandate:
                                channel 5% of group profits into projects that address root causes
                                of rural poverty — not just its symptoms. We partner with international
                                NGOs and local community organisations to design, fund, and execute
                                projects with permanent, measurable outcomes.
                            </p>
                            <p>
                                Our programmes span plantation development, global warming response,
                                mangrove conservation (Kadolana), and planned support for people with
                                disabilities. Every project is independently audited and reported in the
                                same format as our commercial divisions.
                            </p>
                        </div>

                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] mt-8 sm:mt-10 md:mt-12">
                            Our <em className="serif-em">Current &amp; Future</em> projects.
                        </h3>
                        <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-2 sm:gap-y-3 max-w-160">
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">
                                <span className="text-accent font-medium mr-1">Current:</span> Plantation
                            </li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">
                                <span className="text-accent font-medium mr-1">Current:</span> Global warming release
                            </li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">
                                <span className="text-accent font-medium mr-1">Current:</span> Kadolana
                            </li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">
                                <span className="text-accent font-medium mr-1">Future:</span> Disable People help
                            </li>
                        </ul>

                        <div className="mt-8 sm:mt-9 md:mt-10 flex flex-wrap gap-2 sm:gap-3">
                            <a href="#fund" className="btn btn-primary text-[13px] sm:text-[14px] md:text-base">
                                Support our work <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-3 sm:space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] overflow-hidden aspect-4/5">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120332/ngo-overview_lxcujn.jpg"
                                alt="Community development and learning initiative"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </aside>
                </div>
            </div>
        </section>
    );
}
