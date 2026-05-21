export default function TeemSection() {
    return (
        <section className="pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 03 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Our Team Members</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[0.98] tracking-tightish max-w-[820px]">
                            Eight people, <em className="serif-em">nine</em> provinces, one ledger.
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-mute leading-[1.7] max-w-[320px]">
                        The heads who run each region, walk every estate, and answer every
                        co-operative meeting in person.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">LM</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">01</div>
                            <div className="font-display text-[22px] leading-tight">
                                L. Manisha <em className="serif-em">Amaratunga</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">
                                HR &amp; Finance Head
                            </div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">CF</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">02</div>
                            <div className="font-display text-[22px] leading-tight">
                                M. Clement <em className="serif-em">F. Fernando</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">General Manager</div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">TS</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">03</div>
                            <div className="font-display text-[22px] leading-tight">
                                Thambipillai <em className="serif-em">Sivakumaran</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">
                                Head of Province — North East
                            </div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">HL</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">04</div>
                            <div className="font-display text-[22px] leading-tight">
                                H. M. D. <em className="serif-em">Leelarathna</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">
                                Provincial Head — North West / North Central
                            </div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">MS</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">05</div>
                            <div className="font-display text-[22px] leading-tight">
                                M. S. <em className="serif-em">Samsudeen</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">Provincial Head</div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">KM</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">06</div>
                            <div className="font-display text-[22px] leading-tight">
                                K. <em className="serif-em">Madikumar</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">Provincial Head</div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">ST</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">07</div>
                            <div className="font-display text-[22px] leading-tight">
                                S. C. R. <em className="serif-em">Thisera</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">
                                Deputy Provincial Head, North West / NC — Deputy 01
                            </div>
                        </div>
                    </article>

                    <article className="team-card">
                        <div className="portrait">
                            <span className="mono">AK</span>
                        </div>
                        <div className="pt-5">
                            <div className="num mb-1">08</div>
                            <div className="font-display text-[22px] leading-tight">
                                R. M. S. A. K. <em className="serif-em">Kumara</em>
                            </div>
                            <div className="mt-1 text-[13px] text-accent">
                                Deputy Provincial Head, North West / NC — Deputy 02
                            </div>
                        </div>
                    </article>
                </div>

                <p className="mt-10 text-[12px] text-mute max-w-[420px]">
                    Portraits are stand-ins. Replace each `portrait` block with the team member's
                    photograph — the layout is sized 4 : 5 to match a head-and-shoulders portrait.
                </p>
            </div>
        </section>
    );
}
