import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section id="gallery" className="pb-28 lg:pb-40">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div>
                        <SectionEyebrow index="05" label="A year on the estates" />
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish max-w-[820px]">
                            From <em className="serif-em">first light</em> in the field
                            <br />
                            to the last cut in the workshop.
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="pill">All 24</button>
                        <button className="pill">
                            <span className="dot"></span>Estates
                        </button>
                        <button className="pill">
                            <span className="dot"></span>Workshop
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <figure className="gal col-span-12 sm:col-span-8 lg:col-span-7 rounded-[14px] overflow-hidden aspect-[16/10]">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Prestige Glamour plantations - lush agricultural fields during harvest season"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 58vw"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <figure className="gal col-span-12 sm:col-span-4 lg:col-span-5 rounded-[14px] overflow-hidden aspect-[16/10]">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Prestige Glamour workshop - skilled artisans crafting premium products"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 42vw"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <figure className="gal col-span-6 sm:col-span-3 rounded-[14px] overflow-hidden aspect-[4/5]">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Prestige Glamour gemstone and jewellery collection - premium sapphires and precious stones"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <figure className="gal col-span-6 sm:col-span-3 rounded-[14px] overflow-hidden aspect-[4/5]">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Prestige Glamour hospitality and real estate projects - luxury property development"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <figure className="gal col-span-12 sm:col-span-6 rounded-[14px] overflow-hidden aspect-[4/5]">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                            alt="Prestige Glamour agri-export operations - premium export-quality crops from Sri Lanka"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
