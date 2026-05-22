import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

export default function ServicesSection() {
    return (
        <section className="pb-28 lg:pb-40">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div>
                        <SectionEyebrow index="04" label="Our Services" />
                        <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Our Diverse Portfolio of <em className="serif-em">Services</em>
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute max-w-[440px] leading-[1.7] lg:text-right">
                        We operate across multiple high-impact sectors delivering value,
                        sustainability, and innovation to both local and global markets. From
                        organic plantations and inclusive microfinance to luxury gem exports and
                        FMCG distribution, our services are designed to uplift communities and
                        enhance Sri Lanka&apos;s economic footprint.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    {/* ── Plantation — hero card ── */}
                    <a
                        href="/services/plantation"
                        className="svc-card group col-span-12 lg:col-span-7 relative rounded-[20px] overflow-hidden bg-surface min-h-[440px]"
                    >
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Lush green plantation fields at sunrise"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                        <div className="relative h-full p-8 lg:p-10 flex flex-col justify-between text-ondark min-h-[440px]">
                            <div className="flex items-center justify-between">
                                <span className="num text-ondark/80!">01 — Plantation</span>
                                <span className="num text-ondark/80!">Ginger · Banana · Mango</span>
                            </div>
                            <div>
                                <h3 className="font-display text-[48px] lg:text-[72px] leading-[0.95] tracking-tightish max-w-[640px]">
                                    Cultivating <em className="serif-em">high-value</em>
                                    <br />
                                    crops across the island.
                                </h3>
                                <p className="mt-4 text-[14px] text-ondark/80 max-w-[480px] leading-[1.65]">
                                    Cultivating high-value crops like ginger, banana, and mango
                                    across Sri Lanka for local and export markets.
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="text-[14px] text-ondark/85">
                                        Explore the estates
                                    </span>
                                    <span className="arrow text-xl">→</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* ── Micro Finance + Gem & Jewelry — stacked ── */}
                    <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-5 min-h-[440px]">
                        <a
                            href="/services/microfinance"
                            className="svc-card group relative rounded-[20px] overflow-hidden bg-surface"
                        >
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Hands exchanging seeds — rural finance empowerment"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent"></div>
                            <div className="relative h-full p-7 flex flex-col justify-between text-ondark">
                                <span className="num text-ondark/80!">02 — Micro Finance</span>
                                <div>
                                    <h3 className="font-display text-[34px] leading-[0.98] tracking-tightish">
                                        Inclusive finance for <em className="serif-em">rural</em>{' '}
                                        growth.
                                    </h3>
                                    <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                        Providing inclusive financial support for rural
                                        entrepreneurs and small-scale farmers through tailored loan
                                        products.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a
                            href="/services/gems"
                            className="svc-card group relative rounded-[20px] overflow-hidden bg-surface"
                        >
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Gemstones and jewels on display"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent"></div>
                            <div className="relative h-full p-7 flex flex-col justify-between text-ondark">
                                <span className="num text-ondark/80!">03 — Gem &amp; Jewelry</span>
                                <div>
                                    <h3 className="font-display text-[34px] leading-[0.98] tracking-tightish">
                                        Certified Sri Lankan <em className="serif-em">sapphires</em>
                                        .
                                    </h3>
                                    <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                        Certified gem trading and export business offering authentic
                                        Sri Lankan gemstones to global markets.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* ── FMCG ── */}
                    <a
                        href="/services/fmcg"
                        className="svc-card group col-span-12 md:col-span-4 relative rounded-[20px] overflow-hidden bg-surface min-h-[320px]"
                    >
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Fresh tropical fruits and herbal products"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[320px]">
                            <span className="num text-ondark/80!">04 — FMCG</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    PGG <em className="serif-em">Fresh</em> Foods.
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    Processing and distributing value-added fresh fruits and herbal
                                    products under the PGG Fresh Foods brand.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* ── NGO Projects ── */}
                    <a
                        href="/services/ngo"
                        className="svc-card group col-span-12 md:col-span-4 relative rounded-[20px] overflow-hidden bg-surface min-h-[320px]"
                    >
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Community education and social development"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[320px]">
                            <span className="num text-ondark/80!">05 — NGO Projects</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    Driving <em className="serif-em">social</em> change.
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    Driving social change through education, rehabilitation, and
                                    income-generation projects funded by global partners.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* ── Real Estate ── */}
                    <a
                        href="/services/real-estate"
                        className="svc-card group col-span-12 md:col-span-4 relative rounded-[20px] overflow-hidden bg-surface min-h-[320px]"
                    >
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Modern commercial real estate development"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent"></div>
                        <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[320px]">
                            <span className="num text-ondark/80!">06 — Real Estate</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                    Agricultural <em className="serif-em">estate</em> value.
                                </h3>
                                <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                    Developing and managing commercial agricultural lands and estate
                                    projects to increase asset value.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
