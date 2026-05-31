 export default function WhoWeAreSection() {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center" style={{backgroundImage: "url('https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117526/about-hero_lvrtcj.jpg')"}}>
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

                <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
                    <p className="flex-1 !text-white/95 text-[15.5px] sm:text-[16.5px] font-medium leading-[1.7] max-w-[560px] drop-shadow-md">
                        Prestige Glamour Group was founded in 1998 to do one quiet thing well — to
                        keep Sri Lankan craft, soil and trade in Sri Lankan hands while opening
                        doors for it in the world's best rooms. Twenty-eight years on, we steward
                        six businesses from a single house in Colombo 07.
                    </p>
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12.5px]">
                            <div className="bg-white/10 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none border sm:border-none border-white/20 sm:border-l sm:pl-4 sm:border-white/30">
                                <div className="num mb-2 !text-white drop-shadow-md">Founded</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">2013</div>
                            </div>
                            <div className="bg-white/10 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none border sm:border-none border-white/20 sm:border-l sm:pl-4 sm:border-white/30">
                                <div className="num mb-2 !text-white drop-shadow-md">Headcount</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">800 +</div>
                                <div className="text-[12px] !text-white/90 mt-2 drop-shadow-md font-medium">Across nine provinces</div>
                            </div>
                            <div className="bg-white/10 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none border sm:border-none border-white/20 sm:border-l sm:pl-4 sm:border-white/30">
                                <div className="num mb-2 !text-white drop-shadow-md">Branches</div>
                                <div className="font-display text-[28px] leading-none !text-white drop-shadow-md">23</div>
                                <div className="text-[12px] !text-white/90 mt-2 drop-shadow-md font-medium">Head office in Kalutara</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
