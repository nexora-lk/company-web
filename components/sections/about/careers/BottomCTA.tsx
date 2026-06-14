import ArrowIcon from "@/components/ui/ArrowIcon";
import Leaf from "@/components/ui/Leaf";

export default function BottomCTA() {
    return (
        <section className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="reveal relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-linear-to-br from-sapphire-blue via-royal-blue to-midnight-blue px-6 py-12 sm:px-10 sm:py-16 lg:py-20 text-center">
                    {/* gold glow */}
                    <span aria-hidden className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-normal-gold/15 rounded-full blur-3xl" />

                    <div className="relative">
                        <div className="flex items-center justify-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span aria-hidden className="h-px w-12 sm:w-20 bg-linear-to-r from-transparent to-normal-gold/70" />
                            <span className="eyebrow text-[10px] xs:text-xs whitespace-nowrap text-ondark/70!">Don&apos;t see your role?</span>
                            <span aria-hidden className="h-px w-12 sm:w-20 bg-linear-to-l from-transparent to-normal-gold/70" />
                        </div>
                        <h2 className="font-display text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-tightish mb-4 sm:mb-6 text-ondark">
                            We&apos;re always looking for <em className="serif-em text-light-gold">talent</em>
                        </h2>
                        <p className="text-ondark/70 text-[13px] sm:text-sm mb-7 sm:mb-9 max-w-full sm:max-w-md mx-auto leading-relaxed">
                            Send your CV and a short note to our HR team. We keep all applications on
                            file and reach out when the right opportunity opens.
                        </p>
                        <a
                            href="mailto:careers@prestigeglamourgroupofcompany.com"
                            className="btn group bg-[#f1ece0] text-[#132074] font-semibold w-full sm:w-auto justify-center shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-normal-gold hover:text-[#0a0e4d] text-[12px] sm:text-sm"
                        >
                            Email careers@prestigeglamourgroupofcompany.com
                            <ArrowIcon size={12} className="ml-1 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
