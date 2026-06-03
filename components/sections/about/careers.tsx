import Photo from '@/components/ui/Photo';
import Link from 'next/link';

export default function CareersSection() {
    return (
        <section className="pb-20 sm:pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden min-h-[320px] sm:min-h-[360px] flex items-end">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780154550/careers-about_phptqz.jpg"
                        alt="Join the Prestige Glamour team"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/90 via-ink/60 to-ink/30"></div>

                    <div className="relative w-full p-6 xs:p-8 lg:p-14 text-ondark reveal">
                        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end">
                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/80! text-[10px] xs:text-[11px]">[ Join the team ]</span>
                                <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[0.96] tracking-tightish mt-3 sm:mt-4 max-w-lg">
                                    <span className="block">Looking to grow with us?</span>
                                    <span className="block font-semibold mt-1">We are hiring.</span>
                                </h3>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
                                <Link
                                    href="/about/careers"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! w-full sm:w-auto justify-center"
                                >
                                    Open roles <span className="arrow">→</span>
                                </Link>
                                <p className="text-ondark/70 text-xs sm:text-[13px] leading-relaxed max-w-md lg:text-right">
                                    We are always looking for people who want to work in real
                                    operations — plantation, investment, finance, and management.
                                    <br />
                                    <span className="text-ondark font-medium">careers@prestigeglamour.lk</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
