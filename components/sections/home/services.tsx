import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Leaf from "@/components/ui/Leaf";

const services = [
    {
        href: '/services/plantation',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117630/plantation-home_dqqa3t.jpg',
        alt: 'Lush green plantation fields at sunrise',
        h3: <>01 - Plantation</>,
        body: 'Invest in ginger, mango, and specialty crop cultivation across owned and leased estates. Quarterly returns from harvest cycles. Min. LKR 200,000 | Returns: 45-60% annually.',
        cta: 'Learn more',
    },
    {
        href: '/services/microfinance',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121976/micro-finace-home_jmdbyi.jpg',
        alt: 'Hands exchanging seeds — rural finance empowerment',
        h3: <>02 - Micro Finance</>,
        body: 'active borrowers. Build financial inclusion while earning returns. Co-invest in our growing microfinance network across Sri Lanka. 11,200+ borrowers.',
        cta: 'Learn more',
    },
    {
        href: '/services/gems',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117514/gem-home_rsp4p8.jpg',
        alt: 'Gemstones and jewels on display',
        h3: <>03 - Gems</>,
        body: 'Gem mining and export operations serving 14 countries globally. High-value, short-cycle investments. Direct access to distribution networks.',
        cta: 'Learn more',
    },
    {
        href: '/services/fmcg',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117605/fmcg-home_m25qif.jpg',
        alt: 'Fresh tropical fruits and herbal products',
        h3: <>04 - FMCG</>,
        body: 'Co-invest in our plantation-to-shelf FMCG division. Products made from our own estate harvests. Quarterly profit distributions. Min. LKR 500,000 | Returns: 40-55% annually.',
        cta: 'Learn more',
    },
    {
        href: '/services/ngo',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121247/ngo-home_natibv.jpg',
        alt: 'Community education and social development',
        h3: <>05 - NGO Projects</>,
        body: 'The PGG Foundation channels 5% of group profits into rural education, plantation programmes, and community development across 7 districts. Learn about our impact.',
        cta: 'Learn more',
    },
    {
        href: '/services/real-estate',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117535/realstate-home_dxn1qj.jpg',
        alt: 'Modern commercial real estate development',
        h3: <>06 - Real Estate</>,
        body: 'Invest in land acquisition, value-add development, and sale. Buy low, develop, sell high. Fast capital cycles. Min. LKR 500,000 | Returns: 40-55% annually.',
        cta: 'Learn more',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-10 xs:py-12 md:py-16 lg:py-20 xl:py-24 bg-surface">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
                    <div className="max-w-full lg:max-w-3xl reveal">
                        <SectionEyebrow 
                            index="04" 
                            label="Our Services" 
                            className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink">
                            Six Ways to Invest <em className="serif-em text-accent">With Us</em>
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[440px] lg:text-right reveal">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            We operate seven active investment vehicles across Sri Lanka. Each division is
                            independently managed, audited quarterly, and open to direct investor participation.
                        </p>
                    </div>
                </div>

                {/* Cards Grid: 1→2(sm)→3(md) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
                    {services.map((svc) => (
                        <a
                            key={svc.href}
                            href={svc.href}
                            className="svc-card group relative rounded-[20px] sm:rounded-[24px] overflow-hidden bg-surface min-h-[360px] xs:min-h-[400px] sm:min-h-[440px] md:min-h-[480px] shadow-sm hover:shadow-xl transition-all duration-700 reveal"
                        >
                            <Photo
                                src={svc.img}
                                alt={svc.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-transparent" />
                            <div className="relative h-full p-6 xs:p-8 sm:p-10 flex flex-col justify-between text-ondark">
                                <span className="num text-white/60 font-medium text-[10px] xs:text-[11px] uppercase tracking-widest">
                                    Service Tier
                                </span>
                                <div>
                                    <h3 className="font-display text-[28px] xs:text-[32px] sm:text-[36px] leading-[0.98] tracking-tightish">
                                        {svc.h3}
                                    </h3>
                                    <p className="mt-4 text-[13px] xs:text-[14px] text-ondark/80 leading-relaxed font-light max-w-[320px]">
                                        {svc.body}
                                    </p>
                                    <div className="mt-6 xs:mt-8 flex items-center gap-3 group/btn">
                                        <span className="text-[13px] xs:text-[14px] text-white font-semibold uppercase tracking-widest border-b border-white/20 pb-0.5 group-hover/btn:border-white transition-colors">
                                            {svc.cta}
                                        </span>
                                        <ArrowIcon size={20} className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
