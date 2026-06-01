import Photo from '@/components/ui/Photo';

export default function OverviewSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 items-start">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                            <span className="num text-[11px] sm:text-xs md:text-sm">[ 01 ]</span>
                            <span className="hairline-strong w-[80px] sm:w-[100px] md:w-[120px]"></span>
                            <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Plantation Overview</span>
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.98] tracking-tightish">
                            To be Sri Lanka&#39;s <em className="serif-em">best</em>
                            <br />
                            plantation company.
                        </h2>
                        <p className="mt-6 sm:mt-7 md:mt-8 text-[13px] sm:text-[14px] md:text-[15px] text-mute leading-[1.6] sm:leading-[1.7] md:leading-[1.75] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-150">
                            Our chief aim is to cultivate the finest natural produce for the world
                            market — earning foreign exchange for Sri Lanka and slowing the outflow
                            of dollars to imported goods. Under this programme we have already begun
                            planting fresh fruit and ginger across our own land, and we are stepping
                            the work up year on year.
                        </p>

                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] lg:text-[26px] mt-8 sm:mt-10 md:mt-12">
                            Land <em className="serif-em">portfolio</em> & operations.
                        </h3>
                        <p className="mt-4 sm:mt-5 md:mt-6 text-[13px] sm:text-[14px] md:text-[15px] text-mute leading-[1.6] sm:leading-[1.7] md:leading-[1.75] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-150">
                            Our plantation operations span across multiple land management models, each
                            strategically selected based on regional agro-climatic conditions and crop suitability.
                        </p>

                        <div className="mt-8 sm:mt-10 lg:mt-10 xl:mt-12 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                            {/* Leased Properties */}
                            <div className="border border-hairline rounded-lg sm:rounded-lg md:rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm">
                                <div className="px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-linear-to-r from-accent1/8 to-accent2/8 border-b border-hairline">
                                    <div className="flex items-center gap-2 sm:gap-2.5 mb-0 sm:mb-1">
                                        <h4 className="font-semibold text-sm sm:text-base md:text-lg text-ink">Leased Properties</h4>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-full">
                                        <thead>
                                            <tr className="border-b border-hairline bg-white/40">
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Estate Name</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute whitespace-nowrap">Area (Ha)</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Cultivated Crops</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-hairline/50">
                                            <tr className="hover:bg-accent1/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Walachchean</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">10, 3, 8, 60</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Ginger, Watermelon</td>
                                            </tr>
                                            <tr className="hover:bg-accent1/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Batticlo</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">2.5, 14</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Ginger</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Owned Lands */}
                            <div className="border border-hairline rounded-lg sm:rounded-lg md:rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm">
                                <div className="px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-linear-to-r from-accent2/8 to-accent1/8 border-b border-hairline">
                                    <div className="flex items-center gap-2 sm:gap-2.5 mb-0 sm:mb-1">
                                        <h4 className="font-semibold text-sm sm:text-base md:text-lg text-ink">Owned Lands</h4>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-full">
                                        <thead>
                                            <tr className="border-b border-hairline bg-white/40">
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Estate Name</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute whitespace-nowrap">Area (Ha)</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Cultivated Crops</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-hairline/50">
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Wellwaya</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">258</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Sheshery, Mango</td>
                                            </tr>
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Mundalama</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">60</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Mango</td>
                                            </tr>
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Walachchean</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">—</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Ginger, Watermelon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Property Management & Joint Ventures */}
                            <div className="border border-hairline rounded-lg sm:rounded-lg md:rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm">
                                <div className="px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-linear-to-r from-accent2/8 to-accent1/8 border-b border-hairline">
                                    <div className="flex items-center gap-2 sm:gap-2.5 mb-0 sm:mb-1">
                                        <h4 className="font-semibold text-sm sm:text-base md:text-lg text-ink">Property Management &amp; Joint Ventures</h4>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-full">
                                        <thead>
                                            <tr className="border-b border-hairline bg-white/40">
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Property Name</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute whitespace-nowrap">Area (Ha)</th>
                                                <th className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-left text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold text-mute">Cultivated Crops</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-hairline/50">
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Bingiriya</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">100</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Ginger</td>
                                            </tr>
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Kuliyapitiya</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">16</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">Bulath</td>
                                            </tr>
                                            <tr className="hover:bg-accent2/5 transition-colors duration-150">
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base text-ink">Wanathawilluwa</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-mute font-medium">—</td>
                                                <td className="px-3 sm:px-4 md:px-5 lg:px-8 py-2 sm:py-3 md:py-4 text-[11px] sm:text-[13px] md:text-[15px] text-ink">—</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 space-y-3 sm:space-y-4 lg:sticky lg:top-24">
                        <figure className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] overflow-hidden aspect-[4/3] sm:aspect-[16/12] md:aspect-4/3">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780120160/pexels-gilmerdiaz-27097318_qzthhz.jpg"
                                alt="Fresh produce, just out of the field"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] bg-ink text-ondark p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num text-ondark/70! mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Why we plant for export</div>
                            <p className="font-display text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-tight">
                                &ldquo;Every kilo we grow at home is a dollar that{' '}
                                <em className="serif-em">does not leave</em> the country.&rdquo;
                            </p>
                            <div className="hairline mt-4 sm:mt-5 md:mt-6 bg-[rgba(241,236,224,0.18)]!"></div>
                            <div className="mt-3 sm:mt-4 md:mt-4 flex items-center justify-between text-[11px] sm:text-xs opacity-70">
                                <span>— Y. M. D. T. Yatawara</span>
                                <span>Chairman, PGG</span>
                            </div>
                        </div>
                        <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] bg-accent2 p-4 sm:p-5 md:p-6 lg:p-8">
                            <div className="num mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">Operating model</div>
                            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px]">
                                <li className="branch">Owned land or stakeholder-managed</li>
                                <li className="branch">Regional manager + weekly walk-the-field</li>
                                <li className="branch">KPMG quarterly audit on the same ledger</li>
                                <li className="branch">Off-take through GPG&apos;s export desk</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
