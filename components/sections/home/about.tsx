import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Leaf from '@/components/ui/Leaf';

export default function AboutSection() {
    return (
        <section id="about" className="relative overflow-hidden py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">

                    {/* Image — stacks on top on mobile */}
                    <div className="col-span-12 lg:col-span-6 relative order-1 reveal">
                        <figure className="rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[4/3] xs:aspect-[1/1] lg:aspect-[4/5] shadow-xl">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781318381/logo_background_part_2_rmstrv.png"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                className="w-full h-full object-cover rounded-2xl"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </figure>

                        {/* Floating stat — desktop only */}
                        <div className="hidden lg:block absolute -right-6 bottom-10 w-[240px] xl:w-[280px] rounded-2xl bg-light-gold border border-line p-6 shadow-2xl reveal">
                            <div className="flex items-center justify-between mb-3">
                                <span className="num">Since</span>
                                <span className="num">2013</span>
                            </div>
                            <div className="font-display text-[36px] xl:text-[42px] leading-none tracking-tightish text-midnight-blue">
                                14<em className="serif-em text-sapphire-blue">y</em>ears
                            </div>
                            <div className="mt-4 text-[13px] xl:text-[14px] text-mute leading-relaxed font-light">
                                of delivering real returns to 3,200+ investors across seven Sri Lankan investment vehicles.
                            </div>
                        </div>

                        {/* Inline stat pill — mobile/tablet only */}
                        <div className="lg:hidden absolute right-0 bottom-0 w-24 xs:w-28 sm:w-32 aspect-square bg-light-gold text-midnight-blue flex flex-col items-center justify-center shadow-xl reveal z-10 rounded-tl-[16px] rounded-br-[16px]">
                            <div className="font-display text-4xl xs:text-5xl leading-none tracking-tightish">
                                14<em className="serif-em text-sapphire-blue" >y</em>
                            </div>
                            <div className="text-[10px] xs:text-[11px] uppercase tracking-widest mt-1.5 font-medium opacity-80">
                                Experience
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="col-span-12 lg:col-span-6 order-2">
                        <div className="reveal">
                            <SectionEyebrow
                                label="About the Group"
                                className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                                hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                            />
                        </div>

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue reveal">
                            We invest in <em className="serif-em text-sapphire-blue">real </em>
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

                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 reveal">
                            <Link className="btn text-midnight-blue border border-1 hover:border-midnight-blue w-full sm:w-max justify-center px-6 xl:px-8" href="#services">
                                Our Investment Options  <ArrowIcon size={16} className="ml-1" />
                            </Link>
                            <Link className="btn btn-primary w-full sm:w-max justify-center px-6 xl:px-8" href="/investment#process">
                                How to Invest  <ArrowIcon type="up-right" size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
