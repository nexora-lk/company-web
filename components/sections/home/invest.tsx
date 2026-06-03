import Photo from '@/components/ui/Photo';

export default function InvestSection() {
    return (
        <section className="pb-20 xs:pb-24 md:pb-32 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="relative rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] overflow-hidden min-h-[380px] xs:min-h-[420px] sm:min-h-[500px] flex items-end">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                        alt="Investment opportunity with Prestige Glamour Group"
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/90 via-ink/60 to-ink/30" />

                    <div className="relative w-full p-6 xs:p-10 lg:p-14 xl:p-16 text-ondark">
                        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-end reveal">

                            <div className="col-span-12 lg:col-span-8 reveal">
                                <span className="num text-ondark/80! text-[10px] xs:text-[11px]">[ Invest with us ]</span>
                                <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish mt-3 sm:mt-4">
                                    Grow alongside an <em className="serif-em">island</em>
                                    <br />
                                    that compounds quietly.
                                </h3>
                                <p className="mt-4 sm:mt-6 max-w-full sm:max-w-[520px] text-ondark/80 text-[14px] xs:text-[15px] sm:text-base leading-relaxed font-light">
                                    We open the books twice a year to a small set of investors and
                                    trade partners. The 2026 round is open through October.
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end mt-4 lg:mt-0 reveal">
                                <a
                                    href="#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! w-full sm:w-auto justify-center text-[14px] px-8"
                                >
                                    Request prospectus <span className="arrow">→</span>
                                </a>
                                <p className="text-ondark/60 text-xs sm:text-[13px] leading-relaxed max-w-[280px] lg:text-right">
                                    Speak with our investor relations lead <span className="text-ondark font-medium">Aravinda Karunaratne</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
