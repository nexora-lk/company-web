import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function OverviewSection() {
    return (
        <section className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40 overflow-hidden">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Microfinance Overview</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-ink reveal">
                            Steady income. <em className="serif-em text-accent">Real loan book.</em>
                            <br />
                            Real loan book.
                            <br />
                            96.4% repayment rate.
                        </h2>

                        <div className="mt-8 xs:mt-10 space-y-4 xs:space-y-6 text-[14px] xs:text-[15px] leading-relaxed sm:leading-[1.75] text-mute max-w-full sm:max-w-[620px] font-light reveal">
                            <p>
                                <span className="font-display text-4xl xs:text-5xl text-ink float-left mr-3 leading-[0.8] mt-1">
                                    P
                                </span>
                                PGG Microfinance was established in 2013 as the group&#39;s rural
                                lending division. We serve estate workers, cooperative secretaries,
                                market traders, and small farmers across 27 branches — providing
                                working capital on fair terms with a field officer at the door,
                                not a desk in Colombo.
                            </p>
                            <p>
                                Today our loan book covers 11,200+ active borrowers, with a growing
                                share held by women entrepreneurs. Investors co-fund this loan
                                portfolio and receive monthly interest income, with principal
                                returned at the end of the investment period. Minimum investment:
                                LKR 200,000.
                            </p>
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 mt-4 lg:mt-0 reveal">
                        <figure className="rounded-[18px] xs:rounded-[24px] overflow-hidden aspect-[4/3] xs:aspect-[1/1] lg:aspect-[4/5] shadow-2xl transition-transform duration-700 hover:scale-[1.02] reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120332/microfinace-overview_fs7rza.jpg"
                                alt="A seedling growing from a glass jar of coins — the Microfinance icon"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </aside>
                </div>
            </div>
        </section>
    );
}
