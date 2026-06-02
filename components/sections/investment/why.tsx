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
                            3,200+ <em className="serif-em">investors</em>
                            <br className="hidden sm:block" />
                            keep reinvesting.
                        </h2>
                        <p className="mt-4 sm:mt-6 text-mute text-[14px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[420px]">
                            We are operators of real businesses — and we have been since 2013.
                            Here is why investors trust us with their capital, in plain language.
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-7 space-y-0">
                        <div className="hairline hidden lg:block"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">01</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    Real assets, not <em className="serif-em">speculation.</em>
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    Your capital goes into land, plantations, gemstones, and loan books
                                    — tangible assets you can visit and verify. Not funds, not derivatives, not promises.
                                </p>
                            </div>
                        </div>
                        <div className="hairline"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">02</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    Transparent  <em className="serif-em">reporting.</em>
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    Every investor receives the same quarterly financial report,
                                    audited by KPMG. Returns are calculated on actual revenue
                                    — not projections. You see exactly what your money earned.
                                </p>
                            </div>
                        </div>
                        <div className="hairline"></div>
                        <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                            <span className="col-span-1 sm:col-span-2 num text-accent! sm:text-ink! text-[11px]">03</span>
                            <div className="col-span-1 sm:col-span-7">
                                <h3 className="font-display text-[24px] sm:text-[28px] leading-tight">
                                    Consistent payment <em className="serif-em">history.</em>
                                </h3>
                                <p className="mt-2 text-mute text-[13.5px] sm:text-[14px] leading-[1.7]">
                                    14 years of operation. Returns paid on schedule every quarter and
                                    every year — to investors ranging from LKR 200,000 first-timers to
                                    multi-crore long-term partners.
                                </p>
                            </div>
                        </div>
                        <div className="hairline"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
