import Link from 'next/link';

export default function BanerSection() {
    return (
        <section className="pb-24 lg:pb-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="relative rounded-[24px] overflow-hidden min-h-[320px] flex items-end bg-ink">
                    <div className="relative w-full p-8 lg:p-14 text-ondark">
                        <div className="grid grid-cols-12 gap-8 items-end">
                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/70!">[ Photograph us back ]</span>
                                <h3 className="font-display text-[40px] lg:text-[60px] leading-[0.98] tracking-tightish mt-4">
                                    Were you at the <em className="serif-em">door</em>?<br />
                                    Send us your photograph.
                                </h3>
                                <p className="mt-5 max-w-[480px] text-ondark/80 text-[14.5px] leading-[1.7]">
                                    We keep this archive open. If you joined a branch opening, a
                                    field day, or an Easter charity drive, send us your photograph
                                    and we'll add it with a credit line.
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
                                <Link
                                    href="/#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark!"
                                >
                                    Submit a photograph <span className="arrow">→</span>
                                </Link>
                                <Link href="/#contact" className="text-ondark text-sm ulink">
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
