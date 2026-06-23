import Leaf from "@/components/ui/Leaf";
import { Telescope, Compass } from "lucide-react";

export default function VisionSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg relative overflow-hidden">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10 relative z-10">

                {/* ── Header ── */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 reveal">
                    <span className="hairline-strong w-10 sm:w-14"></span>
                    <span className="eyebrow text-[10px] sm:text-[11px]">Our Purpose</span>
                    <span className="hairline-strong w-10 sm:w-14"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 lg:gap-8 items-stretch">

                    {/* ── Vision card ── */}
                    <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-light-gold p-8 xs:p-10 sm:p-12 lg:p-14 flex flex-col min-h-[300px] sm:min-h-[360px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(7,11,41,0.45)] reveal">
                        <Telescope aria-hidden className="absolute -bottom-6 -right-4 w-40 h-40 text-normal-gold/25" strokeWidth={1} />

                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-midnight-blue/10 text-midnight-blue">
                                    <Telescope className="w-5 h-5" strokeWidth={1.75} />
                                </span>
                                <span className="eyebrow text-midnight-blue text-[11px]">Vision</span>
                            </div>
                            <span className="rounded-full bg-midnight-blue px-3 py-1 text-[10px] font-semibold tracking-widest text-light-gold">
                                2030
                            </span>
                        </div>

                        <p className="relative font-display text-2xl xs:text-3xl sm:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.12] tracking-tightish text-midnight-blue mt-8 sm:mt-10">
                            To be Sri Lanka&#39;s <em className="serif-em text-sapphire-blue">most trusted</em> working capital company
                            and proof that real operations deliver real returns.
                        </p>

                        <div className="relative mt-auto pt-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-midnight-blue/30" />
                            <span className="eyebrow text-midnight-blue/60 text-[9px]">Where we are headed</span>
                        </div>
                    </article>

                    {/* ── Mission card ── */}
                    <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-linear-to-br from-sapphire-blue to-royal-blue text-white p-8 xs:p-10 sm:p-12 lg:p-14 flex flex-col min-h-[300px] sm:min-h-[360px] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_80px_-40px_rgba(7,11,41,0.7)] reveal">
                        <Compass aria-hidden className="absolute -bottom-6 -right-4 w-40 h-40 text-white/10" strokeWidth={1} />
                        <span aria-hidden className="pointer-events-none absolute -top-16 -right-12 h-40 w-40 rounded-full bg-light-gold/15 blur-3xl" />

                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/10 text-light-gold">
                                    <Compass className="w-5 h-5" strokeWidth={1.75} />
                                </span>
                                <span className="eyebrow text-white/70 text-[11px]">Mission</span>
                            </div>
                            <span className="rounded-full bg-light-gold px-3 py-1 text-[10px] font-semibold tracking-widest text-midnight-blue">
                                Daily
                            </span>
                        </div>

                        <p className="relative font-display text-2xl xs:text-3xl sm:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.12] tracking-tightish mt-8 sm:mt-10">
                            To deliver consistent, <em className="serif-em text-light-gold">audited</em> returns to every partner — while employing 800+ Sri Lankans.
                        </p>

                        <div className="relative mt-auto pt-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-white/30" />
                            <span className="eyebrow text-white/50 text-[9px]">How we get there</span>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
