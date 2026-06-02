import SectionEyebrow from '@/components/sections/SectionEyebrow';
import { stats } from '@/data/home';
import StatsBanner from '@/components/sections/StatsBanner';

export default function ImpactSection() {
    return (
        <section id="impact" className="pb-20 xs:pb-24 sm:pb-32 lg:pb-40 xl:pb-48">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-end mb-12 sm:mb-16 md:mb-20">
                    <div className="col-span-12 lg:col-span-7">
                        <SectionEyebrow 
                            index="06" 
                            label="Why partners choose us" 
                            className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink">
                            Fourteen years <em className="serif-em">measured</em>
                            <br />
                            in investor returns, not promises.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:pb-2">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed max-w-full sm:max-w-[440px] font-light">
                            Independently audited by KPMG Sri Lanka. Numbers below are full-year 2025, presented in the same format shared with all 3,200+ active investors.
                        </p>
                    </div>
                </div>

                <StatsBanner stats={stats} />
            </div>
        </section>
    );
}
