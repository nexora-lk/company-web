import Link from 'next/link';

export default function BranchSection() {
    return (
        <section className="pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="num">[ 04 ]</span>
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Our Branch Network</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Twenty-nine offices, <em className="serif-em">one</em> island.
                        </h2>
                    </div>
                    <p className="col-span-12 lg:col-span-5 text-[14.5px] text-mute leading-[1.7] max-w-[420px]">
                        From the head office in Kalutara through to the Northern frontier, here is
                        where we keep doors open for clients, growers and co-operative members.
                    </p>
                </div>

                <div className="hairline"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 lg:p-10 border-b md:border-r border-line">
                        <div className="flex items-center justify-between mb-6">
                            <span className="num">Province · 01</span>
                            <span className="num text-accent">Head Office</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight">
                            Kalutara
                            <br />
                            <em className="serif-em">Western Province</em>
                        </h3>
                        <ul className="branch mt-6 space-y-2.5 text-[14px]">
                            <li>Baduraliya</li>
                            <li>Ja-Ela</li>
                            <li>Kaduwela</li>
                            <li>Panadura</li>
                            <li>Wellawatta</li>
                            <li>Kotahena</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b lg:border-r border-line">
                        <div className="flex items-center justify-between mb-6">
                            <span className="num">Province · 02</span>
                            <span className="num">Awissawella</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight">
                            <em className="serif-em">Sabaragamuwa</em> Province
                        </h3>
                        <ul className="branch mt-6 space-y-2.5 text-[14px]">
                            <li>Deraniyagala</li>
                            <li>Rathnapura</li>
                            <li>Ehaliyagoda</li>
                            <li>Horana</li>
                            <li>Hanwella</li>
                            <li>Kegalla</li>
                            <li>Ruwanwella</li>
                            <li>Balangoda</li>
                            <li>Homagama</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r-0 border-line">
                        <div className="flex items-center justify-between mb-6">
                            <span className="num">Province · 03</span>
                            <span className="num">Kandy</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight">
                            Kandy <em className="serif-em">Province</em>
                        </h3>
                        <ul className="branch mt-6 space-y-2.5 text-[14px]">
                            <li>Matale</li>
                            <li>Gampola</li>
                            <li>Nuwara Eliya</li>
                            <li>Hagurankehta</li>
                            <li>Anuradhapura</li>
                            <li>Polonnaruwa</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-line">
                        <div className="flex items-center justify-between mb-6">
                            <span className="num">Province · 04</span>
                            <span className="num">Southern</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight">
                            <em className="serif-em">Southern</em> Province
                        </h3>
                        <ul className="branch mt-6 space-y-2.5 text-[14px]">
                            <li>Matara</li>
                            <li>Galle</li>
                            <li>Thangalla</li>
                            <li>Hikkaduwa</li>
                            <li>Ambalangoda</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-b-0 lg:border-r border-line">
                        <div className="flex items-center justify-between mb-6">
                            <span className="num">Province · 05</span>
                            <span className="num">Northern</span>
                        </div>
                        <h3 className="font-display text-[28px] leading-tight">
                            North <em className="serif-em">Province</em>
                        </h3>
                        <ul className="branch mt-6 space-y-2.5 text-[14px]">
                            <li>Jaffna</li>
                            <li>Vavuniya</li>
                            <li>Trincomalee</li>
                            <li>Batticaloa</li>
                            <li>Ampara</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 bg-accent2 flex flex-col justify-between min-h-[280px]">
                        <div className="num">All provinces, one ledger.</div>
                        <div>
                            <div className="font-display text-[40px] leading-[0.98] tracking-tightish">
                                29 branches.
                                <br />
                                <em className="serif-em">Nine</em> provinces.
                            </div>
                            <Link
                                href="/#contact"
                                className="mt-6 inline-flex items-center gap-2 text-[14px] ulink"
                            >
                                Find the nearest branch <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
