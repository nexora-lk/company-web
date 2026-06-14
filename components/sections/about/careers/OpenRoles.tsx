'use client';

import ArrowIcon from "@/components/ui/ArrowIcon";
import CareersApplicationForm from "@/components/forms/CareersApplicationForm";
import {useRef, useState, useEffect} from "react";
import Leaf from "@/components/ui/Leaf";
import { MapPin } from "lucide-react";

/* ─── Open Roles Data ─────────────────────────────────────────────── */
interface OpenRole {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
}

const OPEN_ROLES: OpenRole[] = [
    {
        id: 'plantation-mgr',
        title: 'Plantation Manager',
        department: 'Plantation',
        location: 'Badulla, Sri Lanka',
        type: 'Full-time',
        description:
            'Oversee daily operations of highland plantation estates, manage field teams, and ensure sustainable cultivation practices across tea and cinnamon crops.',
    },
];

export default function OpenRoles() {
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
            {/* ─── Open Roles ─────────────────────────────────────────────── */}
            <section ref={rolesSectionRef} className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-bg" id="open-roles">
                <Leaf variant="bl" />
                <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="reveal">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Open positions</span>
                        </div>
                        <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight tracking-tightish mt-2 sm:mt-3 mb-3 sm:mb-4 text-midnight-blue">
                            Current <em className="serif-em text-sapphire-blue">openings</em>
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
                            {OPEN_ROLES.map((role, i) => {
                                const isSelected = selectedRole === role.id && showForm;
                                return (
                                    <div
                                        key={role.id}
                                        className={`reveal info-card relative overflow-hidden p-5 sm:p-6 lg:p-8 group transition-all duration-300 hover:-translate-y-0.5 hover:border-sapphire-blue/30 hover:shadow-[0_20px_44px_-28px_rgba(7,11,41,0.5)] ${isSelected ? 'border-accent/40' : ''}`}
                                    >
                                        {/* left accent bar */}
                                        <span
                                            aria-hidden
                                            className={`absolute left-0 top-0 h-full w-[3px] bg-normal-gold origin-top transition-transform duration-400 ${isSelected ? 'scale-y-100 bg-accent!' : 'scale-y-0 group-hover:scale-y-100'}`}
                                        />
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                                    <span className="num text-accent! text-[10px] sm:text-[11px]">
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border bg-sapphire-blue/[0.08] text-sapphire-blue border-sapphire-blue/15">
                                                        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-sapphire-blue/60" />
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
                                                    <MapPin className="w-3.5 h-3.5 shrink-0 text-sapphire-blue" strokeWidth={1.75} />
                                                    {role.location}
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                                                <button
                                                    onClick={() => handleApply(role.id)}
                                                    className={`btn group w-full lg:w-auto justify-center ${isSelected ? 'bg-accent! text-ondark!' : 'btn-primary'} text-[12px] sm:text-sm`}
                                                >
                                                    {isSelected ? 'Selected' : 'Apply'}
                                                    <ArrowIcon size={12} className="ml-1 group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Application Form (shown when Apply is clicked) ─────────── */}
            {showForm && (
                <section ref={formSectionRef} className="py-10 sm:py-12 lg:py-20 bg-bg-alt" id="application-form">
                    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                            {/* Sidebar */}
                            <div className="md:col-span-12 lg:col-span-5">
                                <div className="sidebar-dark p-6 sm:p-8 lg:p-10 lg:sticky lg:top-32 rounded-[16px] sm:rounded-[20px]">
                                    <span className="num text-ondark/60! text-[10px] sm:text-[11px]">Applying for</span>
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
        </>
    )
}