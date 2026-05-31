import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">

                    {/* Left: Text */}
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow">Gem Heritage</span>
                        </div>

                        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            Every Gem Has a <em className="serif-em">Journey.</em>
                            <br />
                            Every Journey Has a Soul.
                        </h2>

                        <p className="mt-6 sm:mt-8 text-[14.5px] sm:text-[15px] text-mute leading-[1.75] max-w-full sm:max-w-[520px] lg:max-w-none">
                            Sri Lanka's gem history spans over 2,500 years. Ancient texts and
                            foreign traders—from Romans to Arabs—chronicled the island's wealth in
                            sapphires, rubies, and cat's eyes. These "Ratnadweepa" (Island of Gems)
                            stones adorned royal crowns globally, creating a legendary trade that
                            defined the island's identity for centuries.
                        </p>

                        <p className="mt-4 sm:mt-6 text-[14.5px] sm:text-[15px] text-mute leading-[1.75] max-w-full sm:max-w-[520px] lg:max-w-none">
                            Traditional mining using simple pits called "illam" has persisted for
                            generations. Today, Sri Lanka remains a premier global source for fine
                            blue sapphires, padparadscha, and unique blue moonstone. This enduring
                            legacy blends ancient skill with modern gemology, solidifying its status
                            as a true treasure island.
                        </p>

                        <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-accent2 rounded-[12px] sm:rounded-[14px] border border-accent/20">
                            <p className="font-display text-[16px] sm:text-[18px] text-accent mb-1.5 sm:mb-2">
                                Ethical &amp; Sustainable
                            </p>
                            <p className="text-[12.5px] sm:text-[13px] text-ink leading-[1.6]">
                                Our mining operations follow ethical and sustainable practices.
                                Every gemstone is traceable from mine to market, ensuring
                                responsible sourcing and environmental respect.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image — stacks on top on mobile */}
                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 space-y-3 sm:space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-[18px] overflow-hidden aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117658/sabrianna-Talnaz9Bug0-unsplash_fx4qzs.jpg"
                                alt="Premium sapphire gemstones"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[14px] sm:rounded-[18px] bg-ink text-ondark p-5 sm:p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-3 sm:mb-4">Sri Lankan Gems</div>
                            <p className="font-display text-[20px] sm:text-[22px] md:text-[24px] leading-tight">
                                "The island holds{' '}
                                <em className="serif-em">over 75 gem varieties</em>
                                {' '}in a landmass smaller than Tasmania."
                            </p>
                            <div className="hairline mt-5 sm:mt-6 bg-[rgba(241,236,224,0.18)]!" />
                            <div className="mt-3 sm:mt-4 text-[11px] sm:text-[12px] opacity-70">
                                — Geological Survey of Sri Lanka
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
}
