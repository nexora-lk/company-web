import { gemstoneCollection } from '@/data/gems';

export default function CollectionSection() {
    const displayedGems = gemstoneCollection.slice(0, 6);

    return (
        <section id="products" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bg">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow">Featured Gemstones</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tightish">
                            Sri Lanka's <em className="serif-em">finest</em>
                            <br />
                            selections.
                        </h2>
                    </div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-mute leading-[1.7] max-w-full sm:max-w-[380px]">
                        Ethically sourced, internationally certified, and backed by our expertise in
                        Sri Lankan gem heritage and global gem trading standards.
                    </p>
                </div>

                {/* Grid: 1→2(sm)→3(lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {displayedGems.map((gem, idx) => (
                        <div
                            key={gem.id}
                            className="group bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden border border-line hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Header */}
                            <div className="bg-linear-to-r from-accent/5 to-accent/10 p-4 sm:p-6 border-b border-line">
                                <div className="flex items-start justify-between mb-2 sm:mb-3">
                                    <span className="inline-block px-2 sm:px-2.5 py-1 bg-accent/20 text-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest rounded-full">
                                        {gem.category}
                                    </span>
                                    <span className="num text-accent/60">0{idx + 1}</span>
                                </div>
                                <h3 className="font-display text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] text-ink">
                                    {gem.name}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <p className="text-[12.5px] sm:text-[13px] text-mute leading-[1.6] mb-4 sm:mb-5">
                                    {gem.description}
                                </p>

                                <div className="mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-line">
                                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-1.5 sm:mb-2">
                                        Origin
                                    </p>
                                    <p className="text-[12.5px] sm:text-[13px] text-ink font-medium">{gem.origin}</p>
                                </div>

                                <div className="mb-4 sm:mb-5">
                                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-1.5 sm:mb-2">
                                        Key Characteristics
                                    </p>
                                    <ul className="space-y-1 sm:space-y-1.5">
                                        {gem.characteristics.slice(0, 3).map((char, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-ink">
                                                <span className="inline-block w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                                                <span>{char}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-1.5 sm:mb-2">
                                        Applications
                                    </p>
                                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                        {gem.applications.slice(0, 2).map((app, i) => (
                                            <span key={i} className="inline-block px-2 sm:px-2.5 py-1 bg-accent2 text-accent rounded-full text-[10px] sm:text-[11px] font-medium">
                                                {app}
                                            </span>
                                        ))}
                                        {gem.applications.length > 2 && (
                                            <span className="inline-block px-2 sm:px-2.5 py-1 bg-line text-mute rounded-full text-[10px] sm:text-[11px] font-medium">
                                                +{gem.applications.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="w-full mt-5 sm:mt-6 py-2.5 px-4 rounded-lg border border-accent bg-accent/5 text-accent text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest hover:bg-accent hover:text-ondark transition-all duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse All CTA */}
                <div className="mt-10 sm:mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-accent text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest hover:gap-3 transition-all"
                    >
                        Explore Complete Collection
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
