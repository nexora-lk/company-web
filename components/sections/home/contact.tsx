import ContactForm from '@/components/forms/homeContactForm';
import { contactRows } from '@/data/home';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

export default function ContactSection() {
    return (
        <section id="contact" className="pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-36">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16">

                    {/* Left: Contact info */}
                    <div className="col-span-12 lg:col-span-5">
                        <SectionEyebrow index="07" label="Contact" />

                        <h2 className="font-display text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[1.0] tracking-tightish mt-4 sm:mt-0">
                            Let&apos;s talk about the <em className="serif-em">long</em> harvest.
                        </h2>

                        <p className="mt-4 sm:mt-6 text-mute text-[13.5px] sm:text-[15px] leading-[1.7] max-w-full sm:max-w-[400px]">
                            Tell us where you sit — investor, buyer, partner, or co-operative — and
                            we&apos;ll route you to the right desk within one working day.
                        </p>

                        <div className="mt-7 sm:mt-10 space-y-3 sm:space-y-5 text-[13.5px] sm:text-[14.5px]">
                            {contactRows.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex justify-between border-b border-line pb-2.5 sm:pb-3"
                                >
                                    <span className="text-mute">{row.label}</span>
                                    <span>{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <ContactForm />

                </div>
            </div>
        </section>
    );
}
