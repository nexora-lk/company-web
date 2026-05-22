import Photo from '@/components/ui/Photo';

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Product Lines</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Eighteen <em className="serif-em">categories</em>
                            <br />
                            from our plants to your table.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        All products are processed at our ISO-certified facility in Horana using
                        traditional methods and modern food-safety standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            title: 'Fresh-Cut Fruit',
                            desc: 'Vacuum-packed tropical fruits cut daily from our own estates. Delivered fresh to retail partners across Sri Lanka.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Fresh cut tropical fruits',
                        },
                        {
                            title: 'Herbal & Spice Blends',
                            desc: 'Proprietary blends of ginger, turmeric, and cinnamon sourced from our plantation network. No additives or fillers.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Herbal spice blend products',
                        },
                        {
                            title: 'Cold-Pressed Juices',
                            desc: 'Fresh-pressed single-fruit and blend juices. No concentrates, no pasteurization. Available in 6-month frozen contracts.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Cold pressed juice bottles',
                        },
                    ].map((product, idx) => (
                        <article
                            key={idx}
                            className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]"
                        >
                            <Photo
                                src={product.img}
                                alt={product.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                            <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                                <span className="num text-ondark/80!">Category 0{idx + 1}</span>
                                <div>
                                    <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                        {product.title}
                                    </h3>
                                    <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                        {product.desc}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
