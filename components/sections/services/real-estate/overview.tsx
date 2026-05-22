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
                            <span className="eyebrow">Real Estate Overview</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Curating the <em className="serif-em">island's</em>
                            <br />
                            most enduring spaces.
                        </h2>

                        <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-mute max-w-[620px]">
                            <p>
                                <span className="font-display text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    S
                                </span>
                                ri Lanka's real estate market requires patience, local knowledge,
                                and an eye for hidden potential. PGG Properties identifies
                                undervalued land—from agricultural plots ripe for high-yield crops
                                to abandoned colonial planters' bungalows—and develops them into
                                high-performing assets.
                            </p>
                            <p>
                                Our portfolio bridges{' '}
                                <span className="text-ink">
                                    commercial agriculture, eco-tourism, and heritage conservation
                                </span>
                                . We do not just hold land; we activate it, ensuring it generates
                                sustainable returns while preserving the island's natural and
                                historical integrity.
                            </p>
                        </div>

                        <h3 className="font-display text-[26px] mt-12">
                            Our <em className="serif-em">development</em> areas.
                        </h3>
                        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-[640px]">
                            <li className="branch text-[14.5px]">Agri-commercial land</li>
                            <li className="branch text-[14.5px]">Heritage bungalows</li>
                            <li className="branch text-[14.5px]">Eco-tourism plots</li>
                            <li className="branch text-[14.5px]">Industrial zones</li>
                            <li className="branch text-[14.5px]">Logistics hubs</li>
                            <li className="branch text-[14.5px]">Plantation estates</li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#properties" className="btn btn-ghost">
                                View properties <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary">
                                Invest with us <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-4">Our philosophy</div>
                            <p className="font-display text-[26px] leading-tight">
                                "The best returns come from land that{' '}
                                <em className="serif-em">produces</em>, not just appreciates."
                            </p>
                            <div className="hairline mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-4 flex items-center justify-between text-[12px] opacity-70">
                                <span>— Managing Director</span>
                                <span>PGG Properties</span>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-accent2 p-6 lg:p-8">
                            <div className="num mb-4">Our expertise</div>
                            <ul className="space-y-3 text-[14px]">
                                <li className="branch">
                                    Title clearance &amp; legal due diligence
                                </li>
                                <li className="branch">Agricultural land conversion</li>
                                <li className="branch">Heritage architecture restoration</li>
                                <li className="branch">Sustainable off-grid development</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
