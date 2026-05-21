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
                    <span className="num">Investment Plans</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">For investors · 2026 Round</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Patient capital,
                        <br />
                        <em className="serif-em">island-grown</em>
                        <br />
                        returns.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        Four investment models across agriculture, micro-finance, real estate and
                        FMCG distribution — designed to deliver strong financial growth while
                        contributing to sustainable development in Sri Lanka. Underwritten by
                        Prestige Glamour Group, audited by KPMG.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">Target IRR range</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            18 — 36<em className="serif-em text-accent text-[24px]">%</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Across all four models</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Minimum ticket</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            LKR 250<em className="serif-em text-accent text-[24px]">k</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Tier 01 entry</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Years of compounding</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            28<em className="serif-em text-accent text-[24px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Founded 1998</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">Independent audit</div>
                        <div className="font-display text-[40px] leading-none tracking-tightish">
                            KPMG<em className="serif-em text-accent text-[20px]"> SL</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Quarterly disclosure</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
