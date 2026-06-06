import ArrowIcon from "@/components/ui/ArrowIcon";
import Leaf from "@/components/ui/Leaf";

export default function BottomCTA() {
    return (
        <>
            {/* ─── Bottom CTA ─────────────────────────────────────────────── */}
            <section className="pb-20 sm:pb-24 lg:pb-36">
                <Leaf variant="tr" />
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 text-center">
                    <div className="reveal">
                        <div className="flex items-center justify-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-12 xs:w-16 sm:w-20 lg:w-24"></span>
                            <span className="eyebrow text-[10px] xs:text-xs whitespace-nowrap">Don&apos;t see your role?</span>
                            <span className="hairline-strong w-12 xs:w-16 sm:w-20 lg:w-24"></span>
                        </div>
                        <h2 className="font-display text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-4 sm:mb-6">
                            We&apos;re always looking for <em className="serif-em">talent</em>
                        </h2>
                        <p className="text-mute text-[13px] sm:text-sm mb-6 sm:mb-8 max-w-full sm:max-w-md mx-auto leading-relaxed">
                            Send your CV and a short note to our HR team. We keep all applications on
                            file and reach out when the right opportunity opens.
                        </p>
                        <a
                            href="mailto:careers@prestigeglamourgroupofcompany.com"
                            className="btn btn-primary text-[12px] sm:text-sm w-full sm:w-auto justify-center"
                        >
                            Email careers@prestigeglamourgroupofcompany.com <ArrowIcon size={12} className="ml-1" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}