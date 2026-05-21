import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=1600&q=80&auto=format&fit=crop"
                        alt="Fresh mango fruits in a tropical grove"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1600&q=80&auto=format&fit=crop"
                        alt="Food processing and packaging facility"
                    />
                </figure>
            </div>
        </section>
    );
}
