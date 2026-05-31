import SectionEyebrow from '@/components/sections/SectionEyebrow';
import { certifications, stats } from '@/data/home';
import StatsBanner from '@/components/sections/StatsBanner';

export default function ImpactSection() {
    return (
        <section id="impact" className="pb-20 sm:pb-24 md:pb-28 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-end mb-10 sm:mb-12 md:mb-14">
                    <div className="col-span-12 lg:col-span-7">
                        <SectionEyebrow index="06" label="Why partners choose us" />
                        <h2 className="font-display text-[30px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[68px] leading-[0.98] tracking-tightish">
                            Twenty-eight years <em className="serif-em">measured</em>
                            <br />
                            in harvests, not headlines.
                        </h2>
                    </div>
                    <p className="col-span-12 lg:col-span-5 text-[13.5px] sm:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[420px]">
                        Independently audited by KPMG Sri Lanka. Numbers below are full-year 2025
                        unless otherwise noted, presented in the same format we share with our
                        co-operative members.
                    </p>
                </div>

                <StatsBanner stats={stats} certifications={certifications} />
            </div>
        </section>
    );
}
