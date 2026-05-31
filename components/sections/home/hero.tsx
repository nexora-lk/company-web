import Marquee from '@/components/sections/Marquee';
import SectionEyebrow from '@/components/sections/SectionEyebrow';
import { marqueeItems } from '@/data/home';
import HeroSlider from '@/features/hero-slider/HeroSlider';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden" aria-label="Hero">
            <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32">
                <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
                    <div className="col-span-12 lg:col-span-7">
                        {/* <SectionEyebrow
                            index="01"
                            label="A Sri Lankan Conglomerate"
                            className="flex items-center gap-3 mb-8"
                            hairlineClassName="hairline-strong flex-1 max-w-[120px]"
                        /> */}

                        <h1 className="font-display text-[56px] sm:text-[78px] lg:text-[112px] leading-[0.95] tracking-tightish">
                            Cultivating
                            <br />
                            the <em className="serif-em">enduring</em>
                            <br />
                            industries of
                            <br />a quiet island.
                        </h1>

                        <div className="mt-10 max-w-[480px] text-mute text-[15.5px] leading-[1.65]">
                            From highland plantations to gem ateliers, micro-finance to hospitality
                            — Prestige Glamour Group steward six businesses that together employ
                            <span className="text-ink">8,400 Sri Lankans</span> and serve 28,000
                            smallholder partners.
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <a href="#services" className="btn btn-primary">
                                Explore our services <span className="arrow">→</span>
                            </a>
                            <a href="#contact" className="btn btn-ghost">
                                Speak with our team
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 relative h-[520px] lg:h-[640px]">
                        <div className="w-full h-full rounded-[18px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,24,26,0.25)]">
                            <HeroSlider />
                        </div>

                        <div className="absolute bottom-3 right-3 z-10 max-w-[230px] bg-surface/95 backdrop-blur border border-line rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                <span className="num">Field report</span>
                            </div>
                            <div className="font-display text-[19px] leading-tight">
                                &quot;A jar of coins, a sapling — and 11,200 families since.&quot;
                            </div>
                            <div className="mt-2 text-[11px] text-mute">— Nuwara Eliya, 2025</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Marquee items={marqueeItems} /> */}
        </section>
    );
}
