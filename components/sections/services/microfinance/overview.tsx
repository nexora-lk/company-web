import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 01 ]</span>
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Microfinance Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            We enhance the <em className="serif-em">capacity</em>
                            <br />
                            of the small business person —
                            <br />
                            and we follow up.
                        </h2>

                        <div className="mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.75] text-mute max-w-155">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    P
                                </span>
                                GG Microfinance — registered as Next Investment (Pvt) Ltd — was
                                started in 2013 as the group&apos;s instrument for small-business
                                lending. Through it, the working family of an estate, a co-op
                                secretary, or a market-stall trader can access working capital on
                                the same terms as any commercial borrower, with the field officer at
                                the door instead of behind a desk in Colombo.
                            </p>
                            <p>
                                Today the programme has developed more than{' '}
                                <span className="text-ink">five thousand small businesses</span>,
                                and a growing share of our loan book is now held by women
                                entrepreneurs. The financial products below are the four most-used.
                            </p>
                        </div>

                        <div className="mt-8 sm:mt-9 md:mt-10 flex flex-wrap gap-2 sm:gap-3">
                            <a href="#products" className="btn btn-ghost text-[13px] sm:text-[14px] md:text-base">
                                Read the products <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary text-[13px] sm:text-[14px] md:text-base">
                                Apply for a loan <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-2xl md:rounded-[18px] overflow-hidden aspect-4/5">
                            <Photo
                                src="/microfinace-overview.jpg"
                                alt="A seedling growing from a glass jar of coins — the Microfinance icon"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <figcaption className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-xs text-mute gap-1 sm:gap-0">
                            <span>— The jar, the sapling, the small ledger.</span>
                            <span>Field, 2025</span>
                        </figcaption>
                    </aside>
                </div>
            </div>
        </section>
    );
}
