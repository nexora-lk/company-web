import Photo from '@/components/ui/Photo';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bg">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 02 ]</span>
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Key Programmes</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            Four <em className="serif-em">pillars</em>
                            <br />
                            of social change.
                        </h2>
                    </div>
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-mute leading-[1.6] sm:leading-[1.7] max-w-70 sm:max-w-80 md:max-w-85">
                        Each programme is independently verified, reported with full financial
                        transparency, and benchmarked against international development standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
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
                            className="svc-card group relative rounded-[14px] sm:rounded-2xl md:rounded-[18px] lg:rounded-[20px] overflow-hidden bg-surface min-h-75 sm:min-h-85 md:min-h-90"
                        >
                            <Photo
                                src={program.img}
                                alt={program.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent"></div>
                            <div className="relative h-full p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between text-ondark min-h-75 sm:min-h-85 md:min-h-90">
                                <span className="num text-ondark/80! text-[11px] sm:text-xs md:text-sm">Programme 0{idx + 1}</span>
                                <div>
                                    <h3 className="font-display text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[0.98] tracking-tightish">
                                        {program.title}
                                    </h3>
                                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] md:text-[13px] text-ondark/80 leading-normal sm:leading-[1.6]">
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
