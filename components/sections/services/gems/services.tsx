import { gemServices, heritageInfo } from '@/data/gems';

export default function GemServicesSection() {
    return (
        <section className="py-24 lg:py-32 bg-surface">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="num">[ 04 ]</span>
                        <span className="hairline-strong w-30"></span>
                        <span className="eyebrow">Our Services</span>
                    </div>
                    <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-4xl">
                        Complete <em className="serif-em">gem trading</em> solutions
                    </h2>
                    <p className="mt-6 text-[15px] text-mute leading-[1.7] max-w-85">
                        From sourcing and certification to cutting, polishing, and worldwide
                        shipping— complete gemstone services for collectors, jewelers, and
                        investors.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {gemServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-bg rounded-[18px] p-8 border border-line hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-display text-[20px] leading-tight text-ink pr-2">
                                    {service.title}
                                </h3>
                                <span className="num text-accent/30 shrink-0">0{idx + 1}</span>
                            </div>

                            <p className="text-[13px] text-mute leading-[1.6] mb-4">
                                {service.description}
                            </p>

                            <ul className="space-y-1.5">
                                {service.details.slice(0, 3).map((detail, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-[12px] text-ink"
                                    >
                                        <span className="inline-block w-1 h-1 rounded-full bg-accent mt-1 shrink-0"></span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-linear-to-r from-ink to-ink/95 text-ondark rounded-[20px] p-10 lg:p-14">
                    <div className="max-w-4xl">
                        <h3 className="font-display text-[32px] lg:text-[44px] leading-[1.1] tracking-tightish mb-4">
                            {heritageInfo.title}
                        </h3>
                        <p className="text-[14px] leading-[1.7] text-ondark/80 mb-6 max-w-2xl">
                            {heritageInfo.history}
                        </p>
                        <div className="pt-6 border-t border-ondark/20">
                            <p className="text-[13px] text-ondark/70">
                                Every gemstone we offer carries this legacy forward—authentic,
                                certified, and responsibly sourced from Sri Lanka's treasure lands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
