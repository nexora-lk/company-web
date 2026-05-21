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
                    <span className="num">Gallery</span>
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">A visual record · 1998 — 2026</span>
                </div>

                <div className="grid grid-cols-12 gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[56px] sm:text-[84px] lg:text-[128px] leading-[0.93] tracking-tightish">
                        Ribbons cut.
                        <br />
                        Lamps <em className="serif-em">lit.</em>
                        <br />
                        Hands shaken.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[15.5px] leading-[1.7] max-w-[420px] lg:pb-3">
                        A working archive — branch openings, head-office shifts, plantation field
                        days and the small ceremonies that mark how a Sri Lankan business actually
                        moves. Photographs by our team and by the community at every door.
                    </p>
                </div>
            </div>

            <div className="border-y border-line bg-bg">
                <div className="max-w-content mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center gap-2">
                    <span className="num mr-3">Album —</span>
                    <button className="chip active">
                        All <span className="ct">· 142</span>
                    </button>
                    <button className="chip">
                        Head Office Shift <span className="ct">· 24</span>
                    </button>
                    <button className="chip">
                        Baduraliya Opening <span className="ct">· 42</span>
                    </button>
                    <button className="chip">
                        Avissawella Opening <span className="ct">· 22</span>
                    </button>
                    <button className="chip">
                        Plantation Field Day <span className="ct">· 28</span>
                    </button>
                    <button className="chip">
                        Easter Charity <span className="ct">· 18</span>
                    </button>
                    <span className="chip ml-auto border-ink! text-ink!">
                        Download archive (3.4 GB) <span className="arrow">↗</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
