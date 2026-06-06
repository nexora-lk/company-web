import Leaf from "@/components/ui/Leaf";

export default function CultureValues() {
    return (
        <>
            {/* ─── Culture Values ─────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 md:py-20 lg:py-20 xl:py-24 bg-surface">
                <Leaf variant="tr" />
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="reveal">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Why join us</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-8 sm:mb-10 lg:mb-12">
                            A place to <em className="serif-em">grow</em>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                num: '01',
                                title: 'Real Capital, Real Impact',
                                desc: "You're not pushing papers. You\'re managing capital that generates 60% annual returns for 3,200+ investors. Plantation operations, real estate development, gems exports, microfinance — every role impacts real business outcomes.",
                            },
                            {
                                num: '02',
                                title: 'Six Career Paths',
                                desc: "Plantation manager, real estate coordinator, microfinance officer, gem trader, FMCG operator, share market analyst, or education manager. Pick your division. Grow your expertise. One company, multiple specialties.",
                            },
                            {
                                num: '03',
                                title: 'Growth in a Growing Company',
                                desc: "14 years of operations. 800+ employees. 23 branches. 3,200+ investors. We\'re scaling. Leadership opportunities exist across all levels. From coordinator to manager to division head — clear progression.",
                            },
                        ].map((v) => (
                            <div
                                key={v.num}
                                className="reveal info-card p-6 sm:p-8 transition-transform duration-350 hover:-translate-y-1"
                            >
                                <div className="num text-accent! mb-2 sm:mb-3 text-[10px] sm:text-[11px]">{v.num}</div>
                                <h3 className="font-display text-[18px] sm:text-[20px] leading-tight mb-2 sm:mb-3">{v.title}</h3>
                                <p className="text-mute text-[13px] sm:text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
