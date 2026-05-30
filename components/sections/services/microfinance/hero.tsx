import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center" style={{backgroundImage: "url('https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117535/microfinace-hero_qjut63.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-black/20"></div>
            <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                    <Link href="/" className="num ulink text-white/80! hover:text-white! text-[11px] sm:text-xs md:text-sm">
                        [ Home ]
                    </Link>
                    <span className="num text-white/60! text-[11px] sm:text-xs md:text-sm">/</span>
                    <span className="num text-white/80! text-[11px] sm:text-xs md:text-sm">Microfinance</span>
                    <span className="hairline-strong flex-1 max-w-20 sm:max-w-25 md:max-w-30 ml-1 sm:ml-2 bg-white/20!"></span>
                    <span className="eyebrow text-white/70! text-[10px] sm:text-[11px] md:text-sm">
                        PGG Microfinance · Next Investment (Pvt) Ltd · Est. 2013
                    </span>
                </div>

                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[42px] sm:text-[56px] md:text-[84px] lg:text-[120px] xl:text-[140px] leading-[0.93] tracking-tightish text-white!">
                        Loans the size
                        <br />
                        of a <em className="serif-em">sapling.</em>
                        <br />
                        Returns that root.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-white/85! text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-87.5 md:max-w-100 lg:max-w-105 lg:pb-3">
                        PGG Microfinance — operating as Next Investment (Pvt) Ltd since 2013 — was
                        founded to empower rural entrepreneurs, women borrowers and agri-preneurs.
                        Small tickets, walked-the-field due diligence, and a 96.4 % repayment record
                        across twenty-nine branches.
                    </p>
                </div>

                <div className="mt-12 sm:mt-14 md:mt-16 hairline bg-white/70!"></div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">SMEs supported</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            5,000<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">+</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Cumulative since 2013</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 lg:border-r border-white/70">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Active borrowers</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            11,200<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Predominantly women</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-r border-white/70 border-t lg:border-t-0">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Repayment rate</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            96.<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[24px]">4%</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Audited · KPMG SL</div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7 lg:p-8 border-t lg:border-t-0">
                        <div className="num text-white/90! mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm lg:text-base">Branch network</div>
                        <div className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-none tracking-tightish text-white!">
                            29<em className="serif-em text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]">.</em>
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs text-white/75! mt-1 sm:mt-2">Across nine provinces</div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-14 md:mt-16 hairline bg-white/70!"></div>
            </div>
        </section>
    );
}
