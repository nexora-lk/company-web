import SectionEyebrow from '@/components/sections/SectionEyebrow';
import { marqueeItems } from '@/data/home';
import HeroSlider from '@/features/hero-slider/HeroSlider';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden" aria-label="Hero">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-14 sm:pb-20 lg:pb-28 xl:pb-32">
                <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">

                    {/* Left: Headline + CTA */}
                    <div className="col-span-12 lg:col-span-7">
                        <h1 className="font-display text-[46px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[112px] leading-[0.95] tracking-tightish">
                            Cultivating
                            <br />
                            the <em className="serif-em">enduring</em>
                            <br />
                            industries of
                            <br />a quiet island.
                        </h1>

                        <div className="mt-6 sm:mt-8 lg:mt-10 max-w-full sm:max-w-[480px] text-mute text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.65]">
                            From highland plantations to gem ateliers, micro-finance to hospitality
                            — Prestige Glamour Group steward six businesses that together employ{' '}
                            <span className="text-ink">8,400 Sri Lankans</span> and serve 28,000
                            smallholder partners.
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap items-center gap-3">
                            <a href="#services" className="btn btn-primary">
                                Explore our services <span className="arrow">→</span>
                            </a>
                            <a href="#contact" className="btn btn-ghost">
                                Speak with our team
                            </a>
                        </div>
                    </div>

                    {/* Right: Slider */}
                    <div className="col-span-12 lg:col-span-5 relative h-[320px] sm:h-[440px] md:h-[500px] lg:h-[580px] xl:h-[640px] mt-8 lg:mt-0">
                        <div className="w-full h-full rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,24,26,0.25)]">
                            <HeroSlider />
                        </div>

                        {/* Field report overlay */}
                        <div className="absolute bottom-3 right-3 z-10 max-w-[200px] sm:max-w-[230px] bg-surface/95 backdrop-blur border border-line rounded-xl sm:rounded-2xl p-3 sm:p-4">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span className="num text-[10px] sm:text-[11px]">Field report</span>
                            </div>
                            <div className="font-display text-[15px] sm:text-[17px] md:text-[19px] leading-tight">
                                &quot;A jar of coins, a sapling — and 11,200 families since.&quot;
                            </div>
                            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] text-mute">— Nuwara Eliya, 2025</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
