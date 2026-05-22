import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 01 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Plantation Overview</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            To be Sri Lanka's <em className="serif-em">best</em>
                            <br />
                            plantation company.
                        </h2>
                        <p className="mt-8 text-[15px] text-mute leading-[1.75] max-w-[600px]">
                            Our chief aim is to cultivate the finest natural produce for the world
                            market — earning foreign exchange for Sri Lanka and slowing the outflow
                            of dollars to imported goods. Under this programme we have already begun
                            planting fresh fruit and ginger across our own land, and we are stepping
                            the work up year on year.
                        </p>

                        <h3 className="font-display text-[26px] mt-12">
                            Eight <em className="serif-em">agro-zones</em>, eight estates.
                        </h3>
                        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 max-w-[640px]">
                            <li className="branch text-[14.5px]">Ampara</li>
                            <li className="branch text-[14.5px]">Bellapitiya</li>
                            <li className="branch text-[14.5px]">Millaniya</li>
                            <li className="branch text-[14.5px]">Hambantota</li>
                            <li className="branch text-[14.5px]">Kalutara</li>
                            <li className="branch text-[14.5px]">Kandy</li>
                            <li className="branch text-[14.5px]">Chilaw</li>
                            <li className="branch text-[14.5px]">Attanagalla</li>
                        </ul>

                        <h3 className="font-display text-[26px] mt-12">
                            Our <em className="serif-em">cultivated</em> product range.
                        </h3>
                        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-[640px]">
                            <li className="branch text-[14.5px]">Ginger</li>
                            <li className="branch text-[14.5px]">TJC Mango</li>
                            <li className="branch text-[14.5px]">Karthakolomban Mango</li>
                            <li className="branch text-[14.5px]">Kolikuttu Banana</li>
                            <li className="branch text-[14.5px]">Cavendish Banana</li>
                            <li className="branch text-[14.5px]">Pomegranate</li>
                            <li className="branch text-[14.5px]">Watermelon</li>
                            <li className="branch text-[14.5px]">Sugar Muskmelon</li>
                            <li className="branch text-[14.5px]">King Coconut</li>
                            <li className="branch text-[14.5px]">Ash Avocado</li>
                            <li className="branch text-[14.5px]">Passion Fruit</li>
                            <li className="branch text-[14.5px]">Other commercial crops</li>
                        </ul>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[18px] overflow-hidden aspect-[4/3]">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779376704/samples/landscapes/beach-boat.jpg"
                                alt="Fresh produce, just out of the field"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[18px] bg-ink text-ondark p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-4">Why we plant for export</div>
                            <p className="font-display text-[26px] leading-tight">
                                "Every kilo we grow at home is a dollar that{' '}
                                <em className="serif-em">does not leave</em> the country."
                            </p>
                            <div className="hairline mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-4 flex items-center justify-between text-[12px] opacity-70">
                                <span>— Y. M. D. T. Yatawara</span>
                                <span>Chairman, PGG</span>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-accent2 p-6 lg:p-8">
                            <div className="num mb-4">Operating model</div>
                            <ul className="space-y-3 text-[14px]">
                                <li className="branch">Owned land or stakeholder-managed</li>
                                <li className="branch">Regional manager + weekly walk-the-field</li>
                                <li className="branch">KPMG quarterly audit on the same ledger</li>
                                <li className="branch">Off-take through PGG's export desk</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
