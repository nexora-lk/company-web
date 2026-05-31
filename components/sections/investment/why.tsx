export default function WhySection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ 01 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px]">Why Invest with PGG?</span>
                        </div>
                        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Three reasons
                            <br className="hidden sm:block" />
                            we keep <em className="serif-em">writing</em>
                            <br className="hidden sm:block" />
                            the cheque.
                        </h2>
                        <p className="mt-4 sm:mt-6 text-mute text-[14px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[420px]">
                            We are stewards of patient capital — and we have been, for twenty-eight
                            years. Here is the underwriting case, in plain language.
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-7 space-y-0">
                        <div className="hairline hidden lg:block"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">01</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    High-growth <em className="serif-em">sectors</em>.
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    Agriculture, FMCG and exports — the three industries the Central
                                    Bank flags as net dollar earners for Sri Lanka through 2030.
                                </p>
                            </div>
                            <div className="col-span-1 sm:col-span-3 mt-3 sm:mt-0">
                                <div className="num mb-1 sm:mb-2 text-[10px] sm:text-[11px]">Sector IRR</div>
                                <div className="irr">
                                    <span className="on"></span>
                                    <span className="on"></span>
                                    <span className="on"></span>
                                    <span className="on"></span>
                                    <span className="on"></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="hairline"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">02</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    Guaranteed <em className="serif-em">buy-back</em>.
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    Off-take prices fixed at planting through PGG's export desk. You
                                    know the cheque amount before the seed is in the ground.
                                </p>
                            </div>
                            <div className="col-span-1 sm:col-span-3 mt-3 sm:mt-0">
                                <div className="num mb-1 sm:mb-2 text-[10px] sm:text-[11px]">Price model</div>
                                <div className="font-display text-[18px] sm:text-[20px]">Sealed-at-planting</div>
                            </div>
                        </div>
                        <div className="hairline"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">03</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    Land-use <em className="serif-em">optimisation</em>.
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    Agronomy team selects the crop, the cycle, and the intercrop
                                    pattern to squeeze every acre — without exhausting the soil for
                                    the next investor.
                                </p>
                            </div>
                            <div className="col-span-1 sm:col-span-3 mt-3 sm:mt-0">
                                <div className="num mb-1 sm:mb-2 text-[10px] sm:text-[11px]">Yield uplift</div>
                                <div className="font-display text-[18px] sm:text-[20px]">+18 — 32%</div>
                            </div>
                        </div>
                        <div className="hairline"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
