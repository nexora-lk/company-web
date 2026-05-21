import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-12 lg:pb-16">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="num ulink">
                        [ Home ]
                    </Link>
                    <span className="num">/</span>
                    <span className="num">Events</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">2025 — 2026 calendar</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[128px] leading-[0.93] tracking-tightish">
                        Field days,
                        <br />
                        <em className="serif-em">expos,</em> and
                        <br />
                        a sapling for
                        <br />
                        every guest.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        A year on the calendar of Prestige Glamour Group — across plantations,
                        micro-finance branches, gem workshops, FMCG launches and the social-impact
                        field. We publish dates once a quarter and welcome partners, growers,
                        suppliers, journalists, and patrons.
                    </p>
                </div>
            </div>

            <div className="border-y border-line bg-bg">
                <div className="max-w-content mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center gap-2">
                    <span className="num mr-3">Filter —</span>
                    <button className="chip active">
                        All <span className="ct">· 18</span>
                    </button>
                    <button className="chip">
                        Plantation <span className="ct">· 4</span>
                    </button>
                    <button className="chip">
                        Micro-finance <span className="ct">· 3</span>
                    </button>
                    <button className="chip">
                        Gem &amp; Jewellery <span className="ct">· 2</span>
                    </button>
                    <button className="chip">
                        FMCG &amp; Fresh Foods <span className="ct">· 3</span>
                    </button>
                    <button className="chip">
                        Real Estate <span className="ct">· 2</span>
                    </button>
                    <button className="chip">
                        NGO &amp; Social Impact <span className="ct">· 4</span>
                    </button>
                    <span className="chip ml-auto border-ink! text-ink!">
                        Subscribe to calendar <span className="arrow">↗</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
