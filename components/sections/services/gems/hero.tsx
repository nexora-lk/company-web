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
                    <span className="num">Gem &amp; Jewelry</span>
                    <span className="hairline-strong flex-1 max-w-30 ml-2"></span>
                    <span className="eyebrow">PGG Gems · Ratnapura Heritage · Est. 2003</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Sri Lankan
                        <br />
                        <em className="serif-em">sapphires,</em>
                        <br />
                        set for the world.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-105 lg:pb-3">
                        PGG Gems is a certified gem trading and export business offering authentic
                        Sri Lankan gemstones — blue sapphires, rubies, cat's eyes, padparadscha, and
                        alexandrites — to discerning buyers, jewelers, and collectors across 18
                        countries worldwide.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">Export countries</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            14<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Across 4 continents</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Certified stones</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            6,200<em className="serif-em text-accent text-[20px]">+</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Since 2003</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Master cutters</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            12<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Ratnapura &amp; Colombo</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">Heritage</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            22<em className="serif-em text-accent text-[20px]">y</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Years of trading</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
