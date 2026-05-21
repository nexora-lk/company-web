import Link from 'next/link';

export default function ModelsSection() {
    return (
        <section className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Investment Models</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Four ways in. <em className="serif-em">One</em>
                            <br />
                            underwriting standard.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        Mix-and-match permitted — many of our long-term partners hold positions in
                        two or three of these models at once.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <article className="model-card rounded-[20px] bg-surface border border-line p-8 lg:p-10 flex flex-col gap-6">
                        <div className="flex items-start justify-between">
                            <span className="num">Model · 01</span>
                            <span className="num text-accent">6 — 24 months</span>
                        </div>
                        <h3 className="font-display text-[36px] leading-[1.05] tracking-tightish">
                            Cultivation <em className="serif-em">Contribution</em> Projects.
                        </h3>
                        <p className="text-mute text-[14.5px] leading-[1.7]">
                            Direct contribution into a single crop cycle on PGG-managed land —
                            watermelon, ginger, mango, pomegranate. Quarterly progress reports,
                            off-take at sealed price.
                        </p>
                        <div className="hairline"></div>
                        <dl className="grid grid-cols-3 gap-y-3 text-[13.5px]">
                            <dt className="text-mute col-span-1">Min. ticket</dt>
                            <dd className="col-span-2 font-display text-[18px]">LKR 250,000</dd>
                            <dt className="text-mute col-span-1">Target IRR</dt>
                            <dd className="col-span-2 font-display text-[18px]">22 — 28%</dd>
                            <dt className="text-mute col-span-1">Liquidity</dt>
                            <dd className="col-span-2 font-display text-[18px]">At harvest</dd>
                        </dl>
                        <Link
                            href="/cultivation#short"
                            className="ulink text-[13px] mt-2 text-accent"
                        >
                            See cultivation plans <span className="arrow">→</span>
                        </Link>
                    </article>

                    <article className="model-card rounded-[20px] bg-ink text-ondark p-8 lg:p-10 flex flex-col gap-6">
                        <div className="flex items-start justify-between">
                            <span className="num text-ondark/70!">Model · 02</span>
                            <span className="num text-ondark/70!">12 months</span>
                        </div>
                        <h3 className="font-display text-[36px] leading-[1.05] tracking-tightish">
                            Gold Spirits of <em className="serif-em">Landing</em>.
                        </h3>
                        <p className="opacity-80 text-[14.5px] leading-[1.7]">
                            You bring the land or the capital; PGG operates the cultivation cycle.
                            Designed for stakeholder landholders under two acres — fertiliser,
                            irrigation, agronomy and off-take all included.
                        </p>
                        <div className="hairline bg-[rgba(241,236,224,0.18)]!"></div>
                        <dl className="grid grid-cols-3 gap-y-3 text-[13.5px]">
                            <dt className="opacity-60 col-span-1">Min. ticket</dt>
                            <dd className="col-span-2 font-display text-[18px]">LKR 1,200,000</dd>
                            <dt className="opacity-60 col-span-1">Target IRR</dt>
                            <dd className="col-span-2 font-display text-[18px]">28 — 36%</dd>
                            <dt className="opacity-60 col-span-1">Land</dt>
                            <dd className="col-span-2 font-display text-[18px]">Below 2 acres</dd>
                        </dl>
                        <Link href="/cultivation#mid" className="ulink text-[13px] mt-2 opacity-90">
                            Read the Gold Spirits plan <span className="arrow">→</span>
                        </Link>
                    </article>

                    <article className="model-card rounded-[20px] bg-surface border border-line p-8 lg:p-10 flex flex-col gap-6">
                        <div className="flex items-start justify-between">
                            <span className="num">Model · 03</span>
                            <span className="num text-accent">3 — 7 years</span>
                        </div>
                        <h3 className="font-display text-[36px] leading-[1.05] tracking-tightish">
                            Real Estate <em className="serif-em">Land Value</em> Appreciation.
                        </h3>
                        <p className="text-mute text-[14.5px] leading-[1.7]">
                            Anchored to our heritage portfolio along the Southern coast and the
                            Colombo periphery. Plots are held in trust, restored where needed, and
                            released for appreciation or rental yield.
                        </p>
                        <div className="hairline"></div>
                        <dl className="grid grid-cols-3 gap-y-3 text-[13.5px]">
                            <dt className="text-mute col-span-1">Min. ticket</dt>
                            <dd className="col-span-2 font-display text-[18px]">LKR 8,000,000</dd>
                            <dt className="text-mute col-span-1">Target IRR</dt>
                            <dd className="col-span-2 font-display text-[18px]">14 — 20%</dd>
                            <dt className="text-mute col-span-1">Vehicle</dt>
                            <dd className="col-span-2 font-display text-[18px]">Held in trust</dd>
                        </dl>
                        <a href="#" className="ulink text-[13px] mt-2 text-accent">
                            Heritage portfolio brochure <span className="arrow">↗</span>
                        </a>
                    </article>

                    <article className="model-card rounded-[20px] bg-accent2 p-8 lg:p-10 flex flex-col gap-6">
                        <div className="flex items-start justify-between">
                            <span className="num">Model · 04</span>
                            <span className="num text-accent">Annual cycle</span>
                        </div>
                        <h3 className="font-display text-[36px] leading-[1.05] tracking-tightish">
                            Partner in <em className="serif-em">FMCG</em> Distribution &amp;
                            Processing.
                        </h3>
                        <p className="text-[14.5px] leading-[1.7] text-[#3D423B]">
                            Co-invest in the spice-pack, fresh-fruit and beverage lines we ship from
                            Colombo to the Gulf and South Asia. Equity stake in named SKUs,
                            quarterly distributions, off-take through PGG's trade desk.
                        </p>
                        <div className="hairline"></div>
                        <dl className="grid grid-cols-3 gap-y-3 text-[13.5px] text-[#3D423B]">
                            <dt className="col-span-1 opacity-70">Min. ticket</dt>
                            <dd className="col-span-2 font-display text-[18px]">LKR 3,000,000</dd>
                            <dt className="col-span-1 opacity-70">Target IRR</dt>
                            <dd className="col-span-2 font-display text-[18px]">24 — 30%</dd>
                            <dt className="col-span-1 opacity-70">Distribution</dt>
                            <dd className="col-span-2 font-display text-[18px]">Quarterly</dd>
                        </dl>
                        <a href="#" className="ulink text-[13px] mt-2 text-accent">
                            SKU prospectus 2026 <span className="arrow">↗</span>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
