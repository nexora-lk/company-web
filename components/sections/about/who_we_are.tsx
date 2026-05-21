import Link from 'next/link';

export default function WhoWeAreSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-24">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink">
                        [ Home ]
                    </Link>
                    <span className="num">/</span>
                    <span className="num">About</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">Who We Are</span>
                </div>

                <h1 className="font-display text-[56px] sm:text-[78px] lg:text-[120px] leading-[0.95] tracking-tightish max-w-[1100px]">
                    An island business,
                    <br />
                    in <em className="serif-em">three</em> generations
                    <br />
                    and six trades.
                </h1>

                <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
                    <p className="col-span-12 lg:col-span-6 text-mute text-[15.5px] leading-[1.7] max-w-[520px]">
                        Prestige Glamour Group was founded in 1998 to do one quiet thing well — to
                        keep Sri Lankan craft, soil and trade in Sri Lankan hands while opening
                        doors for it in the world's best rooms. Twenty-eight years on, we steward
                        six businesses from a single house in Colombo 07.
                    </p>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="hairline mb-6"></div>
                        <div className="grid grid-cols-3 gap-6 text-[12.5px]">
                            <div>
                                <div className="num mb-2">Founded</div>
                                <div className="font-display text-[28px] leading-none">1998</div>
                                <div className="text-mute mt-2">Colombo, Sri Lanka</div>
                            </div>
                            <div>
                                <div className="num mb-2">Headcount</div>
                                <div className="font-display text-[28px] leading-none">8,400</div>
                                <div className="text-mute mt-2">Across nine provinces</div>
                            </div>
                            <div>
                                <div className="num mb-2">Branches</div>
                                <div className="font-display text-[28px] leading-none">29</div>
                                <div className="text-mute mt-2">Head office in Kalutara</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
