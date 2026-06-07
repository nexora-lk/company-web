import ContactForm from '@/components/forms/homeContactForm';
import { contactRows } from '@/data/home';
import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Leaf from "@/components/ui/Leaf";

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
            <Leaf variant="tr" />
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-24">

                    {/* Left: Contact info */}
                    <div className="lg:col-span-5 reveal">
                        <SectionEyebrow
                            index="07"
                            label="Contact"
                            className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 sm:w-20 md:w-24 lg:w-[120px]"
                        />

                        <h2 className="font-display text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] leading-[1.0] tracking-tightish text-ink">
                            Ready to <em className="serif-em">Invest? </em> Let&#39;s Talk.
                        </h2>

                        <p className="mt-5 sm:mt-7 text-mute text-[14px] sm:text-[15px] md:text-base leading-[1.7] max-w-full sm:max-w-[480px]">
                            Whether you have LKR 200,000 or LKR 200 million, we have an investment vehicle for you.
                            Tell us your investment amount and interests, and our team will respond within one working day.
                        </p>

                        <div className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-5">
                            {contactRows.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line pb-4 sm:pb-5 group reveal overflow-hidden"
                                >
                                    <span className="num text-accent text-[10px] sm:text-[11px] font-medium mb-1 sm:mb-0 transition-colors group-hover:text-ink">{row.label}</span>
                                    <span className="text-[14px] sm:text-[15px] md:text-base text-ink break-words break-all sm:break-normal">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7 mt-4 sm:mt-6 lg:mt-0 reveal">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

