export default function WhoWeAreSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center" style={{backgroundImage: "url('/about-hero.jpg')"}}>
            {/* Overlay layer for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
            <div className="relative z-10 max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-24">
                <div className="flex items-center gap-3 mb-8">
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2 !bg-white/40 drop-shadow-md"></span>
                    <span className="eyebrow !text-white/90 drop-shadow-md">Who We Are</span>
                </div>

                <h1 className="font-display text-[56px] sm:text-[78px] lg:text-[120px] leading-[0.95] tracking-tightish max-w-[1100px] !text-white drop-shadow-lg">
                    An island business,
                    <br />
                    in <em className="serif-em">three</em> generations
                    <br />
                    and six trades.
                </h1>

                <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
                    <p className="col-span-12 lg:col-span-6 !text-white/95 text-[15.5px] sm:text-[16.5px] font-medium leading-[1.7] max-w-[520px] drop-shadow-md">
                        Prestige Glamour Group was founded in 1998 to do one quiet thing well — to
                        keep Sri Lankan craft, soil and trade in Sri Lankan hands while opening
                        doors for it in the world's best rooms. Twenty-eight years on, we steward
                        six businesses from a single house in Colombo 07.
                    </p>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="hairline mb-6 !bg-white/70 drop-shadow-md"></div>
                        <div className="grid grid-cols-3 gap-6 text-[12.5px]">
                            <div>
                                <div className="num mb-2 !text-white drop-shadow-md">Founded</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">1998</div>
                                <div className="text-[12px] !text-white/90 mt-2 drop-shadow-md font-medium">Colombo, Sri Lanka</div>
                            </div>
                            <div>
                                <div className="num mb-2 !text-white drop-shadow-md">Headcount</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">8,400</div>
                                <div className="text-[12px] !text-white/90 mt-2 drop-shadow-md font-medium">Across nine provinces</div>
                            </div>
                            <div>
                                <div className="num mb-2 !text-white drop-shadow-md">Branches</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">29</div>
                                <div className="text-[12px] !text-white/90 mt-2 drop-shadow-md font-medium">Head office in Kalutara</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
