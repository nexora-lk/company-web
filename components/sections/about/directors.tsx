import Photo from '@/components/ui/Photo';

export default function DirectorsSection() {
    return (
        <section className="pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-14">
                    <div className="flex items-center gap-3 justify-center mb-6">
                        <span className="hairline-strong w-[60px]"></span>
                        <span className="eyebrow">Meet our team</span>
                        <span className="hairline-strong w-[60px]"></span>
                    </div>
                    <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                        Directors <em className="serif-em">Board</em>.
                    </h2>
                    <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[480px] mx-auto">
                        The three stewards who hold every quarterly review and sign every line of the
                        audited statement. The true supporters of eco-friendliness — and of the
                        people who tend the soil.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <article className="dir-card team-card">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278288/yatawarasir-profile_wroc25.jpg"
                                alt="Mr. Y. M. D. T. Yatawara"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-8 lg:p-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70!">01 — Founder</span>
                                <span className="num text-ondark/70!">Since 1998</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight">
                                Mr. Y. M. D. T. <em className="serif-em">Yatawara</em>
                            </h3>
                            <div className="mt-2 text-[14px] text-accent">Chairman</div>
                            <div className="hairline my-5 bg-[rgba(241,236,224,0.18)]!"></div>
                            <p className="text-[13.5px] leading-[1.7] opacity-80">
                                Gem Business, Local &amp; Foreign Affairs. BSc (Sp) in Marketing
                                Management (2nd Lower), MBA — University of Mainz / Johannes
                                Gutenberg. SP in International Business Management &amp; Business
                                Entrepreneurship.
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
                        <div className="p-8 lg:p-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70!">02 — Director</span>
                                <span className="num text-ondark/70!">HR &amp; Finance</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight">
                                Mr. Nilanga <em className="serif-em">Amunugama</em>
                            </h3>
                            <div className="mt-2 text-[14px] text-accent">
                                Executive Head of Marketing
                            </div>
                            <div className="hairline my-5 bg-[rgba(241,236,224,0.18)]!"></div>
                            <p className="text-[13.5px] leading-[1.7] opacity-80">
                                HR &amp; Finance. BCom Specialist, University of Jayewardenepura.
                                Chartered Accountant. NILS — Labour Productivity Diploma in
                                Information Technology.
                            </p>
                        </div>
                    </article>

                    <article className="dir-card team-card">
                        <figure className="portrait overflow-hidden">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278294/madams-profile_vckxlg.jpg"
                                alt="Director"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="p-8 lg:p-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="num text-ondark/70!">03 — Director</span>
                                <span className="num text-ondark/70!">HR &amp; Finance</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight">
                                Mr. Nilanga <em className="serif-em">Amunugama</em>
                            </h3>
                            <div className="mt-2 text-[14px] text-accent">
                                Executive Head of Marketing
                            </div>
                            <div className="hairline my-5 bg-[rgba(241,236,224,0.18)]!"></div>
                            <p className="text-[13.5px] leading-[1.7] opacity-80">
                                HR &amp; Finance. BCom Specialist, University of Jayewardenepura.
                                Chartered Accountant. NILS — Labour Productivity Diploma in
                                Information Technology.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
