import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/plantaation-hero.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white text-[11px] sm:text-xs md:text-sm">
                        [ Home ]
                    </Link>
                    <span className="num !text-white/60 text-[11px] sm:text-xs md:text-sm">/</span>
                    <span className="num !text-white/80 text-[11px] sm:text-xs md:text-sm">Our Plantation</span>
                    <span className="hairline-strong flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] ml-1 sm:ml-2 !bg-white/20"></span>
                    <span className="eyebrow !text-white/70 text-[10px] sm:text-[11px] md:text-sm">Soil-side, since 1998</span>
                </div>

                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[42px] sm:text-[56px] md:text-[84px] lg:text-[120px] xl:text-[140px] leading-[0.93] tracking-tightish !text-white">
                        Eight agro-zones,
                        <br />
                        <em className="serif-em">eleven</em> crops,
                        <br />
                        one soil ledger.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] leading-[1.6] sm:leading-[1.7] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[420px] lg:pb-3">
                        Prestige Glamour Group owns and operates plantations across Sri Lanka&apos;s key
                        agro-zones — from the Northern dry belt to the Kandyan hills. Each estate is
                        run by a regional manager and audited on the same quarterly ledger as every
                        other business in the group.
                    </p>
                </div>

                <div className="mt-12 sm:mt-14 md:mt-16 hairline !bg-white/70"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Owned Lands</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            03<em className="serif-em text-accent text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs !text-white/75 mt-1 sm:mt-2">Across 6 provinces</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Lease Lands</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            02<em className="serif-em text-accent text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs !text-white/75 mt-1 sm:mt-2">Across 6 provinces</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Types of Crops</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            6<em className="serif-em text-accent text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs !text-white/75 mt-1 sm:mt-2">Fruit, root &amp; spice</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Hectares under management</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            2,450<em className="serif-em text-accent text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">+</em>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-14 md:mt-16 hairline !bg-white/70"></div>
            </div>
        </section>
    );
}
