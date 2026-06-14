import Leaf from "@/components/ui/Leaf";
import Photo from "@/components/ui/Photo";
import { Check } from "lucide-react";

export default function ProductCategoriesSection() {
    const categories = [
        {
            title: 'Blue Sapphire',
            subtitle: "Sri Lanka's Flagship Gemstone",
            image: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781433148/Blue-Sapphire_mniify.jpg',
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
            image: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781433148/Yellow_-Pink-_-Padparadscha-Sapphires_yblg9w.jpg',
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
            image: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781433153/Rubies-_-Emeralds_iw2jjf.jpg',
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
            image: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781433149/Alexandrites-_-Garnets_zmuhol.jpg',
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
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Header */}
                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 reveal">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-[80px] sm:w-[120px]" />
                        <span className="eyebrow">Our Collection</span>
                    </div>
                    <h2 className="font-display text-midnight-blue text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish max-w-full md:max-w-4xl">
                        Four <em className="serif-em text-sapphire-blue">premier</em> gem categories
                    </h2>
                    <p className="mt-4 sm:mt-6 text-[13.5px] sm:text-[15px] text-mute leading-[1.7] max-w-full sm:max-w-md lg:max-w-xl">
                        Discover our curated selection of premium Sri Lankan gemstones, handpicked
                        and certified by nature&#39;s finest artistry.
                    </p>
                </div>

                {/* Category Grid: 1→2(md) — editorial image-top cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    {categories.map((category, idx) => (
                        <article
                            key={idx}
                            className="group reveal flex flex-col overflow-hidden rounded-[16px] sm:rounded-[18px] bg-surface border border-line transition-all duration-300 hover:-translate-y-1 hover:border-sapphire-blue/30 hover:shadow-[0_24px_50px_-30px_rgba(7,11,41,0.45)]"
                        >
                            {/* image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Photo
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-midnight-blue/35 to-transparent" />
                                <span className="absolute top-3 left-3 grid place-items-center w-8 h-8 rounded-full bg-midnight-blue/70 backdrop-blur-sm font-display text-[12px] text-ondark ring-1 ring-white/15">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* content */}
                            <div className="relative flex flex-col flex-grow p-5 sm:p-6 lg:p-7">
                                {/* accent bar grows on hover */}
                                <span aria-hidden className="absolute left-0 top-0 h-0.5 w-full bg-sapphire-blue origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                                <p className="text-[11px] sm:text-[12px] text-accent uppercase tracking-widest font-medium mb-1.5">
                                    {category.subtitle}
                                </p>
                                <h3 className="font-display text-[22px] sm:text-[24px] lg:text-[26px] leading-tight text-midnight-blue">
                                    {category.title}
                                </h3>

                                <p className="text-[13px] sm:text-[14px] text-mute leading-[1.7] mt-3 mb-5">
                                    {category.description}
                                </p>

                                <div className="mt-auto grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-line">
                                    {category.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="grid place-items-center w-4 h-4 rounded-full bg-accent/10 shrink-0">
                                                <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                                            </span>
                                            <span className="text-[12.5px] sm:text-[13px] text-ink/85 leading-snug">
                                                {highlight}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
