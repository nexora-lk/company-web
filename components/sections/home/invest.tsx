import Photo from '@/components/ui/Photo';

export default function InvestSection() {
    return (
        <section className="pb-28 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="relative rounded-[24px] overflow-hidden min-h-[440px] flex items-end">
                    <Photo
                        src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=1800&q=80&auto=format&fit=crop"
                        alt="Investment opportunity with Prestige Glamour Group - compound growth in Sri Lankan conglomerate"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/85 via-ink/55 to-ink/30"></div>

                    <div className="relative w-full p-8 lg:p-16 text-ondark">
                        <div className="grid grid-cols-12 gap-8 items-end">
                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/80!">[ Invest with us ]</span>
                                <h3 className="font-display text-[44px] lg:text-[76px] leading-[0.98] tracking-tightish mt-4">
                                    Grow alongside an <em className="serif-em">island</em>
                                    <br />
                                    that compounds quietly.
                                </h3>
                                <p className="mt-6 max-w-[520px] text-ondark/80 text-[15px] leading-[1.7]">
                                    We open the books twice a year to a small set of investors and
                                    trade partners. The 2026 round is open through October.
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
                                <a
                                    href="#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark!"
                                >
                                    Request the prospectus <span className="arrow">→</span>
                                </a>
                                <a href="#contact" className="text-ondark text-sm ulink">
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
