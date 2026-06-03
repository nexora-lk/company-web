import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 px-1 sm:px-1.5">
                <figure className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[14px] overflow-hidden reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117593/sameer-ali-99T29x3DrFw-unsplash_xi9ttr.jpg"
                        alt="Gemstone cutting and polishing workshop"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <figure className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[14px] overflow-hidden reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117672/sameer-ali-kRymlml5s7g-unsplash_hqflxo.jpg"
                        alt="Raw uncut gemstones from Sri Lanka"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </section>
    );
}
