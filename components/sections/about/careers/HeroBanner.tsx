import Photo from "@/components/ui/Photo";
import Link from "next/link";
import Leaf from "@/components/ui/Leaf";
import { ArrowLeft } from "lucide-react";

const HERO_STATS = [
    { value: "800+", label: "Professionals" },
    { value: "7", label: "Divisions" },
    { value: "2013", label: "Established" },
];

export default function HeroBanner() {
    return (
        <section className="pt-20 sm:pt-25 lg:pt-30 pb-12 sm:pb-16 lg:pb-14 bg-bg">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-end">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780154562/careers-hero1_re6nwv.jpg"
                        alt="Join the Prestige Glamour team"
                        className="absolute inset-0 w-full h-full object-cover"
                        priority
                        fill
                        sizes="100vw"
                    />
                    {/* overlays — directional + bottom legibility */}
                    <div className="absolute inset-0 bg-linear-to-tr from-sapphire-blue/55 via-sapphire-blue/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/85 via-midnight-blue/25 to-transparent"></div>

                    <div className="relative w-full p-6 sm:p-8 lg:p-14 text-ondark">
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white text-[13px] sm:text-sm mb-5 sm:mb-7 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
                            Back to About
                        </Link>
                        <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.96] tracking-tightish max-w-[18ch]">
                            Build Your <em className="serif-em">Career</em> in
                            <br />
                            Capital Deployment.
                        </h1>
                        <p className="mt-4 sm:mt-6 text-ondark/75 max-w-full sm:max-w-xl text-[14px] sm:text-base lg:text-lg leading-relaxed">
                            Join 800+ professionals managing investor capital across seven divisions — where your work generates real returns.
                        </p>

                        {/* trust / stat strip */}
                        <div className="reveal mt-7 sm:mt-9 flex items-stretch gap-5 sm:gap-8">
                            {HERO_STATS.map((s, i) => (
                                <div key={s.label} className="flex items-stretch">
                                    {i > 0 && <span aria-hidden className="mr-5 sm:mr-8 w-px self-stretch bg-white/20" />}
                                    <div className="flex flex-col">
                                        <span className="font-display text-[22px] sm:text-[28px] leading-none text-white">{s.value}</span>
                                        <span className="mt-1.5 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-ondark/60">{s.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
