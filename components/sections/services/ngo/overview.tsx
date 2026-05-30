import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 01 ]</span>
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Foundation Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            Business grows when <em className="serif-em">communities</em>
                            <br />
                            grow with it.
                        </h2>

                        <div className="mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.75] text-mute max-w-155">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    T
                                </span>
                                he PGG Foundation was established in 2015 with a simple mandate:
                                channel 5% of group profits into projects that address the root
                                causes of rural poverty — not its symptoms. We partner with
                                international NGOs, bilateral donors, and local community
                                organizations to design, fund, and execute projects that create
                                permanent, measurable change.
                            </p>
                            <p>
                                Our programmes span{' '}
                                <span className="text-ink">
                                    education, vocational training, women&apos;s empowerment, and
                                    environmental rehabilitation
                                </span>
                                . Every project is independently audited and reported in the same
                                format as our commercial businesses.
                            </p>
                        </div>

                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] mt-8 sm:mt-10 md:mt-12">
                            Our <em className="serif-em">focus</em> areas.
                        </h3>
                        <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-2 sm:gap-y-3 max-w-160">
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Rural education</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Women&apos;s empowerment</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Vocational training</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Health &amp; nutrition</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Environmental rehab</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Youth development</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Income generation</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Clean water access</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Disaster relief</li>
                        </ul>

                        <div className="mt-8 sm:mt-9 md:mt-10 flex flex-wrap gap-2 sm:gap-3">
                            <a href="#projects" className="btn btn-ghost text-[13px] sm:text-[14px] md:text-base">
                                Explore our projects <span className="arrow">→</span>
                            </a>
                            <a href="#support" className="btn btn-primary text-[13px] sm:text-[14px] md:text-base">
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
                        <div className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] bg-ink text-ondark p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Our approach</div>
                            <p className="font-display text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-tight">
                                &ldquo;Impact is <em className="serif-em">measured</em>, not assumed.
                                Accountability is everything.&rdquo;
                            </p>
                            <div className="hairline mt-4 sm:mt-5 md:mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-3 sm:mt-4 md:mt-4 flex items-center justify-between text-[11px] sm:text-xs opacity-70">
                                <span>— Executive Director</span>
                                <span>PGG Foundation</span>
                            </div>
                        </div>
                        <div className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] bg-accent2 p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Our impact partners</div>
                            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px]">
                                <li className="branch">UN Sustainable Development Goals</li>
                                <li className="branch">International NGO networks</li>
                                <li className="branch">World Bank regional programs</li>
                                <li className="branch">Local government institutions</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
