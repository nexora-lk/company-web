'use client';

import { LK_DISTRICTS } from "@/data/lk-districts";

export type MapPin = {
    provinceId: string;
    name: string;
    x: number;
    y: number;
};

type Props = {
    activeProvinceId: string;
    activeBranch: string | null;
    pins: MapPin[];
    onSelectPin: (provinceId: string, name: string) => void;
};

export default function SriLankaMap({ activeProvinceId, activeBranch, pins, onSelectPin }: Props) {
    return (
        <svg
            viewBox="0 0 1049.4 1848.31"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Map of Sri Lanka showing branch locations"
            className="w-auto h-full max-h-[360px] sm:max-h-[480px] lg:max-h-[600px] xl:max-h-[660px] mx-auto select-none"
        >
            {/* District outlines, grouped by province */}
            {LK_DISTRICTS.map((d) => {
                const active = d.prov === activeProvinceId;
                return (
                    <path
                        key={`${d.prov}-${d.dist}`}
                        d={d.d}
                        fill={active ? "var(--c-accent)" : "#cdd6cf"}
                        fillOpacity={active ? 0.82 : 0.45}
                        stroke="#ffffff"
                        strokeWidth={active ? 4 : 3}
                        className="transition-[fill-opacity,fill] duration-200"
                    />
                );
            })}

            {/* Branch pins */}
            {pins.map((p) => {
                const mine = p.provinceId === activeProvinceId;
                const isActive = mine && activeBranch === p.name;
                return (
                    <g
                        key={`${p.provinceId}-${p.name}`}
                        transform={`translate(${p.x} ${p.y})`}
                        opacity={mine ? 1 : 0.2}
                        className="cursor-pointer"
                        onClick={() => onSelectPin(p.provinceId, p.name)}
                    >
                        {/* Pulsing ring on the active pin */}
                        {isActive && (
                            <circle cx={0} cy={-28} r={35} fill="var(--c-accent)" opacity={0.45}>
                                <animate attributeName="r" from="32" to="72" dur="1.3s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.45" to="0" dur="1.3s" repeatCount="indefinite" />
                            </circle>
                        )}
                        {/* Shadow */}
                        <ellipse cx={0} cy={50} rx={22} ry={8} fill="rgba(0,0,0,.14)" />
                        {/* Stem */}
                        <line x1={0} y1={0} x2={0} y2={44} stroke="var(--c-accent)" strokeWidth={8} />
                        {/* Head */}
                        <circle
                            cx={0}
                            cy={-28}
                            r={isActive ? 36 : 28}
                            fill="var(--c-accent)"
                            stroke="#ffffff"
                            strokeWidth={6}
                            className="transition-[r] duration-150"
                        />
                        {/* Inner dot */}
                        <circle cx={0} cy={-28} r={9} fill="#ffffff" />
                    </g>
                );
            })}
        </svg>
    );
}
