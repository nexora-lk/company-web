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
        <section id="process" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-surface relative overflow-hidden">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 sm:mb-20 lg:mb-24 reveal">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="hairline-strong w-12 sm:w-16"></span>
                        <span className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute">Investment Process Guide</span>
                        <span className="hairline-strong w-12 sm:w-16"></span>
                    </div>
                    <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[800px]">
                        Your Investment Journey — <br className="hidden sm:block" />
                        <em className="serif-em text-accent">Eight Simple Steps</em>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="absolute left-9 sm:left-1/2 top-0 bottom-0 w-[1px] bg-line transform sm:-translate-x-1/2 hidden sm:block"></div>

                    <div className="space-y-12 sm:space-y-24">
                        {steps.map((step, idx) => {
                            const isEven = idx % 2 !== 0;
                            const Icon = step.icon;

                            return (
                                <div key={idx} className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 reveal ${isEven ? 'sm:flex-row-reverse' : ''}`}>

                                    {/* Mobile Vertical Line */}
                                    {idx !== steps.length - 1 && (
                                        <div className="absolute left-9 top-14 bottom-[-3rem] w-[1px] bg-line sm:hidden"></div>
                                    )}

                                    {/* Timeline Node */}
                                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-bg border border-accent text-accent shadow-[0_0_0_8px_var(--c-surface)] z-10 hover:scale-110 hover:bg-accent/5 transition-transform duration-300">
                                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full sm:w-1/2 pl-[4.5rem] sm:pl-0 ${isEven ? 'sm:pr-12 lg:pr-16 text-left' : 'sm:pl-12 lg:pl-16 text-left'}`}>
                                        <div className="bg-bg border border-line rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 relative group">

                                            <div className="flex items-start justify-between mb-4 sm:mb-5">
                                                <span className="num text-mute text-[10px] sm:text-[11px]">Step · {step.num}</span>
                                            </div>

                                            <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.05] tracking-tightish mb-6 sm:mb-8">
                                                {step.title}
                                            </h3>

                                            <div className="space-y-5 sm:space-y-6 text-[13.5px] sm:text-[14.5px]">
                                                <div className="flex flex-col gap-1 sm:gap-1.5">
                                                    <span className="eyebrow text-[10px] text-mute mb-0.5">What You Do</span>
                                                    <p className="text-ink leading-[1.7]">{step.youDo}</p>
                                                </div>

                                                <div className="flex flex-col gap-1 sm:gap-1.5">
                                                    <span className="eyebrow text-[10px] text-mute mb-0.5">What We Do</span>
                                                    <p className="text-ink leading-[1.7]">{step.weDo}</p>
                                                </div>

                                                {step.timeline && (
                                                    <div className="flex flex-col gap-1 sm:gap-1.5">
                                                        <span className="eyebrow text-[10px] text-mute mb-0.5">Timeline</span>
                                                        <p className="text-ink leading-[1.7]">{step.timeline}</p>
                                                    </div>
                                                )}

                                                {step.requiredDocs && (
                                                    <div className="flex flex-col gap-2 pt-1 sm:pt-2">
                                                        <span className="eyebrow text-[10px] text-mute mb-0.5">Required Documents</span>
                                                        <ul className="space-y-1.5 sm:space-y-2">
                                                            {step.requiredDocs.map((doc, i) => (
                                                                <li key={i} className="flex items-start gap-2.5 text-ink leading-[1.6]">
                                                                    <div className="w-[5px] h-[5px] rounded-full bg-accent/40 mt-[7px] flex-shrink-0"></div>
                                                                    {doc}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                <div className="hairline !my-5 sm:!my-6"></div>

                                                <div className="flex flex-col gap-2.5 sm:gap-3">
                                                    <span className="eyebrow text-[10px] text-accent mb-0.5">What You Get</span>
                                                    {step.youGet && (
                                                        <div className="flex items-start gap-3 bg-accent/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-accent/10">
                                                            <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                                                            <span className="text-ink font-medium leading-[1.6]">{step.youGet}</span>
                                                        </div>
                                                    )}
                                                    {step.youGetList && (
                                                        <ul className="space-y-3 bg-accent/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-accent/10">
                                                            {step.youGetList.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                                                                    <span className="text-ink font-medium leading-[1.6]">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Important Note */}
                <div className="mt-20 sm:mt-24 lg:mt-32 max-w-3xl mx-auto reveal">
                    <div className="bg-bg border border-accent/20 rounded-[24px] p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-display text-[20px] sm:text-[24px] mb-3">Important Note for Investors</h4>
                            <p className="text-ink leading-[1.6] text-[14.5px] sm:text-[15.5px]">
                                When claiming your returns, you must present your <span className="font-semibold">original investment agreement</span> and <span className="font-semibold">company certificate</span> at least one week before the scheduled return date.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
