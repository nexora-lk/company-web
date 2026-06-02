import ContactForm from '@/components/forms/homeContactForm';
import { contactRows } from '@/data/home';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

export default function ContactSection() {
    return (
        <section id="contact" className="pb-20 xs:pb-24 sm:pb-32 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-10 md:gap-12 lg:gap-16 xl:gap-24">

                    {/* Left: Contact info */}
                    <div className="col-span-12 lg:col-span-5 xl:col-span-5">
                        <SectionEyebrow 
                            index="07" 
                            label="Contact" 
                            className="flex items-center gap-2 xs:gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"
                        />

                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.0] tracking-tightish text-ink">
                            Ready to <em className="serif-em">Invest?</em> Let&#39;s Talk.
                        </h2>

                        <p className="mt-6 xs:mt-8 text-mute text-[14px] xs:text-[15px] sm:text-base leading-relaxed max-w-full sm:max-w-[480px] font-light">
                            Whether you have LKR 200,000 or LKR 200 million, we have an investment vehicle for you.
                            Tell us your investment amount and interests, and our team will respond within one working day.
                        </p>

                        <div className="mt-10 xs:mt-12 space-y-4 sm:space-y-6">
                            {contactRows.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line pb-4 xs:pb-5 group"
                                >
                                    <span className="num text-accent font-medium mb-1 sm:mb-0 transition-colors group-hover:text-ink">{row.label}</span>
                                    <span className="text-[14px] xs:text-[15px] sm:text-base text-ink font-light">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="col-span-12 lg:col-span-7 xl:col-span-7 mt-8 lg:mt-0">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
