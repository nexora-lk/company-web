import Leaf from "@/components/ui/Leaf";

export default function BranchSection() {
    return (
        <section className="pb-10 pt-10 sm:pb-12 lg:pb-18 sm:pt12 lg:pt-18">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
                    <div className="col-span-12 lg:col-span-7 reveal">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Our Branch Network</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish">
                            Twenty-three offices, <em className="serif-em">Always</em> open.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 reveal">
                        <p className="text-[13.5px] xs:text-[14px] sm:text-[14.5px] lg:text-base text-mute leading-[1.7] max-w-full sm:max-w-[420px]">
                            One in Kalutara. Operations in every major region—Eastern Province, Southern,
                            Central Highlands, North. If you invest with us, you can visit. Walk the plantations.
                            See the microfinance borrowers. Meet the gem cutters. Meet our teams managing your
                            capital. Twenty-three locations. One mission: Earn your trust through transparency.
                        </p>
                    </div>
                </div>

                <div className="hairline"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 xs:p-8 lg:p-10 border-b sm:border-r border-line reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            <em className="serif-em">Western</em> Province
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Kaduwela</li>
                            <li>Payagala (Head Office)</li>
                            <li>Awissawella</li>
                            <li>Kadana</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b lg:border-r border-line reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            <em className="serif-em">Southern</em> Province
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Matara</li>
                            <li>Ambalangoda</li>
                            <li>Hikkaduwa</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b sm:border-r lg:border-r-0 border-line reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight text-ink">
                            Eastern <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Batticaloa 1</li>
                            <li>Batticaloa 2</li>
                            <li>Kalmunai</li>
                            <li>Ampara</li>
                            <li>Walchchenai</li>
                            <li>Tirukkovil</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b lg:border-r border-line reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            <em className="serif-em">North Western</em> Province
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Puttalam</li>
                            <li>Kurunegala</li>
                            <li>Kuliyapitiya</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b sm:border-r border-line reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            North Central <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Anuradhapura</li>
                            <li>Bingiriya</li>
                            <li>Dambulla</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b lg:border-r border-line lg:border-b-0 reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            Sabaragamuwa <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Deraniyagala</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b sm:border-r border-line sm:border-b-0 reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            Northern <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Jaffna</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 border-b lg:border-r-0 border-line lg:border-b-0 sm:border-b-0 reveal">
                        <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                            Uva <em className="serif-em">Province</em>
                        </h3>
                        <ul className="dot-list mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px]">
                            <li>Baduraliya</li>
                        </ul>
                    </div>

                    <div className="p-6 xs:p-8 lg:p-10 bg-accent2 flex flex-col justify-center min-h-[220px] xs:min-h-[240px] sm:min-h-[280px] reveal">
                        <div className="font-display text-3xl xs:text-4xl lg:text-5xl xl:text-5xl leading-[0.98] tracking-tightish text-accent">
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
