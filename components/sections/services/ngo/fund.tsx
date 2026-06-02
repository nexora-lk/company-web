export default function FundSection() {
    return (
        <section id="fund" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bg border-t border-line">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Support Our Cause</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tightish mb-6">
                            Support our <em className="serif-em">community</em>
                            <br />
                            programmes
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-mute leading-[1.6] sm:leading-[1.7] max-w-lg mb-8">
                            Your contributions directly fund our ongoing programmes — plantation development, mangrove
                            conservation at Kadolana, and our upcoming disabled persons support initiative. Every donation
                            is tracked and reported with the same transparency as our commercial businesses.
                        </p>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8">
                        <div className="bg-surface rounded-[20px] p-6 sm:p-8 border border-line">
                            <h3 className="font-display text-[22px] sm:text-[24px] mb-6">Bank Details</h3>
                            <p className="text-sm text-mute mb-6">
                                For direct bank transfers or standing orders, please use the following account details.
                                Ensure you include your name as the reference.
                            </p>
                            
                            <dl className="space-y-4 text-[13px] sm:text-[14px]">
                                <div className="border-b border-line pb-4 last:border-0 last:pb-0">
                                    <dt className="num text-mute mb-1">Bank Name</dt>
                                    <dd className="font-medium">Commercial Bank of Ceylon</dd>
                                </div>
                                <div className="border-b border-line pb-4 last:border-0 last:pb-0">
                                    <dt className="num text-mute mb-1">Account Name</dt>
                                    <dd className="font-medium">Prestige Glamour NGO Foundation</dd>
                                </div>
                                <div className="border-b border-line pb-4 last:border-0 last:pb-0">
                                    <dt className="num text-mute mb-1">Account Number</dt>
                                    <dd className="font-medium">1000 234 567</dd>
                                </div>
                                <div className="border-b border-line pb-4 last:border-0 last:pb-0">
                                    <dt className="num text-mute mb-1">Branch</dt>
                                    <dd className="font-medium">Colombo City Office</dd>
                                </div>
                                <div className="border-b border-line pb-4 last:border-0 last:pb-0">
                                    <dt className="num text-mute mb-1">Swift Code</dt>
                                    <dd className="font-medium">CCEBLKLX</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
