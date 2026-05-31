export default function VisionSection() {
    return (
        <section className="pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-36">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">

                    {/* Vision card */}
                    <div className="rounded-[16px] sm:rounded-[20px] bg-accent2 p-7 sm:p-10 md:p-12 lg:p-14 min-h-[260px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="eyebrow text-[10px] sm:text-[11px]">Vision</span>
                            <span className="num text-[10px] sm:text-[11px]">— 2030</span>
                        </div>
                        <div>
                            <p className="font-display text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.1] tracking-tightish">
                                To be the <em className="serif-em">most trusted</em> name in Sri
                                Lankan plantation — and proof that patience compounds.
                            </p>
                        </div>
                    </div>

                    {/* Mission card */}
                    <div className="rounded-[16px] sm:rounded-[20px] bg-ink text-ondark p-7 sm:p-10 md:p-12 lg:p-14 min-h-[260px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="eyebrow text-ondark/70! text-[10px] sm:text-[11px]">Mission</span>
                            <span className="num text-ondark/60! text-[10px] sm:text-[11px]">— Daily</span>
                        </div>
                        <div>
                            <p className="font-display text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.1] tracking-tightish">
                                To carry the island <em className="serif-em">forward</em> by
                                carrying its smallest holders, makers, and stones into the
                                world&apos;s best rooms.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
