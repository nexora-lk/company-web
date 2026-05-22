import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Foundation Overview</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Business grows when <em className="serif-em">communities</em>
                            <br />
                            grow with it.
                        </h2>

                        <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-mute max-w-[620px]">
                            <p>
                                <span className="font-display text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
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
                                    education, vocational training, women's empowerment, and
                                    environmental rehabilitation
                                </span>
                                . Every project is independently audited and reported in the same
                                format as our commercial businesses.
                            </p>
                        </div>

                        <h3 className="font-display text-[26px] mt-12">
                            Our <em className="serif-em">focus</em> areas.
                        </h3>
                        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-[640px]">
                            <li className="branch text-[14.5px]">Rural education</li>
                            <li className="branch text-[14.5px]">Women's empowerment</li>
                            <li className="branch text-[14.5px]">Vocational training</li>
                            <li className="branch text-[14.5px]">Health &amp; nutrition</li>
                            <li className="branch text-[14.5px]">Environmental rehab</li>
                            <li className="branch text-[14.5px]">Youth development</li>
                            <li className="branch text-[14.5px]">Income generation</li>
                            <li className="branch text-[14.5px]">Clean water access</li>
                            <li className="branch text-[14.5px]">Disaster relief</li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#projects" className="btn btn-ghost">
                                Explore our projects <span className="arrow">→</span>
                            </a>
                            <a href="#support" className="btn btn-primary">
                                Support our work <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Community development and learning initiative"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-4">Our approach</div>
                            <p className="font-display text-[26px] leading-tight">
                                "Impact is <em className="serif-em">measured</em>, not assumed.
                                Accountability is everything."
                            </p>
                            <div className="hairline mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-4 flex items-center justify-between text-[12px] opacity-70">
                                <span>— Executive Director</span>
                                <span>PGG Foundation</span>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-accent2 p-6 lg:p-8">
                            <div className="num mb-4">Our impact partners</div>
                            <ul className="space-y-3 text-[14px]">
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
