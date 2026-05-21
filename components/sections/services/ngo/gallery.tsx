import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1600&q=80&auto=format&fit=crop"
                        alt="Children in a rural school classroom"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1559966662-77eba49cd646?w=1600&q=80&auto=format&fit=crop"
                        alt="Community members in a group discussion"
                    />
                </figure>
            </div>
        </section>
    );
}
