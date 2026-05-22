import Photo from '@/components/ui/Photo';

export default function Album3Section() {
    return (
        <section id="avissawella" className="py-20 lg:py-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <header className="album-header mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ Album 03 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Sabaragamuwa · Branch</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Avissawella, <em className="serif-em">opened</em>.
                        </h2>
                        <p className="mt-4 text-mute text-[14.5px] leading-[1.7] max-w-[520px]">
                            Our twenty-seventh, four months after Baduraliya — the team of
                            provincial heads in one room for the first time in three years.
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="num">21 July 2025 · 22 photographs</div>
                        <a className="ulink text-sm" href="#">
                            View all 22 <span className="arrow">→</span>
                        </a>
                    </div>
                </header>

                <div className="grid grid-cols-12 auto-rows-[120px] gap-3">
                    <div className="ph col-span-8 row-span-4">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">01 · Provincial heads, all in one room</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">02 · Reception</div>
                    </div>
                    <div className="ph col-span-4 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">03 · Lamp lighting</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">04 · Garland</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">05 · Cake</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">06 · Speeches</div>
                    </div>
                    <div className="ph col-span-3 row-span-2">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt=""
                        />
                        <div className="ph-meta">07 · Handshake</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
