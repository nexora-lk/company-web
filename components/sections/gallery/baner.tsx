import Link from 'next/link';

export default function BanerSection() {
    return (
        <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="relative rounded-[18px] sm:rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-end bg-ink">
                    <div className="relative w-full p-6 sm:p-10 lg:p-12 xl:p-14 text-ondark">
                        <div className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-end">

                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/70! text-[10px] sm:text-[11px]">[ Photograph us back ]</span>
                                <h3 className="font-display text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[0.98] tracking-tightish mt-3 sm:mt-4">
                                    Were you at the <em className="serif-em">door</em>?<br />
                                    Send us your photograph.
                                </h3>
                                <p className="mt-4 sm:mt-5 max-w-full sm:max-w-[480px] text-ondark/80 text-[13px] sm:text-[14.5px] leading-[1.7]">
                                    We keep this archive open. If you joined a branch opening, a
                                    field day, or an Easter charity drive, send us your photograph
                                    and we'll add it with a credit line.
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-3 sm:gap-4 lg:items-end mt-2 lg:mt-0">
                                <Link
                                    href="/#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! text-[11px] sm:text-[13px]"
                                >
                                    Submit a photograph <span className="arrow">→</span>
                                </Link>
                                <Link href="/#contact" className="text-ondark text-[11px] sm:text-sm ulink self-center lg:self-auto">
                                    archive@prestigeglamour.lk
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
