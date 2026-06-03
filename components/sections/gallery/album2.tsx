import Photo from '@/components/ui/Photo';

export default function Album2Section() {
    return (
        <section id="baduraliya" className="py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Album Header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="reveal">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ Album 02 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow text-[10px] sm:text-[11px]">Sabaragamuwa · Branch</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            Baduraliya <em className="serif-em">Branch</em>
                            <br />
                            opens its door.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[520px]">
                            Our twenty-sixth branch — a slow ribbon, a welcome cake spelling PGGOC,
                            and a queue of borrowers waiting at 9:01am. Photographs by Sumudu
                            Wickramaratne and the branch team.
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 reveal">
                        <div className="num text-[10px] sm:text-[11px]">08 March 2025 · 42 photographs</div>
                        <a className="ulink text-[12px] sm:text-sm" href="#">
                            View all 42 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                {/* Hero panorama */}
                <div className="ph aspect-[16/9] sm:aspect-[21/9] mb-2 sm:mb-3 reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                        alt="Grand opening ceremony hero panorama"
                        fill
                        sizes="100vw"
                        priority
                    />
                    <div className="ph-meta">Hero · The blue ribbon, 9:00am sharp</div>
                </div>

                {/* Photo Grid — 2-col mobile, 12-col masonry md+ */}
                <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[150px] sm:auto-rows-[130px] md:auto-rows-[110px] gap-2 sm:gap-3">
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Welcome banner" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">01 · Welcome banner</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Procession" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">02 · Procession</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Director arrives" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">03 · Director arrives</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Floral garland" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">04 · Floral garland</div>
                    </div>
                    <div className="ph col-span-2 row-span-1 md:col-span-6 md:row-span-3 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Ribbon cutting" 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="ph-meta">05 · Ribbon cutting</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-3 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Reception" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">06 · Reception, late afternoon</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-3 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Inside the new floor" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">07 · Inside the new floor</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Cake marked PGGOC" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">08 · Cake, marked PGGOC</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Family of staff" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">09 · Family of staff</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Loan desk" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">10 · Loan desk</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="The first handshake" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">11 · The first handshake</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Community at the door" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">12 · Community at the door</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Garden side entrance" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">13 · Garden, side entrance</div>
                    </div>
                    <div className="ph col-span-2 row-span-1 md:col-span-4 md:row-span-2 reveal">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Evening lanterns" 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="ph-meta">14 · Evening lanterns</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
