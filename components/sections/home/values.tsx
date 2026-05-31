import SectionEyebrow from '@/components/sections/SectionEyebrow';
import ValueGrid from '@/components/sections/ValueGrid';
import { values } from '@/data/home';

export default function ValuesSection() {
    return (
        <section id="values" className="pb-20 sm:pb-24 md:pb-28 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
                    <div>
                        <SectionEyebrow index="03" label="Core Values" />
                        <h2 className="font-display text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tightish max-w-full md:max-w-[820px]">
                            Six commitments. Held <em className="serif-em">in every</em> ledger,
                            <br className="hidden sm:block" />
                            every harvest, every handshake.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute max-w-full sm:max-w-[320px] leading-[1.7]">
                        Our values aren&apos;t a poster on a wall — they are the order in which we
                        make decisions when no client is watching.
                    </p>
                </div>

                <div className="hairline mb-0" />
                <ValueGrid values={values} />
                <div className="hairline" />
            </div>
        </section>
    );
}
