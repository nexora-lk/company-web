import SectionEyebrow from '@/components/sections/SectionEyebrow';
import ValueGrid from '@/components/sections/ValueGrid';
import { values } from '@/data/home';
import Leaf from "@/components/ui/Leaf";

export default function ValuesSection() {
    return (
        <section id="values" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-[#f6e9c6]/60">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
                    <div className="max-w-full lg:max-w-3xl reveal">
                        <SectionEyebrow 
                            index="03" 
                            label="Core Values" 
                            className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue">
                            Six principles. Behind <em className="serif-em text-sapphire-blue">every</em> investment,
                            <br className="hidden sm:block" />
                            every return, every handshake.
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[320px] lg:text-right reveal">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            Our values are not marketing words — they are how we protect your investment
                            and our reputation at the same time.
                        </p>
                    </div>
                </div>

                <div className="hairline mb-0" />
                <ValueGrid values={values} />
                <div className="hairline" />
            </div>
        </section>
    );
}
