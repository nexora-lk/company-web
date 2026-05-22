import Photo from '@/components/ui/Photo';
import Link from 'next/link';

export default function Banersection() {
    return (
        <section className="pb-24 lg:pb-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="relative rounded-[24px] overflow-hidden min-h-[360px] flex items-end">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-ink/85 via-ink/55 to-ink/30"></div>

                    <div className="relative w-full p-8 lg:p-14 text-ondark">
                        <div className="grid grid-cols-12 gap-8 items-end">
                            <div className="col-span-12 lg:col-span-8">
                                <span className="num text-ondark/80!">
                                    [ Press &amp; partners ]
                                </span>
                                <h3 className="font-display text-[40px] lg:text-[64px] leading-[0.98] tracking-tightish mt-4">
                                    Joining us on the <em className="serif-em">field</em>?<br />
                                    We send a calendar once a quarter.
                                </h3>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
                                <Link
                                    href="/#contact"
                                    className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark!"
                                >
                                    Subscribe to the calendar <span className="arrow">→</span>
                                </Link>
                                <Link href="/#contact" className="text-ondark text-sm ulink">
                                    Or write to press@prestigeglamour.lk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
