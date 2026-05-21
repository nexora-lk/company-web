import Photo from '@/components/ui/Photo';

export default function FeaturedSection() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-stretch">
                    <figure className="col-span-12 lg:col-span-7 rounded-[20px] overflow-hidden aspect-[5/4] lg:aspect-auto">
                        <Photo
                            src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=1600&q=80&auto=format&fit=crop"
                            alt="Plantation workers tending tea bushes"
                            priority
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="num">[ Featured ]</span>
                                <span className="hairline-strong w-[80px]"></span>
                                <span className="eyebrow">Plantation</span>
                            </div>
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="font-display text-[44px] leading-none">17</span>
                                <div className="leading-tight">
                                    <div className="font-display text-[18px]">October</div>
                                    <div className="num">2026 · Nuwara Eliya</div>
                                </div>
                            </div>
                            <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                                <em className="serif-em">Aga Expo</em> '26 —<br />
                                the Plantation Field Day.
                            </h2>
                            <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[440px]">
                                Our flagship plantation programme. Workshops, training and seminars
                                for growers and partners across tea, cinnamon and mango. Entry is by
                                RSVP — and every guest plants a sapling on the way home.
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="hairline mb-5"></div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-6">
                                    <div>
                                        <div className="num">Capacity</div>
                                        <div className="font-display text-[22px] leading-none">
                                            340
                                        </div>
                                    </div>
                                    <div>
                                        <div className="num">Languages</div>
                                        <div className="font-display text-[22px] leading-none">
                                            Sinhala · Tamil · English
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary">
                                    RSVP — free <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
