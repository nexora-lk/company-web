export default function ProductCategoriesSection() {
    const categories = [
        {
            title: 'Blue Sapphire',
            subtitle: "Sri Lanka's Flagship Gemstone",
            description:
                'The crown jewel of Sri Lankan gems. Our blue sapphires from Ratnapura deposits are renowned globally for exceptional deep blue hues, transparency, and investment-grade quality.',
            highlights: [
                'Cornflower to deep blue hues',
                'Exceptional transparency',
                'Investment-grade specimens',
                'GIA certified',
            ],
        },
        {
            title: 'Yellow, Pink & Padparadscha Sapphires',
            subtitle: 'A Spectrum of Sri Lankan Beauty',
            description:
                'Explore vibrant colored sapphires from golden yellows to delicate pinks, and the rare national gem Padparadscha. Popular in both contemporary and traditional jewelry designs.',
            highlights: [
                'Wide color range & saturation',
                'Perfect for engagement rings',
                'Contemporary & heirloom designs',
                'Certified authenticity',
            ],
        },
        {
            title: 'Rubies & Emeralds',
            subtitle: 'Rare Red & Green Treasures',
            description:
                "Exceptional rubies with 'pigeon's blood' red color and vibrant emeralds. These precious gemstones are among the most valuable, representing luxury and exclusivity.",
            highlights: [
                'Saturated red to deep crimson',
                'Vibrant green emeralds',
                'Exceptional clarity',
                'High investment value',
            ],
        },
        {
            title: 'Alexandrites & Garnets',
            subtitle: 'Color-Changing Wonders',
            description:
                'Fascinating alexandrites with color-changing properties (green to red transformation) and deep red garnets. Perfect for collectors and special occasions.',
            highlights: [
                'Dramatic color-change property',
                "Collector's favorites",
                'Rare & exclusive pieces',
                'Museum-quality specimens',
            ],
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-surface">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Header */}
                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <span className="num">[ 02 ]</span>
                        <span className="hairline-strong w-[80px] sm:w-[120px]" />
                        <span className="eyebrow">Our Collection</span>
                    </div>
                    <h2 className="font-display text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish max-w-full md:max-w-4xl">
                        Four <em className="serif-em">premier</em> gem categories
                    </h2>
                    <p className="mt-4 sm:mt-6 text-[13.5px] sm:text-[15px] text-mute leading-[1.7] max-w-full sm:max-w-md lg:max-w-xl">
                        Discover our curated selection of premium Sri Lankan gemstones, handpicked
                        and certified by nature's finest artistry.
                    </p>
                </div>

                {/* Category Grid: 1→2(md) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-linear-to-br from-surface to-bg rounded-[16px] sm:rounded-[18px] p-5 sm:p-7 lg:p-8 xl:p-10 border border-line hover:shadow-md hover:border-accent/40 transition-all duration-300"
                        >
                            <div className="mb-3 sm:mb-4">
                                <h3 className="font-display text-[22px] sm:text-[25px] md:text-[26px] lg:text-[28px] leading-tight text-ink">
                                    {category.title}
                                </h3>
                                <p className="text-[11px] sm:text-[12px] text-accent uppercase tracking-widest font-medium mt-1.5 sm:mt-2">
                                    {category.subtitle}
                                </p>
                            </div>

                            <p className="text-[13px] sm:text-[14px] text-mute leading-[1.7] mb-4 sm:mb-6">
                                {category.description}
                            </p>

                            <div className="space-y-1.5 sm:space-y-2">
                                {category.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-start gap-2 sm:gap-2.5">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span className="text-[12.5px] sm:text-[13px] text-ink leading-relaxed">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
