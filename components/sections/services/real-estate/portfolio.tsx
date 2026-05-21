import Photo from '@/components/ui/Photo';

export default function PortfolioSection() {
    return (
        <section id="properties" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Property Portfolio</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Assets that <em className="serif-em">compound</em>
                            <br />
                            over generations.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        Our portfolio spans three distinct asset classes. Each is actively managed
                        by our property team to maximize yield and capital appreciation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <article className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]">
                        <Photo
                            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1100&q=80&auto=format&fit=crop"
                            alt="Agricultural land"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                            <span className="num text-ondark/80!">Asset Class 01</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    Commercial <em className="serif-em">Agriculture</em>
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    High-yield land blocks selected for soil quality and water
                                    access, leased to our plantation division or managed for export
                                    crops.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]">
                        <Photo
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1100&q=80&auto=format&fit=crop"
                            alt="Heritage home restoration"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                            <span className="num text-ondark/80!">Asset Class 02</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    Heritage <em className="serif-em">Restoration</em>
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    Abandoned colonial-era planter's bungalows meticulously restored
                                    and converted into boutique eco-tourism assets.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]">
                        <Photo
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1100&q=80&auto=format&fit=crop"
                            alt="Commercial development site"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                            <span className="num text-ondark/80!">Asset Class 03</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    Logistics &amp; <em className="serif-em">Industrial</em>
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    Strategic land banks near key transport corridors, developed for
                                    warehousing and light industrial processing.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
