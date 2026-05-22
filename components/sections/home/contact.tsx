import ContactForm from '@/components/forms/homeContactForm';
import { contactRows } from '@/data/home';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

export default function ContactSection() {
    return (
        <section id="contact" className="pb-28 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-10 lg:gap-16">
                    <div className="col-span-12 lg:col-span-5">
                        <SectionEyebrow index="07" label="Contact" />
                        <h2 className="font-display text-[44px] lg:text-[60px] leading-[1.0] tracking-tightish">
                            Let&apos;s talk about the <em className="serif-em">long</em> harvest.
                        </h2>
                        <p className="mt-6 text-mute text-[15px] leading-[1.7] max-w-[400px]">
                            Tell us where you sit — investor, buyer, partner, or co-operative — and
                            we&apos;ll route you to the right desk within one working day.
                        </p>

                        <div className="mt-10 space-y-5 text-[14.5px]">
                            {contactRows.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex justify-between border-b border-line pb-3"
                                >
                                    <span className="text-mute">{row.label}</span>
                                    <span>{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
