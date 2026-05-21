import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink">
                        [ Home ]
                    </Link>
                    <span className="num">/</span>
                    <span className="num">Real Estate</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">
                        PGG Properties · Land &amp; Heritage · Est. 2008
                    </span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Value in the
                        <br />
                        <em className="serif-em">soil,</em> built for
                        <br />
                        the future.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        PGG Properties focuses on developing and managing commercial agricultural
                        lands, heritage estate projects, and sustainable commercial developments
                        across Sri Lanka. We build value that compounds with the land.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">Total land bank</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            840<em className="serif-em text-accent text-[20px]">A</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Acres managed</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Heritage restorations</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            04<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Colonial estates</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Commercial sites</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            12<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Prime locations</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">Appreciation</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            14<em className="serif-em text-accent text-[20px]">%</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Avg. annual yield</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
