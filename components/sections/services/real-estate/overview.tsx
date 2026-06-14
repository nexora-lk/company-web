import Photo from '@/components/ui/Photo';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Leaf from "@/components/ui/Leaf";
import { Check } from "lucide-react";

const DEV_AREAS = [
    'Agricultural land',
    'Rural development plots',
    'Plantation estates',
    'Commercial land',
    'Eco-tourism sites',
    'Infrastructure-ready land',
];

export default function OverviewSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7 reveal">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Real Estate Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish text-midnight-blue">
                            Buy low. <em className="serif-em text-sapphire-blue">Develop.</em>
                            <br />
                            Sell high. Share the returns.
                        </h2>

                        <div className="mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.75] text-mute max-w-155 reveal">
                            <p>
                                <span className="font-display text-[28px] sm:text-[32px] md:text-[36px] text-ink float-left mr-2 leading-[0.85] mt-1">
                                    S
                                </span>
                                ri Lanka&apos;s real estate market rewards patience and local knowledge.
                                PGG Properties identifies undervalued land — from agricultural plots
                                to undeveloped rural land — and develops them for sale at a significant
                                premium. Investor capital is deployed into specific projects with a clearly
                                defined development plan, target sale price, and expected return. Projects
                                run 12–24 months, with profits distributed at completion.
                            </p>
                        </div>

                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] mt-8 sm:mt-10 md:mt-12 text-midnight-blue reveal">
                            Our <em className="serif-em text-sapphire-blue">development</em> areas.
                        </h3>
                        <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-2.5 sm:gap-y-3 max-w-160 reveal">
                            {DEV_AREAS.map((a) => (
                                <li key={a} className="branch flex items-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] text-ink/85">
                                    <span className="grid place-items-center w-4 h-4 rounded-full bg-accent/10 shrink-0">
                                        <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                                    </span>
                                    {a}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 sm:mt-9 md:mt-10 flex flex-wrap gap-2 sm:gap-3 reveal">
                            <a href="#enquire" className="btn btn-primary text-[13px] sm:text-[14px] md:text-base">
                                Invest with us <ArrowIcon size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 mt-4 lg:mt-0 relative reveal">
                        <figure className="relative rounded-[14px] sm:rounded-2xl md:rounded-[18px] overflow-hidden aspect-4/5">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117617/real-estate-overview_oefayr.jpg"
                                alt="Colonial estate house in the Sri Lankan highlands"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/45 to-transparent" />
                        </figure>

                        <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"></div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
