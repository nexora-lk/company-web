import Leaf from "@/components/ui/Leaf";

export default function ModelsSection() {
    return (
        <section id="models" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-surface">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 reveal">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Operating Models</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            How investor <em className="serif-em">capital</em>
                            <br />
                            is deployed.

                        </h2>
                    </div>
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-80 md:max-w-85">
                        We don&#39;t take your capital and hope for results. We deploy it into seven proven operational models: agricultural production, real estate development, secured lending,
                        commodity export, retail distribution, securities trading, and education. Each model is designed, tested, and optimized for consistent returns to our investors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
                    {[
                        {
                            num: '01',
                            title: 'Conventional Method',
                            desc: 'Community-based or in-house banking.',
                        },
                        {
                            num: '02',
                            title: 'Bank Partnership Model',
                            desc: 'The bank acts as the lender and the MFI acts as an agent which takes care of work related to supervision, recovery and credit monitoring.',
                        },
                        {
                            num: '03',
                            title: 'Banking Correspondents',
                            desc: 'MFIs are allowed to collect the savings from the targeted population on behalf of the bank.',
                        },
                        {
                            num: '04',
                            title: 'Service Company Model',
                            desc: 'Bank forms its own MFI perhaps as an NBFC, and then it works together with that particular MFI to provide loans and other services.',
                        },
                    ].map((model) => (
                        <div
                            key={model.num}
                            className="reveal info-card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-350"
                        >
                            <div className="num text-accent! mb-4 sm:mb-6">{model.num}</div>
                            <h3 className="font-display text-[22px] sm:text-[24px] md:text-[26px] leading-tight mb-3">
                                {model.title}
                            </h3>
                            <p className="text-[13px] sm:text-[14px] text-mute leading-[1.6]">
                                {model.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
