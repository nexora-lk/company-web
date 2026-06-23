import type { ReactNode } from "react";
import Leaf from "@/components/ui/Leaf";
import { Landmark, FileCheck2, BadgeCheck, Check, type LucideIcon } from "lucide-react";

type Reason = {
    num: string;
    icon: LucideIcon;
    title: ReactNode;
    body: string;
    proof: string;
};

const reasons: Reason[] = [
    {
        num: "01",
        icon: Landmark,
        title: <>Real assets, not <em className="serif-em text-sapphire-blue">speculation.</em></>,
        body: "Your capital goes into land, plantations, gemstones, and loan books — tangible assets you can visit and verify. Not funds, not derivatives, not promises.",
        proof: "Visit & verify any of 6 divisions",
    },
    {
        num: "02",
        icon: FileCheck2,
        title: <>Transparent <em className="serif-em text-sapphire-blue">reporting.</em></>,
        body: "Every partner receives the same quarterly financial report, audited by KPMG. Returns are calculated on actual revenue — not projections. You see exactly what your money earned.",
        proof: "Audited quarterly by KPMG",
    },
    {
        num: "03",
        icon: BadgeCheck,
        title: <>Consistent payment <em className="serif-em text-sapphire-blue">history.</em></>,
        body: "14 years of operation, paying every month and every year — to partners ranging from LKR 200,000 first-timers to multi-crore long-term partners.",
        proof: "14 years · paid on schedule",
    },
];

export default function WhySection() {
    return (
        <section className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 relative overflow-hidden bg-bg">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* ── Header ── */}
                <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 reveal">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-10 sm:w-14"></span>
                        <span className="eyebrow text-[10px] sm:text-[11px]">Why Partner with PGGC?</span>
                        <span className="hairline-strong w-10 sm:w-14"></span>
                    </div>
                    <h2 className="font-display text-[34px] sm:text-[46px] md:text-[54px] lg:text-[58px] leading-[0.99] tracking-tightish text-midnight-blue">
                        Three reasons 3,200+ <em className="serif-em text-sapphire-blue">partners</em> keep growing with us.
                    </h2>
                    <p className="mt-5 sm:mt-6 text-mute text-[14px] sm:text-[15px] leading-[1.7] max-w-xl mx-auto">
                        We are operators of real businesses — and we have been since 2013.
                        Here is why partners trust us with their capital, in plain language.
                    </p>
                </div>

                {/* ── Reason cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                    {reasons.map((r) => {
                        const Icon = r.icon;
                        return (
                            <article
                                key={r.num}
                                className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-line bg-surface/70 backdrop-blur-sm p-7 sm:p-8 lg:p-9 flex flex-col reveal transition-all duration-500 hover:-translate-y-1 hover:border-sapphire-blue/30 hover:shadow-[0_28px_70px_-40px_rgba(7,11,41,0.5)]"
                            >
                                {/* gold top bar (draws on hover) */}
                                <span
                                    aria-hidden
                                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-royal-blue to-sapphire-blue transition-transform duration-500 ease-out group-hover:scale-x-100"
                                />

                                {/* ghost number */}
                                <span className="pointer-events-none absolute top-5 right-6 font-display text-6xl sm:text-7xl leading-none tabular-nums text-sapphire-blue/[0.06] select-none">
                                    {r.num}
                                </span>

                                {/* icon badge */}
                                <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-sapphire-blue/8 text-sapphire-blue transition-all duration-300 group-hover:bg-sapphire-blue group-hover:text-white group-hover:scale-105">
                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                </span>

                                <h3 className="relative font-display text-[24px] sm:text-[26px] lg:text-[28px] leading-tight tracking-tightish text-midnight-blue mt-6">
                                    {r.title}
                                </h3>
                                <p className="relative mt-3 text-mute text-[13.5px] sm:text-[14px] leading-[1.7] font-light flex-1">
                                    {r.body}
                                </p>

                                <div className="hairline my-6"></div>

                                {/* proof chip */}
                                <span className="relative inline-flex items-center gap-2 self-start rounded-full border border-normal-gold/25 bg-normal-gold/[0.06] px-3.5 py-1.5 text-[12px] font-medium text-antique-gold">
                                    <span className="grid place-items-center w-4 h-4 rounded-full bg-antique-gold text-white shrink-0">
                                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                    </span>
                                    {r.proof}
                                </span>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
