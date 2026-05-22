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
                            <span className="eyebrow">FMCG Overview</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Value-added <em className="serif-em">goodness</em>
                            <br />
                            from our own estates.
                        </h2>

                        <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-mute max-w-[620px]">
                            <p>
                                <span className="font-display text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
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

                        <h3 className="font-display text-[26px] mt-12">
                            Our <em className="serif-em">product</em> categories.
                        </h3>
                        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-[640px]">
                            <li className="branch text-[14.5px]">Fresh-cut fruit packs</li>
                            <li className="branch text-[14.5px]">Dried fruit &amp; snacks</li>
                            <li className="branch text-[14.5px]">Herbal teas</li>
                            <li className="branch text-[14.5px]">Cold-pressed juices</li>
                            <li className="branch text-[14.5px]">Ginger extracts</li>
                            <li className="branch text-[14.5px]">Coconut water</li>
                            <li className="branch text-[14.5px]">Fruit jams &amp; preserves</li>
                            <li className="branch text-[14.5px]">Spice blends</li>
                            <li className="branch text-[14.5px]">Organic honey</li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#products" className="btn btn-ghost">
                                View our products <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary">
                                Become a distributor <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Fresh tropical fruits ready for processing"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-4">Our vision</div>
                            <p className="font-display text-[26px] leading-tight">
                                "Every fruit we pack <em className="serif-em">is a job</em> that
                                stays on the island."
                            </p>
                            <div className="hairline mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-4 flex items-center justify-between text-[12px] opacity-70">
                                <span>— Operations Director</span>
                                <span>PGG Fresh Foods</span>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-accent2 p-6 lg:p-8">
                            <div className="num mb-4">Certifications</div>
                            <ul className="space-y-3 text-[14px]">
                                <li className="branch">ISO 22000 Food Safety</li>
                                <li className="branch">HACCP Certified</li>
                                <li className="branch">Sri Lanka Standards Institution</li>
                                <li className="branch">Organic Certification (in progress)</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
