import Leaf from "@/components/ui/Leaf";
import {
    CalendarClock,
    Wallet,
    TrendingUp,
    Banknote,
    RefreshCw,
    Check,
    type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; label: string; value: string };
type Model = {
    num: string;
    tag: string;
    rate: string;
    title: string;
    description: string;
    features: Feature[];
    bestFor: string;
    highlight?: string;
    dark?: boolean;
};

const models: Model[] = [
    {
        num: "01",
        tag: "Steady Income",
        rate: "40",
        title: "Monthly Returns",
        description:
            "Need regular income? Receive 40% of your solutions split across 12 monthly payouts, deposited straight to your bank — predictable cash flow, no waiting.",
        features: [
            { icon: CalendarClock, label: "Payout", value: "Every month" },
            { icon: Wallet, label: "Annual return", value: "40% / year" },
            { icon: Banknote, label: "Min. ticket", value: "LKR 200,000" },
            { icon: RefreshCw, label: "After 1 year", value: "Withdraw or reinvest" },
        ],
        bestFor: "Best for partners who want regular cash flow",
    },
    {
        num: "02",
        tag: "Maximum Growth",
        rate: "60",
        title: "Annual Returns",
        description:
            "Want maximum compounding? Your capital works the full year and pays your entire 60% return at the 12-month mark — one larger payout, built to grow your wealth.",
        features: [
            { icon: CalendarClock, label: "Payout", value: "Once at maturity" },
            { icon: TrendingUp, label: "Annual return", value: "60% / year" },
            { icon: Banknote, label: "Min. ticket", value: "LKR 200,000" },
            { icon: RefreshCw, label: "After 1 year", value: "Withdraw or compound" },
        ],
        bestFor: "Best for partners maximising long-term growth",
        highlight: "Highest yield",
        dark: true,
    },
];

export default function ModelsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-[#f6e9c6]/60">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 reveal">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="hairline-strong w-[80px] sm:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px]">Working Capital Models</span>
                        </div>
                        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[820px] text-midnight-blue">
                            Two pathways. <em className="serif-em text-sapphire-blue">One </em>
                            <br className="hidden sm:block" />
                            standard of transparency.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[340px] mt-2 lg:mt-0">
                        Mix-and-match permitted — many of our partners hold positions across both
                        vehicles at once for diversified returns.
                    </p>
                </div>

                {/* ── Comparison cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
                    {models.map((m) => {
                        const dark = m.dark;
                        return (
                            <article
                                key={m.num}
                                className={`model-card relative overflow-hidden rounded-[22px] sm:rounded-[28px] p-7 sm:p-9 lg:p-10 flex flex-col reveal transition-all duration-300 hover:shadow-2xl ${
                                    dark
                                        ? "bg-sapphire-blue text-white shadow-xl"
                                        : "bg-surface border border-line text-ink"
                                }`}
                            >
                                {/* highlight ribbon */}
                                {m.highlight && (
                                    <span className="absolute top-6 right-6 sm:top-7 sm:right-7 inline-flex items-center gap-1.5 rounded-full bg-normal-gold/15 border border-normal-gold/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-light-gold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-light-gold" />
                                        {m.highlight}
                                    </span>
                                )}

                                {/* tag + model number */}
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`eyebrow text-[10px] sm:text-[11px] ${
                                            dark ? "text-light-gold" : "text-sapphire-blue"
                                        }`}
                                    >
                                        {m.tag}
                                    </span>
                                    <span className={`num text-[10px] ${dark ? "text-white/40" : "text-mute/60"}`}>
                                        · Model {m.num}
                                    </span>
                                </div>

                                {/* hero return % */}
                                <div className="mt-5 sm:mt-6 flex items-end gap-2">
                                    <span className="font-display text-[64px] sm:text-[80px] lg:text-[88px] leading-[0.85] tracking-tightish">
                                        {m.rate}
                                    </span>
                                    <span
                                        className={`pb-2 font-display text-[22px] sm:text-[26px] leading-none ${
                                            dark ? "text-light-gold" : "text-sapphire-blue"
                                        }`}
                                    >
                                        %
                                    </span>
                                    <span
                                        className={`pb-2.5 ml-1 text-[12px] sm:text-[13px] leading-tight ${
                                            dark ? "text-white/55" : "text-mute"
                                        }`}
                                    >
                                        return
                                        <br />
                                        per year
                                    </span>
                                </div>

                                <h3
                                    className={`font-display text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.05] tracking-tightish mt-5 ${
                                        dark ? "text-white" : "text-midnight-blue"
                                    }`}
                                >
                                    {m.title}
                                </h3>
                                <p
                                    className={`text-[13.5px] sm:text-[14.5px] leading-[1.7] font-light mt-3 ${
                                        dark ? "text-white/70" : "text-mute"
                                    }`}
                                >
                                    {m.description}
                                </p>

                                {/* feature list */}
                                <ul
                                    className={`mt-6 sm:mt-7 grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-4 border-t pt-6 ${
                                        dark ? "border-white/10" : "border-line"
                                    }`}
                                >
                                    {m.features.map((f) => {
                                        const Icon = f.icon;
                                        return (
                                            <li key={f.label} className="flex items-center gap-3">
                                                <span
                                                    className={`grid place-items-center w-9 h-9 rounded-full shrink-0 ${
                                                        dark
                                                            ? "bg-white/10 text-light-gold"
                                                            : "bg-sapphire-blue/8 text-sapphire-blue"
                                                    }`}
                                                >
                                                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                                                </span>
                                                <div className="min-w-0">
                                                    <div
                                                        className={`eyebrow text-[9px] ${
                                                            dark ? "text-white/45" : "text-mute"
                                                        }`}
                                                    >
                                                        {f.label}
                                                    </div>
                                                    <div
                                                        className={`text-[13.5px] font-medium leading-tight mt-0.5 ${
                                                            dark ? "text-white" : "text-midnight-blue"
                                                        }`}
                                                    >
                                                        {f.value}
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* best for */}
                                <div
                                    className={`mt-auto pt-7 flex items-center gap-2.5 text-[12.5px] sm:text-[13px] ${
                                        dark ? "text-white/70" : "text-mute"
                                    }`}
                                >
                                    <span
                                        className={`grid place-items-center w-5 h-5 rounded-full shrink-0 ${
                                            dark ? "bg-light-gold text-midnight-blue" : "bg-sapphire-blue text-white"
                                        }`}
                                    >
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </span>
                                    {m.bestFor}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
