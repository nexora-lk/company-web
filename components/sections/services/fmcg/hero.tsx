import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780124967/fmcg-hero_ow6agn.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20" />

            <div className="relative z-10 max-w-content mx-auto w-full px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-10 sm:pb-14 lg:pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white">
                        [ Home ]
                    </Link>
                    <span className="num !text-white/60">/</span>
                    <span className="num !text-white/80">FMCG</span>
                    <span className="hairline-strong flex-1 max-w-[80px] sm:max-w-[120px] ml-2 !bg-white/20" />
                    <span className="eyebrow !text-white/70 hidden sm:inline-block">
                        PGG Fresh Foods · Farm to Fork · Est. 2019
                    </span>
                </div>

                {/* Hero Headline + Body */}
                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[40px] sm:text-[64px] md:text-[84px] lg:text-[104px] xl:text-[120px] leading-[0.93] tracking-tightish !text-white">
                        Fresh from the
                        <br />
                        <em className="serif-em">field,</em> packed
                        <br />
                        for the shelf.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.7] max-w-full sm:max-w-[480px] lg:max-w-[420px] lg:pb-3">
                        PGG Fresh Foods processes and distributes value-added fresh fruits, herbal
                        extracts, and natural beverages under the PGG Fresh Foods brand. From our
                        own estates to retail shelves across Sri Lanka and export markets.
                    </p>
                </div>

                {/* Stat Bar */}
                <div className="mt-10 sm:mt-14 lg:mt-16 hairline !bg-white/70" />
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div className="p-4 sm:p-6 lg:p-8 border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Product lines</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            18<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">+</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Fresh &amp; processed</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Retail partners</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            240<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Across Sri Lanka</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Processing capacity</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            5<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">T</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Tonnes per day</div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4">Export revenue</div>
                        <div className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            42<em className="serif-em text-accent text-[16px] sm:text-[18px] lg:text-[20px]">%</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-1 sm:mt-2">Of total sales · 2025</div>
                    </div>

                </div>
                <div className="hairline !bg-white/70" />
            </div>
        </section>
    );
}
