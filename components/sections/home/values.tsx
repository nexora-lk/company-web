import { values } from '@/data/home';
import Leaf from '@/components/ui/Leaf';
import { ArrowUpRight } from 'lucide-react';

export default function ValuesSection() {
    return (
        <section
            id="values"
            className="relative py-12 xs:py-14 md:py-16 lg:py-20 xl:py-24 bg-bg-alt"
        >
            <Leaf variant="bl" />

            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
                    {/* ── Sticky brand panel ── */}
                    <aside className="lg:col-span-5 lg:order-2 lg:sticky lg:top-24 self-start reveal">
                        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-sapphire-blue to-midnight-blue p-8 sm:p-10 lg:p-11 shadow-[0_32px_80px_-40px_rgba(7,11,41,0.7)]">
                            {/* gold glow accent */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-normal-gold/20 blur-3xl"
                            />

                            <div className="relative flex items-center gap-3 mb-7 sm:mb-9">
                                <span className="h-px w-12 bg-normal-gold/70" />
                                <span className="eyebrow text-light-gold text-[10px] sm:text-[11px] tracking-[0.22em]">
                                    03 · Core Values
                                </span>
                            </div>

                            <h2 className="relative font-display text-3xl xs:text-4xl sm:text-5xl lg:text-[3.1rem] leading-none tracking-tightish text-white">
                                Six principles. Behind{' '}
                                <em className="serif-em text-light-gold">every</em> facility,
                                every return, every handshake.
                            </h2>

                            <p className="relative mt-6 sm:mt-7 text-[14px] sm:text-[15px] text-white/60 leading-relaxed font-light max-w-md">
                                Our values are not marketing words — they are how we protect your
                                investment and our reputation at the same time.
                            </p>

                            <div className="relative mt-9 sm:mt-10 flex items-end justify-between border-t border-white/10 pt-6">
                                <div>
                                    <div className="font-display text-4xl sm:text-5xl text-light-gold leading-none">
                                        06
                                    </div>
                                    <div className="eyebrow text-white/40 text-[9px] sm:text-[10px] mt-2">
                                        Principles
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-display text-4xl sm:text-5xl text-white leading-none">
                                        14
                                    </div>
                                    <div className="eyebrow text-white/40 text-[9px] sm:text-[10px] mt-2">
                                        Years · Est. 2013
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* ── Editorial value rows ── */}
                    <div className="lg:col-span-7 lg:order-1">
                        {values.map((v) => (
                            <article
                                key={v.no}
                                className="group relative grid grid-cols-[auto_1fr] gap-5 sm:gap-8 py-7 sm:py-9 border-t border-line first:border-t-0 first:pt-0 lg:first:pt-2 reveal"
                            >
                                {/* growing vertical gold bar */}
                                <span
                                    aria-hidden
                                    className="absolute left-[-2px] top-0 h-full w-0.5 origin-top scale-y-0 bg-sapphire-blue transition-transform duration-500 ease-out group-hover:scale-y-100"
                                />

                                {/* ghost number */}
                                <span className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none tabular-nums text-sapphire-blue/15 transition-colors duration-300 group-hover:text-sapphire-blue">
                                    {v.no}
                                </span>

                                <div className="pt-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-display text-[22px] xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.1] tracking-tightish text-midnight-blue transition-colors duration-300 group-hover:text-sapphire-blue">
                                            {v.title}
                                        </h3>
                                        <ArrowUpRight
                                            size={22}
                                            className="shrink-0 text-mute opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-sapphire-blue"
                                        />
                                    </div>
                                    <p className="mt-3 text-[13.5px] xs:text-[14px] lg:text-[14.5px] text-mute leading-relaxed font-light max-w-xl">
                                        {v.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
