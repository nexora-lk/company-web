export default function WhyChooseUsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-surface">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-[80px] sm:w-[120px]" />
                        <span className="eyebrow">Why Choose PGG Gems</span>
                    </div>
                    <h2 className="font-display text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish max-w-full md:max-w-4xl">
                        Why investors <em className="serif-em">choose</em>
                        <br />
                        PGG Gems.
                    </h2>
                </div>

                {/* Reasons Grid: 1→2(sm)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
                    {[
                        {
                            title: 'Authentic, Certified Gems',
                            description: 'Every gemstone is ethically sourced and comes with complete certification for quality and authenticity.',
                        },
                        {
                            title: 'Sri Lankan Heritage & Expertise',
                            description: "We celebrate Sri Lanka's rich gem legacy with expert craftsmanship and industry knowledge spanning decades.",
                        },
                        {
                            title: 'Wide Range of Rare Gems',
                            description: "From vibrant Sapphires to stunning Rubies, Alexandrites, and more—our collection showcases nature's finest creations.",
                        },
                        {
                            title: 'Transparent & Fair Pricing',
                            description: 'We believe in honest pricing with no hidden costs, ensuring complete transparency in every transaction.',
                        },
                        {
                            title: 'Ethical & Sustainable Sourcing',
                            description: 'Our mining operations follow ethical practices, ensuring every gemstone is sourced responsibly and sustainably.',
                        },
                        {
                            title: 'Expert Consultation & Support',
                            description: 'Our expert team is ready to guide you in selecting the perfect gemstone for your needs and requirements.',
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-bg rounded-[16px] sm:rounded-[18px] p-5 sm:p-6 lg:p-8 border border-line hover:shadow-md hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <span className="inline-block w-2 h-2 rounded-full bg-accent shrink-0" />
                                <h3 className="font-display text-[16px] sm:text-[17px] md:text-[18px] leading-tight text-ink">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators: 2→4(lg) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {[
                        { val: '20+', label: 'Years Experience' },
                        { val: '18', label: 'Countries Served' },
                        { val: '100%', label: 'Certified Gems' },
                        { val: 'GIA & NGJA', label: 'Certified' },
                    ].map((t, i) => (
                        <div key={i} className="bg-accent2/40 rounded-[12px] sm:rounded-[14px] p-4 sm:p-5 lg:p-6 border border-accent/20 text-center">
                            <div className="font-display text-[28px] sm:text-[34px] lg:text-[40px] text-accent mb-1 leading-none">
                                {t.val}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-mute uppercase tracking-widest font-medium">
                                {t.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
