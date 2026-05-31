import Photo from '@/components/ui/Photo';

export default function Album3Section() {
    return (
        <section id="avissawella" className="py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Album Header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ Album 03 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow text-[10px] sm:text-[11px]">Sabaragamuwa · Branch</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            Avissawella, <em className="serif-em">opened</em>.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[520px]">
                            Our twenty-seventh, four months after Baduraliya — the team of
                            provincial heads in one room for the first time in three years.
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0">
                        <div className="num text-[10px] sm:text-[11px]">21 July 2025 · 22 photographs</div>
                        <a className="ulink text-[12px] sm:text-sm" href="#">
                            View all 22 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                {/* Photo Grid — 2-col mobile, 12-col masonry md+ */}
                <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[160px] sm:auto-rows-[140px] md:auto-rows-[120px] gap-2 sm:gap-3">
                    <div className="ph col-span-2 row-span-2 md:col-span-8 md:row-span-4">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">01 · Provincial heads, all in one room</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">02 · Reception</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">03 · Lamp lighting</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">04 · Garland</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">05 · Cake</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">06 · Speeches</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" alt="" />
                        <div className="ph-meta">07 · Handshake</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
