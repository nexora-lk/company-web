import { gemstoneCollection } from '@/data/gems';

export default function CollectionSection() {
    const displayedGems = gemstoneCollection.slice(0, 6);

    return (
        <section id="products" className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40 bg-bg overflow-hidden">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20 reveal">
                    <div className="max-w-full lg:max-w-3xl">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="num text-[10px] xs:text-[11px]">[ 02 ]</span>
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]" />
                            <span className="eyebrow text-[10px] xs:text-xs">Featured Gemstones</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink">
                            Sri Lanka's <em className="serif-em text-accent">finest</em>
                            <br />
                            selections.
                        </h2>
                    </div>
                    <div className="max-w-full sm:max-w-[440px] lg:text-right">
                        <p className="text-[14px] xs:text-[15px] sm:text-base text-mute leading-relaxed font-light">
                            Ethically sourced, internationally certified, and backed by our expertise in
                            Sri Lankan gem heritage and global gem trading standards.
                        </p>
                    </div>
                </div>

                {/* Grid: 1→2(sm)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
                    {displayedGems.map((gem, idx) => (
                        <div
                            key={gem.id}
                            className="group bg-surface rounded-[20px] xs:rounded-[24px] overflow-hidden border border-line hover:border-accent/40 transition-all duration-700 hover:shadow-2xl flex flex-col h-full reveal"
                        >
                            {/* Card Header with background accent */}
                            <div className="bg-linear-to-br from-accent/5 to-accent/10 p-6 xs:p-8 border-b border-line">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-[9px] xs:text-[10px] font-semibold uppercase tracking-widest rounded-full border border-accent/10">
                                        {gem.category}
                                    </span>
                                    <span className="num text-accent/40 font-semibold text-[11px] xs:text-xs">0{idx + 1}</span>
                                </div>
                                <h3 className="font-display text-[22px] xs:text-[24px] sm:text-[26px] leading-tight text-ink group-hover:text-accent transition-colors duration-300">
                                    {gem.name}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 xs:p-8 flex flex-col flex-1">
                                <p className="text-[13px] xs:text-[14px] text-mute leading-relaxed font-light mb-6 xs:mb-8">
                                    {gem.description}
                                </p>

                                <div className="mt-auto space-y-5 xs:space-y-6">
                                    <div className="pb-5 border-b border-line/60">
                                        <p className="text-[9px] xs:text-[10px] uppercase tracking-widest text-mute/50 font-bold mb-2">
                                            Origin
                                        </p>
                                        <p className="text-[14px] xs:text-[15px] text-ink font-medium">{gem.origin}</p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] xs:text-[10px] uppercase tracking-widest text-mute/50 font-bold mb-3">
                                            Characteristics
                                        </p>
                                        <ul className="space-y-2">
                                            {gem.characteristics.slice(0, 3).map((char, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-[12px] xs:text-[13px] text-ink font-light">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                                                    <span>{char}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full mt-8 xs:mt-10 py-3 px-6 rounded-full border border-accent/20 bg-accent/5 text-accent text-[11px] xs:text-[12px] font-bold uppercase tracking-widest hover:bg-accent hover:text-ondark hover:border-accent transition-all duration-500 transform active:scale-[0.98]">
                                    View Certificate Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse All CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <a
                        href="#contact"
                        className="btn btn-ghost px-10 group/cta"
                    >
                        Explore Complete Collection
                        <span className="arrow ml-2 transition-transform duration-300 group-hover/cta:translate-x-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
