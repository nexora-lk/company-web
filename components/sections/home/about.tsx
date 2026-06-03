import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">

                    {/* Image — stacks on top on mobile */}
                    <div className="col-span-12 lg:col-span-6 relative order-1 reveal">
                        <figure className="rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[4/3] xs:aspect-[1/1] lg:aspect-[4/5] shadow-xl">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117526/about-hero_lvrtcj.jpg"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                className="w-full h-full object-cover"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </figure>

                        {/* Floating stat — desktop only */}
                        <div className="hidden lg:block absolute -right-6 bottom-10 w-[240px] xl:w-[280px] rounded-2xl bg-surface border border-line p-6 shadow-2xl reveal">
                            <div className="flex items-center justify-between mb-3">
                                <span className="num">Since</span>
                                <span className="num">2013</span>
                            </div>
                            <div className="font-display text-[36px] xl:text-[42px] leading-none tracking-tightish text-ink">
                                14<em className="serif-em text-accent">y</em>ears
                            </div>
                            <div className="mt-4 text-[13px] xl:text-[14px] text-mute leading-relaxed font-light">
                                of delivering real returns to 3,200+ investors across seven Sri Lankan investment vehicles.
                            </div>
                        </div>

                        {/* Inline stat pill — mobile/tablet only */}
                        <div className="lg:hidden mt-5 flex items-center gap-5 bg-surface border border-line rounded-[16px] p-5 sm:p-6 shadow-sm reveal">
                            <div className="font-display text-4xl xs:text-5xl leading-none tracking-tightish shrink-0 text-accent">
                                14<em className="serif-em">y</em>
                            </div>
                            <div className="text-[13px] xs:text-[14px] text-mute leading-relaxed font-light">
                                years of compounding patient capital across seven Sri Lankan industries.
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="col-span-12 lg:col-span-6 order-2">
                        <div className="reveal">
                            <SectionEyebrow
                                index="02"
                                label="About the Group"
                                className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                                hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                            />
                        </div>

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink reveal">
                            We invest in <em className="serif-em">real </em>
                            <br />
                            operations and share the
                            <br />
                            returns with you.
                        </h2>

                        <div className="mt-6 xs:mt-8 sm:mt-10 max-w-full sm:max-w-[640px] reveal">
                            <p className="text-[14.5px] xs:text-[15.5px] leading-relaxed text-mute font-light">
                                Prestige Glamour Working Capital Solutions was founded in 2013 with one clear purpose: to give investors direct access to real, operating Sri Lankan businesses. We are actual operators — running seven productive divisions including plantation, microfinance, and gems. We open these operations to investors who want transparency and real assets.
                            </p>
                        </div>

                        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 reveal">
                            <a className="btn btn-ghost w-full xs:w-auto justify-center" href="#services">
                                Our Investment Options  <span className="arrow">→</span>
                            </a>
                            <a className="btn btn-ghost w-full xs:w-auto justify-center" href="#impact">
                                How to Invest  <span className="arrow">↗</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
