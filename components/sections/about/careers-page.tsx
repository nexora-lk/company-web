'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import CareersApplicationForm from '@/components/forms/CareersApplicationForm';

/* ─── Open Roles Data ─────────────────────────────────────────────── */
const OPEN_ROLES = [
    {
        id: 'plantation-mgr',
        title: 'Plantation Manager',
        department: 'Plantation',
        location: 'Badulla, Sri Lanka',
        type: 'Full-time',
        description:
            'Oversee daily operations of highland plantation estates, manage field teams, and ensure sustainable cultivation practices across tea and cinnamon crops.',
    },
    {
        id: 'finance-analyst',
        title: 'Financial Analyst',
        department: 'Microfinance',
        location: 'Colombo, Sri Lanka',
        type: 'Full-time',
        description:
            'Analyse loan portfolios, prepare financial reports, and support credit risk assessment for our growing microfinance division.',
    },
    {
        id: 'gem-grader',
        title: 'Gemstone Grader',
        department: 'Gems & Jewellery',
        location: 'Ratnapura, Sri Lanka',
        type: 'Full-time',
        description:
            'Grade and certify precious gemstones, maintain quality standards, and provide expert valuation for sapphires, rubies, and other fine gems.',
    },
    {
        id: 'hospitality-ops',
        title: 'Hospitality Operations Lead',
        department: 'Hospitality',
        location: 'Kandy, Sri Lanka',
        type: 'Full-time',
        description:
            'Lead guest experience operations, coordinate front-of-house teams, and drive service excellence across our hospitality properties.',
    },
    {
        id: 'marketing-exec',
        title: 'Marketing Executive',
        department: 'Corporate',
        location: 'Colombo, Sri Lanka',
        type: 'Full-time',
        description:
            'Develop and execute brand campaigns, manage digital channels, and support the group\'s corporate communication strategy.',
    },
    {
        id: 'agri-export-coord',
        title: 'Agri-Export Coordinator',
        department: 'Agri-Export',
        location: 'Colombo, Sri Lanka',
        type: 'Full-time',
        description:
            'Coordinate export shipments, manage international buyer relationships, and ensure compliance with global trade regulations for agricultural products.',
    },
];

/* ─── Department badge color mapping ──────────────────────────────── */
function getDeptColor(department: string) {
    const colors: Record<string, string> = {
        'Plantation': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
        'Microfinance': 'bg-blue-500/10 text-blue-700 border-blue-500/20',
        'Gems & Jewellery': 'bg-violet-500/10 text-violet-700 border-violet-500/20',
        'Hospitality': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
        'Corporate': 'bg-slate-500/10 text-slate-700 border-slate-500/20',
        'Agri-Export': 'bg-lime-500/10 text-lime-700 border-lime-500/20',
    };
    return colors[department] || 'bg-accent/10 text-accent border-accent/20';
}

export default function CareersPageClient() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const formSectionRef = useRef<HTMLDivElement>(null);
    const rolesSectionRef = useRef<HTMLDivElement>(null);

    /* Scroll to form when showForm or selectedRole changes */
    useEffect(() => {
        if (showForm && formSectionRef.current) {
            setTimeout(() => {
                formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [showForm, selectedRole]);

    const handleApply = (roleId: string) => {
        setSelectedRole(roleId);
        setShowForm(true);
    };

    const selectedRoleData = OPEN_ROLES.find((r) => r.id === selectedRole);

    return (
        <>
            {/* ─── Hero Banner ───────────────────────────────────────────── */}
            <section className="pt-24 sm:pt-32 lg:pt-44 pb-14 sm:pb-20 lg:pb-28">
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px] flex items-end">
                        <Photo
                            src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780154562/careers-hero1_re6nwv.jpg"
                            alt="Join the Prestige Glamour team"
                            className="absolute inset-0 w-full h-full object-cover"
                            priority
                            fill
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-ink/90 via-ink/60 to-ink/30"></div>

                        <div className="relative w-full p-6 sm:p-8 lg:p-14 text-ondark">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-ondark/70 text-[13px] sm:text-sm mb-4 sm:mb-6 hover:text-ondark transition-colors"
                            >
                                ← Back to About
                            </Link>
                            <span className="num text-ondark/80! block text-[10px] sm:text-[11px]">[ Careers ]</span>
                            <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.96] tracking-tightish mt-3 sm:mt-4">
                                Build Your <em className="serif-em">Career</em> in Capital Deployment
                                <br />
                                with us.
                            </h1>
                            <p className="mt-4 sm:mt-6 text-ondark/70 max-w-full sm:max-w-lg text-[14px] sm:text-base lg:text-lg leading-relaxed">
                                Join 800+ professionals managing investor capital across seven divisions. Work
                                where your impact generates real returns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Culture Values ─────────────────────────────────────────── */}
            <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="reveal">
                        {/*<span className="num text-[10px] sm:text-[11px]">[ Why join us ]</span>*/}
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 reveal">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Why join us</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-8 sm:mb-10 lg:mb-12">
                            A place to <em className="serif-em">grow</em>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                num: '01',
                                title: 'Real Capital, Real Impact',
                                desc: "You're not pushing papers. You\'re managing capital that generates 60% annual returns for 3,200+ investors. Plantation operations, real estate development, gems exports, microfinance — every role impacts real business outcomes.",
                            },
                            {
                                num: '02',
                                title: 'Six Career Paths',
                                desc: "Plantation manager, real estate coordinator, microfinance officer, gem trader, FMCG operator, share market analyst, or education manager. Pick your division. Grow your expertise. One company, multiple specialties.",
                            },
                            {
                                num: '03',
                                title: 'Growth in a Growing Company',
                                desc: "14 years of operations. 800+ employees. 23 branches. 3,200+ investors. We\'re scaling. Leadership opportunities exist across all levels. From coordinator to manager to division head — clear progression.",
                            },
                        ].map((v) => (
                            <div
                                key={v.num}
                                className="reveal info-card p-6 sm:p-8 transition-transform duration-350 hover:-translate-y-1"
                            >
                                <div className="num text-accent! mb-2 sm:mb-3 text-[10px] sm:text-[11px]">{v.num}</div>
                                <h3 className="font-display text-[18px] sm:text-[20px] leading-tight mb-2 sm:mb-3">{v.title}</h3>
                                <p className="text-mute text-[13px] sm:text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Open Roles ─────────────────────────────────────────────── */}
            <section ref={rolesSectionRef} className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32" id="open-roles">
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="reveal">
                        <span className="num text-[10px] sm:text-[11px]">[ Open positions ]</span>
                        <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-3 sm:mb-4">
                            Current <em className="serif-em">openings</em>
                        </h2>
                        {OPEN_ROLES.length > 0 ? (
                            <p className="text-mute text-[13.5px] sm:text-sm mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-xl">
                                {OPEN_ROLES.length} roles across our group. Click &quot;Apply&quot; on any role to fill
                                out a quick application form.
                            </p>
                        ) : (
                            <p className="text-mute text-[13.5px] sm:text-sm mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-xl">
                                We don&apos;t have any open positions at the moment. Check back soon or send your CV to our HR team below.
                            </p>
                        )}
                    </div>

                    {OPEN_ROLES.length > 0 && (
                        <div className="space-y-3 sm:space-y-4">
                            {OPEN_ROLES.map((role, i) => (
                                <div
                                    key={role.id}
                                    className="reveal info-card p-5 sm:p-6 lg:p-8 group transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                                <span className="num text-accent! text-[10px] sm:text-[11px]">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border ${getDeptColor(role.department)}`}
                                                >
                                                    {role.department}
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] text-mute">{role.type}</span>
                                            </div>
                                            <h3 className="font-display text-[18px] sm:text-[20px] lg:text-[22px] leading-tight">
                                                {role.title}
                                            </h3>
                                            <p className="text-mute text-[13px] sm:text-sm mt-2 leading-relaxed max-w-full lg:max-w-2xl">
                                                {role.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-3 sm:mt-4 text-mute text-[11px] sm:text-[12px]">
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="shrink-0"
                                                >
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {role.location}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                                            <button
                                                onClick={() => handleApply(role.id)}
                                                className={`btn w-full lg:w-auto justify-center ${selectedRole === role.id && showForm ? 'bg-accent! text-ondark!' : 'btn-primary'} text-[12px] sm:text-sm`}
                                            >
                                                {selectedRole === role.id && showForm ? 'Selected' : 'Apply'}
                                                <span className="arrow">→</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Application Form (shown when Apply is clicked) ─────────── */}
            {showForm && (
                <section ref={formSectionRef} className="pb-20 sm:pb-24 lg:pb-36" id="application-form">
                    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                            {/* Sidebar */}
                            <div className="md:col-span-12 lg:col-span-5">
                                <div className="sidebar-dark p-6 sm:p-8 lg:p-10 lg:sticky lg:top-32 rounded-[16px] sm:rounded-[20px]">
                                    <span className="num text-ondark/60! text-[10px] sm:text-[11px]">[ Applying for ]</span>
                                    <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] leading-tight mt-2 sm:mt-3 text-ondark">
                                        {selectedRoleData?.title || 'General Application'}
                                    </h3>
                                    {selectedRoleData && (
                                        <>
                                            <div className="hairline bg-ondark/15! my-5 sm:my-6"></div>
                                            <div className="space-y-3 sm:space-y-4 text-ondark/70 text-[13px] sm:text-sm">
                                                <div className="flex justify-between items-center">
                                                    <span>Department</span>
                                                    <span className="text-ondark text-right pl-4">
                                                        {selectedRoleData.department}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Location</span>
                                                    <span className="text-ondark text-right pl-4">
                                                        {selectedRoleData.location}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Type</span>
                                                    <span className="text-ondark text-right pl-4">
                                                        {selectedRoleData.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="hairline bg-ondark/15! my-5 sm:my-6"></div>
                                            <p className="text-ondark/60 text-[13px] sm:text-sm leading-relaxed">
                                                {selectedRoleData.description}
                                            </p>
                                        </>
                                    )}
                                    <button
                                        onClick={() => {
                                            setShowForm(false);
                                            setSelectedRole(null);
                                            rolesSectionRef.current?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                        className="mt-6 sm:mt-8 text-ondark/60 text-[12px] sm:text-sm hover:text-ondark transition-colors ulink"
                                    >
                                        ← Choose a different role
                                    </button>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="md:col-span-12 lg:col-span-7">
                                <CareersApplicationForm
                                    roleTitle={selectedRoleData?.title}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Bottom CTA ─────────────────────────────────────────────── */}
            <section className="pb-20 sm:pb-24 lg:pb-36">
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 text-center">
                    <div className="reveal">
                        <span className="num text-[10px] sm:text-[11px]">[ Don&apos;t see your role? ]</span>
                        <h2 className="font-display text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-4 sm:mb-6">
                            We&apos;re always looking for <em className="serif-em">talent</em>
                        </h2>
                        <p className="text-mute text-[13px] sm:text-sm mb-6 sm:mb-8 max-w-full sm:max-w-md mx-auto leading-relaxed">
                            Send your CV and a short note to our HR team. We keep all applications on
                            file and reach out when the right opportunity opens.
                        </p>
                        <a
                            href="mailto:careers@prestigeglamourgroupofcompany.com"
                            className="btn btn-primary text-[12px] sm:text-sm w-full sm:w-auto justify-center"
                        >
                            Email careers@prestigeglamourgroupofcompany.com <span className="arrow">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
