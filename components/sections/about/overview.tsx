import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function OverviewSection() {
    return (
        <section className="pb-20 pt-20 lg:pb-36 lg:pt-32">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">From The Executive Head</span>
                        </div>

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink reveal">
                            A letter from
                            <br />
                            Mr. Nilanga Amunugama , Managing Director.
                        </h2>

                        <div className="mt-8 xs:mt-10 space-y-4 xs:space-y-6 text-[14px] xs:text-[15px] leading-relaxed sm:leading-[1.75] text-mute max-w-full sm:max-w-[640px] font-light reveal">
                            <p>
                                <span className="font-display text-4xl xs:text-5xl text-ink float-left mr-3 leading-[0.8] mt-1">
                                    P
                                </span>
                                restige Glamour Working Capital Solutions was built on a simple belief: investors
                                deserve to see exactly where their money goes, and to receive returns that reflect
                                real business performance — not projections or promises.
                            </p>
                            <p>
                                Since 2013, I have worked alongside our leadership to deploy capital across seven
                                divisions with complete financial transparency, audits, and a commitment to paying
                                every investor on time. As Managing Director, I oversee the systems that make this
                                possible.
                            </p>
                            <p>
                                Our 23 branches across 8 provinces are not just offices — they are proof that we
                                operate at scale, on the ground, with real people managing real assets. Every
                                investor payment flows through our financial controls. Every division's performance
                                is verified by my team. Every audit bears my signature.
                            </p>
                            <p>
                                By bringing overseas investment into Sri Lankan agriculture, gems, real estate,
                                and enterprise, we increase foreign exchange to the island while delivering
                                strong returns to our investors. We do this openly, with audited numbers.
                            </p>
                        </div>

                        <div className="mt-8 xs:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 reveal">
                            <div>
                                <div className="font-display text-2xl xs:text-[26px] leading-none text-ink">
                                    Nilanga Amunugama
                                </div>
                                <div className="num mt-2 text-accent">Managing Director · Finance & Operations</div>
                                <div className="num mt-2 text-accent">Prestige Glamour Group of Company</div>
                            </div>
                            <div className="hidden md:block hairline-strong w-16"></div>
                            <div className="hidden sm:block font-display italic text-xl xs:text-[22px] text-mute/60">
                                Kaluthara
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 relative mt-8 lg:mt-0 reveal">
                        <figure className="aspect-[4/5] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278280/amunugammasirr-profile_tyvvsb.jpg"
                                alt="Chairman Y. M. D. T. Yatawara"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Decorative background element for desktop */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
