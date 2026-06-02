import Photo from '@/components/ui/Photo';

export default function DirectorsSection() {
    return (
        <section className="pb-20 sm:pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14">
                    <div className="flex items-center gap-2 xs:gap-3 justify-center mb-5 sm:mb-6">
                        <span className="hairline-strong w-12 xs:w-16 sm:w-[60px]"></span>
                        <span className="eyebrow text-[10px] xs:text-xs">Meet our team</span>
                        <span className="hairline-strong w-12 xs:w-16 sm:w-[60px]"></span>
                    </div>
                    <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tightish text-ink">
                        Directors <em className="serif-em">Board</em>.
                    </h2>
                    <p className="mt-4 xs:mt-6 text-mute text-[14px] xs:text-[15px] leading-[1.7] max-w-full sm:max-w-[480px] mx-auto font-light">
                        The stewards who hold every quarterly review and sign every line of the
                        audited statement. Supporting sustainable growth and the people who tend the soil.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5">
                    <article className="dir-card team-card">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278288/yatawarasir-profile_wroc25.jpg"
                                alt="Mr. Y. M. D. T. Yatawara"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-6 xs:p-8 lg:p-10 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70! text-[10px] xs:text-[11px]">Chairman / Director</span>
                            </div>
                            <h3 className="font-display text-[26px] xs:text-[30px] lg:text-[34px] leading-tight">
                                Mr. Y. M. D. T. <em className="serif-em">Yatawara</em>
                            </h3>
                            <div className="mt-2 text-[13px] xs:text-[14px] text-accent font-medium">Founder & CEO</div>
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                BSc (Sp) in Marketing Management, MBA — University of Mainz.
                                Specialist in International Business & Entrepreneurship. Sourcing
                                expertise in gems and high-yield agricultural investments.
                            </p>
                        </div>
                    </article>

                    <article className="dir-card team-card">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278280/amunugammasirr-profile_tyvvsb.jpg"
                                alt="Mr. Nilanga Amunugama"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-6 xs:p-8 lg:p-10 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70! text-[10px] xs:text-[11px]">Director / Head of Finance</span>
                            </div>
                            <h3 className="font-display text-[26px] xs:text-[30px] lg:text-[34px] leading-tight">
                                Mr. Nilanga <em className="serif-em">Amunugama</em>
                            </h3>
                            <div className="mt-2 text-[13px] xs:text-[14px] text-accent font-medium">Executive Head of Marketing</div>
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                BCom Specialist, Chartered Accountant. Responsible for group-wide 
                                financial governance, quarterly reporting, and coordination with 
                                KPMG Big-Four auditing standards.
                            </p>
                        </div>
                    </article>

                    <article className="dir-card team-card sm:col-span-2 lg:col-span-1">
                        <figure className="portrait overflow-hidden sm:aspect-[21/9] lg:aspect-square">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278294/madams-profile_vckxlg.jpg"
                                alt="Director"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-6 xs:p-8 lg:p-10 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70! text-[10px] xs:text-[11px]">Director / HR</span>
                            </div>
                            <h3 className="font-display text-[26px] xs:text-[30px] lg:text-[34px] leading-tight">
                                Mrs. L. Manisha <em className="serif-em">Amaratunga</em>
                            </h3>
                            <div className="mt-2 text-[13px] xs:text-[14px] text-accent font-medium">Head of HR & Corporate Operations</div>
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                Specialist in Labour Productivity and Human Resource Management. 
                                Oversees the group&apos;s 800+ employee direct-payroll structure across 
                                23 national branch locations.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
