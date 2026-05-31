import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center" style={{backgroundImage: "url('https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117505/investment-hero_xust91.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 mt-16 sm:mt-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white text-[10px] sm:text-[11px]">
                        [ Home ]
                    </Link>
                    <span className="num !text-white/60 text-[10px] sm:text-[11px]">/</span>
                    <span className="num !text-white/80 text-[10px] sm:text-[11px]">Investment Plans</span>
                    <span className="hairline-strong flex-1 max-w-[60px] sm:max-w-[120px] ml-2 !bg-white/20"></span>
                    <span className="eyebrow !text-white/70 hidden sm:inline-block text-[10px] sm:text-[11px]">For investors · 2026 Round</span>
                </div>

                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[46px] sm:text-[64px] md:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish !text-white">
                        Patient capital,
                        <br />
                        <em className="serif-em">island-grown</em>
                        <br />
                        returns.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.7] max-w-full sm:max-w-[480px] lg:max-w-[420px] lg:pb-3">
                        Four investment models across agriculture, micro-finance, real estate and
                        FMCG distribution — designed to deliver strong financial growth while
                        contributing to sustainable development in Sri Lanka. Underwritten by
                        Prestige Glamour Group, audited by KPMG.
                    </p>
                </div>

                <div className="mt-12 sm:mt-16 hairline !bg-white/70"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="py-6 sm:p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-white/70 lg:border-b-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4 text-[10px] sm:text-[11px]">Target IRR range</div>
                        <div className="font-display text-[44px] sm:text-[50px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            18 — 36<em className="serif-em text-accent text-[20px] sm:text-[24px]">%</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-2">Across all four models</div>
                    </div>
                    <div className="py-6 sm:p-6 lg:p-8 border-b sm:border-b-0 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-2 sm:mb-4 text-[10px] sm:text-[11px]">Minimum ticket</div>
                        <div className="font-display text-[44px] sm:text-[50px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            LKR 250<em className="serif-em text-accent text-[20px] sm:text-[24px]">k</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-2">Tier 01 entry</div>
                    </div>
                    <div className="py-6 sm:p-6 lg:p-8 border-b sm:border-b-0 sm:border-r lg:border-r border-white/70 sm:border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4 text-[10px] sm:text-[11px]">Years of compounding</div>
                        <div className="font-display text-[44px] sm:text-[50px] lg:text-[56px] leading-none tracking-tightish !text-white">
                            28<em className="serif-em text-accent text-[20px] sm:text-[24px]">.</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-2">Founded 1998</div>
                    </div>
                    <div className="py-6 sm:p-6 lg:p-8 sm:border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-2 sm:mb-4 text-[10px] sm:text-[11px]">Independent audit</div>
                        <div className="font-display text-[32px] sm:text-[36px] lg:text-[40px] leading-none tracking-tightish !text-white">
                            KPMG<em className="serif-em text-accent text-[18px] sm:text-[20px]"> SL</em>
                        </div>
                        <div className="text-[11px] sm:text-[12px] !text-white/75 mt-2">Quarterly disclosure</div>
                    </div>
                </div>
                <div className="hairline !bg-white/70 hidden sm:block"></div>
            </div>
        </section>
    );
}
