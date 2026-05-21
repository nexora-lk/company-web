export default function BankAccountDetailsSection() {
    return (
        <section className="pb-24 lg:pb-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Bank Account Details</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            To sponsor an event, a <em className="serif-em">sapling,</em>
                            <br />
                            or the Easter Charity.
                        </h2>
                    </div>
                    <p className="col-span-12 lg:col-span-5 text-mute text-[14.5px] leading-[1.7] max-w-[440px]">
                        Direct transfers, in LKR or USD, go to the accounts below. Each is held in
                        the name of{' '}
                        <span className="text-ink">Prestige Glamour Group (Pvt) Ltd.</span> Please
                        reference the event name in the payment narration so we can route your gift.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <article className="bank-card">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="num text-ondark/60!">Bank · 01</div>
                                <div className="font-display text-[22px] leading-tight mt-1">
                                    Seylan Bank <em className="serif-em">PLC</em>
                                </div>
                            </div>
                            <span className="text-[10px] tracking-[0.18em] uppercase opacity-60">
                                LKR
                            </span>
                        </div>
                        <dl className="text-[13px] grid grid-cols-3 gap-y-3">
                            <dt className="opacity-60 col-span-1">Holder</dt>
                            <dd className="col-span-2">PG Group (Pvt) Ltd</dd>
                            <dt className="opacity-60 col-span-1">A/C No.</dt>
                            <dd className="col-span-2 font-display text-[16px]">0070‑1124‑5563</dd>
                            <dt className="opacity-60 col-span-1">Branch</dt>
                            <dd className="col-span-2">Colombo 03</dd>
                            <dt className="opacity-60 col-span-1">SWIFT</dt>
                            <dd className="col-span-2">SEYBLKLX</dd>
                        </dl>
                    </article>

                    <article className="bank-card">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="num text-ondark/60!">Bank · 02</div>
                                <div className="font-display text-[22px] leading-tight mt-1">
                                    Seylan Bank <em className="serif-em">PLC</em>
                                </div>
                            </div>
                            <span className="text-[10px] tracking-[0.18em] uppercase opacity-60">
                                USD
                            </span>
                        </div>
                        <dl className="text-[13px] grid grid-cols-3 gap-y-3">
                            <dt className="opacity-60 col-span-1">Holder</dt>
                            <dd className="col-span-2">PG Group (Pvt) Ltd</dd>
                            <dt className="opacity-60 col-span-1">A/C No.</dt>
                            <dd className="col-span-2 font-display text-[16px]">0070‑2208‑4419</dd>
                            <dt className="opacity-60 col-span-1">Branch</dt>
                            <dd className="col-span-2">Colombo 03 — FCY</dd>
                            <dt className="opacity-60 col-span-1">SWIFT</dt>
                            <dd className="col-span-2">SEYBLKLX</dd>
                        </dl>
                    </article>

                    <article className="bank-card">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="num text-ondark/60!">Bank · 03</div>
                                <div className="font-display text-[22px] leading-tight mt-1">
                                    DFCC <em className="serif-em">Bank</em>
                                </div>
                            </div>
                            <span className="text-[10px] tracking-[0.18em] uppercase opacity-60">
                                LKR
                            </span>
                        </div>
                        <dl className="text-[13px] grid grid-cols-3 gap-y-3">
                            <dt className="opacity-60 col-span-1">Holder</dt>
                            <dd className="col-span-2">PG Group (Pvt) Ltd</dd>
                            <dt className="opacity-60 col-span-1">A/C No.</dt>
                            <dd className="col-span-2 font-display text-[16px]">100‑8856‑1144</dd>
                            <dt className="opacity-60 col-span-1">Branch</dt>
                            <dd className="col-span-2">Kollupitiya</dd>
                            <dt className="opacity-60 col-span-1">SWIFT</dt>
                            <dd className="col-span-2">DFCCLKLX</dd>
                        </dl>
                    </article>

                    <article className="bank-card">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="num text-ondark/60!">Bank · 04</div>
                                <div className="font-display text-[22px] leading-tight mt-1">
                                    DFCC <em className="serif-em">Bank</em>
                                </div>
                            </div>
                            <span className="text-[10px] tracking-[0.18em] uppercase opacity-60">
                                USD
                            </span>
                        </div>
                        <dl className="text-[13px] grid grid-cols-3 gap-y-3">
                            <dt className="opacity-60 col-span-1">Holder</dt>
                            <dd className="col-span-2">PG Group (Pvt) Ltd</dd>
                            <dt className="opacity-60 col-span-1">A/C No.</dt>
                            <dd className="col-span-2 font-display text-[16px]">100‑9942‑8830</dd>
                            <dt className="opacity-60 col-span-1">Branch</dt>
                            <dd className="col-span-2">Kollupitiya — FCY</dd>
                            <dt className="opacity-60 col-span-1">SWIFT</dt>
                            <dd className="col-span-2">DFCCLKLX</dd>
                        </dl>
                    </article>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-[13px] text-mute">
                    <span>All gifts above LKR 50,000 are receipted within three working days.</span>
                    <a href="#" className="btn btn-primary">
                        Send a receipt request <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
