import Photo from '@/components/ui/Photo';

export default function WorlSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 03 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">How It Works</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish">
                            From first call to <em className="serif-em">first</em>
                            <br />
                            monthly report.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[340px]">
                        We open the round twice a year — March and September. Typical onboarding
                        runs three to four weeks, end-to-end.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    <article className="step group">
                        <div className="step-img">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Hand planting a sapling in dark soil"
                                priority
                            />
                        </div>
                        <div className="mt-6 flex items-baseline justify-between">
                            <span className="num">Step 01</span>
                            <span className="num">Week 1</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight mt-3">
                            Select your <em className="serif-em">project</em>.
                        </h3>
                        <p className="mt-3 text-[14px] text-mute leading-[1.7]">
                            Pick the model — short, mid, or long term — that aligns with your goals
                            and commitment window. We send a tailored prospectus within 48 hours.
                        </p>
                    </article>

                    <article className="step group">
                        <div className="step-img">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Document with pen, signing an agreement"
                            />
                        </div>
                        <div className="mt-6 flex items-baseline justify-between">
                            <span className="num">Step 02</span>
                            <span className="num">Week 2 — 3</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight mt-3">
                            Sign the <em className="serif-em">MoU</em>.
                        </h3>
                        <p className="mt-3 text-[14px] text-mute leading-[1.7]">
                            A short, plain-language agreement with the guaranteed-return clause and
                            off-take pricing spelled out. Witnessed by Colombo legal.
                        </p>
                    </article>

                    <article className="step group">
                        <div className="step-img">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Reading a report at a desk"
                            />
                        </div>
                        <div className="mt-6 flex items-baseline justify-between">
                            <span className="num">Step 03</span>
                            <span className="num">Monthly</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight mt-3">
                            Track your <em className="serif-em">investment</em>.
                        </h3>
                        <p className="mt-3 text-[14px] text-mute leading-[1.7]">
                            Monthly written reports on project progress, financial performance and
                            ROI updates. Quarterly KPMG-audited statements thereafter.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
