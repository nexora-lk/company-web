import Photo from '@/components/ui/Photo';
import InvestmentContactForm from '@/components/forms/InvestmentContactForm';

export default function ModelsSection() {
    return (
        <section id="enquire" className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="relative rounded-[24px] overflow-hidden bg-ink text-ondark">
                    <Photo
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/40"></div>

                    <div className="relative grid grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-14">
                        <div className="col-span-12 lg:col-span-5">
                            <span className="num text-ondark/70!">
                                [ Contact us — Investment desk ]
                            </span>
                            <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightish mt-4">
                                Connect with our
                                <br />
                                investment <em className="serif-em">team</em> today.
                            </h2>
                            <p className="mt-5 max-w-[420px] text-ondark/75 text-[14.5px] leading-[1.7]">
                                Submit the form, or speak with us directly. We aim to reply on the
                                same working day, in the language of your choosing.
                            </p>
                            <div className="mt-8 space-y-3 text-[14px]">
                                <div className="flex items-center gap-3">
                                    <span className="num text-ondark/55! w-20">Phone</span>
                                    <span>034 223 3669</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="num text-ondark/55! w-20">Mobile</span>
                                    <span>075 203 8613</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="num text-ondark/55! w-20">Mobile</span>
                                    <span>075 169 3138</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="num text-ondark/55! w-20">Email</span>
                                    <span>info@prestigeglamour.lk</span>
                                </div>
                            </div>

                            <div className="mt-10 rounded-[14px] bg-bg/10 border border-ondark/15 p-5">
                                <div className="num text-ondark/70!">Round status</div>
                                <div className="font-display text-[28px] leading-tight mt-1">
                                    2026 Spring Round — <em className="serif-em">open</em>.
                                </div>
                                <div className="text-[12px] opacity-70 mt-1">
                                    Closes 31 October 2026 · LKR 240M raise target
                                </div>
                            </div>
                        </div>
                        <InvestmentContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
