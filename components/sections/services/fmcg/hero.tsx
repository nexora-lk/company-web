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
                    <span className="num">FMCG</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">PGG Fresh Foods · Farm to Fork · Est. 2019</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Fresh from the
                        <br />
                        <em className="serif-em">field,</em> packed
                        <br />
                        for the shelf.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        PGG Fresh Foods processes and distributes value-added fresh fruits, herbal
                        extracts, and natural beverages under the PGG Fresh Foods brand. From our
                        own estates to retail shelves across Sri Lanka and export markets.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">Product lines</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            18<em className="serif-em text-accent text-[20px]">+</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Fresh &amp; processed</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Retail partners</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            240<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Across Sri Lanka</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Processing capacity</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            5<em className="serif-em text-accent text-[20px]">T</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Tonnes per day</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">Export revenue</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            42<em className="serif-em text-accent text-[20px]">%</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Of total sales · 2025</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
