import SectionEyebrow from '@/components/sections/SectionEyebrow';
import Photo from '@/components/ui/Photo';

export default function AwardsSection() {
    return (
        <section className="pb-20 sm:pb-24 md:pb-28 lg:pb-36 xl:pb-40">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">

                    {/* Text */}
                    <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                        <SectionEyebrow
                            index="05"
                            label="Recognition"
                            className="flex items-center gap-3 mb-6 sm:mb-8"
                            hairlineClassName="hairline-strong flex-1 max-w-[80px] sm:max-w-[120px]"
                        />

                        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tightish">
                            Honored for <em className="serif-em">excellence</em>
                            <br />
                            and impact.
                        </h2>

                        <div className="mt-6 sm:mt-8 md:mt-10 max-w-full sm:max-w-[600px] lg:max-w-none">
                            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-mute mb-4 sm:mb-6">
                                Over the years, our dedication to sustainable practices, heritage preservation, and empowering local communities has been recognized both locally and internationally.
                            </p>
                            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-mute">
                                These accolades serve not as the finish line, but as milestones validating our philosophy of patient capital and doing things the right way.
                            </p>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="col-span-12 lg:col-span-7 relative order-1 lg:order-2 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-4 lg:mt-0 py-6 sm:py-8">
                        <figure className="w-1/2 rounded-[14px] sm:rounded-[18px] lg:rounded-[14px] overflow-hidden aspect-[4/3] transform translate-y-4 sm:translate-y-6 lg:translate-y-12 shadow-sm">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780207747/IMG_20260524_135209_qk2ojj.jpg"
                                alt="Certificate of Excellence"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <figure className="w-1/4 rounded-[14px] sm:rounded-[18px] lg:rounded-[14px] overflow-hidden aspect-[4/5] transform -translate-y-4 sm:-translate-y-6 lg:-translate-y-12 shadow-sm">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780207717/cup_syzeri.jpg"
                                alt="Award Cup"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>

                </div>
            </div>
        </section>
    );
}
