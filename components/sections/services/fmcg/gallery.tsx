import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117550/pexels-454811840-26672466_vmhzgy.jpg"
                        alt="Fresh mango fruits in a tropical grove"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120050/pexels-ferdous-15975999_htkwx9.jpg"
                        alt="Food processing and packaging facility"
                    />
                </figure>
            </div>
        </section>
    );
}
