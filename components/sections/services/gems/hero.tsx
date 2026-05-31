import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117604/jacek-dylag-agsdDgRW2Ps-unsplash_v5jrs0.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20" />

            <div className="relative z-10 max-w-content mx-auto w-full px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-10 sm:pb-14 lg:pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white">[ Home ]</Link>
                    <span className="num !text-white/60">/</span>
                    <span className="num !text-white/80">Gem &amp; Jewelry</span>
                    <span className="hairline-strong flex-1 max-w-[60px] sm:max-w-[120px] ml-2 !bg-white/20" />
                    <span className="eyebrow !text-white/70 hidden sm:inline-block">PGG Gems · Ratnapura Heritage · Est. 2003</span>
                </div>

                {/* Headline + Body */}
                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[40px] sm:text-[64px] md:text-[84px] lg:text-[104px] xl:text-[120px] leading-[0.93] tracking-tightish !text-white">
                        Sri Lankan
                        <br />
                        <em className="serif-em">sapphires,</em>
                        <br />
                        set for the world.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.7] max-w-full sm:max-w-[480px] lg:max-w-none lg:pb-3">
                        PGG Gems is a certified gem trading and export business offering authentic
                        Sri Lankan gemstones — blue sapphires, rubies, cat's eyes, padparadscha, and
                        alexandrites — to discerning buyers, jewelers, and collectors across 18
                        countries worldwide.
                    </p>
                </div>

                {/* Stat Bar */}
                <div className="mt-10 sm:mt-14 lg:mt-16 hairline !bg-white/70" />
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div className="p-4 sm:p-6 lg:p-8 border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Export countries</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            14<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Across 4 continents</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Certified stones</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            6,200<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">+</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Since 2003</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Master cutters</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            12<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Ratnapura &amp; Colombo</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Heritage</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            22<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">y</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Years of trading</div>
                    </div>

                </div>
                <div className="hairline !bg-white/70" />
            </div>
        </section>
    );
}
