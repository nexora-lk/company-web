import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function OverviewSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg overflow-hidden">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-center">

                    {/* Left: Text */}
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]" />
                            <span className="eyebrow text-[10px] xs:text-xs">Gem Heritage</span>
                        </div>

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue reveal">
                            2,500 years of Sri Lankan <em className="serif-em text-sapphire-blue">gem heritage </em>
                            <br />
                            and a 14-year working capital track record.
                        </h2>

                        <div className="mt-8 xs:mt-10 space-y-5 xs:space-y-6 text-[14.5px] xs:text-[15.5px] text-mute leading-relaxed sm:leading-[1.75] font-light max-w-full sm:max-w-[640px] reveal">
                            <p>
                                <span className="font-display text-4xl xs:text-5xl text-ink float-left mr-3 leading-[0.8] mt-1">
                                    S
                                </span>
                                ri Lanka&#39;s gem history spans over 2,500 years. Ancient texts and foreign
                                traders — from Romans to Arabs — chronicled the island&#39;s wealth in sapphires,
                                rubies, and cat&#39;s eyes. These &#39;Ratnadweepa&#39; (Island of Gems) stones adorned
                                royal crowns and defined the island&#39;s identity for centuries. PGG Gems carries
                                that heritage forward through certified mining and investor co-funding.
                            </p>

                            <p>
                                Traditional mining using simple pits called &#39;illam&#39; has persisted for generations.
                                Today, Sri Lanka remains the world&#39;s premier source for fine blue sapphires, padparadscha,
                                and unique blue moonstone. PGG Gems operates across 6 active mining locations, sources
                                directly from licensed mining operations, and exports certified stones to 14 countries.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image — stacks on top on mobile */}
                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 space-y-4 xs:gap-6 lg:sticky lg:top-32 mt-4 lg:mt-0 reveal">
                        <figure className="relative rounded-[18px] xs:rounded-[24px] overflow-hidden aspect-[3/2] xs:aspect-[4/3] lg:aspect-[4/5] shadow-2xl transition-transform duration-700 hover:scale-[1.02] reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117672/sameer-ali-kRymlml5s7g-unsplash_hqflxo.jpg"
                                alt="Premium sapphire gemstones"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/45 to-transparent" />
                        </figure>
                        <div className="rounded-[18px] xs:rounded-[24px] bg-royal-blue text-ondark p-6 xs:p-8 lg:p-10 shadow-2xl relative overflow-hidden reveal">
                            {/* Decorative background number */}
                            <div className="absolute -right-4 -bottom-8 font-display text-[120px] xs:text-[140px] text-white/5 pointer-events-none select-none">
                                75
                            </div>
                            <div className="num text-ondark/60! mb-4 xs:mb-5 text-[10px] xs:text-[11px] uppercase tracking-widest">Statistical Insight</div>
                            <p className="font-display text-[22px] xs:text-[24px] sm:text-[26px] leading-[1.1] relative z-10">
                                &ldquo;The island holds{' '}
                                <em className="serif-em text-accent">over 75 gem varieties</em>
                                {' '}in a landmass smaller than Tasmania.&rdquo;
                            </p>
                            <div className="hairline mt-6 xs:mt-8 bg-white/10! relative z-10" />
                            <div className="mt-4 xs:mt-5 text-[11px] xs:text-[12px] opacity-60 font-light italic relative z-10">
                                — Geological Survey of Sri Lanka
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
}
