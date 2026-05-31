import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

const services = [
    {
        href: '/services/plantation',
        num: '01 — Plantation',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117630/plantation-home_dqqa3t.jpg',
        alt: 'Lush green plantation fields at sunrise',
        h3: <>Cultivating <em className="serif-em">high-value</em> crops.</>,
        body: 'Cultivating high-value crops like ginger, banana, and mango across Sri Lanka for local and export markets.',
        cta: 'Explore the estates',
    },
    {
        href: '/services/microfinance',
        num: '02 — Micro Finance',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121976/micro-finace-home_jmdbyi.jpg',
        alt: 'Hands exchanging seeds — rural finance empowerment',
        h3: <>Inclusive finance for <em className="serif-em">rural</em>{' '}growth.</>,
        body: 'Providing inclusive financial support for rural entrepreneurs and small-scale farmers through tailored loan products.',
        cta: 'Learn more',
    },
    {
        href: '/services/gems',
        num: '03 — Gem & Jewelry',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117514/gem-home_rsp4p8.jpg',
        alt: 'Gemstones and jewels on display',
        h3: <>Certified Sri Lankan <em className="serif-em">sapphires</em>.</>,
        body: 'Certified gem trading and export business offering authentic Sri Lankan gemstones to global markets.',
        cta: 'View collections',
    },
    {
        href: '/services/fmcg',
        num: '04 — FMCG',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117605/fmcg-home_m25qif.jpg',
        alt: 'Fresh tropical fruits and herbal products',
        h3: <>PGG <em className="serif-em">Fresh</em> Foods.</>,
        body: 'Processing and distributing value-added fresh fruits and herbal products under the PGG Fresh Foods brand.',
        cta: 'Explore products',
    },
    {
        href: '/services/ngo',
        num: '05 — NGO Projects',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780121247/ngo-home_natibv.jpg',
        alt: 'Community education and social development',
        h3: <>Driving <em className="serif-em">social</em> change.</>,
        body: 'Driving social change through education, rehabilitation, and income-generation projects funded by global partners.',
        cta: 'View impact',
    },
    {
        href: '/services/real-estate',
        num: '06 — Real Estate',
        img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117535/realstate-home_dxn1qj.jpg',
        alt: 'Modern commercial real estate development',
        h3: <>Agricultural <em className="serif-em">estate</em> value.</>,
        body: 'Developing and managing commercial agricultural lands and estate projects to increase asset value.',
        cta: 'View projects',
    },
];

export default function ServicesSection() {
    return (
        <section className="pb-20 sm:pb-24 md:pb-28 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
                    <div>
                        <SectionEyebrow index="04" label="Our Services" />
                        <h2 className="font-display text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tightish max-w-full md:max-w-[820px]">
                            Our Diverse Portfolio of <em className="serif-em">Services</em>
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute max-w-full sm:max-w-[440px] leading-[1.7] lg:text-right">
                        We operate across multiple high-impact sectors delivering value,
                        sustainability, and innovation to both local and global markets. From
                        organic plantations and inclusive microfinance to luxury gem exports and
                        FMCG distribution, our services are designed to uplift communities and
                        enhance Sri Lanka&apos;s economic footprint.
                    </p>
                </div>

                {/* Cards Grid: 1→2(sm)→3(md) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                    {services.map((svc) => (
                        <a
                            key={svc.href}
                            href={svc.href}
                            className="svc-card group relative rounded-[16px] sm:rounded-[20px] overflow-hidden bg-surface min-h-[340px] sm:min-h-[380px] md:min-h-[420px]"
                        >
                            <Photo
                                src={svc.img}
                                alt={svc.alt}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-transparent" />
                            <div className="relative h-full p-5 sm:p-6 md:p-8 flex flex-col justify-between text-ondark min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
                                <span className="num text-white font-medium drop-shadow-sm text-[10px] sm:text-[11px]">
                                    {svc.num}
                                </span>
                                <div>
                                    <h3 className="font-display text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] leading-[0.98] tracking-tightish">
                                        {svc.h3}
                                    </h3>
                                    <p className="mt-3 sm:mt-4 text-[12.5px] sm:text-[13px] text-ondark/80 leading-[1.6]">
                                        {svc.body}
                                    </p>
                                    <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
                                        <span className="text-[13px] sm:text-[14px] text-white font-semibold drop-shadow-sm">
                                            {svc.cta}
                                        </span>
                                        <span className="arrow text-lg sm:text-xl text-white">→</span>
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
