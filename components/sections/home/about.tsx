import Photo from '@/components/ui/Photo';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 lg:py-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
                    <div className="col-span-12 lg:col-span-6 relative">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/5]">
                            <Photo
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1100&q=80&auto=format&fit=crop"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="hidden lg:block absolute -right-6 bottom-10 w-[260px] rounded-2xl bg-surface border border-line p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="num">Since</span>
                                <span className="num">1998</span>
                            </div>
                            <div className="font-display text-[40px] leading-none tracking-tightish">
                                28<em className="serif-em">y</em>ears
                            </div>
                            <div className="mt-3 text-[13px] text-mute leading-relaxed">
                                of compounding patient capital across six Sri Lankan industries.
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <SectionEyebrow
                            index="02"
                            label="About the Group"
                            className="flex items-center gap-3 mb-8"
                            hairlineClassName="hairline-strong flex-1 max-w-[120px]"
                        />

                        <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish">
                            We invest in <em className="serif-em">land,</em>
                            <br />
                            in craft, and in
                            <br />
                            the long return.
                        </h2>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[640px]">
                            <p className="text-[15px] leading-[1.7] text-mute">
                                Three generations of the Karunaratne family have built Prestige
                                Glamour on a single conviction — that{' '}
                                <span className="text-ink">
                                    an island this small thrives when its smallest holders thrive
                                </span>
                                .
                            </p>
                            <p className="text-[15px] leading-[1.7] text-mute">
                                Our businesses run independently but share a single ledger of
                                values: patient capital, slow harvests, and a refusal to cut a
                                corner that future generations will pay for.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
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
