import Leaf from "@/components/ui/Leaf";
import { BadgeCheck, Landmark, Gem, Tag, Sprout, Headset, type LucideIcon } from "lucide-react";

type Reason = { title: string; description: string; icon: LucideIcon };

const REASONS: Reason[] = [
    {
        title: 'Authentic, Certified Gems',
        description: 'Every gemstone is ethically sourced and comes with complete certification for quality and authenticity.',
        icon: BadgeCheck,
    },
    {
        title: 'Sri Lankan Heritage & Expertise',
        description: "We celebrate Sri Lanka's rich gem legacy with expert craftsmanship and industry knowledge spanning decades.",
        icon: Landmark,
    },
    {
        title: 'Wide Range of Rare Gems',
        description: "From vibrant Sapphires to stunning Rubies, Alexandrites, and more—our collection showcases nature's finest creations.",
        icon: Gem,
    },
    {
        title: 'Transparent & Fair Pricing',
        description: 'We believe in honest pricing with no hidden costs, ensuring complete transparency in every transaction.',
        icon: Tag,
    },
    {
        title: 'Ethical & Sustainable Sourcing',
        description: 'Our mining operations follow ethical practices, ensuring every gemstone is sourced responsibly and sustainably.',
        icon: Sprout,
    },
    {
        title: 'Expert Consultation & Support',
        description: 'Our expert team is ready to guide you in selecting the perfect gemstone for your needs and requirements.',
        icon: Headset,
    },
];

const TRUST = [
    { val: '20+', label: 'Years Experience' },
    { val: '18', label: 'Countries Served' },
    { val: '100%', label: 'Certified Gems' },
    { val: 'GIA & NGJA', label: 'Certified' },
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 reveal">
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <span className="hairline-strong w-[80px] sm:w-[120px]" />
                        <span className="eyebrow">Why Choose PGG Gems</span>
                    </div>
                    <h2 className="font-display text-midnight-blue text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish max-w-full md:max-w-4xl">
                        Why investors <em className="serif-em text-sapphire-blue">choose</em>
                        <br />
                        PGG Gems.
                    </h2>
                </div>

                {/* Reasons Grid: 1→2(sm)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
                    {REASONS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="group reveal relative overflow-hidden bg-surface rounded-[16px] sm:rounded-[18px] p-5 sm:p-6 lg:p-8 border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_-30px_rgba(7,11,41,0.45)] hover:border-sapphire-blue/30"
                            >
                                <span aria-hidden className="absolute left-0 top-0 h-0.5 w-full bg-sapphire-blue origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                                <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 mb-4 transition-colors duration-300 group-hover:bg-accent/15">
                                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                                </span>
                                <h3 className="font-display text-[16px] sm:text-[17px] md:text-[18px] leading-tight text-midnight-blue mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.6]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Indicators: 2→4(lg) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 reveal">
                    {TRUST.map((t, i) => (
                        <div key={i} className="bg-accent2/40 rounded-[12px] sm:rounded-[14px] p-4 sm:p-5 lg:p-6 border border-accent/20 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 reveal">
                            <div className="font-display text-[26px] sm:text-[32px] lg:text-[38px] text-accent mb-1 leading-none">
                                {t.val}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-mute uppercase tracking-widest font-medium">
                                {t.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
