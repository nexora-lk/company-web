import Leaf from "@/components/ui/Leaf";

const VALUES = [
    {
        num: '01',
        title: 'Real Capital, Real Impact',
        desc: "You're not pushing papers. You're managing capital that generates 60% annual returns for 3,200+ investors. Plantation operations, real estate development, gems exports, microfinance — every role impacts real business outcomes.",
    },
    {
        num: '02',
        title: 'Six Career Paths',
        desc: "Plantation manager, real estate coordinator, microfinance officer, gem trader, FMCG operator, share market analyst, or education manager. Pick your division. Grow your expertise. One company, multiple specialties.",
    },
    {
        num: '03',
        title: 'Growth in a Growing Company',
        desc: "14 years of operations. 800+ employees. 23 branches. 3,200+ investors. We're scaling. Leadership opportunities exist across all levels. From coordinator to manager to division head — clear progression.",
    },
];

export default function CultureValues() {
    return (
        <section className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="reveal">
                    <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                        <span className="eyebrow text-[10px] xs:text-xs">Why join us</span>
                    </div>
                    <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight text-midnight-blue tracking-tightish mt-2 sm:mt-3">
                        A place to <em className="serif-em text-sapphire-blue">grow</em>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12">
                    {VALUES.map((v) => (
                        <div
                            key={v.num}
                            className="group reveal info-card relative overflow-hidden p-6 sm:p-8 transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(7,11,41,0.5)]"
                        >
                            {/* top accent bar — grows on hover */}
                            <span aria-hidden className="absolute left-0 top-0 h-[2px] w-full bg-normal-gold origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                            {/* ghost index */}
                            <span aria-hidden className="absolute -top-3 right-3 font-display text-[68px] leading-none text-sapphire-blue/[0.06] select-none">{v.num}</span>

                            <div className="num text-accent! mb-2 sm:mb-3 text-[10px] sm:text-[11px]">{v.num}</div>
                            <h3 className="font-display text-[18px] sm:text-[20px] leading-tight mb-2 sm:mb-3">{v.title}</h3>
                            <p className="text-mute text-[13px] sm:text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
