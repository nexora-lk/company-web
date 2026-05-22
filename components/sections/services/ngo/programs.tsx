import Photo from '@/components/ui/Photo';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 lg:py-32 bg-bg">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 02 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Key Programmes</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            Four <em className="serif-em">pillars</em>
                            <br />
                            of social change.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        Each programme is independently verified, reported with full financial
                        transparency, and benchmarked against international development standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            title: 'Rural Education',
                            desc: 'Building and renovating schools in underserved districts. 6 schools completed. 2,400 students reached annually.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Rural school classroom',
                        },
                        {
                            title: "Women's Empowerment",
                            desc: 'Vocational training and microfinance for female entrepreneurs. 8,500+ women trained. 94% employment rate after training.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Women in vocational training',
                        },
                        {
                            title: 'Environmental Rehab',
                            desc: 'Watershed restoration and reforestation. 420,000+ trees planted. 12 water sources rehabilitated.',
                            img: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg',
                            alt: 'Environmental rehabilitation project',
                        },
                    ].map((program, idx) => (
                        <article
                            key={idx}
                            className="svc-card group relative rounded-[20px] overflow-hidden bg-surface min-h-[380px]"
                        >
                            <Photo
                                src={program.img}
                                alt={program.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                            <div className="relative h-full p-7 flex flex-col justify-between text-ondark min-h-[380px]">
                                <span className="num text-ondark/80!">Programme 0{idx + 1}</span>
                                <div>
                                    <h3 className="font-display text-[30px] leading-[0.98] tracking-tightish">
                                        {program.title}
                                    </h3>
                                    <p className="mt-3 text-[12px] text-ondark/80 leading-[1.6]">
                                        {program.desc}
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
