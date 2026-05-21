import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Overview · From the Chairman</span>
                        </div>

                        <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish">
                            A letter from <em className="serif-em">Mr. Y. M. D. T.</em>
                            <br />
                            Yatawara, Chairman.
                        </h2>

                        <div className="mt-10 space-y-5 text-[15px] leading-[1.75] text-mute max-w-[640px]">
                            <p>
                                <span className="font-display text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    A
                                </span>
                                s a roots developer of the Prestige Glamour Group of Company, we go
                                forward with unique and astonishing services and goods for our
                                valuable stakeholders — emerging the level of{' '}
                                <span className="text-ink">"Prestige &amp; Glamour"</span> for the
                                word, while establishing the best working environment for our
                                internal customers and the best products for those we serve outside.
                            </p>
                            <p>
                                We hold ourselves to an effective legal background and to the vision
                                and mission of high-quality service and natural goods. Through our
                                NGO programmes we focus on early-childhood development and on
                                emerging a new generation of entrepreneurs from agriculture in the
                                lowest-income rural corners of the island.
                            </p>
                            <p>
                                By taking our business scope abroad, we stop the outflow of dollars
                                from Sri Lanka and increase the inflow back — a quiet support to the
                                country's account of foreign-exchange balance payment. That, simply,
                                is the work.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-6">
                            <div>
                                <div className="font-display text-[26px] leading-none">
                                    Y. M. D. T. Yatawara
                                </div>
                                <div className="num mt-2">Chairman · Prestige Glamour Group</div>
                            </div>
                            <div className="hidden sm:block hairline-strong w-16"></div>
                            <div className="hidden sm:block font-display italic text-[22px] text-mute">
                                — Colombo, 2026
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 relative">
                        <figure className="portrait dark aspect-[4/5] rounded-[18px]">
                            <span className="mono">YMDT</span>
                            <div className="pf-label flex items-center justify-between">
                                <span>Chairman portrait</span>
                                <span className="opacity-70">— pending</span>
                            </div>
                        </figure>

                        <figure className="absolute -bottom-6 -left-6 w-[58%] aspect-[4/3] rounded-[14px] overflow-hidden border border-line bg-surface hidden lg:block">
                            <Photo
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop"
                                alt="A seedling held above a home"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
