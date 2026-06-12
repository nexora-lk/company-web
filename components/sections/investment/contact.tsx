import InvestmentContactForm from '@/components/forms/InvestmentContactForm';
import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

export default function ContactSection() {
    return (
        <section id="enquire" className="py-10 sm:py-14 md:py-18 lg:py-28 xl:py-32 bg-bg">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12">
                <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-4xl overflow-hidden bg-ink text-ondark">
                    <Photo
                        src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                        alt="Investment team office"
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-15 sm:opacity-20 md:opacity-25 lg:opacity-30 xl:opacity-35"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b sm:bg-linear-to-r from-ink via-ink/90 to-ink/40"></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14">
                        {/* Left Column - Contact Info */}
                        <div className="md:col-span-1 lg:col-span-5 flex flex-col reveal">
                            <div className="flex-1">
                                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.05] xl:leading-[0.95] tracking-tight mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6">
                                    Speak directly
                                    <span className="block">with our <em className="serif-em">investment</em> team.</span>
                                </h2>
                                <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 max-w-full lg:max-w-md text-ondark/85 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed sm:leading-[1.65] md:leading-[1.7] lg:leading-[1.75] xl:leading-[1.8]">
                                    Submit the form below or call us directly. We respond on the same working day. Overseas investors can reach us via WhatsApp or video call — we serve investors from 30+ countries.
                                </p>

                                <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">
                                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-5 reveal">
                                        <span className="num text-ondark/65! w-12 sm:w-14 lg:w-16 shrink-0 text-xs sm:text-sm">Mobile</span>
                                        <span className="font-medium text-ondark/95">075 903 5083</span>
                                    </div>
                                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-5 reveal">
                                        <span className="num text-ondark/65! w-12 sm:w-14 lg:w-16 shrink-0 text-xs sm:text-sm">Mobile</span>
                                        <span className="font-medium text-ondark/95">074 041 6159</span>
                                    </div>
                                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-5 reveal">
                                        <span className="num text-ondark/65! w-12 sm:w-14 lg:w-16 shrink-0 text-xs sm:text-sm">Email</span>
                                        <span className="font-medium text-ondark/95 break-all sm:break-normal">info@prestigeglamour.lk</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-bg/5 border border-ondark/10 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 hover:bg-bg/10 transition-all duration-300 reveal">
                                <div className="num text-ondark/65! text-[9px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">Status</div>
                                <div className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mt-2 sm:mt-3 md:mt-4">
                                    2026 Round <em className="serif-em">open</em>
                                </div>
                                <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-ondark/75 mt-2 sm:mt-3 md:mt-4 leading-relaxed font-light">
                                    Accepting new investors worldwide. Contact us for availability by division.
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="md:col-span-1 lg:col-span-7 mt-8 sm:mt-10 md:mt-0 reveal">
                            <InvestmentContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
