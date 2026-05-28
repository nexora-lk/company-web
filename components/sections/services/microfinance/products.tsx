export default function ProductsSection() {
    return (
        <section id="products" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bg">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 02 ]</span>
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Financial Products</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            Four products. <em className="serif-em">One</em>
                            <br />
                            field officer per ledger.
                        </h2>
                    </div>
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-80 md:max-w-85">
                        Every loan has an officer who walks the borrower&apos;s site at least once before
                        disbursement, and monthly thereafter. No call-centre underwriting.
                    </p>
                </div>

                <div className="hairline-strong"></div>

                <div className="space-y-0">
                    {[
                        {
                            num: '01',
                            title: 'PGG Agri-preneurship Loans',
                            desc: "For smallholder farmers — funding for seedlings, tooling, irrigation systems and the first six months of operations. Sealed off-take through PGG's export desk where the crop fits.",
                            ticket: 'LKR 25k — 500k',
                            term: '12 — 24 months',
                        },
                        {
                            num: '02',
                            title: 'PGG Working Capital Loans',
                            desc: 'For market traders, shop owners, and service businesses — recurring loans to cover inventory or operational gaps. Built to match seasonal cash flows.',
                            ticket: 'LKR 50k — 750k',
                            term: '6 — 12 months',
                        },
                        {
                            num: '03',
                            title: 'PGG Asset Finance',
                            desc: 'Equipment and machinery for micro-enterprises — from motorised pumps to processing equipment. Secured against the asset itself.',
                            ticket: 'LKR 100k — 2M',
                            term: '24 — 48 months',
                        },
                        {
                            num: '04',
                            title: 'PGG Group Guarantee Loans',
                            desc: 'For co-ops and joint liability groups. Peer guarantees replace collateral, and group repayment discipline drives lower default rates.',
                            ticket: 'LKR 200k — 1.5M',
                            term: '12 — 36 months',
                        },
                    ].map((product) => (
                        <a
                            key={product.num}
                            href="#"
                            className="product-row group border-b border-line last:border-0 py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-6 lg:px-0 -mx-3 sm:-mx-4 md:-mx-6 lg:mx-0 hover:bg-surface/40 transition-colors"
                        >
                            <span className="num text-[11px] sm:text-xs md:text-sm">{product.num}</span>
                            <div>
                                <h3 className="font-display text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-tight">
                                    {product.title}
                                </h3>
                                <p className="mt-1 sm:mt-2 text-[12px] sm:text-[13px] md:text-[14px] text-mute leading-[1.6] md:leading-[1.7] max-w-130">
                                    {product.desc}
                                </p>
                            </div>
                            <dl className="text-[12px] sm:text-[13px]">
                                <dt className="num text-[10px] sm:text-xs">Ticket</dt>
                                <dd className="font-display text-[18px] sm:text-[20px] leading-tight">
                                    {product.ticket}
                                </dd>
                                <dt className="num text-[10px] sm:text-xs mt-2 sm:mt-3">Term</dt>
                                <dd className="font-display text-[18px] sm:text-[20px] leading-tight">
                                    {product.term}
                                </dd>
                            </dl>
                            <span className="arr font-display text-[24px] sm:text-[28px] mt-1">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
