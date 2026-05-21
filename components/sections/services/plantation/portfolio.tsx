import Photo from '@/components/ui/Photo';

export default function PortfolioSection() {
    return (
        <section id="properties" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Estate Portfolio</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Eight estates. <em className="serif-em">One</em>
                            <br />
                            quarterly ledger.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        Each estate is managed by a regional team and audited by KPMG on the same
                        quarterly basis as our other business units.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            title: 'Ampara Estate',
                            desc: 'Dry-zone cultivation focusing on hardy fruits and specialty crops. Centre of our ginger and mango growing programme.',
                            img: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=1100&q=80&auto=format&fit=crop',
                            alt: 'Banana plantation in production',
                        },
                        {
                            title: 'Kandy Estate',
                            desc: 'Highland cultivation for temperature-sensitive crops. Our largest avocado and pomegranate growing zone.',
                            img: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=1100&q=80&auto=format&fit=crop',
                            alt: 'Terraced hill cultivation',
                        },
                        {
                            title: 'Kalutara Estate',
                            desc: 'Western zone cultivation. Co-op managed with local stakeholder partnerships. Primary watermelon and spice growing centre.',
                            img: 'https://images.unsplash.com/photo-1488459716781-6818f2af1d1e?w=1100&q=80&auto=format&fit=crop',
                            alt: 'Agricultural field harvesting',
                        },
                    ].map((estate, idx) => (
                        <article
                            key={idx}
                            className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]"
                        >
                            <Photo
                                src={estate.img}
                                alt={estate.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                            <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                                <span className="num text-ondark/80!">Zone 0{idx + 1}</span>
                                <div>
                                    <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                        {estate.title}
                                    </h3>
                                    <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                        {estate.desc}
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
