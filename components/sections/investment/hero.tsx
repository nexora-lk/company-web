import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/investment-hero.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink !text-white/80 hover:!text-white">
                        [ Home ]
                    </Link>
                    <span className="num !text-white/60">/</span>
                    <span className="num !text-white/80">Investment Plans</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2 !bg-white/20"></span>
                    <span className="eyebrow !text-white/70">For investors · 2026 Round</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish !text-white">
                        Patient capital,
                        <br />
                        <em className="serif-em">island-grown</em>
                        <br />
                        returns.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 !text-white/85 text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        Four investment models across agriculture, micro-finance, real estate and
                        FMCG distribution — designed to deliver strong financial growth while
                        contributing to sustainable development in Sri Lanka. Underwritten by
                        Prestige Glamour Group, audited by KPMG.
                    </p>
                </div>

                <div className="mt-16 hairline !bg-white/70"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-white/70">
                        <div className="num !text-white/90 mb-4">Target IRR range</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            18 — 36<em className="serif-em text-accent text-[24px]">%</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Across all four models</div>
                    </div>
                    <div className="p-8 lg:border-r border-white/70">
                        <div className="num !text-white/90 mb-4">Minimum ticket</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            LKR 250<em className="serif-em text-accent text-[24px]">k</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Tier 01 entry</div>
                    </div>
                    <div className="p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-4">Years of compounding</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish !text-white">
                            28<em className="serif-em text-accent text-[24px]">.</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Founded 1998</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num !text-white/90 mb-4">Independent audit</div>
                        <div className="font-display text-[40px] leading-none tracking-tightish !text-white">
                            KPMG<em className="serif-em text-accent text-[20px]"> SL</em>
                        </div>
                        <div className="text-[12px] !text-white/75 mt-2">Quarterly disclosure</div>
                    </div>
                </div>
                <div className="hairline !bg-white/70"></div>
            </div>
        </section>
    );
}
