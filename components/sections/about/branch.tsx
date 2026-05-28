import Link from 'next/link';

export default function BranchSection() {
    return (
        <section className="pb-24 lg:pb-36">
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="hairline-strong w-[120px]"></span>
                            <span className="eyebrow">Our Branch Network</span>
                        </div>
                        <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-tightish">
                            Twenty-three offices, <em className="serif-em">one</em> island.
                        </h2>
                    </div>
                    <p className="col-span-12 lg:col-span-5 text-[14.5px] text-mute leading-[1.7] max-w-[420px]">
                        From the head office in Kalutara through to the Northern frontier, here is
                        where we keep doors open for clients, growers and co-operative members.
                    </p>
                </div>

                <div className="hairline"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            <em className="serif-em">Western</em> Province
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Kaduwela</li>
                            <li>Kalutara</li>
                            <li>Awissawella</li>
                            <li>Kadana</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            <em className="serif-em">Southern</em> Province
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Matara</li>
                            <li>Ambalangoda</li>
                            <li>Hikkaduwa</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r-0 border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            Eastern <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Batticaloa 1</li>
                            <li>Batticaloa 2</li>
                            <li>Kalmunai</li>
                            <li>Ampara</li>
                            <li>Walchchenai</li>
                            <li>Tirukkovil</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            <em className="serif-em">North Western</em> Province
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Puttalam</li>
                            <li>Kurunegala</li>
                            <li>Kuliyapitiya</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            North Central <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Anuradhapura</li>
                            <li>bingiriya</li>
                            <li>Dambulla</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b md:border-r lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            Sabaragamuwa <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Deraniyagala</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b lg:border-r border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            Northern <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Jaffna</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 border-b border-line">
                        <h3 className="font-display text-[28px] leading-tight">
                            Uva <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-6 space-y-2.5 text-[14px]">
                            <li>Baduraliya</li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-10 bg-accent2 flex flex-col justify-center min-h-[280px]">
                        <div className="font-display text-[40px] leading-[0.98] tracking-tightish">
                            23 branches.
                            <br />
                            <em className="serif-em">8</em> provinces.
                        </div>
                    </div>
                </div>
                <div className="hairline"></div>
            </div>
        </section>
    );
}
