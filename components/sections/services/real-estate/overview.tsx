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
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Real Estate Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            Curating the <em className="serif-em">island&apos;s</em>
                            <br />
                            most enduring spaces.
                        </h2>

                        <div className="mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.75] text-mute max-w-155">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    S
                                </span>
                                ri Lanka&apos;s real estate market requires patience, local knowledge,
                                and an eye for hidden potential. PGG Properties identifies
                                undervalued land—from agricultural plots ripe for high-yield crops
                                to abandoned colonial planters&apos; bungalows—and develops them into
                                high-performing assets.
                            </p>
                            <p>
                                Our portfolio bridges{' '}
                                <span className="text-ink">
                                    commercial agriculture, eco-tourism, and heritage conservation
                                </span>
                                . We do not just hold land; we activate it, ensuring it generates
                                sustainable returns while preserving the island&apos;s natural and
                                historical integrity.
                            </p>
                        </div>

                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] mt-8 sm:mt-10 md:mt-12">
                            Our <em className="serif-em">development</em> areas.
                        </h3>
                        <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-2 sm:gap-y-3 max-w-160">
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Agri-commercial land</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Heritage bungalows</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Eco-tourism plots</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Industrial zones</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Logistics hubs</li>
                            <li className="branch text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">Plantation estates</li>
                        </ul>

                        <div className="mt-8 sm:mt-9 md:mt-10 flex flex-wrap gap-2 sm:gap-3">
                            <a href="#properties" className="btn btn-ghost text-[13px] sm:text-[14px] md:text-base">
                                View properties <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary text-[13px] sm:text-[14px] md:text-base">
                                Invest with us <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-3 sm:space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] overflow-hidden aspect-4/5">
                            <Photo
                                src="/real-estate-overview.jpg"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] bg-ink text-ondark p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Our philosophy</div>
                            <p className="font-display text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-tight">
                                &ldquo;The best returns come from land that{' '}
                                <em className="serif-em">produces</em>, not just appreciates.&rdquo;
                            </p>
                            <div className="hairline mt-4 sm:mt-5 md:mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-3 sm:mt-4 md:mt-4 flex items-center justify-between text-[11px] sm:text-xs opacity-70">
                                <span>— Managing Director</span>
                                <span>PGG Properties</span>
                            </div>
                        </div>
                        <div className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] bg-accent2 p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Our expertise</div>
                            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px]">
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
