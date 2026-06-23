import Leaf from "@/components/ui/Leaf";
import { Users, Handshake, PiggyBank, Building2, type LucideIcon } from "lucide-react";

type Model = {
    num: string;
    title: string;
    desc: string;
    icon: LucideIcon;
};

const MODELS: Model[] = [
    {
        num: '01',
        title: 'Conventional Method',
        desc: 'Community-based or in-house banking.',
        icon: Users,
    },
    {
        num: '02',
        title: 'Bank Partnership Model',
        desc: 'The bank acts as the lender and the MFI acts as an agent which takes care of work related to supervision, recovery and credit monitoring.',
        icon: Handshake,
    },
    {
        num: '03',
        title: 'Banking Correspondents',
        desc: 'MFIs are allowed to collect the savings from the targeted population on behalf of the bank.',
        icon: PiggyBank,
    },
    {
        num: '04',
        title: 'Service Company Model',
        desc: 'Bank forms its own MFI perhaps as an NBFC, and then it works together with that particular MFI to provide loans and other services.',
        icon: Building2,
    },
];

export default function ModelsSection() {
    return (
        <section id="models" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 reveal">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Operating Models</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tightish text-midnight-blue">
                            How partner <em className="serif-em text-sapphire-blue">capital</em>
                            <br />
                            is deployed.
                        </h2>
                    </div>
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-80 md:max-w-85">
                        We don&apos;t take your capital and hope for results. We deploy it through proven
                        lending structures — each designed, tested, and optimised for consistent,
                        recoverable returns to our partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
                    {MODELS.map((model) => {
                        const Icon = model.icon;
                        return (
                            <div
                                key={model.num}
                                className="group reveal info-card relative overflow-hidden p-6 sm:p-8 transition-all duration-350 hover:-translate-y-1 hover:border-sapphire-blue/20 hover:shadow-[0_24px_50px_-30px_rgba(47,93,74,0.35)]"
                            >
                                {/* top accent bar — grows on hover */}
                                <span aria-hidden className="absolute left-0 top-0 h-0.5 w-full bg-sapphire-blue origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                                <div className="flex items-center justify-between mb-5 sm:mb-6">
                                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-sapphire-blue/10 transition-colors duration-300 group-hover:bg-sapphire-blue/15">
                                        <Icon className="w-5 h-5 text-sapphire-blue" strokeWidth={1.75} />
                                    </span>
                                    <span className="num text-accent!">{model.num}</span>
                                </div>

                                <h3 className="font-display text-[22px] sm:text-[24px] md:text-[26px] leading-tight mb-3 text-midnight-blue">
                                    {model.title}
                                </h3>
                                <p className="text-[13px] sm:text-[14px] text-mute leading-[1.6]">
                                    {model.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
