import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1563114773-84221bd62daa?w=1600&q=80&auto=format&fit=crop"
                        alt="Watermelon ripening in the field"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=1600&q=80&auto=format&fit=crop"
                        alt="Bananas on the bunch"
                    />
                </figure>
            </div>
        </section>
    );
}
