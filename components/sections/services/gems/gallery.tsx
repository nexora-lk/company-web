import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117593/sameer-ali-99T29x3DrFw-unsplash_xi9ttr.jpg"
                        alt="Gemstone cutting and polishing workshop"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117672/sameer-ali-kRymlml5s7g-unsplash_hqflxo.jpg"
                        alt="Raw uncut gemstones from Sri Lanka"
                    />
                </figure>
            </div>
        </section>
    );
}
