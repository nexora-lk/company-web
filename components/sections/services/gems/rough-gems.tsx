export default function RoughGemsSection() {
    return (
        <section className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 03 ]</span>
                            <span className="hairline-strong w-30"></span>
                            <span className="eyebrow">Rough Gems</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[56px] leading-none tracking-tightish mb-6">
                            Pure. Untouched. <em className="serif-em">Full of Potential.</em>
                        </h2>
                        <p className="text-[15px] text-mute leading-[1.8] mb-8 max-w-85">
                            Explore the natural beauty of Sri Lanka's finest rough gemstones,
                            sourced directly from trusted mining regions. We handpick each rough
                            stone for its clarity, color, and cutting potential—ensuring only the
                            best reach our customers.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 mb-10">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-accent text-[14px] font-semibold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-[14px] mb-1">
                                        Direct-from-Mine Sourcing
                                    </h4>
                                    <p className="text-[13px] text-mute leading-[1.6]">
                                        We source high-quality rough stones directly from trusted
                                        miners, ensuring transparency and reliability in every
                                        purchase.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-accent text-[14px] font-semibold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-[14px] mb-1">
                                        High-Quality Raw Stones
                                    </h4>
                                    <p className="text-[13px] text-mute leading-[1.6]">
                                        Ideal for cutters, jewellers, and investors looking for
                                        exceptional value and endless possibilities in their
                                        gemstone business.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-accent text-[14px] font-semibold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-[14px] mb-1">
                                        Investment Grade Specimens
                                    </h4>
                                    <p className="text-[13px] text-mute leading-[1.6]">
                                        Each rough stone carries significant potential for cutting,
                                        trading, and investment purposes with complete traceability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            <div className="bg-white rounded-[14px] p-5 border border-line">
                                <div className="font-display text-[28px] text-accent leading-none mb-2">
                                    100%
                                </div>
                                <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                                    Uncut & Raw
                                </div>
                            </div>
                            <div className="bg-white rounded-[14px] p-5 border border-line">
                                <div className="font-display text-[28px] text-accent leading-none mb-2">
                                    Direct
                                </div>
                                <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                                    From Miners
                                </div>
                            </div>
                            <div className="bg-white rounded-[14px] p-5 border border-line">
                                <div className="font-display text-[28px] text-accent leading-none mb-2">
                                    Verified
                                </div>
                                <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                                    Quality
                                </div>
                            </div>
                        </div>

                        <button className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-ondark font-semibold uppercase text-[12px] tracking-widest rounded-lg hover:shadow-lg transition-all">
                            Explore Rough Gems
                            <span>→</span>
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="bg-surface rounded-[20px] p-8 border border-line mb-6">
                            <h3 className="font-display text-[24px] text-ink mb-6">
                                Our <em className="serif-em">Sourcing</em> Process
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        step: '01',
                                        title: 'Source from Trusted Miners',
                                        description:
                                            'We partner with verified, licensed mining operations in Sri Lanka with years of experience and ethical practices.',
                                    },
                                    {
                                        step: '02',
                                        title: 'Quality Inspection',
                                        description:
                                            'Each rough stone is inspected for clarity, color, size, and cutting potential before selection.',
                                    },
                                    {
                                        step: '03',
                                        title: 'Documentation & Testing',
                                        description:
                                            'Complete documentation with testing and verification to ensure authenticity and origin.',
                                    },
                                    {
                                        step: '04',
                                        title: 'Secure Packaging & Delivery',
                                        description:
                                            'Safe, insured packaging with worldwide shipping to ensure your rough gems arrive in perfect condition.',
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-4 pb-6 border-b border-line last:border-0 last:pb-0"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="font-display text-accent font-semibold text-[14px]">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-ink text-[14px] mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-[12px] text-mute leading-normal">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who It's For */}
                        <div className="bg-linear-to-r from-ink to-ink/95 text-ondark rounded-[20px] p-8">
                            <h3 className="font-display text-[24px] mb-6">Perfect For</h3>

                            <div className="space-y-3">
                                {[
                                    'Professional Gemstone Cutters',
                                    'Jewellery Manufacturers & Designers',
                                    'Gem & Jewellery Traders',
                                    'Investment Portfolio Builders',
                                    'Collectors & Enthusiasts',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                                        <span className="text-[13px] text-ondark/90 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-ondark/20">
                                <p className="text-[12px] text-ondark/70 leading-[1.6]">
                                    "Whether you're a cutter, jeweller, or investor, our rough gems
                                    offer exceptional value and endless possibilities."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
