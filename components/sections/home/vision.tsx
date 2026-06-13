import Leaf from "@/components/ui/Leaf";

export default function VisionSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 lg:gap-8">

                    {/* Vision card */}
                    <div className="rounded-[20px] sm:rounded-[24px] bg-light-gold p-8 xs:p-10 sm:p-12 lg:p-16 min-h-[260px] xs:min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex flex-col justify-center items-center text-center group hover:bg-normal-gold transition-colors duration-500 reveal">
                        <div className="flex items-center justify-center mb-6 sm:mb-8">
                            <span className="eyebrow text-[10px] xs:text-[11px] sm:text-xs">Vision</span>
                            <span className="num text-[10px] xs:text-[11px] sm:text-xs text-accent"> — 2030</span>
                        </div>
                        <div>
                            <p className="font-display text-2xl xs:text-3xl sm:text-[34px] lg:text-[38px] xl:text-[44px] leading-[1.1] tracking-tightish text-midnight-blue">
                                To be Sri Lanka&#39;s <em className="serif-em text-sapphire-blue">most trusted</em> investment company
                                and proof that real operations deliver real returns.
                            </p>
                        </div>
                    </div>

                    {/* Mission card */}
                    <div className="rounded-[20px] sm:rounded-[24px] bg-sapphire-blue text-white p-8 xs:p-10 sm:p-12 lg:p-16 min-h-[260px] xs:min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex flex-col justify-center items-center text-center group hover:bg-royal-blue transition-colors duration-500 shadow-2xl reveal">
                        <div className="flex items-center justify-center mb-6 sm:mb-8">
                            <span className="eyebrow text-ondark/70! text-[10px] xs:text-[11px] sm:text-xs">Mission</span>
                            <span className="num text-ondark/60! text-[10px] xs:text-[11px] sm:text-xs"> — Daily</span>
                        </div>
                        <div>
                            <p className="font-display text-2xl xs:text-3xl sm:text-[34px] lg:text-[38px] xl:text-[44px] leading-[1.1] tracking-tightish">
                                To deliver consistent, <em className="serif-em text-light-gold">audited</em> returns to every investor — while employing 800+ Sri Lankans.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
