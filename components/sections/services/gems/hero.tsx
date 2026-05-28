import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/jacek-dylag-agsdDgRW2Ps-unsplash.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white">
                        [ Home ]
                    </Link>
                    <span className="num !text-white/60">/</span>
                    <span className="num !text-white/80">Gem &amp; Jewelry</span>
                    <span className="hairline-strong flex-1 max-w-30 ml-2 !bg-white/20"></span>
                    <span className="eyebrow !text-white/70">PGG Gems · Ratnapura Heritage · Est. 2003</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish !text-white">
                        Sri Lankan
                        <br />
                        <em className="serif-em">sapphires,</em>
                        <br />
                        set for the world.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[15.5px] leading-[1.7] max-w-105 lg:pb-3">
                        PGG Gems is a certified gem trading and export business offering authentic
                        Sri Lankan gemstones — blue sapphires, rubies, cat's eyes, padparadscha, and
                        alexandrites — to discerning buyers, jewelers, and collectors across 18
                        countries worldwide.
                    </p>
                </div>

                <div className="mt-16 hairline !bg-white/70"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-white/70">
                        <div className="num !text-white/90 mb-4">Export countries</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            14<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Across 4 continents</div>
                    </div>
                    <div className="p-8 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-4">Certified stones</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            6,200<em className="serif-em text-accent text-[20px]">+</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Since 2003</div>
                    </div>
                    <div className="p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-4">Master cutters</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            12<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Ratnapura &amp; Colombo</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-4">Heritage</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            22<em className="serif-em text-accent text-[20px]">y</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Years of trading</div>
                    </div>
                </div>
                <div className="hairline !bg-white/70"></div>
            </div>
        </section>
    );
}
