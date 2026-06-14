'use client';

import Leaf from "@/components/ui/Leaf";
import SriLankaMap, { MapPin } from "@/components/sections/about/sri-lanka-map";
import { useMemo, useState } from "react";

type Branch = {
    name: string;
    district: string;
    lat: number;
    lng: number;
    // Position on the Sri Lanka SVG (viewBox 0 0 1049.4 1848.31)
    x: number;
    y: number;
    // Paste the exact Google Maps share link here. Leave "" to fall back to a
    // Google Maps search by coordinates.
    mapUrl?: string;
};

type Province = {
    id: string;
    name: string;
    branches: Branch[];
};

const provinces: Province[] = [
    {
        id: "W",
        name: "Western",
        branches: [
            { name: "Kaduwela", district: "Colombo", lat: 6.9333, lng: 79.9833, x: 215, y: 1395, mapUrl: "" },
            { name: "Payagala (Head Office)", district: "Kalutara", lat: 6.5167, lng: 79.9833, x: 180, y: 1585, mapUrl: "" },
            { name: "Awissawella", district: "Colombo", lat: 6.9544, lng: 80.2097, x: 315, y: 1385, mapUrl: "" },
            { name: "Kadana", district: "Gampaha", lat: 7.0469, lng: 79.8939, x: 190, y: 1290, mapUrl: "" },
            { name: "Baduraliya", district: "Kalutara", lat: 6.6986, lng: 80.2069, x: 315, y: 1520, mapUrl: "" },
            { name: "Panadura", district: "Kalutara", lat: 6.7133, lng: 79.9042, x: 178, y: 1500, mapUrl: "" },
        ],
    },
    {
        id: "NW",
        name: "North Western",
        branches: [
            { name: "Puttalam", district: "Puttalam", lat: 8.0362, lng: 79.8283, x: 135, y: 905, mapUrl: "" },
            { name: "Kurunegala", district: "Kurunegala", lat: 7.4863, lng: 80.3647, x: 320, y: 1010, mapUrl: "" },
            { name: "Kuliyapitiya", district: "Kurunegala", lat: 7.4686, lng: 80.0408, x: 250, y: 1000, mapUrl: "" },
            { name: "Chilaw", district: "Puttalam", lat: 7.5758, lng: 79.7953, x: 135, y: 975, mapUrl: "" },
        ],
    },
    {
        id: "E",
        name: "Eastern",
        branches: [
            { name: "Batticaloa 1", district: "Batticaloa", lat: 7.7102, lng: 81.6924, x: 895, y: 1015, mapUrl: "" },
            { name: "Batticaloa 2", district: "Batticaloa", lat: 7.7170, lng: 81.7000, x: 905, y: 1045, mapUrl: "" },
            { name: "Kalmunai", district: "Ampara", lat: 7.4097, lng: 81.8344, x: 925, y: 1255, mapUrl: "" },
            { name: "Ampara", district: "Ampara", lat: 7.2917, lng: 81.6722, x: 840, y: 1280, mapUrl: "" },
            { name: "Walchchenai", district: "Batticaloa", lat: 7.9167, lng: 81.5333, x: 860, y: 880, mapUrl: "" },
            { name: "Tirukkovil", district: "Ampara", lat: 7.0667, lng: 81.8500, x: 920, y: 1370, mapUrl: "" },
        ],
    },
    {
        id: "S",
        name: "Southern",
        branches: [
            { name: "Matara", district: "Matara", lat: 5.9485, lng: 80.5353, x: 550, y: 1745, mapUrl: "" },
            { name: "Ambalangoda", district: "Galle", lat: 6.2356, lng: 80.0539, x: 250, y: 1655, mapUrl: "" },
            { name: "Hikkaduwa", district: "Galle", lat: 6.1391, lng: 80.1017, x: 245, y: 1690, mapUrl: "" },
        ],
    },
    {
        id: "NC",
        name: "North Central",
        branches: [
            { name: "Anuradhapura", district: "Anuradhapura", lat: 8.3114, lng: 80.4037, x: 420, y: 670, mapUrl: "" },
            { name: "Bingiriya", district: "Kurunegala", lat: 7.7167, lng: 79.9000, x: 165, y: 935, mapUrl: "" },
            { name: "Dambulla", district: "Matale", lat: 7.8742, lng: 80.6511, x: 480, y: 895, mapUrl: "" },
        ],
    },
    {
        id: "C",
        name: "Central",
        branches: [
            { name: "Kandy", district: "Kandy", lat: 7.2906, lng: 80.6337, x: 500, y: 1275, mapUrl: "" },
            { name: "Galewela", district: "Matale", lat: 7.7500, lng: 80.5667, x: 485, y: 955, mapUrl: "" },
        ],
    },
    {
        id: "N",
        name: "Northern",
        branches: [
            { name: "Jaffna", district: "Jaffna", lat: 9.6615, lng: 80.0255, x: 170, y: 205, mapUrl: "" },
            { name: "Mannar", district: "Mannar", lat: 8.9810, lng: 79.9044, x: 115, y: 440, mapUrl: "" },
        ],
    },
    {
        id: "SB",
        name: "Sabaragamuwa",
        branches: [
            { name: "Deraniyagala", district: "Kegalle", lat: 6.9333, lng: 80.3333, x: 360, y: 1390, mapUrl: "" },
        ],
    },
    {
        id: "U",
        name: "Uva",
        branches: [
            { name: "Badulla", district: "Badulla", lat: 6.9934, lng: 81.0550, x: 685, y: 1235, mapUrl: "" },
        ],
    },
];

const totalBranches = provinces.reduce((n, p) => n + p.branches.length, 0);

function embedUrl(bbox: string, marker: string) {
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
}

function branchBbox(b: Branch, pad: number) {
    return `${(b.lng - pad).toFixed(4)},${(b.lat - pad).toFixed(4)},${(b.lng + pad).toFixed(4)},${(b.lat + pad).toFixed(4)}`;
}

// Use the manually-added Google Maps link when present, else search by coordinates.
function googleMapsUrl(b: Branch) {
    return b.mapUrl && b.mapUrl.trim() !== ""
        ? b.mapUrl
        : `https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`;
}

// Western province head office — selected by default.
const defaultProvince = provinces[0];
const defaultBranch =
    defaultProvince.branches.find((b) => b.name.includes("Head Office")) ?? defaultProvince.branches[0];

export default function BranchLocatorSection() {
    const [activeProvince, setActiveProvince] = useState<Province>(defaultProvince);
    const [activeBranch, setActiveBranch] = useState<Branch | null>(defaultBranch);

    const selectProvince = (prov: Province) => {
        setActiveProvince(prov);
        setActiveBranch(prov.branches[0] ?? null);
    };

    // Flatten every branch into a pin for the map.
    const pins: MapPin[] = useMemo(
        () =>
            provinces.flatMap((prov) =>
                prov.branches.map((b) => ({ provinceId: prov.id, name: b.name, x: b.x, y: b.y }))
            ),
        []
    );

    const selectPin = (provinceId: string, name: string) => {
        const prov = provinces.find((p) => p.id === provinceId);
        if (!prov) return;
        setActiveProvince(prov);
        setActiveBranch(prov.branches.find((b) => b.name === name) ?? null);
    };

    return (
        <section 
            className="pb-10 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24 relative overflow-hidden"
            style={{
                '--color-royal-blue': 'var(--c-royal-blue)',
                '--color-sapphire-blue': 'var(--c-sapphire-blue)',
                '--color-midnight-blue': 'var(--c-midnight-blue)',
            } as React.CSSProperties}
        >
            <Leaf variant="tr" />
            <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
                {/* Heading */}
                <div className="grid grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-end mb-10 sm:mb-14 lg:mb-20">
                    <div className="col-span-12 lg:col-span-7 reveal">
                        <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
                            <span className="hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]"></span>
                            <span className="eyebrow text-[10px] xs:text-xs">Find a Branch</span>
                        </div>
                        <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tightish text-midnight-blue">
                            Locate your <em className="serif-em">nearest</em> office.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 reveal">
                        <p className="text-[13.5px] xs:text-[14px] sm:text-[14.5px] lg:text-base text-mute leading-[1.7] max-w-full sm:max-w-[440px] font-light">
                            Choose a province, pick a branch, and see its exact location on the map.
                            All {totalBranches} offices are open to the investors whose capital we
                            steward—walk in any time.
                        </p>
                    </div>
                </div>

                {/* Locator card */}
                <div className="reveal grid grid-cols-1 lg:grid-cols-12 border border-none bg-surface overflow-hidden rounded-2xl">
                    {/* ── Left: tabs + list + detail ─────────────────────────── */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-line">
                        {/* Province tabs */}
                        <div className="p-4 xs:p-5 sm:p-6 lg:p-7 border-b border-line">
                            <span className="eyebrow text-[9px] xs:text-[10px] block mb-3">Provinces</span>
                            <div className="flex flex-wrap gap-1.5 xs:gap-2">
                                {provinces.map((prov) => {
                                    const on = prov.id === activeProvince.id;
                                    return (
                                        <button
                                            key={prov.id}
                                            onClick={() => selectProvince(prov)}
                                            aria-pressed={on}
                                            className={`px-2.5 xs:px-3 py-1 xs:py-1.5 text-[10.5px] xs:text-[11px] sm:text-xs rounded-full border transition-all duration-200 ${
                                                on
                                                    ? "bg-sapphire-blue text-white border-transparent shadow-sm"
                                                    : "border-line text-mute hover:bg-royal-blue/10 hover:text-ink hover:border-transparent"
                                            }`}
                                        >
                                            {prov.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Province header */}
                        <div className="px-4 xs:px-5 sm:px-6 lg:px-7 pt-4 xs:pt-5 sm:pt-6 pb-3 flex items-center gap-3 border-b border-line">
                            <h3 className="font-display text-lg xs:text-xl sm:text-2xl leading-tight text-ink">
                                <em className="serif-em">{activeProvince.name}</em> Province
                            </h3>
                            <span className="pill ml-auto text-[10px] xs:text-[11px]! py-1! px-2.5!">
                                <span className="dot text-midnight-blue" />
                                {activeProvince.branches.length}
                            </span>
                        </div>

                        {/* Branch list */}
                        <ul className="px-2.5 xs:px-3 sm:px-4 lg:px-5 py-2.5 xs:py-3 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-0.5 xs:gap-1 max-h-[240px] xs:max-h-[200px] lg:max-h-[300px] overflow-y-auto">
                            {activeProvince.branches.map((b) => {
                                const on = activeBranch?.name === b.name;
                                return (
                                    <li key={b.name}>
                                        <button
                                            onClick={() => setActiveBranch(b)}
                                            aria-pressed={on}
                                            className={`w-full flex items-center gap-2.5 xs:gap-3 px-2.5 xs:px-3 py-2 xs:py-2.5 rounded-md text-left transition-colors duration-150 ${
                                                on ? "bg-sapphire-blue" : "hover:bg-royal-blue/10"
                                            }`}
                                        >
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full shr ink-0 transition-colors ${
                                                    on ? "bg-white" : "bg-sapphire-blue/40"
                                                }`}
                                            />
                                            <span className="flex flex-col min-w-0">
                                                <span className={`text-[13px] xs:text-[13.5px] sm:text-[14px] leading-tight truncate transition-colors ${
                                                    on ? "text-white" : "text-midnight-blue"
                                                }`}>
                                                    {b.name}
                                                </span>
                                                <span className={`text-[10.5px] xs:text-[11px] transition-colors ${
                                                    on ? "text-white/70" : "text-gray-400"
                                                }`}>
                                                    {b.district} District
                                                </span>
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Selected branch detail + map preview */}
                        <div className="mt-auto p-4 xs:p-5 sm:p-6 lg:p-7 border-t border-line bg-surface">
                            {activeBranch ? (
                                <>
                                    <span className="eyebrow text-[9px] xs:text-[10px] block mb-2">Selected branch</span>
                                    <h4 className="font-display text-base xs:text-lg sm:text-xl leading-tight text-ink">
                                        {activeBranch.name}
                                    </h4>
                                    <p className="mt-1.5 text-[12px] xs:text-[12.5px] sm:text-[13px] text-mute leading-relaxed">
                                        {activeBranch.district} District, {activeProvince.name} Province,
                                        Sri&nbsp;Lanka
                                    </p>
                                    <div className="relative mt-3 xs:mt-4 rounded-md overflow-hidden border border-line aspect-[16/9] bg-sapphire-blue/5">
                                        <iframe
                                            key={activeBranch.name}
                                            title={`Map preview of ${activeBranch.name}`}
                                            src={embedUrl(
                                                branchBbox(activeBranch, 0.012),
                                                `${activeBranch.lat},${activeBranch.lng}`
                                            )}
                                            /* Iframe runs taller than its clip box so the OSM
                                               attribution bar is cropped out of view. */
                                            className="absolute inset-x-0 top-0 w-full h-[calc(100%+44px)] border-0"
                                            loading="lazy"
                                        />
                                    </div>
                                    <a
                                        href={googleMapsUrl(activeBranch)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-3 inline-flex items-center gap-1.5 text-[11.5px] xs:text-[12px] text-royal-blue font-medium"
                                    >
                                        <span className="ulink">Open full map</span>
                                        <span className="arrow" aria-hidden>→</span>
                                    </a>
                                </>
                            ) : (
                                <p className="text-[12.5px] xs:text-[13px] text-mute leading-relaxed">
                                    Select a branch to preview its location and address.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* ── Right: Sri Lanka SVG map ───────────────────────────── */}
                    <div className="lg:col-span-7 xl:col-span-8 flex items-center justify-center p-4 xs:p-5 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[520px] lg:min-h-[640px] xl:min-h-[700px]">
                        <SriLankaMap
                            activeProvinceId={activeProvince.id}
                            activeBranch={activeBranch?.name ?? null}
                            pins={pins}
                            onSelectPin={selectPin}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
