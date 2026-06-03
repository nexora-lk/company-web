import Photo from '@/components/ui/Photo';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cultivation Plans | Prestige Glamour Group — Investment Opportunities',
    description:
        'Invest in Sri Lankan plantation cultivation. Three-tier investment models across ten premium crops with flexible investment options and competitive returns.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/cultivation',
    },
    openGraph: {
        title: 'Cultivation Plans & Investment Programs',
        description:
            'Three investment tiers, ten premium crops, flexible programs for investors and stakeholders.',
        url: 'https://www.prestigeglamourgroupofcompany.com/cultivation',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: 'https://www.prestigeglamourgroupofcompany.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Cultivation Plans',
                                item: 'https://www.prestigeglamourgroupofcompany.com/cultivation',
                            },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'Cultivation Plans',
                        description:
                            'Three-tiered cultivation investment plans across ten crops in Sri Lanka.',
                        provider: {
                            '@type': 'Organization',
                            name: 'Prestige Glamour Group',
                        },
                        category: 'Agriculture Investment',
                    }),
                }}
            />

            <section className="relative overflow-hidden">
                <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
                    <div className="flex items-center gap-3 mb-8 reveal">
                        <Link href="/" className="num ulink">
                            [ Home ]
                        </Link>
                        <span className="num">/</span>
                        <span className="num">Cultivation Plans</span>
                        <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                        <span className="eyebrow">Investor &amp; Stakeholder Programmes</span>
                    </div>

                    <div className="grid grid-cols-12 gap-8 items-end reveal">
                        <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.93] tracking-tightish reveal">
                            Three tiers,
                            <br />
                            ten crops,
                            <br />
                            <em className="serif-em">one</em> long harvest.
                        </h1>
                        <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3 reveal">
                            Short-, mid-, and long-term cultivation programmes — designed for
                            partners from a half-acre smallholder through to institutional capital.
                            Every plan is underwritten by Prestige Glamour Group of Company and
                            overseen by our agronomy team in Nuwara Eliya.
                        </p>
                    </div>

                    <div className="mt-16 hairline reveal"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <a
                            href="#short"
                            className="group p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-line reveal"
                        >
                            <div className="flex items-center justify-between mb-8 reveal">
                                <span className="num">Tier 01</span>
                                <span className="num">6 months</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight reveal">
                                Short Term <em className="serif-em">Projects</em>
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Melon, corn, banana — quick rotations with guaranteed off-take.
                                Built for first-time investors.
                            </p>
                            <div className="mt-6 text-[13px] text-accent reveal">
                                Read the plan <span className="arrow">→</span>
                            </div>
                        </a>
                        <a
                            href="#mid"
                            className="group p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-line reveal"
                        >
                            <div className="flex items-center justify-between mb-8 reveal">
                                <span className="num">Tier 02</span>
                                <span className="num">1 year</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight reveal">
                                Mid Term <em className="serif-em">Projects</em>
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Ginger and the Gold Spirits of Landing programme — for landowners
                                under two acres.
                            </p>
                            <div className="mt-6 text-[13px] text-accent reveal">
                                Read the plan <span className="arrow">→</span>
                            </div>
                        </a>
                        <a href="#long" className="group p-8 lg:p-10 reveal">
                            <div className="flex items-center justify-between mb-8 reveal">
                                <span className="num">Tier 03</span>
                                <span className="num">2+ years</span>
                            </div>
                            <h3 className="font-display text-[34px] leading-tight reveal">
                                Long Term <em className="serif-em">Projects</em>
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Mango, pomegranate, king coconut, jackfruit. Run on PGG-owned and
                                stakeholder land.
                            </p>
                            <div className="mt-6 text-[13px] text-accent reveal">
                                Read the plan <span className="arrow">→</span>
                            </div>
                        </a>
                    </div>
                    <div className="hairline reveal"></div>
                </div>
            </section>

            <section id="short" className="py-24 lg:py-32">
                <div className="max-w-content mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-12 gap-6 lg:gap-12">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6 reveal">
                                <span className="num">[ 01 ]</span>
                                <span className="hairline-strong w-[120px]"></span>
                                <span className="eyebrow">6 months · ROI-focused</span>
                            </div>
                            <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish reveal">
                                Short-term <em className="serif-em">projects</em>.<br />A half-year,
                                a sealed price.
                            </h2>
                            <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[560px] reveal">
                                Ten quick-rotation crops with a guaranteed off-take price agreed at
                                planting. Ideal for first-time investors and smallholders looking to
                                compound a single season's return before stepping into the longer
                                plans.
                            </p>

                            <ul className="mt-10 space-y-3 max-w-[560px] reveal">
                                <li className="branch text-[14.5px] reveal">
                                    <span className="num mr-3">Crops</span>Watermelon · Sweet melon
                                    · Corn
                                </li>
                                <li className="branch text-[14.5px] reveal">
                                    <span className="num mr-3">Returns</span>ROI-focused with
                                    guaranteed pricing
                                </li>
                                <li className="branch text-[14.5px] reveal">
                                    <span className="num mr-3">Suited to</span>Small to mid-level
                                    investors
                                </li>
                            </ul>

                            <div className="mt-12 reveal">
                                <div className="flex items-center justify-between mb-5 reveal">
                                    <div className="num">The crop ledger — Tier 01</div>
                                    <div className="num">10 entries</div>
                                </div>
                                <div className="hairline reveal"></div>
                                <ol className="divide-y divide-line reveal">
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">01</span>Watermelon —
                                            off-season
                                        </span>
                                        <span className="num">cycle · 90 days</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">02</span>Sweet melon
                                        </span>
                                        <span className="num">cycle · 80 days</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">03</span>Corn
                                        </span>
                                        <span className="num">cycle · 110 days</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">04</span>Sweet corn
                                        </span>
                                        <span className="num">cycle · 95 days</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">05</span>Sugar muskmelon{' '}
                                            <em className="text-mute">(seeni kakiri)</em>
                                        </span>
                                        <span className="num">cycle · 85 days</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">06</span>Aloe vera
                                        </span>
                                        <span className="num">cycle · 6 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">07</span>Ginger
                                        </span>
                                        <span className="num">cycle · 5 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">08</span>Cassava
                                        </span>
                                        <span className="num">cycle · 9 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">09</span>Pineapple
                                        </span>
                                        <span className="num">cycle · 14 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">10</span>Banana
                                        </span>
                                        <span className="num">cycle · 10 months</span>
                                    </li>
                                </ol>
                                <div className="hairline reveal"></div>
                            </div>

                            <div className="mt-10 flex gap-3 reveal">
                                <a href="#enquire" className="btn btn-primary reveal">
                                    Enquire — Tier 01 <span className="arrow">→</span>
                                </a>
                                <a href="#" className="btn btn-ghost reveal">
                                    Download crop deck <span className="arrow">↗</span>
                                </a>
                            </div>
                        </div>

                        <aside className="col-span-12 lg:col-span-5 space-y-4 reveal">
                            <figure className="rounded-[18px] overflow-hidden aspect-[4/3] reveal">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-tea_st9k3j.jpg"
                                    alt="Watermelon field at harvest"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <figure className="rounded-[18px] overflow-hidden aspect-[4/3] reveal">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-farm_uv4d8r.jpg"
                                    alt="Field of corn"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="rounded-[18px] bg-accent2 p-6 lg:p-8 reveal">
                                <div className="num mb-4 reveal">Tier 01 — at a glance</div>
                                <dl className="grid grid-cols-2 gap-y-3 text-[13.5px] reveal">
                                    <dt className="text-mute reveal">Min. ticket</dt>
                                    <dd className="font-display text-[18px] reveal">LKR 250,000</dd>
                                    <dt className="text-mute reveal">Term</dt>
                                    <dd className="font-display text-[18px] reveal">6 months</dd>
                                    <dt className="text-mute reveal">Target IRR</dt>
                                    <dd className="font-display text-[18px] reveal">22 — 28%</dd>
                                    <dt className="text-mute reveal">Pricing</dt>
                                    <dd className="font-display text-[18px] reveal">Sealed at planting</dd>
                                </dl>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <div className="max-w-content mx-auto px-6 lg:px-10 reveal">
                <div className="hairline reveal"></div>
            </div>

            <section id="mid" className="py-24 lg:py-32">
                <div className="max-w-content mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-12 gap-6 lg:gap-12">
                        <aside className="col-span-12 lg:col-span-5 space-y-4 order-2 lg:order-1 reveal">
                            <figure className="rounded-[18px] overflow-hidden aspect-[4/3] reveal">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-leaves_wq5j2n.jpg"
                                    alt="Ginger and fresh roots from the field"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8 reveal">
                                <div className="num text-ondark/70! mb-4 reveal">
                                    Tier 02 — at a glance
                                </div>
                                <dl className="grid grid-cols-2 gap-y-3 text-[13.5px] reveal">
                                    <dt className="opacity-60 reveal">Min. ticket</dt>
                                    <dd className="font-display text-[18px] reveal">LKR 1,200,000</dd>
                                    <dt className="opacity-60 reveal">Term</dt>
                                    <dd className="font-display text-[18px] reveal">12 months</dd>
                                    <dt className="opacity-60 reveal">Target IRR</dt>
                                    <dd className="font-display text-[18px] reveal">28 — 36%</dd>
                                    <dt className="opacity-60 reveal">Land</dt>
                                    <dd className="font-display text-[18px] reveal">Below 2 acres</dd>
                                </dl>
                            </div>
                            <div className="rounded-[18px] border border-line p-6 lg:p-8 reveal">
                                <div className="num mb-3 reveal">Gold Spirits of Landing</div>
                                <p className="text-[13.5px] text-mute leading-[1.7] reveal">
                                    For owners with land under two acres: we manage cultivation
                                    end-to-end, the investor or landholder contributes capital and
                                    land. PGG provides seedlings, specialised fertiliser, advisory
                                    supervision and the hormone schedule for best yield.
                                </p>
                            </div>
                        </aside>

                        <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 reveal">
                            <div className="flex items-center gap-3 mb-6 reveal">
                                <span className="num">[ 02 ]</span>
                                <span className="hairline-strong w-[120px]"></span>
                                <span className="eyebrow">12 months · Land + Working Capital</span>
                            </div>
                            <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish reveal">
                                Mid-term <em className="serif-em">projects</em>.<br />A year, walked
                                together.
                            </h2>
                            <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[560px] reveal">
                                Ginger-focused programmes paired with our Gold Spirits of Landing
                                model — for landholders who want to plant but lack the agronomy team
                                to operate. We bring the team; you bring the soil.
                            </p>

                            <div className="mt-10 grid sm:grid-cols-2 gap-4 reveal">
                                <div className="rounded-[14px] border border-line p-6 reveal">
                                    <span className="num">a.</span>
                                    <div className="font-display text-[22px] leading-tight mt-2">
                                        Land + working capital
                                    </div>
                                    <p className="text-[13.5px] text-mute mt-2 leading-[1.7]">
                                        Investor provides land or capital; PGG operates the
                                        cultivation cycle.
                                    </p>
                                </div>
                                <div className="rounded-[14px] border border-line p-6 reveal">
                                    <span className="num">b.</span>
                                    <div className="font-display text-[22px] leading-tight mt-2">
                                        Specialist advisory
                                    </div>
                                    <p className="text-[13.5px] text-mute mt-2 leading-[1.7]">
                                        Soil testing, fertiliser blend, irrigation cadence, harvest
                                        hormone protocol.
                                    </p>
                                </div>
                                <div className="rounded-[14px] border border-line p-6 reveal">
                                    <span className="num">c.</span>
                                    <div className="font-display text-[22px] leading-tight mt-2">
                                        Plant selling
                                    </div>
                                    <p className="text-[13.5px] text-mute mt-2 leading-[1.7]">
                                        Off-take through PGG's export desk — Sri Lanka and the Gulf.
                                    </p>
                                </div>
                                <div className="rounded-[14px] border border-line p-6 reveal">
                                    <span className="num">d.</span>
                                    <div className="font-display text-[22px] leading-tight mt-2">
                                        Supervision
                                    </div>
                                    <p className="text-[13.5px] text-mute mt-2 leading-[1.7]">
                                        Weekly walk-the-field by a regional agronomist plus a
                                        quarterly audit.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 flex gap-3 reveal">
                                <a href="#enquire" className="btn btn-primary reveal">
                                    Enquire — Tier 02 <span className="arrow">→</span>
                                </a>
                                <a href="#" className="btn btn-ghost reveal">
                                    Gold Spirits brochure <span className="arrow">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-content mx-auto px-6 lg:px-10 reveal">
                <div className="hairline reveal"></div>
            </div>

            <section id="long" className="py-24 lg:py-32">
                <div className="max-w-content mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-12 gap-6 lg:gap-12">
                        <div className="col-span-12 lg:col-span-7 reveal">
                            <div className="flex items-center gap-3 mb-6 reveal">
                                <span className="num">[ 03 ]</span>
                                <span className="hairline-strong w-[120px]"></span>
                                <span className="eyebrow">2+ years · PGG-managed</span>
                            </div>
                            <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-tightish reveal">
                                Long-term <em className="serif-em">projects</em>.<br />
                                For the slow harvest.
                            </h2>
                            <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[560px] reveal">
                                Orchard-grade crops — mango, pomegranate, jackfruit, king coconut —
                                managed on PGG-owned plantations and on stakeholder land. A
                                plant-selling and advisory model is available for investors under
                                two acres.
                            </p>

                            <div className="mt-12 reveal">
                                <div className="flex items-center justify-between mb-5 reveal">
                                    <div className="num">The orchard ledger — Tier 03</div>
                                    <div className="num">7 entries</div>
                                </div>
                                <div className="hairline reveal"></div>
                                <ol className="divide-y divide-line reveal">
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">01</span>Mango — Tom &amp;
                                            EJC
                                        </span>
                                        <span className="num">first yield · 26 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">02</span>Karthakolomban
                                            (mango)
                                        </span>
                                        <span className="num">first yield · 30 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">03</span>Other mango
                                            varieties
                                        </span>
                                        <span className="num">first yield · 28 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">04</span>Pomegranate
                                        </span>
                                        <span className="num">first yield · 24 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">05</span>Jackfruit
                                        </span>
                                        <span className="num">first yield · 36 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">06</span>King coconut
                                        </span>
                                        <span className="num">first yield · 42 months</span>
                                    </li>
                                    <li className="flex items-baseline justify-between py-3 text-[14.5px] reveal">
                                        <span>
                                            <span className="num mr-3">07</span>Kurumba
                                        </span>
                                        <span className="num">first yield · 40 months</span>
                                    </li>
                                </ol>
                                <div className="hairline reveal"></div>
                            </div>

                            <div className="mt-10 flex gap-3 reveal">
                                <a href="#enquire" className="btn btn-primary reveal">
                                    Enquire — Tier 03 <span className="arrow">→</span>
                                </a>
                                <a href="#" className="btn btn-ghost reveal">
                                    Visit a managed estate <span className="arrow">↗</span>
                                </a>
                            </div>
                        </div>

                        <aside className="col-span-12 lg:col-span-5 space-y-4 reveal">
                            <figure className="rounded-[18px] overflow-hidden aspect-[4/3] reveal">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-harvest_kx8m1o.jpg"
                                    alt="King coconut on the palm"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <figure className="rounded-[18px] overflow-hidden aspect-[4/3] reveal">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-process_dy3p5k.jpg"
                                    alt="Mango orchard"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="rounded-[18px] bg-accent2 p-6 lg:p-8 reveal">
                                <div className="num mb-4 reveal">Tier 03 — at a glance</div>
                                <dl className="grid grid-cols-2 gap-y-3 text-[13.5px] reveal">
                                    <dt className="text-mute reveal">Min. ticket</dt>
                                    <dd className="font-display text-[18px] reveal">LKR 5,000,000</dd>
                                    <dt className="text-mute reveal">Term</dt>
                                    <dd className="font-display text-[18px] reveal">2 — 5 years</dd>
                                    <dt className="text-mute reveal">Target IRR</dt>
                                    <dd className="font-display text-[18px] reveal">
                                        18 — 24% (compounded)
                                    </dd>
                                    <dt className="text-mute reveal">Land</dt>
                                    <dd className="font-display text-[18px] reveal">PGG or stakeholder</dd>
                                </dl>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-bg">
                <div className="max-w-content mx-auto px-6 lg:px-10">
                    <div className="flex items-center gap-3 mb-8 reveal">
                        <span className="num">[ 04 ]</span>
                        <span className="hairline-strong w-[120px]"></span>
                        <span className="eyebrow">How a Cultivation Plan runs</span>
                    </div>
                    <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightish max-w-[820px] reveal">
                        From the first <em className="serif-em">enquiry</em> to the harvest cheque.
                    </h2>

                    <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 reveal">
                        <li className="p-8 border-t border-line reveal">
                            <div className="flex items-center justify-between mb-12 reveal">
                                <span className="num">Step 01</span>
                                <span className="num">Day 1 — 7</span>
                            </div>
                            <h3 className="font-display text-[26px] leading-tight reveal">
                                Conversation &amp; <em className="serif-em">site visit</em>.
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Our agronomy lead walks the proposed plot and writes a one-page
                                suitability note.
                            </p>
                        </li>
                        <li className="p-8 border-t border-line lg:border-l reveal">
                            <div className="flex items-center justify-between mb-12 reveal">
                                <span className="num">Step 02</span>
                                <span className="num">Day 7 — 21</span>
                            </div>
                            <h3 className="font-display text-[26px] leading-tight reveal">
                                Plan &amp; <em className="serif-em">agreement</em>.
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Choice of tier, off-take pricing, deliverables — all in one short
                                contract.
                            </p>
                        </li>
                        <li className="p-8 border-t border-line lg:border-l reveal">
                            <div className="flex items-center justify-between mb-12 reveal">
                                <span className="num">Step 03</span>
                                <span className="num">Month 1 — N</span>
                            </div>
                            <h3 className="font-display text-[26px] leading-tight reveal">
                                Planting &amp; <em className="serif-em">supervision</em>.
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                Weekly walk-the-field, monthly written update, quarterly audit by
                                KPMG.
                            </p>
                        </li>
                        <li className="p-8 border-t border-b border-line lg:border-l reveal">
                            <div className="flex items-center justify-between mb-12 reveal">
                                <span className="num">Step 04</span>
                                <span className="num">Harvest</span>
                            </div>
                            <h3 className="font-display text-[26px] leading-tight reveal">
                                Off-take &amp; <em className="serif-em">payout</em>.
                            </h3>
                            <p className="mt-3 text-[13.5px] text-mute leading-[1.7] reveal">
                                PGG's export desk handles the sale; settlement within ten working
                                days.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>

            <section id="enquire" className="py-24 lg:py-32">
                <div className="max-w-content mx-auto px-6 lg:px-10">
                    <div className="relative rounded-[24px] overflow-hidden bg-ink text-ondark reveal">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442665/cultivation-banner_hs7n6j.jpg"
                            alt="Investment background"
                            fill
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30"></div>

                        <div className="relative grid grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-14 reveal">
                            <div className="col-span-12 lg:col-span-5 reveal">
                                <span className="num text-ondark/70! reveal">
                                    [ Contact us — Investment desk ]
                                </span>
                                <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightish mt-4 reveal">
                                    Connect with our
                                    <br />
                                    investment <em className="serif-em">team</em> today.
                                </h2>
                                <p className="mt-5 max-w-[420px] text-ondark/75 text-[14.5px] leading-[1.7] reveal">
                                    Partner with us in high-growth sectors — agriculture,
                                    micro-finance, real estate. Let's build sustainable value
                                    together.
                                </p>
                                <div className="mt-8 space-y-3 text-[14px] reveal">
                                    <div className="flex items-center gap-3 reveal">
                                        <span className="num text-ondark/55! w-20">Phone</span>
                                        <span>+94 34 22 33 669</span>
                                    </div>
                                    <div className="flex items-center gap-3 reveal">
                                        <span className="num text-ondark/55! w-20">Alt.</span>
                                        <span>+94 70 469 4363</span>
                                    </div>
                                    <div className="flex items-center gap-3 reveal">
                                        <span className="num text-ondark/55! w-20">Email</span>
                                        <span>info@prestigeglamour.lk</span>
                                    </div>
                                </div>
                            </div>

                            <form className="col-span-12 lg:col-span-7 bg-bg text-ink rounded-[18px] p-8 lg:p-10 reveal">
                                <div className="flex items-center justify-between mb-8 reveal">
                                    <div className="reveal">
                                        <div className="num">Investment Inquiry · Form</div>
                                        <div className="font-display text-[26px] leading-tight mt-1">
                                            Tell us where to start.
                                        </div>
                                    </div>
                                    <span className="pill reveal">
                                        <span className="dot"></span>Reply within 1 day
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 reveal">
                                    <label className="block reveal">
                                        <div className="num mb-1">01 — Name</div>
                                        <input className="field" placeholder="Full name" />
                                    </label>
                                    <label className="block reveal">
                                        <div className="num mb-1">02 — Phone</div>
                                        <input className="field" placeholder="+94 …" />
                                    </label>
                                    <label className="block md:col-span-2 reveal">
                                        <div className="num mb-1">03 — Email</div>
                                        <input
                                            className="field"
                                            type="email"
                                            placeholder="you@company.com"
                                        />
                                    </label>
                                    <label className="block reveal">
                                        <div className="num mb-1">04 — Tier of interest</div>
                                        <select className="field bg-transparent">
                                            <option>Tier 01 — Short term (6 months)</option>
                                            <option>Tier 02 — Mid term (1 year)</option>
                                            <option>Tier 03 — Long term (2+ years)</option>
                                            <option>Not sure — please advise</option>
                                        </select>
                                    </label>
                                    <label className="block reveal">
                                        <div className="num mb-1">05 — Land available</div>
                                        <select className="field bg-transparent">
                                            <option>None — I'd like to invest only</option>
                                            <option>Under 2 acres</option>
                                            <option>2 — 5 acres</option>
                                            <option>5+ acres</option>
                                        </select>
                                    </label>
                                    <label className="block md:col-span-2 mt-3 reveal">
                                        <div className="num mb-1">06 — Message</div>
                                        <textarea
                                            className="field resize-none"
                                            rows={3}
                                            placeholder="A few lines on what you'd like to plant."
                                        ></textarea>
                                    </label>
                                </div>

                                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 reveal">
                                    <span className="text-[12px] text-mute reveal">
                                        By submitting you agree to our quiet handling of your
                                        details.
                                    </span>
                                    <div className="reveal">
                                        <button type="button" className="btn btn-primary">
                                            Submit enquiry <span className="arrow">→</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
