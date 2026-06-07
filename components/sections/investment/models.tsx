import Leaf from "@/components/ui/Leaf";
import ModelCard from "@/components/sections/ModelCard";

export default function ModelsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-surface">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 reveal">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ 02 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px]">Investment Models</span>
                        </div>
                        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Six investment vehicles. <em className="serif-em">One </em>
                            <br className="hidden sm:block" />
                            standard of transparency.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[340px] mt-2 lg:mt-0">
                        Mix-and-match permitted — many of our investors hold positions across two
                        or three vehicles at once for diversified returns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <ModelCard
                        num="01"
                        duration=""
                        title={<>Monthly Returns</>}
                        description="Need regular monthly income? Choose monthly payouts. Invest for 1 year and receive 40% of your investment divided by 12 months. Paid to your bank account every month. No waiting. Predictable income. After 1 year, withdraw your capital or reinvest for another year."
                        minTicket="LKR 200,000"
                        targetIrr="40%"
                    />

                    <ModelCard
                        num="02"
                        duration=""
                        title={<>Annual Returns</>}
                        description="Want maximum compounding? Choose annual payout. Invest for 1 year and receive your full 60% return at the end of 12 months. Your capital works the entire year. You get paid once, big. After 1 year, withdraw everything or reinvest to compound your wealth."
                        minTicket="LKR 200,000"
                        targetIrr="60%"
                        dark
                    />
                </div>
            </div>
        </section>
    );
}
