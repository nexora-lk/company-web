import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";
import { Award } from "lucide-react";

export default function AwardsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 overflow-hidden bg-bg">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* ── Text ── */}
                    <div className="col-span-12 lg:col-span-5 reveal">
                        <SectionEyebrow
                            index="05"
                            label="Recognition"
                            className="flex items-center gap-2 xs:gap-3 mb-4 sm:mb-6"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tightish text-midnight-blue">
                            Trusted by 3,200+ <em className="serif-em text-sapphire-blue">Investors.</em>
                            <br />
                            Audited by KPMG.
                        </h2>

                        <div className="mt-5 xs:mt-6 md:mt-8 max-w-full sm:max-w-[600px] lg:max-w-none">
                            <p className="text-[14px] xs:text-[15px] leading-relaxed text-mute mb-4 xs:mb-5 font-light">
                                Our financials are independently audited every quarter by KPMG Sri Lanka. Every investor sees the same disclosure — no selective reporting, no smoothed numbers.
                            </p>
                            <p className="text-[14px] xs:text-[15px] leading-relaxed text-mute font-light">
                                The certifications and recognition we hold come from doing things properly — not from promoting ourselves.
                            </p>
                        </div>
                    </div>

                    {/* ── Visual showcase — award presentation ── */}
                    <div className="col-span-12 lg:col-span-7 relative pb-12 sm:pb-14 mt-4 lg:mt-0 reveal">
                        {/* Stage */}
                        <div className="group relative aspect-[5/4] sm:aspect-[16/11]">

                            {/* Trophy — focal hero */}
                            <div className="absolute inset-0 grid place-items-center pb-[14%]">
                                <figure className="relative w-[50%] xs:w-[46%] sm:w-[42%] aspect-[4/5] transition-transform duration-700 group-hover:-translate-y-2.5">
                                    <Photo
                                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781369027/cup-original_umz1vp.png"
                                        alt="Award trophy won by Prestige Glamour"
                                        className="w-full h-full object-contain drop-shadow-[0_26px_34px_rgba(7,11,41,0.28)]"
                                        fill
                                        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw"
                                    />
                                </figure>
                            </div>

                            {/* pedestal base */}
                            <span aria-hidden className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[46%] h-3 bg-midnight-blue/15 rounded-[50%] blur-md" />
                            <span aria-hidden className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[34%] h-px bg-linear-to-r from-transparent via-normal-gold/60 to-transparent" />
                        </div>

                        {/* Certificate — framed, overlapping */}
                        <figure className="absolute bottom-0 right-4 sm:right-8 w-[42%] max-w-[230px] rounded-xl bg-surface p-2 shadow-[0_24px_50px_-20px_rgba(7,11,41,0.45)] border border-line rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-1 reveal">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                                <Photo
                                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278251/IMG_20260601_022245_wy6vzu.jpg"
                                    alt="Certificate of Excellence"
                                    className="w-full h-full object-cover"
                                    fill
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                                />
                            </div>
                            <figcaption className="px-1 pt-2 pb-0.5 text-[10px] eyebrow text-mute">
                                Certificate of Excellence
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div>

            <style>{`
                @media (prefers-reduced-motion: no-preference) {
                    @keyframes sealSpin { to { transform: rotate(360deg); } }
                    .award-seal-ring { animation: sealSpin 18s linear infinite; }
                }
            `}</style>
        </section>
    );
}
