import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80&auto=format&fit=crop"
                        alt="Gemstone cutting and polishing workshop"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=80&auto=format&fit=crop"
                        alt="Raw uncut gemstones from Sri Lanka"
                    />
                </figure>
            </div>
        </section>
    );
}
