export default function WhyChooseUsSection() {
    return (
        <section className="py-24 lg:py-32 bg-surface">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="num">[ 06 ]</span>
                        <span className="hairline-strong w-30"></span>
                        <span className="eyebrow">Why Choose PGG Gems</span>
                    </div>
                    <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-4xl">
                        Trusted for <em className="serif-em">quality.</em>
                        <br />
                        Chosen for excellence.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            title: 'Authentic, Certified Gems',
                            description:
                                'Every gemstone is ethically sourced and comes with complete certification for quality and authenticity.',
                        },
                        {
                            title: 'Sri Lankan Heritage & Expertise',
                            description:
                                "We celebrate Sri Lanka's rich gem legacy with expert craftsmanship and industry knowledge spanning decades.",
                        },
                        {
                            title: 'Wide Range of Rare Gems',
                            description:
                                "From vibrant Sapphires to stunning Rubies, Alexandrites, and more—our collection showcases nature's finest creations.",
                        },
                        {
                            title: 'Transparent & Fair Pricing',
                            description:
                                'We believe in honest pricing with no hidden costs, ensuring complete transparency in every transaction.',
                        },
                        {
                            title: 'Ethical & Sustainable Sourcing',
                            description:
                                'Our mining operations follow ethical practices, ensuring every gemstone is sourced responsibly and sustainably.',
                        },
                        {
                            title: 'Expert Consultation & Support',
                            description:
                                'Our expert team is ready to guide you in selecting the perfect gemstone for your needs and requirements.',
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-bg rounded-[18px] p-8 border border-line hover:shadow-md hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                                <h3 className="font-display text-[18px] leading-tight text-ink">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-[13px] text-mute leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-accent2/40 rounded-[14px] p-6 border border-accent/20 text-center">
                        <div className="font-display text-[40px] text-accent mb-1 leading-none">
                            20+
                        </div>
                        <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                            Years Experience
                        </div>
                    </div>

                    <div className="bg-accent2/40 rounded-[14px] p-6 border border-accent/20 text-center">
                        <div className="font-display text-[40px] text-accent mb-1 leading-none">
                            18
                        </div>
                        <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                            Countries Served
                        </div>
                    </div>

                    <div className="bg-accent2/40 rounded-[14px] p-6 border border-accent/20 text-center">
                        <div className="font-display text-[40px] text-accent mb-1 leading-none">
                            100%
                        </div>
                        <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                            Certified Gems
                        </div>
                    </div>

                    <div className="bg-accent2/40 rounded-[14px] p-6 border border-accent/20 text-center">
                        <div className="font-display text-[40px] text-accent mb-1 leading-none">
                            GIA & NGJA
                        </div>
                        <div className="text-[11px] text-mute uppercase tracking-widest font-medium">
                            Certified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
