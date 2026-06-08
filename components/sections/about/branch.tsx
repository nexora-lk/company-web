import Leaf from "@/components/ui/Leaf";

const provinces = [
    {
        name: "Western",
        serif: "Western",
        branches: ["Kaduwela", "Payagala (Head Office)", "Awissawella", "Kadana", "Baduraliya", "Panadura"]
    },
    {
        name: "North Western",
        serif: "North Western",
        branches: ["Puttalam", "Kurunegala", "Kuliyapitiya", "Mannar", "Chilaw"]
    },
    {
        name: "Eastern",
        serif: "Province",
        namePrefix: "Eastern ",
        branches: ["Batticaloa 1", "Batticaloa 2", "Kalmunai", "Ampara", "Walchchenai", "Tirukkovil"]
    },
    {
        name: "Southern",
        serif: "Southern",
        branches: ["Matara", "Ambalangoda", "Hikkaduwa"]
    },
    {
        name: "North Central",
        serif: "Province",
        namePrefix: "North Central ",
        branches: ["Anuradhapura", "Bingiriya", "Dambulla"]
    },
    {
        name: "Central",
        serif: "Central",
        branches: ["Kandy", "Galewela"]
    },
    {
        name: "Northern",
        serif: "Northern",
        branches: ["Jaffna"]
    },
    {
        name: "Sabaragamuwa",
        serif: "Province",
        namePrefix: "Sabaragamuwa ",
        branches: ["Deraniyagala"]
    },
];

export default function BranchSection() {
    return (
        <section className="pb-10 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24 relative overflow-hidden">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-end mb-12 sm:mb-16 lg:mb-20">
                    <div className="col-span-12 lg:col-span-7 reveal">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Our Branch Network</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish">
                            Twenty-Seven offices, <em className="serif-em">Always</em> open.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 reveal">
                        <p className="text-[13.5px] xs:text-[14px] sm:text-[14.5px] lg:text-base text-mute leading-[1.7] max-w-full sm:max-w-[420px]">
                            One in Kalutara. Operations in every major region—Eastern Province, Southern,
                            Central Highlands, North. If you invest with us, you can visit. Walk the plantations.
                            See the microfinance borrowers. Meet the gem cutters. Meet our teams managing your
                            capital. Twenty-seven locations. One mission: Earn your trust through transparency.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
                    {provinces.map((prov, i) => {
                        const borderClasses = `
                            border-b border-line
                            ${i % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'}
                            ${i % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
                            ${i === provinces.length - 1 ? 'border-b-0' : ''}
                            ${i === provinces.length - 2 && provinces.length % 2 === 0 ? 'sm:border-b-0' : ''}
                            ${i === provinces.length - 1 && provinces.length % 2 !== 0 ? 'sm:border-b-0' : ''}
                            ${i >= provinces.length - 3 ? 'lg:border-b-0' : ''}
                        `.replace(/\s+/g, ' ').trim();

                        return (
                            <div key={prov.name} className={`p-6 xs:p-8 lg:p-10 reveal ${borderClasses}`}>
                                <h3 className="font-display text-[24px] xs:text-[26px] sm:text-[28px] leading-tight">
                                    {prov.namePrefix && <span>{prov.namePrefix}</span>}
                                    <em className="serif-em">{prov.serif}</em>
                                    {prov.namePrefix ? "" : <span> Province</span>}
                                </h3>
                                <ul className="mt-5 xs:mt-6 space-y-2 xs:space-y-2.5 text-[13px] xs:text-[14px] text-mute">
                                    {prov.branches.map(branch => (
                                        <li key={branch} className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-accent/40" />
                                            {branch}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}

                    {/* Summary Card */}
                    <div className="p-6 xs:p-8 lg:p-10 bg-surface/50 flex flex-col justify-center min-h-[200px] reveal">
                        <div className="font-display text-3xl xs:text-4xl lg:text-5xl leading-[0.98] tracking-tightish text-ink">
                            27 branches.
                            <br />
                            <em className="serif-em text-accent">8</em> provinces.
                        </div>
                        <p className="mt-4 text-[12px] uppercase tracking-widest text-mute font-medium">
                            Full Island Coverage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
