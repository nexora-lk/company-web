import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink">
                        [ Home ]
                    </Link>
                    <span className="num">/</span>
                    <span className="num">Our Plantation</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">Soil-side, since 1998</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Eight agro-zones,
                        <br />
                        <em className="serif-em">eleven</em> crops,
                        <br />
                        one soil ledger.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        Prestige Glamour Group owns and operates plantations across Sri Lanka's key
                        agro-zones — from the Northern dry belt to the Kandyan hills. Each estate is
                        run by a regional manager and audited on the same quarterly ledger as every
                        other business in the group.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">Owned estates</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            08<em className="serif-em text-accent">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Across 6 provinces</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Cultivated acres</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            137<em className="serif-em text-accent">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Ongoing · 2026</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Product range</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            11<em className="serif-em text-accent">+</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Fruit, root &amp; spice</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">New plantings</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            190<em className="serif-em text-accent">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Acres in development</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
