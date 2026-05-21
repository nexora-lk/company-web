export default function VisionSection() {
    return (
        <section className="pb-28 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-[20px] bg-accent2 p-10 lg:p-14 min-h-[320px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="eyebrow">Vision</span>
                            <span className="num">— 2030</span>
                        </div>
                        <div>
                            <p className="font-display text-[32px] lg:text-[42px] leading-[1.1] tracking-tightish">
                                To be the <em className="serif-em">most trusted</em> name in Sri
                                Lankan plantation — and proof that patience compounds.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[20px] bg-ink text-ondark p-10 lg:p-14 min-h-[320px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="eyebrow text-ondark/70!">Mission</span>
                            <span className="num text-ondark/60!">— Daily</span>
                        </div>
                        <div>
                            <p className="font-display text-[32px] lg:text-[42px] leading-[1.1] tracking-tightish">
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
