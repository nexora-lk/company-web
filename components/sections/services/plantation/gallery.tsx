import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-1.5">
                <figure className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[12px] md:rounded-[14px]">
                    <Photo
                        src="/pexels-454811840-26672466.jpg"
                        alt="Watermelon ripening in the field"
                    />
                </figure>
                <figure className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[12px] md:rounded-[14px]">
                    <Photo
                        src="/pexels-ferdous-15975999.jpg"
                        alt="Bananas on the bunch"
                    />
                </figure>
            </div>
        </section>
    );
}
