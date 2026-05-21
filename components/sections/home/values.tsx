import SectionEyebrow from '@/components/sections/SectionEyebrow';
import ValueGrid from '@/components/sections/ValueGrid';
import { values } from '@/data/home';

export default function ValuesSection() {
    return (
        <section id="values" className="pb-28 lg:pb-40">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div>
                        <SectionEyebrow index="03" label="Core Values" />
                        <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Six commitments. Held <em className="serif-em">in every</em> ledger,
                            <br />
                            every harvest, every handshake.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute max-w-[320px] leading-[1.7]">
                        Our values aren&apos;t a poster on a wall — they are the order in which we
                        make decisions when no client is watching.
                    </p>
                </div>

                <div className="hairline mb-0"></div>
                <ValueGrid values={values} />
                <div className="hairline"></div>
            </div>
        </section>
    );
}
