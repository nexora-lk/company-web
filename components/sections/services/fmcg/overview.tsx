import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";
import { Check } from "lucide-react";

const CATEGORIES = [
    'Fresh-cut fruit packs',
    'Dried fruit & snacks',
    'Herbal teas',
    'Cold-pressed juices',
    'Ginger extracts',
    'Coconut water',
    'Fruit jams & preserves',
    'Spice blends',
    'Organic honey',
];

export default function OverviewSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">

                    {/* Left: Text */}
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]" />
                            <span className="eyebrow text-[10px] xs:text-xs">FMCG Overview</span>
                        </div>

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue reveal">
                            Our plantation grows it. <em className="serif-em text-sapphire-blue">Our factory makes it.</em>
                            <br />
                            You invest in the margin.
                        </h2>

                        <div className="mt-8 xs:mt-10 space-y-4 xs:space-y-6 text-[14.5px] xs:text-[15.5px] leading-relaxed sm:leading-[1.75] text-mute max-w-full sm:max-w-[620px] font-light reveal">
                            <p>
                                <span className="font-display text-4xl xs:text-5xl text-ink float-left mr-3 leading-[0.8] mt-1">
                                    P
                                </span>
                                GG Fresh Foods was built on a simple insight — the fruits and
                                herbs on our own plantations create far more value when processed
                                and branded than when exported raw. By controlling the full chain
                                from field to shelf, we capture stronger margins and deliver more
                                reliable returns. Today the division operates a 5-tonne-per-day
                                processing facility in Horana, serving 240 retail partners across
                                Sri Lanka and exporting to the Middle East, East Asia and the EU.
                            </p>
                        </div>

                        <h3 className="font-display text-2xl xs:text-[26px] md:text-[28px] mt-10 xs:mt-12 text-midnight-blue reveal">
                            Our <em className="serif-em text-sapphire-blue">product</em> categories.
                        </h3>
                        <ul className="mt-6 xs:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 xs:gap-x-6 gap-y-3 xs:gap-y-4 max-w-full sm:max-w-[640px] reveal">
                            {CATEGORIES.map((c) => (
                                <li key={c} className="branch flex items-center gap-2 text-[13px] xs:text-[14px] text-ink/85">
                                    <span className="grid place-items-center w-4 h-4 rounded-full bg-accent/10 shrink-0">
                                        <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                                    </span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image */}
                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 mt-4 lg:mt-0 relative reveal">
                        <figure className="relative rounded-[18px] xs:rounded-[24px] overflow-hidden aspect-[3/2] xs:aspect-[4/3] lg:aspect-[4/5] shadow-2xl">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117514/fmcg-overview_eyrmnl.jpg"
                                alt="Fresh tropical fruits ready for processing"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/40 to-transparent" />
                        </figure>

                        <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"></div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
