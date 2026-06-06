import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function OverviewSection() {
    return (
        <section className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Plantation Overview</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink reveal">
                            Invest in Sri Lanka&#39;s <em className="serif-em text-accent">most transparent </em>
                            <br />
                             plantation operation.
                        </h2>
                        <p className="mt-6 xs:mt-8 text-[14px] xs:text-[15px] text-mute leading-relaxed sm:leading-[1.75] max-w-full sm:max-w-[620px] font-light reveal">
                            Our plantation division manages a growing portfolio of owned and
                            leased agricultural land, producing high-value export crops including
                            ginger, mango, watermelon, and specialty produce. Investor capital is
                            deployed directly into specific crop cycles, with returns paid at harvest.
                            Every plot is tracked on the same quarterly ledger as our other divisions.
                        </p>

                        <h3 className="font-display text-2xl xs:text-[26px] md:text-[28px] mt-10 xs:mt-12 text-ink reveal">
                            Land <em className="serif-em text-accent">portfolio</em> & operations.
                        </h3>
                        <p className="mt-4 xs:mt-5 text-[14px] xs:text-[15px] text-mute leading-relaxed max-w-full sm:max-w-[620px] font-light reveal">
                            Our plantation operations span across multiple land management models, each
                            strategically selected based on regional agro-climatic conditions and crop suitability.
                        </p>

                        <div className="mt-10 xs:mt-12 space-y-6 xs:gap-8 reveal">
                            {/* Leased Properties */}
                            <div className="border border-line rounded-[20px] overflow-hidden bg-white/60 backdrop-blur-md shadow-sm reveal">
                                <div className="px-5 xs:px-8 py-5 xs:py-6 bg-linear-to-r from-accent1/5 to-accent2/5 border-b border-line">
                                    <h4 className="font-display text-xl xs:text-[22px] text-ink">Leased Properties</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[500px] xs:min-w-full">
                                        <thead>
                                            <tr className="border-b border-line/50 bg-bg/30">
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Estate Name</th>
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70 whitespace-nowrap">Area (Ha)</th>
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Cultivated Crops</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-line/30">
                                            <tr className="hover:bg-accent/5 transition-colors duration-300">
                                                <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Walachchean</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">10, 3, 8, 60</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Ginger, Watermelon</td>
                                            </tr>
                                            <tr className="hover:bg-accent/5 transition-colors duration-300">
                                                <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Batticlo</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">2.5, 14</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Ginger</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Owned Lands */}
                            <div className="border border-line rounded-[20px] overflow-hidden bg-white/60 backdrop-blur-md shadow-sm reveal">
                                <div className="px-5 xs:px-8 py-5 xs:py-6 bg-linear-to-r from-accent2/5 to-accent1/5 border-b border-line">
                                    <h4 className="font-display text-xl xs:text-[22px] text-ink">Owned Lands</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[500px] xs:min-w-full">
                                        <thead>
                                            <tr className="border-b border-line/50 bg-bg/30">
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Estate Name</th>
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70 whitespace-nowrap">Area (Ha)</th>
                                                <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Cultivated Crops</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-line/30">
                                            <tr className="hover:bg-accent/5 transition-colors duration-300">
                                                <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Wellwaya</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">258</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Sheshery, Mango</td>
                                            </tr>
                                            <tr className="hover:bg-accent/5 transition-colors duration-300">
                                                <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Mundalama</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">60</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Mango</td>
                                            </tr>
                                            <tr className="hover:bg-accent/5 transition-colors duration-300">
                                                <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Walachchean</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">-</td>
                                                <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Ginger, Watermelon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Property Management & Joint Ventures */}
                            <div className="border border-line rounded-[20px] overflow-hidden bg-white/60 backdrop-blur-md shadow-sm reveal">
                                <div className="px-5 xs:px-8 py-5 xs:py-6 bg-linear-to-r from-accent2/5 to-accent1/5 border-b border-line">
                                    <h4 className="font-display text-xl xs:text-[22px] text-ink">Property Management & Joint Ventures</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[500px] xs:min-w-full">
                                        <thead>
                                        <tr className="border-b border-line/50 bg-bg/30">
                                            <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Estate Name</th>
                                            <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70 whitespace-nowrap">Area (Ha)</th>
                                            <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Cultivated Crops</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-line/30">
                                        <tr className="hover:bg-accent/5 transition-colors duration-300">
                                            <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Bingiriya</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">100</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Ginger</td>
                                        </tr>
                                        <tr className="hover:bg-accent/5 transition-colors duration-300">
                                            <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Kuliyapitiya</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">16</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">Bulath</td>
                                        </tr>
                                        <tr className="hover:bg-accent/5 transition-colors duration-300">
                                            <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-ink">Wanathawilluwa</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">-</td>
                                            <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">-</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 space-y-5 lg:sticky lg:top-32 mt-4 lg:mt-0 reveal">
                        <figure className="rounded-[18px] xs:rounded-[24px] overflow-hidden aspect-[4/3] shadow-2xl reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120160/pexels-gilmerdiaz-27097318_qzthhz.jpg"
                                alt="Fresh produce, just out of the field"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </figure>
                        <div className="rounded-[20px] xs:rounded-[24px] bg-ink text-ondark p-8 lg:p-10 shadow-xl border border-white/5 reveal">
                            <div className="num text-ondark/60! mb-5 text-[10px] xs:text-[11px] uppercase tracking-widest">Leadership Quote</div>
                            <p className="font-display text-[22px] xs:text-[24px] sm:text-[28px] leading-tight">
                                &ldquo;Every kilo we grow at home is a dollar that{' '}
                                <em className="serif-em text-accent">does not leave</em> the country.&rdquo;
                            </p>
                            <div className="hairline mt-8 bg-white/10!"></div>
                            <div className="mt-5 flex items-center justify-between text-[11px] xs:text-[12px] text-ondark/50 font-light italic">
                                <span>— Y. M. D. T. Yatawara</span>
                                <span>Chairman, PGG</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
