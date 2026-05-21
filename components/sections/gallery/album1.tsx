import Photo from '@/components/ui/Photo';

export default function Album1Section() {
    return (
        <section id="head-office" className="py-20 lg:py-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <header className="album-header mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ Album 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Colombo 07</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            The Head Office <em className="serif-em">Shift</em>.
                        </h2>
                        <p className="mt-4 text-mute text-[14.5px] leading-[1.7] max-w-[520px]">
                            Lamp-lighting, ribbon-cutting and the small dance of moving twenty-eight
                            years of files across town — 62 Maitland Crescent, December 2024.
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="num">12 December 2024 · 24 photographs</div>
                        <a className="ulink text-sm" href="#">
                            View all 24 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                <div className="grid grid-cols-12 auto-rows-[100px] gap-3">
                    <div className="ph col-span-6 row-span-4">
                        <Photo
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop"
                            alt="Ribbon-cutting at the new head office"
                            priority
                        />
                        <div className="ph-meta">01 · Ribbon cutting · Maitland Crescent</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">02 · Team group</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">03 · Lamp lighting</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">04 · Welcome desk</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">05 · The new boardroom</div>
                    </div>
                    <div className="ph col-span-4 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">06 · East wing, ground floor</div>
                    </div>
                    <div className="ph col-span-4 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">07 · Family of staff</div>
                    </div>
                    <div className="ph col-span-4 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">08 · Evening reception</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">09 · Community partners</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">10 · Handshake</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">11 · Saree procession</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">12 · Director's portrait</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
