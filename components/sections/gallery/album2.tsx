import Photo from '@/components/ui/Photo';

export default function Album2Section() {
    return (
        <section id="baduraliya" className="py-20 lg:py-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <header className="album-header mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ Album 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Sabaragamuwa · Branch</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Baduraliya <em className="serif-em">Branch</em>
                            <br />
                            opens its door.
                        </h2>
                        <p className="mt-4 text-mute text-[14.5px] leading-[1.7] max-w-[520px]">
                            Our twenty-sixth branch — a slow ribbon, a welcome cake spelling PGGOC,
                            and a queue of borrowers waiting at 9:01am. Photographs by Sumudu
                            Wickramaratne and the branch team.
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="num">08 March 2025 · 42 photographs</div>
                        <a className="ulink text-sm" href="#">
                            View all 42 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                <div className="ph aspect-[21/9] mb-3">
                    <Photo
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2000&q=80&auto=format&fit=crop"
                        alt=""
                    />
                    <div className="ph-meta">Hero · The blue ribbon, 9:00am sharp</div>
                </div>

                <div className="grid grid-cols-12 auto-rows-[110px] gap-3">
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">01 · Welcome banner</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">02 · Procession</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">03 · Director arrives</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">04 · Floral garland</div>
                    </div>

                    <div className="ph col-span-6 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">05 · Ribbon cutting</div>
                    </div>
                    <div className="ph col-span-3 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">06 · Reception, late afternoon</div>
                    </div>
                    <div className="ph col-span-3 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">07 · Inside the new floor</div>
                    </div>

                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">08 · Cake, marked PGGOC</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">09 · Family of staff</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">10 · Loan desk</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">11 · The first handshake</div>
                    </div>

                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">12 · Community at the door</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">13 · Garden, side entrance</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">14 · Evening lanterns</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
