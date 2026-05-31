import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-36">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">

                    {/* Image — stacks on top on mobile */}
                    <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-1">
                        <figure className="rounded-[14px] sm:rounded-[18px] overflow-hidden aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        {/* Floating stat — desktop only */}
                        <div className="hidden lg:block absolute -right-6 bottom-10 w-[240px] xl:w-[260px] rounded-2xl bg-surface border border-line p-5 xl:p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="num">Since</span>
                                <span className="num">1998</span>
                            </div>
                            <div className="font-display text-[36px] xl:text-[40px] leading-none tracking-tightish">
                                28<em className="serif-em">y</em>ears
                            </div>
                            <div className="mt-3 text-[12px] xl:text-[13px] text-mute leading-relaxed">
                                of compounding patient capital across six Sri Lankan industries.
                            </div>
                        </div>

                        {/* Inline stat pill — mobile only */}
                        <div className="lg:hidden mt-4 flex items-center gap-4 bg-surface border border-line rounded-[14px] p-4 sm:p-5">
                            <div className="font-display text-[32px] sm:text-[36px] leading-none tracking-tightish shrink-0">
                                28<em className="serif-em">y</em>
                            </div>
                            <div className="text-[12.5px] sm:text-[13px] text-mute leading-relaxed">
                                years of compounding patient capital across six Sri Lankan industries.
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-2">
                        <SectionEyebrow
                            index="02"
                            label="About the Group"
                            className="flex items-center gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong flex-1 max-w-[80px] sm:max-w-[120px]"
                        />

                        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tightish">
                            We invest in <em className="serif-em">land,</em>
                            <br />
                            in craft, and in
                            <br />
                            the long return.
                        </h2>

                        <div className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-full sm:max-w-[640px]">
                            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-mute">
                                Three generations of the Karunaratne family have built Prestige
                                Glamour on a single conviction — that{' '}
                                <span className="text-ink">
                                    an island this small thrives when its smallest holders thrive
                                </span>
                                .
                            </p>
                            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-mute">
                                Our businesses run independently but share a single ledger of
                                values: patient capital, slow harvests, and a refusal to cut a
                                corner that future generations will pay for.
                            </p>
                        </div>

                        <div className="mt-7 sm:mt-10 flex flex-wrap gap-3">
                            <a className="btn btn-ghost" href="#values">
                                Our values <span className="arrow">→</span>
                            </a>
                            <a className="btn btn-ghost" href="#impact">
                                Impact report 2025 <span className="arrow">↗</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
