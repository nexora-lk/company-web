import Photo from '@/components/ui/Photo';

export default function PortfolioSection() {
    return (
        <section id="properties" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bg">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 02 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[100px] md:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Estate Portfolio</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            Eight estates. <em className="serif-em">One</em>
                            <br />
                            quarterly ledger.
                        </h2>
                    </div>
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.6] sm:leading-[1.7] max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                        Each estate is managed by a regional team and audited by KPMG on the same
                        quarterly basis as our other business units.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    {[
                        {
                            title: 'Ampara Estate',
                            desc: 'Dry-zone cultivation focusing on hardy fruits and specialty crops. Centre of our ginger and mango growing programme.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Banana plantation in production',
                        },
                        {
                            title: 'Kandy Estate',
                            desc: 'Highland cultivation for temperature-sensitive crops. Our largest avocado and pomegranate growing zone.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Terraced hill cultivation',
                        },
                        {
                            title: 'Kalutara Estate',
                            desc: 'Western zone cultivation. Co-op managed with local stakeholder partnerships. Primary watermelon and spice growing centre.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Agricultural field harvesting',
                        },
                    ].map((estate, idx) => (
                        <article
                            key={idx}
                            className="svc-card group relative rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden bg-surface min-h-[300px] sm:min-h-[340px] md:min-h-[360px]"
                        >
                            <Photo
                                src={estate.img}
                                alt={estate.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                            <div className="relative h-full p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between text-ondark min-h-[300px] sm:min-h-[340px] md:min-h-[360px]">
                                <span className="num text-ondark/80! text-[11px] sm:text-xs md:text-sm">Zone 0{idx + 1}</span>
                                <div>
                                    <h3 className="font-display text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[0.98] tracking-tightish">
                                        {estate.title}
                                    </h3>
                                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] md:text-[13px] text-ondark/80 leading-[1.5] sm:leading-[1.6]">
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
