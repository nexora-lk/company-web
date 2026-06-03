import Photo from '@/components/ui/Photo';

export default function Album4Section() {
    return (
        <section id="plantation" className="py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Album Header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="reveal">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ Album 04 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow text-[10px] sm:text-[11px]">Nuwara Eliya · Plantation</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            A day on the <em className="serif-em">tea</em>.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[520px]">
                            Aga Expo '25 — workshops, tastings and the sapling line at the estate
                            gate. A small reminder that every photograph here begins with a leaf,
                            picked at sunrise.
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 reveal">
                        <div className="num text-[10px] sm:text-[11px]">14 October 2025 · 28 photographs</div>
                        <a className="ulink text-[12px] sm:text-sm" href="#">
                            View all 28 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                {/* Photo Grid — 2-col mobile, 12-col masonry md+ */}
                <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[170px] sm:auto-rows-[150px] md:auto-rows-[140px] gap-2 sm:gap-3">
                    <div className="ph col-span-1 row-span-2 md:col-span-5 md:row-span-3 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="The highland tea, at sunrise" 
                            fill
                            sizes="(max-width: 768px) 50vw, 40vw"
                            priority
                        />
                        <div className="ph-meta">01 · The highland tea, at sunrise</div>
                    </div>
                    <div className="ph col-span-1 row-span-2 md:col-span-4 md:row-span-3 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Workshop tent" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">02 · Workshop tent, morning</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Sapling line" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">03 · Sapling line</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-1 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Tasting" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">04 · Tasting</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Lowland field" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">05 · Lowland field</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Community welcome" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">06 · Community welcome</div>
                    </div>
                    <div className="ph col-span-2 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Field worker" 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="ph-meta">07 · Field worker, mid-shift</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
