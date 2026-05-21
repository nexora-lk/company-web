export default function ProductsSection() {
    return (
        <section id="products" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Financial Products</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Four products. <em className="serif-em">One</em>
                            <br />
                            field officer per ledger.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        Every loan has an officer who walks the borrower's site at least once before
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
                            className="product-row group border-b border-line last:border-0 py-6 hover:bg-surface/40 px-6 -mx-6 transition-colors"
                        >
                            <span className="num">{product.num}</span>
                            <div>
                                <h3 className="font-display text-[30px] leading-tight">
                                    {product.title}
                                </h3>
                                <p className="mt-2 text-[14px] text-mute leading-[1.7] max-w-[520px]">
                                    {product.desc}
                                </p>
                            </div>
                            <dl className="text-[13px]">
                                <dt className="num">Ticket</dt>
                                <dd className="font-display text-[20px] leading-tight">
                                    {product.ticket}
                                </dd>
                                <dt className="num mt-3">Term</dt>
                                <dd className="font-display text-[20px] leading-tight">
                                    {product.term}
                                </dd>
                            </dl>
                            <span className="arr font-display text-[28px] mt-1">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
