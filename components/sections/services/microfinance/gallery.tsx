import Photo from '@/components/ui/Photo';

export default function GallerySection() {
    return (
        <section className="split-img py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 px-1.5">
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop"
                        alt="Microfinance officer visiting a borrower's business"
                    />
                </figure>
                <figure className="aspect-[4/5] lg:aspect-[3/4] rounded-[14px]">
                    <Photo
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop"
                        alt="Women entrepreneurs in a loan group meeting"
                    />
                </figure>
            </div>
        </section>
    );
}
