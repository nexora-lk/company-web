import Leaf from "@/components/ui/Leaf";
import { Check, ArrowRight } from "lucide-react";

export default function RoughGemsSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">

                    {/* Content */}
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 reveal">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow">Rough Gems</span>
                        </div>

                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[56px] leading-none tracking-tightish mb-4 sm:mb-6 text-midnight-blue">
                            Pure. Untouched. <em className="serif-em text-sapphire-blue">Full of Potential.</em>
                        </h2>

                        <p className="text-[14px] sm:text-[15px] text-mute leading-[1.8] mb-6 sm:mb-8 max-w-full sm:max-w-[500px] lg:max-w-none">
                            Explore the natural beauty of Sri Lanka&#39;s finest rough gemstones,
                            sourced directly from trusted mining regions. We handpick each rough
                            stone for its clarity, color, and cutting potential—ensuring only the
                            best reach our customers.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 reveal">
                            {[
                                {
                                    title: 'Direct-from-Mine Sourcing',
                                    desc: 'We source high-quality rough stones directly from trusted miners, ensuring transparency and reliability in every purchase.',
                                },
                                {
                                    title: 'High-Quality Raw Stones',
                                    desc: 'Ideal for cutters, jewellers, and investors looking for exceptional value and endless possibilities in their gemstone business.',
                                },
                                {
                                    title: 'Investment Grade Specimens',
                                    desc: 'Each rough stone carries significant potential for cutting, trading, and investment purposes with complete traceability.',
                                },
                            ].map((b, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4 reveal">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                        <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-ink text-[13.5px] sm:text-[14px] mb-1">{b.title}</h4>
                                        <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.6]">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 reveal">
                            {[
                                { val: '100%', label: 'Uncut & Raw' },
                                { val: 'Direct', label: 'From Miners' },
                                { val: 'Verified', label: 'Quality' },
                            ].map((s, i) => (
                                <div key={i} className="bg-surface rounded-[12px] sm:rounded-[14px] p-3 sm:p-5 border border-line transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 reveal">
                                    <div className="font-display text-[20px] sm:text-[24px] md:text-[28px] text-accent leading-none mb-1 sm:mb-2">
                                        {s.val}
                                    </div>
                                    <div className="text-[9px] sm:text-[11px] text-mute uppercase tracking-widest font-medium">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="group inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-ondark font-semibold uppercase text-[11px] sm:text-[12px] tracking-widest rounded-lg hover:shadow-lg transition-all reveal">
                            Explore Rough Gems
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 reveal">
                        {/* Sourcing Process */}
                        <div className="bg-surface rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 lg:p-8 border border-line mb-4 sm:mb-6 reveal">
                            <h3 className="font-display text-[20px] sm:text-[22px] md:text-[24px] text-ink mb-5 sm:mb-6">
                                Our <em className="serif-em">Sourcing</em> Process
                            </h3>
                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    { step: '01', title: 'Source from Trusted Miners', description: 'We partner with verified, licensed mining operations in Sri Lanka with years of experience and ethical practices.' },
                                    { step: '02', title: 'Quality Inspection', description: 'Each rough stone is inspected for clarity, color, size, and cutting potential before selection.' },
                                    { step: '03', title: 'Documentation & Testing', description: 'Complete documentation with testing and verification to ensure authenticity and origin.' },
                                    { step: '04', title: 'Secure Packaging & Delivery', description: 'Safe, insured packaging with worldwide shipping to ensure your rough gems arrive in perfect condition.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-line last:border-0 last:pb-0 reveal">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="font-display text-accent font-semibold text-[13px] sm:text-[14px]">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-ink text-[13.5px] sm:text-[14px] mb-1">{item.title}</h4>
                                            <p className="text-[11.5px] sm:text-[12px] text-mute leading-normal">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Perfect For */}
                        <div className="relative overflow-hidden bg-linear-to-br from-royal-blue to-midnight-blue text-ondark rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 lg:p-8">
                            <span aria-hidden className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-normal-gold/10 rounded-full blur-3xl" />
                            <h3 className="font-display text-[20px] sm:text-[22px] md:text-[24px] mb-4 sm:mb-6 relative">Perfect For</h3>
                            <div className="space-y-2 sm:space-y-3 relative">
                                {[
                                    'Professional Gemstone Cutters',
                                    'Jewellery Manufacturers & Designers',
                                    'Gem & Jewellery Traders',
                                    'Investment Portfolio Builders',
                                    'Collectors & Enthusiasts',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                                        <span className="inline-block w-2 h-2 rounded-full bg-normal-gold shrink-0" />
                                        <span className="text-[12.5px] sm:text-[13px] text-ondark/90 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-ondark/20 relative">
                                <p className="text-[11.5px] sm:text-[12px] text-ondark/70 leading-[1.6]">
                                    &ldquo;Whether you&apos;re a cutter, jeweller, or investor, our rough gems
                                    offer exceptional value and endless possibilities.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
