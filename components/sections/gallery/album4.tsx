import Photo from '@/components/ui/Photo';

export default function Album4Section() {
    return (
        <section id="plantation" className="py-20 lg:py-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <header className="album-header mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ Album 04 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Nuwara Eliya · Plantation</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            A day on the <em className="serif-em">tea</em>.
                        </h2>
                        <p className="mt-4 text-mute text-[14.5px] leading-[1.7] max-w-[520px]">
                            Aga Expo '25 — workshops, tastings and the sapling line at the estate
                            gate. A small reminder that every photograph here begins with a leaf,
                            picked at sunrise.
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="num">14 October 2025 · 28 photographs</div>
                        <a className="ulink text-sm" href="#">
                            View all 28 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                <div className="grid grid-cols-12 auto-rows-[140px] gap-3">
                    <div className="ph col-span-5 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=1400&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">01 · The highland tea, at sunrise</div>
                    </div>
                    <div className="ph col-span-4 row-span-3">
                        <Photo
                            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1000&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">02 · Workshop tent, morning</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">03 · Sapling line</div>
                    </div>
                    <div className="ph col-span-3 row-span-1">
                        <Photo
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">04 · Tasting</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">05 · Lowland field</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">06 · Community welcome</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80&auto=format&fit=crop"
                            alt=""
                        />
                        <div className="ph-meta">07 · Field worker, mid-shift</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
