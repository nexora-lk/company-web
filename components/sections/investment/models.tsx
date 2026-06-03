import Link from 'next/link';

export default function ModelsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 reveal">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ 02 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px]">Investment Models</span>
                        </div>
                        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Six investment vehicles. <em className="serif-em">One</em>
                            <br className="hidden sm:block" />
                            standard of transparency.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[340px] mt-2 lg:mt-0">
                        Mix-and-match permitted — many of our investors hold positions across two
                        or three vehicles at once for diversified returns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <article className="model-card rounded-[16px] sm:rounded-[20px] bg-surface border border-line p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal">
                        <div className="flex items-start justify-between">
                            <span className="num text-[10px] sm:text-[11px]">Model · 01</span>
                            <span className="num text-accent text-[10px] sm:text-[11px]">6 — 24 months</span>
                        </div>
                        <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish">
                            Cultivation <em className="serif-em">Contribution</em> Projects.
                        </h3>
                        <p className="text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7]">
                            Direct contribution into a single crop cycle on PGG-managed land —
                            watermelon, ginger, mango, pomegranate. Quarterly progress reports,
                            off-take at sealed price.
                        </p>
                        <div className="hairline my-2 sm:my-0"></div>
                        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px]">
                            <div className="col-span-1 sm:contents">
                                <dt className="text-mute sm:col-span-1">Min. ticket</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">LKR 250,000</dd>
                            </div>
                            <div className="col-span-1 sm:contents">
                                <dt className="text-mute sm:col-span-1">Target IRR</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">22 — 28%</dd>
                            </div>
                            <div className="col-span-2 sm:contents">
                                <dt className="text-mute sm:col-span-1">Liquidity</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">At harvest</dd>
                            </div>
                        </dl>
                        <Link
                            href="/cultivation#short"
                            className="ulink text-[12px] sm:text-[13px] mt-1 sm:mt-2 text-accent"
                        >
                            See cultivation plans <span className="arrow">→</span>
                        </Link>
                    </article>

                    <article className="model-card rounded-[16px] sm:rounded-[20px] bg-ink text-ondark p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal">
                        <div className="flex items-start justify-between">
                            <span className="num text-ondark/70! text-[10px] sm:text-[11px]">Model · 02</span>
                            <span className="num text-ondark/70! text-[10px] sm:text-[11px]">12 months</span>
                        </div>
                        <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish">
                            Gold Spirits of <em className="serif-em">Landing</em>.
                        </h3>
                        <p className="opacity-80 text-[13.5px] sm:text-[14.5px] leading-[1.7]">
                            You bring the land or the capital; PGG operates the cultivation cycle.
                            Designed for stakeholder landholders under two acres — fertiliser,
                            irrigation, agronomy and off-take all included.
                        </p>
                        <div className="hairline bg-[rgba(241,236,224,0.18)]! my-2 sm:my-0"></div>
                        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px]">
                            <div className="col-span-1 sm:contents">
                                <dt className="opacity-60 sm:col-span-1">Min. ticket</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">LKR 1,200,000</dd>
                            </div>
                            <div className="col-span-1 sm:contents">
                                <dt className="opacity-60 sm:col-span-1">Target IRR</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">28 — 36%</dd>
                            </div>
                            <div className="col-span-2 sm:contents">
                                <dt className="opacity-60 sm:col-span-1">Land</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">Below 2 acres</dd>
                            </div>
                        </dl>
                        <Link href="/cultivation#mid" className="ulink text-[12px] sm:text-[13px] mt-1 sm:mt-2 opacity-90">
                            Read the Gold Spirits plan <span className="arrow">→</span>
                        </Link>
                    </article>

                    <article className="model-card rounded-[16px] sm:rounded-[20px] bg-surface border border-line p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal">
                        <div className="flex items-start justify-between">
                            <span className="num text-[10px] sm:text-[11px]">Model · 03</span>
                            <span className="num text-accent text-[10px] sm:text-[11px]">3 — 7 years</span>
                        </div>
                        <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish">
                            Real Estate <em className="serif-em">Land Value</em> Appreciation.
                        </h3>
                        <p className="text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7]">
                            Anchored to our heritage portfolio along the Southern coast and the
                            Colombo periphery. Plots are held in trust, restored where needed, and
                            released for appreciation or rental yield.
                        </p>
                        <div className="hairline my-2 sm:my-0"></div>
                        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px]">
                            <div className="col-span-1 sm:contents">
                                <dt className="text-mute sm:col-span-1">Min. ticket</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">LKR 8,000,000</dd>
                            </div>
                            <div className="col-span-1 sm:contents">
                                <dt className="text-mute sm:col-span-1">Target IRR</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">14 — 20%</dd>
                            </div>
                            <div className="col-span-2 sm:contents">
                                <dt className="text-mute sm:col-span-1">Vehicle</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">Held in trust</dd>
                            </div>
                        </dl>
                        <a href="#" className="ulink text-[12px] sm:text-[13px] mt-1 sm:mt-2 text-accent">
                            Heritage portfolio brochure <span className="arrow">↗</span>
                        </a>
                    </article>

                    <article className="model-card rounded-[16px] sm:rounded-[20px] bg-accent2 p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal">
                        <div className="flex items-start justify-between">
                            <span className="num text-[10px] sm:text-[11px]">Model · 04</span>
                            <span className="num text-accent text-[10px] sm:text-[11px]">Annual cycle</span>
                        </div>
                        <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish">
                            Partner in <em className="serif-em">FMCG</em> Distribution &amp;
                            Processing.
                        </h3>
                        <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-[#3D423B]">
                            Co-invest in the spice-pack, fresh-fruit and beverage lines we ship from
                            Colombo to the Gulf and South Asia. Equity stake in named SKUs,
                            quarterly distributions, off-take through PGG's trade desk.
                        </p>
                        <div className="hairline border-[#3D423B]/10! my-2 sm:my-0"></div>
                        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px] text-[#3D423B]">
                            <div className="col-span-1 sm:contents">
                                <dt className="opacity-70 sm:col-span-1">Min. ticket</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">LKR 3,000,000</dd>
                            </div>
                            <div className="col-span-1 sm:contents">
                                <dt className="opacity-70 sm:col-span-1">Target IRR</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">24 — 30%</dd>
                            </div>
                            <div className="col-span-2 sm:contents">
                                <dt className="opacity-70 sm:col-span-1">Distribution</dt>
                                <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">Quarterly</dd>
                            </div>
                        </dl>
                        <a href="#" className="ulink text-[12px] sm:text-[13px] mt-1 sm:mt-2 text-accent">
                            SKU prospectus 2026 <span className="arrow">↗</span>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
