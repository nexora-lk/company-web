import { gemstoneCollection } from '@/data/gems';

export default function CollectionSection() {
    const displayedGems = gemstoneCollection.slice(0, 6);

    return (
        <section id="products" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-30"></span>
                            <span className="eyebrow">Featured Gemstones</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Sri Lanka's <em className="serif-em">finest</em>
                            <br />
                            selections.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-85">
                        Ethically sourced, internationally certified, and backed by our expertise in
                        Sri Lankan gem heritage and global gem trading standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {displayedGems.map((gem, idx) => (
                        <div
                            key={gem.id}
                            className="group bg-white rounded-[20px] overflow-hidden border border-line hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Header with Category Badge */}
                            <div className="bg-linear-to-r from-accent/5 to-accent/10 p-6 border-b border-line">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="inline-block px-2.5 py-1 bg-accent/20 text-accent text-[11px] font-semibold uppercase tracking-widest rounded-full">
                                        {gem.category}
                                    </span>
                                    <span className="num text-accent/60">0{idx + 1}</span>
                                </div>
                                <h3 className="font-display text-[24px] leading-[1.1] text-ink">
                                    {gem.name}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-[13px] text-mute leading-[1.6] mb-5">
                                    {gem.description}
                                </p>

                                {/* Origin */}
                                <div className="mb-5 pb-5 border-b border-line">
                                    <p className="text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-2">
                                        Origin
                                    </p>
                                    <p className="text-[13px] text-ink font-medium">{gem.origin}</p>
                                </div>

                                {/* Characteristics */}
                                <div className="mb-5">
                                    <p className="text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-2">
                                        Key Characteristics
                                    </p>
                                    <ul className="space-y-1.5">
                                        {gem.characteristics.slice(0, 3).map((char, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-[12px] text-ink"
                                            >
                                                <span className="inline-block w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0"></span>
                                                <span>{char}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Applications */}
                                <div>
                                    <p className="text-[11px] uppercase tracking-widest text-mute/60 font-semibold mb-2">
                                        Applications
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {gem.applications.slice(0, 2).map((app, i) => (
                                            <span
                                                key={i}
                                                className="inline-block px-2.5 py-1 bg-accent2 text-accent rounded-full text-[11px] font-medium"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                        {gem.applications.length > 2 && (
                                            <span className="inline-block px-2.5 py-1 bg-line text-mute rounded-full text-[11px] font-medium">
                                                +{gem.applications.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full mt-6 py-2.5 px-4 rounded-lg border border-accent bg-accent/5 text-accent text-[12px] font-semibold uppercase tracking-widest hover:bg-accent hover:text-ondark transition-all duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse All CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-accent text-[13px] font-semibold uppercase tracking-widest hover:gap-3 transition-all"
                    >
                        Explore Complete Collection
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
