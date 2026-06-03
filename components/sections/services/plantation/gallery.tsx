import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-1.5">
                <figure className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117550/pexels-454811840-26672466_vmhzgy.jpg"
                        alt="Watermelon ripening in the field"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <figure className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] reveal">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120050/pexels-ferdous-15975999_htkwx9.jpg"
                        alt="Bananas on the bunch"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </section>
    );
}
