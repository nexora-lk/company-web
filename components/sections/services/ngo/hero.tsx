import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center" style={{backgroundImage: "url('/ngo-hero.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                    <Link href="/" className="num ulink text-white/80! hover:text-white! text-[11px] sm:text-xs md:text-sm">
                        [ Home ]
                    </Link>
                    <span className="num text-white/60! text-[11px] sm:text-xs md:text-sm">/</span>
                    <span className="num text-white/80! text-[11px] sm:text-xs md:text-sm">NGO Projects</span>
                    <span className="hairline-strong flex-1 max-w-20 sm:max-w-25 md:max-w-30 ml-1 sm:ml-2 bg-white/20!"></span>
                    <span className="eyebrow text-white/70! text-[10px] sm:text-[11px] md:text-sm">PGG Foundation · Community Impact · Est. 2015</span>
                </div>

                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[42px] sm:text-[56px] md:text-[84px] lg:text-[120px] xl:text-[140px] leading-[0.93] tracking-tightish text-white!">
                        Driving social
                        <br />
                        <em className="serif-em">change</em> through
                        <br />
                        lasting impact.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-white/85! text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-87.5 md:max-w-100 lg:max-w-105 lg:pb-3">
                        The PGG Foundation channels corporate profits and global donor partnerships
                        into education, rehabilitation, and income-generation projects across rural
                        Sri Lanka. Because growth that doesn&apos;t reach the village isn&apos;t real growth.
                    </p>
                </div>

                <div className="mt-12 sm:mt-14 md:mt-16 hairline bg-white/70!"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Lives impacted</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            28K<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">+</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Since 2015</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 lg:border-r border-white/70">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Active projects</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            14<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Across 7 districts</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Global partners</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            09<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">NGOs &amp; foundations</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-t lg:border-t-0">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Schools built</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            06<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Rural education centres</div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-14 md:mt-16 hairline bg-white/70!"></div>
            </div>
        </section>
    );
}
