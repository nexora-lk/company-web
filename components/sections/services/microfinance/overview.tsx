import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Microfinance Overview</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            We enhance the <em className="serif-em">capacity</em>
                            <br />
                            of the small business person —
                            <br />
                            and we follow up.
                        </h2>

                        <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-mute max-w-[620px]">
                            <p>
                                <span className="font-display text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    P
                                </span>
                                GG Microfinance — registered as Next Investment (Pvt) Ltd — was
                                started in 2013 as the group's instrument for small-business
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

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#products" className="btn btn-ghost">
                                Read the products <span className="arrow">→</span>
                            </a>
                            <a href="#enquire" className="btn btn-primary">
                                Apply for a loan <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/5]">
                            <Photo
                                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1100&q=80&auto=format&fit=crop"
                                alt="A seedling growing from a glass jar of coins — the Microfinance icon"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <figcaption className="mt-3 flex items-center justify-between text-[12px] text-mute">
                            <span>— The jar, the sapling, the small ledger.</span>
                            <span>Field, 2025</span>
                        </figcaption>
                    </aside>
                </div>
            </div>
        </section>
    );
}
