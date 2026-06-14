import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

type LandRow = { estate: string; area: string; crops: string };
type LandGroup = { title: string; rows: LandRow[] };

const LAND_GROUPS: LandGroup[] = [
    {
        title: 'Leased Properties',
        rows: [
            { estate: 'Walachchean', area: '10, 3, 8, 60', crops: 'Ginger, Watermelon, Sesame, Cassava' },
            { estate: 'Batticaloa', area: '2.5, 14', crops: 'Ginger' },
            { estate: 'Andankulam', area: '—', crops: 'Ginger' },
        ],
    },
    {
        title: 'Owned Lands',
        rows: [
            { estate: 'Wellawaya', area: '258', crops: 'Sesame, TJC Mango, Durian, Oried' },
            { estate: 'Mundalama', area: '60', crops: 'TJC Mango' },
            { estate: 'Walachchean', area: '—', crops: 'Ginger, Watermelon' },
            { estate: 'Pullumalai', area: '60', crops: 'Moringa' },
            { estate: 'Pasikuda', area: '—', crops: 'Watermelon, Chili' },
        ],
    },
    {
        title: 'Property Management & Joint Ventures',
        rows: [
            { estate: 'Bingiriya', area: '100', crops: 'Ginger' },
            { estate: 'Kuliyapitiya', area: '16', crops: 'Bulath' },
            { estate: 'Wanathawilluwa', area: '—', crops: '—' },
            { estate: 'Batticaloa', area: '2.5', crops: '—' },
        ],
    },
];

export default function OverviewSection() {
    return (
        <section className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg">
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Plantation Overview</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue reveal">
                            Invest in Sri Lanka&apos;s <em className="serif-em text-sapphire-blue">most transparent </em>
                            <br />
                            plantation operation.
                        </h2>
                        <p className="mt-6 xs:mt-8 text-[14px] xs:text-[15px] text-mute leading-relaxed sm:leading-[1.75] max-w-full sm:max-w-[620px] font-light reveal">
                            Our plantation division manages a growing portfolio of owned
                            and leased agricultural land, producing high-value export crops
                            including ginger, mango, watermelon, and specialty produce. Investor
                            capital is deployed directly into specific crop cycles. Every plot
                            is tracked transparently across all operations.
                        </p>

                        <h3 className="font-display text-2xl xs:text-[26px] md:text-[28px] mt-10 xs:mt-12 text-midnight-blue reveal">
                            Land <em className="serif-em text-sapphire-blue">portfolio</em> & operations.
                        </h3>
                        <p className="mt-4 xs:mt-5 text-[14px] xs:text-[15px] text-mute leading-relaxed max-w-full sm:max-w-[620px] font-light reveal">
                            Our plantation operations span multiple land-management models, each
                            strategically selected based on regional agro-climatic conditions and crop suitability.
                        </p>

                        <div className="mt-10 xs:mt-12 space-y-6 reveal">
                            {LAND_GROUPS.map((group) => (
                                <div key={group.title} className="border border-line rounded-[20px] overflow-hidden bg-surface shadow-sm transition-shadow duration-500 hover:shadow-md reveal">
                                    <div className="px-5 xs:px-8 py-5 xs:py-6 bg-accent/[0.06] border-b border-line">
                                        <h4 className="font-display text-xl xs:text-[22px] text-midnight-blue">{group.title}</h4>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[500px] xs:min-w-full">
                                            <thead>
                                                <tr className="border-b border-line/50 bg-bg/40">
                                                    <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Estate Name</th>
                                                    <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70 whitespace-nowrap">Area (Ha)</th>
                                                    <th className="px-5 xs:px-8 py-4 text-left text-[10px] xs:text-[11px] uppercase tracking-widest font-bold text-mute/70">Cultivated Crops</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-line/30">
                                                {group.rows.map((row, r) => (
                                                    <tr key={`${row.estate}-${r}`} className="hover:bg-accent/5 transition-colors duration-300">
                                                        <td className="px-5 xs:px-8 py-5 font-semibold text-[14px] xs:text-[15px] text-midnight-blue">{row.estate}</td>
                                                        <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-mute font-medium">{row.area}</td>
                                                        <td className="px-5 xs:px-8 py-5 text-[14px] xs:text-[15px] text-ink font-light">{row.crops}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="col-span-12 lg:col-span-5 order-1 lg:order-2 space-y-5 lg:sticky lg:top-32 mt-4 lg:mt-0 reveal">
                        <figure className="relative rounded-[18px] xs:rounded-[24px] overflow-hidden aspect-[4/3] shadow-2xl reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781101305/pexels-ian-panelo-20234958_fwntmb.jpg"
                                alt="Fresh produce, just out of the field"
                                priority
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-midnight-blue/45 to-transparent" />
                        </figure>
                        <div className="rounded-[20px] xs:rounded-[24px] bg-royal-blue text-ondark p-8 lg:p-10 shadow-xl border border-white/5 reveal">
                            <div className="num text-ondark/60! mb-5 text-[10px] xs:text-[11px] uppercase tracking-widest">Leadership Quote</div>
                            <p className="font-display text-[22px] xs:text-[24px] sm:text-[28px] leading-tight">
                                &ldquo;Every kilo we grow at home is a dollar that{' '}
                                <em className="serif-em text-light-gold">does not leave </em> the country.&rdquo;
                            </p>
                            <div className="hairline mt-8 bg-white/10!"></div>
                            <div className="mt-5 flex items-center justify-between text-[11px] xs:text-[12px] text-white font-light italic">
                                <span>— Mr. Nilanga Amunugama</span>
                                <span>Director, PGGC</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
