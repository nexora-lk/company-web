export default function ProductsSection() {
    const products = [
        {
            num: '01',
            title: 'PGG Agri-preneurship Loans',
            desc: "For smallholder farmers — funding for seedlings, tooling, and systems. Sealed off-take through PGG's export desk.",
            ticket: 'LKR 25k — 500k',
            term: '12 — 24 months',
        },
        {
            num: '02',
            title: 'PGG Working Capital Loans',
            desc: 'For market traders and shop owners — recurring loans to cover inventory. Built to match seasonal cash flows.',
            ticket: 'LKR 50k — 750k',
            term: '6 — 12 months',
        },
        {
            num: '03',
            title: 'PGG Asset Finance',
            desc: 'Equipment and machinery for micro-enterprises — from pumps to processing equipment. Secured against the asset.',
            ticket: 'LKR 100k — 2M',
            term: '24 — 48 months',
        },
        {
            num: '04',
            title: 'PGG Group Guarantee Loans',
            desc: 'For co-ops and joint liability groups. Peer guarantees replace collateral, driving lower default rates.',
            ticket: 'LKR 200k — 1.5M',
            term: '12 — 36 months',
        },
    ];

    return (
        <section id="products" className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40 bg-bg">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
                    <div className="max-w-full lg:max-w-3xl">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="num text-[10px] xs:text-[11px] sm:text-xs">[ 02 ]</span>
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Financial Products</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink">
                            Four products. <em className="serif-em text-accent">One</em>
                            <br />
                            field officer per ledger.
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[440px] lg:text-right">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            Every loan has an officer who walks the site. No call-centre underwriting — we believe 
                            in the human relationship behind the ledger.
                        </p>
                    </div>
                </div>

                <div className="hairline-strong opacity-20"></div>

                <div className="space-y-0">
                    {products.map((product) => (
                        <div
                            key={product.num}
                            className="product-row group grid grid-cols-1 xs:grid-cols-[60px_1fr] sm:grid-cols-[80px_1.4fr_1fr_60px] items-start gap-6 sm:gap-8 py-8 sm:py-10 border-b border-line last:border-0 hover:bg-surface/30 transition-all duration-500 px-4 xs:px-0 -mx-4 xs:mx-0"
                        >
                            <span className="num text-accent font-semibold text-[11px] xs:text-xs lg:text-sm mt-1">
                                {product.num}
                            </span>
                            <div className="flex flex-col">
                                <h3 className="font-display text-[22px] xs:text-[24px] sm:text-[26px] lg:text-[30px] leading-tight text-ink group-hover:text-accent transition-colors duration-300">
                                    {product.title}
                                </h3>
                                <p className="mt-3 text-[13px] xs:text-[14px] text-mute leading-relaxed font-light max-w-full sm:max-w-md">
                                    {product.desc}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6 mt-2 sm:mt-0">
                                <div className="space-y-1">
                                    <span className="num text-[9px] xs:text-[10px] uppercase tracking-widest text-mute/50">Ticket Range</span>
                                    <p className="font-display text-[18px] xs:text-[20px] lg:text-[22px] text-ink">{product.ticket}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="num text-[9px] xs:text-[10px] uppercase tracking-widest text-mute/50">Repayment Term</span>
                                    <p className="font-display text-[18px] xs:text-[20px] lg:text-[22px] text-ink">{product.term}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex justify-end mt-1">
                                <span className="text-2xl lg:text-3xl text-accent/20 group-hover:text-accent transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
