import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function DirectorsSection() {
    return (
        <section className="pb-10 pt-10 sm:pb-12 lg:pb-18 sm:pt12 lg:pt-18 bg-surface">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14 reveal">
                    <div className="flex items-center gap-2 xs:gap-3 justify-center mb-5 sm:mb-6">
                        <span className="hairline-strong w-12 xs:w-16 sm:w-[60px]"></span>
                        <span className="eyebrow text-[10px] xs:text-xs">Meet our team</span>
                        <span className="hairline-strong w-12 xs:w-16 sm:w-[60px]"></span>
                    </div>
                    <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tightish text-ink">
                        Directors <em className="serif-em">Board</em>.
                    </h2>
                    <p className="mt-4 xs:mt-6 text-mute text-[14px] xs:text-[15px] leading-[1.7] max-w-full sm:max-w-[480px] mx-auto font-light">
                        Three leaders who personally oversee capital deployment across all divisions.
                        Continuous audits. Full financial transparency. Direct investor access.
                        They don&#39;t hide behind corporate structures—they sign every statement,
                        approve every investment, and stake their reputations on consistent returns.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5">
                    <article className="dir-card team-card reveal">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278280/amunugammasirr-profile_tyvvsb.jpg"
                                alt="Mr. Nilanga Amunugama"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-6 xs:p-8 lg:p-10 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70! text-[10px] xs:text-[11px]">Managing Director / Head of Finance</span>
                            </div>
                            <h3 className="font-display text-[26px] xs:text-[30px] lg:text-[34px] leading-tight">
                                Mr. Nilanga <em className="serif-em">Amunugama</em>
                            </h3>
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                BCom Specialist, Chartered Accountant.
                            </p>
                        </div>
                    </article>

                    <article className="dir-card team-card sm:col-span-2 lg:col-span-1 reveal">
                        <figure className="portrait overflow-hidden sm:aspect-[21/9] lg:aspect-square">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781318220/madam-profilerrrr_jrwfeo.jpg"
                                alt="Director"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
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
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                Specialist in Labour Productivity and Human Resource Management.
                            </p>
                        </div>
                    </article>

                    <article className="dir-card team-card reveal">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278288/yatawarasir-profile_wroc25.jpg"
                                alt="Mr. Y. M. D. T. Yatawara"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-6 xs:p-8 lg:p-10 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70! text-[10px] xs:text-[11px]">Director</span>
                            </div>
                            <h3 className="font-display text-[26px] xs:text-[30px] lg:text-[34px] leading-tight">
                                Mr. Y. M. D. T. <em className="serif-em">Yatawara</em>
                            </h3>
                            <div className="hairline my-5 bg-white/10!"></div>
                            <p className="text-[13px] xs:text-[13.5px] leading-[1.7] opacity-80 font-light">
                                BSc (Sp) in Marketing Management, MBA — University of Mainz.
                                Specialist in International Business & Entrepreneurship.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
