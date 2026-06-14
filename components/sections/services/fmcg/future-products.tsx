import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

type FutureProduct = {
    title: string;
    status: string;
    desc: string;
    img: string;
    alt: string;
    badge: string;
    metric: string;
    progress: number;
};

const FUTURE_PRODUCTS: FutureProduct[] = [
    {
        title: 'Premium Ginger Wine',
        status: 'In final R&D',
        desc: 'A premium non-alcoholic herbal vintage crafted from high-potency ginger root grown on our own Horana estate. Double-fermented to retain its signature warm, spicy flavour and natural immunity-boosting properties.',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117566/Ginger_Wine_q3xurq.png',
        alt: 'Premium Ginger Wine bottle and processing',
        badge: 'R&D Phase',
        metric: 'Formula perfected',
        progress: 94,
    },
    {
        title: 'Mango Fruit Food',
        status: 'Nutrition-tested',
        desc: 'Zero-waste dehydrated tropical mango bites and nutrient-dense fruit leathers from our Wellawaya and Mundalama mango estates. Vacuum-packed at low temperatures to preserve dietary fibres, organic minerals, and natural flavour.',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117540/Mango_Food_jkxurb.png',
        alt: 'Slices of natural processed mango foods',
        badge: 'Formulation',
        metric: 'Nutrition lab tested',
        progress: 82,
    },
    {
        title: 'Natural Mango Syrup',
        status: 'Shelf-life stable',
        desc: '100% natural mango concentrate syrup from our own mango estates. Zero artificial stabilisers, sugars, or colorants. Positioned for retail mixers, food service, and export to gourmet markets.',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117581/Mango_Syrup_e9h6xa.png',
        alt: 'Amber colored natural mango syrup product',
        badge: 'Quality Testing',
        metric: 'Shelf-life stable',
        progress: 75,
    },
];

export default function FutureProductsSection() {
    return (
        <section id="future-products" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt border-t border-line">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16 reveal">
                    <div>
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow">Future Development</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish text-midnight-blue">
                            New products in <em className="serif-em text-sapphire-blue">development</em>
                            <br />
                            launching Q4 2026.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[440px] lg:max-w-[380px] lg:pb-1">
                        Our innovation kitchen and lab are continuously formulating clean-label,
                        high-value consumer products using Sri Lankan plantation harvests to capture more value locally.
                    </p>
                </div>

                {/* Products Grid: 1 col → 2 col (sm) → 3 col (md+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {FUTURE_PRODUCTS.map((product, idx) => (
                        <article
                            key={idx}
                            className="group relative flex flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] bg-surface border border-line/40 p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-24px_rgba(47,93,74,0.25)] hover:border-accent/20 reveal"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] sm:rounded-[16px] bg-bg/50">
                                <Photo
                                    src={product.img}
                                    alt={product.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 rounded-full bg-accent/90 px-2.5 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-medium tracking-wide text-ondark backdrop-blur-xs">
                                    {product.badge}
                                </span>
                                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full bg-surface/90 border border-line px-2.5 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-medium tracking-wide text-midnight-blue backdrop-blur-xs">
                                    Q4 2026
                                </span>
                            </div>

                            {/* Info */}
                            <div className="mt-5 sm:mt-6 flex flex-col flex-grow">
                                <h3 className="font-display text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.1] text-midnight-blue transition-colors duration-300 group-hover:text-sapphire-blue">
                                    {product.title}
                                </h3>
                                <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-accent">
                                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    {product.status}
                                </span>
                                <p className="mt-3 text-[13px] sm:text-[13.5px] md:text-[14px] leading-[1.6] text-mute">
                                    {product.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
