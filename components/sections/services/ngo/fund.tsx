import Leaf from "@/components/ui/Leaf";
import { Landmark, Sprout, Waves, HeartHandshake, type LucideIcon } from "lucide-react";

type Allocation = { icon: LucideIcon; title: string; desc: string };

const ALLOCATIONS: Allocation[] = [
    { icon: Sprout, title: 'Plantation development', desc: 'Livelihood and reforestation programmes in rural estates.' },
    { icon: Waves, title: 'Mangrove conservation', desc: 'Coastal restoration at Kadolana with partner communities.' },
    { icon: HeartHandshake, title: 'Disabled persons support', desc: 'Upcoming initiative for accessibility and inclusion.' },
];

const BANK_DETAILS = [
    { k: 'Bank Name', v: 'Commercial Bank of Ceylon' },
    { k: 'Account Name', v: 'Prestige Glamour NGO Foundation' },
    { k: 'Account Number', v: '1000 234 567' },
    { k: 'Branch', v: 'Colombo City Office' },
    { k: 'Swift Code', v: 'CCEBLKLX' },
];

export default function FundSection() {
    return (
        <section id="fund" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg border-t border-line">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start reveal">
                    <div className="lg:col-span-6 reveal">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Support Our Cause</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tightish mb-6 text-midnight-blue">
                            Support our <em className="serif-em text-sapphire-blue">community</em>
                            <br />
                            programmes
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-mute leading-[1.6] sm:leading-[1.7] max-w-lg mb-8">
                            Your contributions directly fund our ongoing programmes. Every donation
                            is tracked and reported with the same transparency as our commercial businesses.
                        </p>

                        {/* Where funds go */}
                        <ul className="space-y-4 max-w-lg">
                            {ALLOCATIONS.map((a) => {
                                const Icon = a.icon;
                                return (
                                    <li key={a.title} className="reveal flex items-start gap-3.5">
                                        <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-accent/10">
                                            <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                                        </span>
                                        <div>
                                            <h3 className="font-display text-[16px] sm:text-[17px] leading-tight text-midnight-blue">{a.title}</h3>
                                            <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.5] mt-0.5">{a.desc}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8 reveal">
                        <div className="bg-surface rounded-[20px] p-6 sm:p-8 border border-line reveal">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="grid place-items-center w-11 h-11 rounded-xl bg-sapphire-blue/10">
                                    <Landmark className="w-5 h-5 text-sapphire-blue" strokeWidth={1.75} />
                                </span>
                                <h3 className="font-display text-[22px] sm:text-[24px] text-midnight-blue">Bank Details</h3>
                            </div>
                            <p className="text-sm text-mute mb-6">
                                For direct bank transfers or standing orders, please use the following account details.
                            </p>

                            <dl className="space-y-4 text-[13px] sm:text-[14px]">
                                {BANK_DETAILS.map((d) => (
                                    <div key={d.k} className="border-b border-line pb-4 last:border-0 last:pb-0">
                                        <dt className="num text-mute mb-1">{d.k}</dt>
                                        <dd className="font-medium text-midnight-blue">{d.v}</dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="mt-6 rounded-xl bg-accent/[0.07] border border-accent/15 px-4 py-3 text-[12.5px] sm:text-[13px] text-accent leading-relaxed">
                                Please include your name as the payment reference so we can acknowledge your gift.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
