import { gemServices, heritageInfo } from '@/data/gems';
import Leaf from "@/components/ui/Leaf";
import { Check } from "lucide-react";

export default function GemServicesSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Header */}
                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 reveal">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-[80px] sm:w-[120px]" />
                        <span className="eyebrow">Our Services</span>
                    </div>
                    <h2 className="font-display text-midnight-blue text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish max-w-full md:max-w-4xl">
                        Complete <em className="serif-em text-sapphire-blue">gem trading</em> solutions
                    </h2>
                    <p className="mt-4 sm:mt-6 text-[13.5px] sm:text-[15px] text-mute leading-[1.7] max-w-full sm:max-w-md lg:max-w-xl">
                        From sourcing and certification to cutting, polishing, and worldwide
                        shipping— complete gemstone services for collectors, jewelers, and
                        partners.
                    </p>
                </div>

                {/* Services Grid: 1→2(md)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
                    {gemServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="group reveal relative overflow-hidden bg-surface rounded-[16px] sm:rounded-[18px] p-5 sm:p-6 lg:p-8 border border-line transition-all duration-300 hover:-translate-y-1 hover:border-sapphire-blue/30 hover:shadow-[0_22px_46px_-30px_rgba(7,11,41,0.45)]"
                        >
                            <span aria-hidden className="absolute left-0 top-0 h-0.5 w-full bg-sapphire-blue origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <h3 className="font-display text-[18px] sm:text-[19px] md:text-[20px] leading-tight text-midnight-blue pr-2">
                                    {service.title}
                                </h3>
                                <span className="num text-accent shrink-0">0{idx + 1}</span>
                            </div>

                            <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.6] mb-3 sm:mb-4">
                                {service.description}
                            </p>

                            <ul className="space-y-1.5">
                                {service.details.slice(0, 3).map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-ink/85">
                                        <span className="grid place-items-center w-3.5 h-3.5 rounded-full bg-accent/10 shrink-0 mt-0.5">
                                            <Check className="w-2 h-2 text-accent" strokeWidth={3.5} />
                                        </span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Heritage Banner */}
                <div className="relative overflow-hidden bg-linear-to-br from-sapphire-blue via-royal-blue to-midnight-blue text-ondark rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
                    <span aria-hidden className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 bg-normal-gold/10 rounded-full blur-3xl" />
                    <div className="max-w-4xl relative">
                        <h3 className="font-display text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.1] tracking-tightish mb-3 sm:mb-4">
                            {heritageInfo.title}
                        </h3>
                        <p className="text-[13px] sm:text-[14px] leading-[1.7] text-ondark/80 mb-4 sm:mb-6 max-w-2xl">
                            {heritageInfo.history}
                        </p>
                        <div className="pt-4 sm:pt-6 border-t border-ondark/20">
                            <p className="text-[12px] sm:text-[13px] text-ondark/70">
                                Every gemstone we offer carries this legacy forward—authentic,
                                certified, and responsibly sourced from Sri Lanka&apos;s treasure lands.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
