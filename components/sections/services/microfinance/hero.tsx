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
                    <span className="num">Microfinance</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">
                        PGG Microfinance · Next Investment (Pvt) Ltd · Est. 2013
                    </span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish">
                        Loans the size
                        <br />
                        of a <em className="serif-em">sapling.</em>
                        <br />
                        Returns that root.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        PGG Microfinance — operating as Next Investment (Pvt) Ltd since 2013 — was
                        founded to empower rural entrepreneurs, women borrowers and agri-preneurs.
                        Small tickets, walked-the-field due diligence, and a 96.4 % repayment record
                        across twenty-nine branches.
                    </p>
                </div>

                <div className="mt-16 hairline"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="p-8 border-r border-line">
                        <div className="num mb-4">SMEs supported</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            5,000<em className="serif-em text-accent text-[20px]">+</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Cumulative since 2013</div>
                    </div>
                    <div className="p-8 lg:border-r border-line">
                        <div className="num mb-4">Active borrowers</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            11,200<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Predominantly women</div>
                    </div>
                    <div className="p-8 border-r border-line border-t lg:border-t-0">
                        <div className="num mb-4">Repayment rate</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            96.<em className="serif-em text-accent text-[24px]">4%</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Audited · KPMG SL</div>
                    </div>
                    <div className="p-8 border-t lg:border-t-0">
                        <div className="num mb-4">Branch network</div>
                        <div className="font-display text-[56px] leading-none tracking-tightish">
                            29<em className="serif-em text-accent text-[20px]">.</em>
                        </div>
                        <div className="text-[12px] text-mute mt-2">Across nine provinces</div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
