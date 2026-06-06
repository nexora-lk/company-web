import Link from 'next/link';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 reveal">
                    <Link href="/" className="num ulink">[ Home ]</Link>
                    <span className="num">/</span>
                    <span className="num">Gallery</span>
                    <span className="hairline-strong flex-1 max-w-[60px] sm:max-w-[120px] ml-2" />
                    <span className="eyebrow hidden sm:inline-block">A visual record · 1998 — 2026</span>
                </div>

                {/* Headline */}
                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
                    <h1 className="col-span-12 lg:col-span-8 font-display text-[42px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[128px] leading-[0.93] tracking-tightish reveal">
                        Ribbons cut.
                        <br />
                        Lamps <em className="serif-em">lit.</em>
                        <br />
                        Hands shaken.
                    </h1>
                    <p className="col-span-12 lg:col-span-4 text-mute text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.7] max-w-full sm:max-w-[480px] lg:max-w-none lg:pb-3 reveal">
                        A working archive — branch openings, head-office shifts, plantation field
                        days and the small ceremonies that mark how a Sri Lankan business actually
                        moves. Photographs by our team and by the community at every door.
                    </p>
                </div>
            </div>

            {/* Album filter bar */}
            <div className="border-y border-line bg-bg reveal">
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="num mr-2 sm:mr-3 text-[10px] sm:text-[11px]">Album —</span>
                    <button className="chip active text-[11px] sm:text-[12px]">
                        All <span className="ct">· 142</span>
                    </button>
                    <button className="chip text-[11px] sm:text-[12px]">
                        Head Office Shift <span className="ct">· 24</span>
                    </button>
                    <button className="chip text-[11px] sm:text-[12px]">
                        Baduraliya Opening <span className="ct">· 42</span>
                    </button>
                    <button className="chip text-[11px] sm:text-[12px]">
                        Avissawella Opening <span className="ct">· 22</span>
                    </button>
                    <button className="chip text-[11px] sm:text-[12px]">
                        Plantation Field Day <span className="ct">· 28</span>
                    </button>
                    <button className="chip text-[11px] sm:text-[12px]">
                        Easter Charity <span className="ct">· 18</span>
                    </button>
                    <span className="chip ml-auto border-ink! text-ink! text-[11px] sm:text-[12px] hidden sm:inline-flex">
                        Download archive (3.4 GB) <ArrowIcon type="up-right" size={12} className="ml-1" />
                    </span>
                </div>
            </div>
        </section>
    );
}
