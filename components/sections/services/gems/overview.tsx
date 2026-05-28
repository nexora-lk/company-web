import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-30"></span>
                            <span className="eyebrow">Gem Heritage</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Every Gem Has a <em className="serif-em">Journey.</em>
                            <br />
                            Every Journey Has a Soul.
                        </h2>
                        <p className="mt-8 text-[15px] text-mute leading-[1.75] max-w-100">
                            Sri Lanka's gem history spans over 2,500 years. Ancient texts and
                            foreign traders—from Romans to Arabs—chronicled the island's wealth in
                            sapphires, rubies, and cat's eyes. These "Ratnadweepa" (Island of Gems)
                            stones adorned royal crowns globally, creating a legendary trade that
                            defined the island's identity for centuries.
                        </p>

                        <p className="mt-6 text-[15px] text-mute leading-[1.75] max-w-100">
                            Traditional mining using simple pits called "illam" has persisted for
                            generations. Today, Sri Lanka remains a premier global source for fine
                            blue sapphires, padparadscha, and unique blue moonstone. This enduring
                            legacy blends ancient skill with modern gemology, solidifying its status
                            as a true treasure island.
                        </p>

                        <div className="mt-10 p-6 bg-accent2 rounded-[14px] border border-accent/20">
                            <p className="font-display text-[18px] text-accent mb-2">
                                Ethical & Sustainable
                            </p>
                            <p className="text-[13px] text-ink leading-[1.6]">
                                Our mining operations follow ethical and sustainable practices.
                                Every gemstone is traceable from mine to market, ensuring
                                responsible sourcing and environmental respect.
                            </p>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-4/5">
                            <Photo
                                src="/sabrianna-Talnaz9Bug0-unsplash.jpg"
                                alt="Premium sapphire gemstones"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-4">Sri Lankan Gems</div>
                            <p className="font-display text-[24px] leading-tight">
                                "The island holds{' '}
                                <em className="serif-em">over 75 gem varieties</em>
                                in a landmass smaller than Tasmania."
                            </p>
                            <div className="hairline mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-4 text-[12px] opacity-70">
                                — Geological Survey of Sri Lanka
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
