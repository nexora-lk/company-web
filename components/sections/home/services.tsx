import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Leaf from "@/components/ui/Leaf";

const services = [
    {
        href: '/services/plantation',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117630/plantation-home_dqqa3t.jpg',
        alt: 'Lush green plantation fields at sunrise',
        num: '01',
        title: 'Plantation',
        tag: 'Agriculture · Estates',
        body: 'We own and operate plantation estates across Sri Lanka\'s key agro-zones. Each estate is run by a regional manager and open to direct investor participation.',
    },
    {
        href: '/services/microfinance',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121976/micro-finace-home_jmdbyi.jpg',
        alt: 'Hands exchanging seeds — rural finance empowerment',
        num: '02',
        title: 'Micro Finance',
        tag: '11,200+ borrowers',
        body: 'Co-invest in our growing microfinance network across Sri Lanka. Build financial inclusion for 11,200+ active borrowers while earning steady returns.',
    },
    {
        href: '/services/gems',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117514/gem-home_rsp4p8.jpg',
        alt: 'Gemstones and jewels on display',
        num: '03',
        title: 'Gems',
        tag: 'Export · 14 countries',
        body: 'Gem mining and export operations serving 14 countries globally. High-value, short-cycle investments with direct access to distribution networks.',
    },
    {
        href: '/services/fmcg',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117605/fmcg-home_m25qif.jpg',
        alt: 'Fresh tropical fruits and herbal products',
        num: '04',
        title: 'FMCG',
        tag: 'Fresh Foods',
        body: 'PGG Fresh Foods processes and distributes value-added products from our own harvests — vertical integration from cultivation to retail across Sri Lanka.',
    },
    {
        href: '/services/ngo',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121247/ngo-home_natibv.jpg',
        alt: 'Community education and social development',
        num: '05',
        title: 'NGO Projects',
        tag: 'PGG Foundation',
        body: 'The PGG Foundation channels 5% of group profits into rural education, plantation programmes, and community development across 7 districts.',
    },
    {
        href: '/services/real-estate',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117535/realstate-home_dxn1qj.jpg',
        alt: 'Modern commercial real estate development',
        num: '06',
        title: 'Real Estate',
        tag: 'Land & Development',
        body: 'Deploy capital in land acquisition, value-add development, and sale. Fast capital cycles from strategic real estate projects.',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
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
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue">
                            <em className="serif-em text-sapphire-blue">Six Ways</em> to Invest With Us
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[440px] lg:text-right reveal">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            We operate six active investment vehicles across Sri Lanka. Each division is
                            independently managed, audited quarterly, and open to direct investor participation.
                        </p>
                    </div>
                </div>

                {/* Cards Grid: 1→2(sm)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 items-stretch">
                    {services.map((svc) => (
                        <a
                            key={svc.href}
                            href={svc.href}
                            className="svc-card group relative flex flex-col rounded-[22px] sm:rounded-[26px] overflow-hidden bg-surface border border-line shadow-sm transition-all duration-500 hover:shadow-[0_28px_70px_-40px_rgba(7,11,41,0.55)] hover:border-sapphire-blue/30 reveal"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Photo
                                    src={svc.img}
                                    alt={svc.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/45 via-midnight-blue/5 to-transparent" />

                                {/* number badge */}
                                <span className="absolute top-4 left-4 inline-flex items-center justify-center rounded-full bg-surface/90 backdrop-blur-sm px-3 py-1 font-display text-[13px] text-midnight-blue shadow-sm">
                                    {svc.num}
                                </span>

                                {/* sector tag */}
                                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-midnight-blue/65 backdrop-blur-sm px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
                                    {svc.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                                {/* gold accent that draws on hover */}
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-linear-to-r from-normal-gold to-light-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                                />

                                <h3 className="font-display text-[23px] sm:text-[25px] leading-tight tracking-tightish text-midnight-blue transition-colors duration-300 group-hover:text-sapphire-blue">
                                    {svc.title}
                                </h3>
                                <p className="mt-2.5 text-mute text-[13.5px] sm:text-[14px] leading-relaxed font-light line-clamp-3 flex-1">
                                    {svc.body}
                                </p>

                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-sapphire-blue text-[11.5px] font-semibold uppercase tracking-widest">
                                        Learn more
                                    </span>
                                    <span className="grid place-items-center w-9 h-9 rounded-full border border-line text-sapphire-blue transition-all duration-300 group-hover:bg-sapphire-blue group-hover:text-white group-hover:border-sapphire-blue">
                                        <ArrowIcon type="up-right" size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
