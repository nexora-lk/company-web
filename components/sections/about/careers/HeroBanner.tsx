import Photo from "@/components/ui/Photo";
import Link from "next/link";
import Leaf from "@/components/ui/Leaf";

export default function HeroBanner() {
    return (
        <>
            {/* ─── Hero Banner ───────────────────────────────────────────── */}
            <section className="pt-20 sm:pt-25 lg:pt-30 pb-12 sm:pb-16 lg:pb-20 bg-bg">
                <Leaf variant="bl" />
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px] flex items-end">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780154562/careers-hero1_re6nwv.jpg"
                            alt="Join the Prestige Glamour team"
                            className="absolute inset-0 w-full h-full object-cover"
                            priority
                            fill
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-sapphire-blue/60 via-sapphire-blue/40 to-sapphire-blue/20"></div>

                        <div className="relative w-full p-6 sm:p-8 lg:p-14 text-ondark">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-white text-[13px] sm:text-sm mb-4 sm:mb-6 hover:text-ondark transition-colors"
                            >
                                ← Back to About
                            </Link>
                            <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.96] tracking-tightish mt-3 sm:mt-4">
                                Build Your <em className="serif-em">Career</em> in Capital Deployment
                                <br />
                                with us.
                            </h1>
                            <p className="mt-4 sm:mt-6 text-ondark/70 max-w-full sm:max-w-lg text-[14px] sm:text-base lg:text-lg leading-relaxed">
                                Join 800+ professionals managing investor capital across seven divisions. Work
                                where your impact generates real returns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}