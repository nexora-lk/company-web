import Photo from '@/components/ui/Photo';

export default function AllProgrammesSection() {
    return (
        <section className="pb-20 lg:pb-28">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">All Programmes</span>
                        </div>
                        <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightish">
                            One calendar, <em className="serif-em">six</em> industries.
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="num">View —</span>
                        <button className="chip active">List</button>
                        <button className="chip">Calendar</button>
                    </div>
                </div>

                <div className="hairline"></div>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="num mb-2">No. 01 / Plantation</div>
                        <div className="font-display text-[52px] leading-none">
                            10<em className="serif-em">·</em>14
                        </div>
                        <div className="num mt-2">October 2025 — Nuwara Eliya</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Recurring
                            annually
                        </span>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            Plantation Events —<br />
                            <em className="serif-em">Aga Expo</em> &amp; Field Workshops.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            A five-day programme of grower workshops, training, seminars and the
                            <span className="text-ink">Plant-a-Sapling</span> entrance ritual. Each
                            guest receives a numbered sapling and a small ledger to log its first
                            year — we send a photograph back to the entrance.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Workshops</span>
                            <span className="chip">Training</span>
                            <span className="chip">Seminars</span>
                            <span className="chip">RSVP required</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 evt-img">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-4 evt-img order-2 lg:order-1">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                    <div className="col-span-12 lg:col-span-5 order-3 lg:order-2">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            Microfinance Events —<br />
                            literacy &amp; <em className="serif-em">first-loan</em> clinics.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            Open-air clinics on entrepreneurship, working-capital management and
                            financial literacy. We bring the loan officer, the auditor and the field
                            mentor to one table — and the borrower comes ready to draft the first
                            twelve months of cash flow.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Entrepreneur clinic</span>
                            <span className="chip">Borrower training</span>
                            <span className="chip">Walk-in</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 order-1 lg:order-3 lg:text-right">
                        <div className="num mb-2">No. 02 / Micro-finance</div>
                        <div className="font-display text-[52px] leading-none">
                            06<em className="serif-em">·</em>monthly
                        </div>
                        <div className="num mt-2">First Saturday — every branch</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 29 branches
                        </span>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="num mb-2">No. 03 / Gem &amp; Jewellery</div>
                        <div className="font-display text-[52px] leading-none">
                            22<em className="serif-em">·</em>25
                        </div>
                        <div className="num mt-2">February 2026 — BMICH, Colombo</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Trade only
                        </span>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            Gem &amp; Jewellery —<br />
                            the <em className="serif-em">Colombo</em> Trade Mission.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            Our delegation to Sri Lanka Gem &amp; Jewellery Expo: a programme of
                            buyer meetings, rough-stone viewings, and bench-side conversations with
                            our Ratnapura cutters. By appointment, every half-hour, for four days.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Trade mission</span>
                            <span className="chip">By appointment</span>
                            <span className="chip">Buyer-side</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 evt-img">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-4 evt-img order-2 lg:order-1">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                    <div className="col-span-12 lg:col-span-5 order-3 lg:order-2">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            FMCG &amp; Fresh Foods —<br />
                            the <em className="serif-em">cinnamon</em> launch days.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            Launch events for our packaged-spice and fresh-fruit lines: tastings for
                            distributors and retailers, store-opening rituals, and meetings with
                            partner buyers across South Asia.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Launch</span>
                            <span className="chip">Tasting</span>
                            <span className="chip">Distributor</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 order-1 lg:order-3 lg:text-right">
                        <div className="num mb-2">No. 04 / FMCG &amp; Fresh Foods</div>
                        <div className="font-display text-[52px] leading-none">
                            04<em className="serif-em">·</em>2026
                        </div>
                        <div className="num mt-2">April 2026 — Colombo &amp; Chennai</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Two-city
                            programme
                        </span>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="num mb-2">No. 05 / NGO &amp; Social Impact</div>
                        <div className="font-display text-[52px] leading-none">
                            Year<em className="serif-em">·</em>round
                        </div>
                        <div className="num mt-2">11 rural schools — Sabaragamuwa</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{' '}
                            Donor-supported
                        </span>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            Childhood Development —<br />
                            the <em className="serif-em">cultural</em> donor circle.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            Our Childhood Education Programme funds early-years initiatives at
                            eleven rural schools across the lowest-income corners of Sabaragamuwa
                            Province — quietly, four times a year, with audited disclosure each
                            cycle.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Early years</span>
                            <span className="chip">Rural schools</span>
                            <span className="chip">Audited</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 evt-img">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-line">
                    <div className="col-span-12 lg:col-span-4 evt-img order-2 lg:order-1">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                    <div className="col-span-12 lg:col-span-5 order-3 lg:order-2">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            Real Estate Development —<br />
                            opening of <em className="serif-em">restored</em> houses.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            Investment ceremonies for the trust's heritage portfolio and the opening
                            of newly restored colonial villas along the southern coast — by
                            invitation to partners, brokers and FMCG patrons.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Ceremony</span>
                            <span className="chip">Heritage</span>
                            <span className="chip">By invitation</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 order-1 lg:order-3 lg:text-right">
                        <div className="num mb-2">No. 06 / Real Estate</div>
                        <div className="font-display text-[52px] leading-none">
                            09<em className="serif-em">·</em>2026
                        </div>
                        <div className="num mt-2">September 2026 — Galle Fort</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> By
                            invitation
                        </span>
                    </div>
                </article>

                <article className="evt-row grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="num mb-2">No. 07 / Social Impact</div>
                        <div className="font-display text-[52px] leading-none">
                            Mar<em className="serif-em">·</em>29
                        </div>
                        <div className="num mt-2">Easter, 2026 — Negombo &amp; Batticaloa</div>
                        <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Open to all
                        </span>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className="font-display text-[32px] lg:text-[40px] leading-[1.05] tracking-tightish">
                            The <em className="serif-em">Easter</em> Charity —<br />a foundation for
                            the underserved.
                        </h3>
                        <p className="mt-5 text-mute text-[14.5px] leading-[1.7]">
                            The Easter Charity Foundation (ECF) is our seven-year-old programme of
                            single-day clinics, meal kitchens and small-business grants for
                            underprivileged communities — held twice a year, around Easter and the
                            autumn equinox. Donations are tax-receipted.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="chip">Foundation</span>
                            <span className="chip">Clinic &amp; meals</span>
                            <span className="chip">Donations welcome</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 evt-img">
                        <figure className="rounded-[14px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80&auto=format&fit=crop"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </article>

                <div className="hairline"></div>
            </div>
        </section>
    );
}
