import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">

                    {/* Left: Text — shown below image on mobile, left on lg+ */}
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow">FMCG Overview</span>
                        </div>

                        <h2 className="font-display text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            Value-added <em className="serif-em">goodness</em>
                            <br />
                            from our own estates.
                        </h2>

                        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-[14.5px] sm:text-[15px] leading-[1.75] text-mute max-w-full sm:max-w-[620px]">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    P
                                </span>
                                GG Fresh Foods was born from a simple idea — the fruits and herbs
                                growing on our own plantations deserve more than raw export. By
                                processing, packaging and branding them ourselves, we capture more
                                value for the island, create more jobs, and deliver a fresher
                                product to the consumer.
                            </p>
                            <p>
                                Today the division operates a{' '}
                                <span className="text-ink">
                                    5-tonne-per-day processing facility
                                </span>{' '}
                                in Horana, serving 240 retail partners across Sri Lanka and a
                                growing export book to the Middle East, East Asia and the EU.
                            </p>
                        </div>

                        <h3 className="font-display text-[22px] sm:text-[24px] md:text-[26px] mt-10 sm:mt-12">
                            Our <em className="serif-em">product</em> categories.
                        </h3>
                        <ul className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 max-w-full sm:max-w-[640px]">
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Fresh-cut fruit packs</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Dried fruit &amp; snacks</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Herbal teas</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Cold-pressed juices</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Ginger extracts</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Coconut water</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Fruit jams &amp; preserves</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Spice blends</li>
                            <li className="branch text-[13.5px] sm:text-[14.5px]">Organic honey</li>
                        </ul>

                        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
                            <a href="#products" className="btn btn-ghost">
                                View our products <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary">
                                Become a distributor <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Image — shown on top on mobile */}
                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-[18px] overflow-hidden aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117514/fmcg-overview_eyrmnl.jpg"
                                alt="Fresh tropical fruits ready for processing"
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
