import Photo from '@/components/ui/Photo';

export default function InvestSection() {
    return (
        <section className="pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-36">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="relative rounded-[18px] sm:rounded-[24px] overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-end">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                        alt="Investment opportunity with Prestige Glamour Group - compound growth in Sri Lankan conglomerate"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/85 via-ink/55 to-ink/30" />

                    <div className="relative w-full p-6 sm:p-10 lg:p-14 xl:p-16 text-ondark">
                        <div className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-end">

                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/80!">[ Invest with us ]</span>
                                <h3 className="font-display text-[30px] sm:text-[42px] md:text-[54px] lg:text-[64px] xl:text-[76px] leading-[0.98] tracking-tightish mt-3 sm:mt-4">
                                    Grow alongside an <em className="serif-em">island</em>
                                    <br />
                                    that compounds quietly.
                                </h3>
                                <p className="mt-4 sm:mt-6 max-w-full sm:max-w-[520px] text-ondark/80 text-[13.5px] sm:text-[15px] leading-[1.7]">
                                    We open the books twice a year to a small set of investors and
                                    trade partners. The 2026 round is open through October.
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-3 sm:gap-4 lg:items-end mt-2 lg:mt-0">
                                <a
                                    href="#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! text-[12px] sm:text-[13px]"
                                >
                                    Request the prospectus <span className="arrow">→</span>
                                </a>
                                <a href="#contact" className="text-ondark text-[12px] sm:text-sm ulink self-center lg:self-auto">
                                    Or book a call with Aravinda Karunaratne
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
