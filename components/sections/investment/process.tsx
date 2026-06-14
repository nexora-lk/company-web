import Leaf from "@/components/ui/Leaf";
import {
    FileText,
    Landmark,
    Scale,
    CheckCircle2,
    Receipt,
    Users,
    ClipboardCheck,
    PenTool,
    ShieldCheck,
    AlertCircle,
    User,
    Building2,
    type LucideIcon
} from "lucide-react";

type Step = {
    num: string;
    title: string;
    icon: LucideIcon;
    youDo: string;
    weDo: string;
    youGet?: string;
    youGetList?: string[];
    requiredDocs?: string[];
    timeline?: string;
};

const steps: Step[] = [
    {
        num: "01",
        title: "Quotation",
        icon: FileText,
        youDo: "Request a quotation for your preferred investment model. Choose your investment amount and division.",
        weDo: "Prepare a personalized quote based on your investment amount and selected model.",
        youGet: "Personalized Investment Quotation",
    },
    {
        num: "02",
        title: "Deposit",
        icon: Landmark,
        youDo: "Make the deposit as per the agreed quotation to confirm and initiate the investment.",
        weDo: "Confirm receipt of your deposit and initiate the onboarding process.",
        youGet: "Deposit confirmation",
    },
    {
        num: "03",
        title: "Company Bill Issued",
        icon: Receipt,
        youDo: "Await your official bill after deposit receipt.",
        weDo: "Issue an official bill to you within 2 hours of receiving the deposit.",
        youGet: "Official Company Bill",
    },
    {
        num: "04",
        title: "RM Visit & Document Collection",
        icon: Users,
        youDo: "Meet with your assigned Relationship Manager and provide required documents.",
        weDo: "Your assigned RM/BM/GM visits you, presents a formal proposal, and collects documents.",
        requiredDocs: [
            "NIC copy",
            "Bank book front page copy",
            "Nominee details",
            "NIC copy (nominee)",
            "Bank front page copy (nominee)",
            "Bank details",
            "Original deposit receipt"
        ],
        youGet: "Formal Investment Proposal",
    },
    {
        num: "05",
        title: "Agreement Process",
        icon: ClipboardCheck,
        youDo: "Review the investment agreement with your Relationship Manager.",
        weDo: "Visit you again to review and proceed with the investment agreement based on collected documents.",
        youGet: "Agreement review session",
    },
    {
        num: "06",
        title: "Agreement Signing & Certificate Issued",
        icon: PenTool,
        youDo: "Sign the investment agreement.",
        weDo: "Counter-sign the agreement and issue an official investment certificate.",
        youGet: "Official Investment Certificate",
    },
    {
        num: "07",
        title: "Legal Verification",
        icon: ShieldCheck,
        youDo: "No action required during this phase.",
        weDo: "Forward signed agreement and documents to company lawyer for thorough verification.",
        youGet: "Legal verification & certification",
    },
    {
        num: "08",
        title: "Final Signing & Completion",
        icon: Scale,
        youDo: "Sign the final documents in the presence of the company lawyer.",
        weDo: "Complete the process, provide a copy of the signed agreement, and secure original documents.",
        youGet: "Signed Investment Agreement copy",
    }
];

export default function ProcessSection() {
    return (
        <section
            id="process"
            className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-[#f6e9c6]/60 relative overflow-hidden"
        >
            <Leaf variant="tr" />
            <Leaf variant="bl" />

            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16 reveal">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="hairline-strong w-12 sm:w-16"></span>
                        <span className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute">Investment Process Guide</span>
                        <span className="hairline-strong w-12 sm:w-16"></span>
                    </div>
                    <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[800px] text-midnight-blue">
                        Your Investment Journey — <br className="hidden sm:block" />
                        <em className="serif-em text-sapphire-blue">Eight Simple Steps</em>
                    </h2>

                    {/* Legend — explains the colour coding */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-7 sm:mt-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-normal-gold/30 bg-normal-gold/[0.06] px-3.5 py-1.5 text-[11px] font-medium text-antique-gold">
                            <span className="w-2 h-2 rounded-full bg-antique-gold"></span>
                            Your action
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-sapphire-blue/20 bg-sapphire-blue/[0.05] px-3.5 py-1.5 text-[11px] font-medium text-sapphire-blue">
                            <span className="w-2 h-2 rounded-full bg-sapphire-blue"></span>
                            PGGC handles
                        </span>
                    </div>
                </div>

                {/* ── Timeline ── */}
                <div className="max-w-3xl mx-auto">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;

                        return (
                            <div
                                key={idx}
                                className="group relative grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-7 reveal"
                            >
                                {/* Rail: connecting line + node */}
                                <div className="relative flex flex-col items-center">
                                    {!isLast && (
                                        <span className="absolute left-1/2 -translate-x-1/2 top-12 sm:top-16 bottom-0 w-px bg-linear-to-b from-sapphire-blue/30 to-line" />
                                    )}
                                    <div className="relative z-10 grid place-items-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-surface border border-sapphire-blue/40 text-sapphire-blue shadow-[0_0_0_6px_rgba(246,233,198,0.7)] transition-all duration-300 group-hover:bg-sapphire-blue group-hover:text-white group-hover:border-sapphire-blue group-hover:scale-105">
                                        <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="pb-8 sm:pb-12">
                                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-surface/70 backdrop-blur-sm p-5 sm:p-7 lg:p-8 transition-all duration-500 group-hover:border-sapphire-blue/30 group-hover:shadow-[0_24px_60px_-32px_rgba(7,11,41,0.4)]">
                                        {/* ghost number */}
                                        <span className="pointer-events-none absolute top-3 right-5 font-display text-5xl sm:text-6xl leading-none tabular-nums text-sapphire-blue/[0.06] select-none">
                                            {step.num}
                                        </span>

                                        <div className="relative">
                                            <span className="eyebrow text-sapphire-blue text-[10px] tracking-widest">Step {step.num}</span>
                                            <h3 className="font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.08] tracking-tightish text-midnight-blue mt-1.5">
                                                {step.title}
                                            </h3>

                                            {/* Two-party lanes */}
                                            <div className="mt-5 grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-line bg-line">
                                                <div className="bg-surface p-4 sm:p-5">
                                                    <div className="flex items-center gap-2 mb-2.5">
                                                        <span className="grid place-items-center w-6 h-6 rounded-full bg-normal-gold/15 text-antique-gold">
                                                            <User className="w-3 h-3" strokeWidth={2} />
                                                        </span>
                                                        <span className="eyebrow text-antique-gold text-[10px]">You</span>
                                                    </div>
                                                    <p className="text-ink text-[13px] sm:text-[13.5px] leading-[1.65] font-light">{step.youDo}</p>
                                                </div>
                                                <div className="bg-surface p-4 sm:p-5">
                                                    <div className="flex items-center gap-2 mb-2.5">
                                                        <span className="grid place-items-center w-6 h-6 rounded-full bg-sapphire-blue/10 text-sapphire-blue">
                                                            <Building2 className="w-3 h-3" strokeWidth={2} />
                                                        </span>
                                                        <span className="eyebrow text-sapphire-blue text-[10px]">PGGC</span>
                                                    </div>
                                                    <p className="text-ink text-[13px] sm:text-[13.5px] leading-[1.65] font-light">{step.weDo}</p>
                                                </div>
                                            </div>

                                            {/* Timeline note */}
                                            {step.timeline && (
                                                <p className="mt-4 text-[12.5px] text-mute font-light">
                                                    <span className="eyebrow text-mute text-[10px] mr-1.5">Timeline</span>
                                                    {step.timeline}
                                                </p>
                                            )}

                                            {/* Required documents as chips */}
                                            {step.requiredDocs && (
                                                <div className="mt-4">
                                                    <span className="eyebrow text-mute text-[10px]">Documents to bring</span>
                                                    <div className="mt-2.5 flex flex-wrap gap-2">
                                                        {step.requiredDocs.map((doc, i) => (
                                                            <span
                                                                key={i}
                                                                className="inline-flex items-center gap-1.5 rounded-full border border-sapphire-blue/15 bg-sapphire-blue/[0.04] px-3 py-1.5 text-[12px] text-ink font-light"
                                                            >
                                                                <span className="w-1 h-1 rounded-full bg-sapphire-blue/50"></span>
                                                                {doc}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Outcome — reward chip */}
                                            {step.youGet && (
                                                <div className="mt-5 flex items-start gap-3 rounded-xl sm:rounded-2xl border border-normal-gold/25 bg-linear-to-r from-normal-gold/[0.1] to-light-gold/[0.05] p-3.5 sm:p-4">
                                                    <CheckCircle2 className="w-5 h-5 text-antique-gold mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                                                    <div>
                                                        <span className="eyebrow text-antique-gold text-[9px] block mb-0.5">You receive</span>
                                                        <span className="text-midnight-blue font-medium text-[14px] leading-[1.5]">{step.youGet}</span>
                                                    </div>
                                                </div>
                                            )}
                                            {step.youGetList && (
                                                <ul className="mt-5 space-y-2.5 rounded-2xl border border-normal-gold/25 bg-linear-to-r from-normal-gold/[0.1] to-light-gold/[0.05] p-4 sm:p-5">
                                                    {step.youGetList.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-antique-gold mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                                                            <span className="text-midnight-blue font-medium text-[14px] leading-[1.5]">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Important Note ── */}
                <div className="mt-10 sm:mt-14 max-w-3xl mx-auto reveal">
                    <div className="bg-surface/80 backdrop-blur-sm border border-sapphire-blue/20 rounded-[24px] p-7 sm:p-9 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-full bg-sapphire-blue/10 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-sapphire-blue" />
                        </div>
                        <div>
                            <h4 className="font-display text-[20px] sm:text-[24px] mb-2.5 text-midnight-blue">Important Note for Investors</h4>
                            <p className="text-ink leading-[1.6] text-[14.5px] sm:text-[15.5px] font-light">
                                When claiming your returns, you must present your <span className="font-semibold text-midnight-blue">original investment agreement</span> and <span className="font-semibold text-midnight-blue">company certificate</span> at least one week before the scheduled return date.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
