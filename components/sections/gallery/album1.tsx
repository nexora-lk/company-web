import Photo from '@/components/ui/Photo';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function Album1Section() {
    return (
        <section id="head-office" className="py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">

                {/* Album Header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="reveal">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="num text-[10px] sm:text-[11px]">[ Album 01 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[120px]" />
                            <span className="eyebrow text-[10px] sm:text-[11px]">Colombo 07</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] leading-[0.98] tracking-tightish">
                            The Head Office <em className="serif-em">Shift</em>.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-mute text-[13.5px] sm:text-[14.5px] leading-[1.7] max-w-full sm:max-w-[520px]">
                            Lamp-lighting, ribbon-cutting and the small dance of moving twenty-eight
                            years of files across town — 62 Maitland Crescent, December 2024.
                        </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 reveal">
                        <div className="num text-[10px] sm:text-[11px]">12 December 2024 · 24 photographs</div>
                        <a className="ulink text-[12px] sm:text-sm" href="#">
                             View all 24 <ArrowIcon size={12} className="ml-1" />
                         </a>
                    </div>
                </header>

                {/* Photo Grid — 2 col on mobile, 12-col masonry on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[160px] sm:auto-rows-[130px] md:auto-rows-[100px] gap-2 sm:gap-3">
                    <div className="ph col-span-2 row-span-2 md:col-span-6 md:row-span-4">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Ribbon-cutting at the new head office"
                            priority
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="ph-meta">01 · Ribbon cutting · Maitland Crescent</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Team group" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">02 · Team group</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Lamp lighting" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">03 · Lamp lighting</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Welcome desk" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">04 · Welcome desk</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="The new boardroom" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">05 · The new boardroom</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-3">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="East wing, ground floor" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">06 · East wing, ground floor</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-4 md:row-span-3">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Family of staff" 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="ph-meta">07 · Family of staff</div>
                    </div>
                    <div className="ph col-span-2 row-span-1 md:col-span-4 md:row-span-3">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Evening reception" 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="ph-meta">08 · Evening reception</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Community partners" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">09 · Community partners</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Handshake" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">10 · Handshake</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Saree procession" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">11 · Saree procession</div>
                    </div>
                    <div className="ph col-span-1 row-span-1 md:col-span-3 md:row-span-2">
                        <Photo 
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg" 
                            alt="Director's portrait" 
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="ph-meta">12 · Director's portrait</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
