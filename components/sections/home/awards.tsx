import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function AwardsSection() {
    return (
        <section className="py-10 xs:py-6 md:py-14 lg:py-5 xl:py-6 overflow-hidden">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Text */}
                    <div className="col-span-12 lg:col-span-5 order-1 lg:order-1 reveal">
                        <SectionEyebrow
                            index="05"
                            label="Recognition"
                            className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tightish text-ink">
                            Trusted by 3,200+ <em className="serif-em">Investors.</em>
                            <br />
                            Audited by KPMG.
                        </h2>

                        <div className="mt-6 xs:mt-8 md:mt-10 max-w-full sm:max-w-[600px] lg:max-w-none">
                            <p className="text-[14px] xs:text-[15px] leading-relaxed text-mute mb-5 xs:mb-6 font-light">
                                Our financials are independently audited quarterly by KPMG Sri Lanka. Every investor receives the same disclosure — no selective reporting, no smoothed numbers.
                            </p>
                            <p className="text-[14px] xs:text-[15px] leading-relaxed text-mute font-light">
                                The certifications and recognition we have received are a result of doing things properly, not promoting ourselves.
                            </p>
                        </div>
                    </div>

                    {/* Images — maximized sizes for extreme presence */}
                    <div className="col-span-12 lg:col-span-7 relative order-2 lg:order-2 flex items-center justify-center gap-4 xs:gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-0 py-16 lg:py-24 reveal">
                        {/* Medal — maximized, no border/shadow, shifted up */}
                        <figure className="w-[95%] xs:w-[90%] sm:w-[85%] lg:w-[90%] overflow-hidden aspect-[4/5] transform -translate-y-4 sm:-translate-y-6 lg:-translate-y-16 transition-transform duration-700 hover:-translate-y-20 reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780295757/cup-22_rk2avu.png"
                                alt="Award Cup"
                                className="w-full h-full object-contain"
                                fill
                                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 70vw, 55vw"
                            />
                        </figure>
                        {/* Certificate — smaller, shifted down */}
                        <figure className="w-[45%] xs:w-[40%] sm:w-[35%] lg:w-[45%] overflow-hidden aspect-[4/3] transform translate-y-4 sm:translate-y-8 lg:translate-y-12 shadow-2xl transition-transform duration-700 hover:translate-y-14 reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278251/IMG_20260601_022245_wy6vzu.jpg"
                                alt="Certificate of Excellence"
                                className="w-full h-full object-cover mix-blend-multiply rounded-sm"
                                fill
                                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                            />
                        </figure>
                        {/* Decorative blob for responsiveness fill */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/3 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
