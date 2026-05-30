'use client';

import React, { useMemo } from 'react';

// --- Configuration & Types ---
type Role = 'GM' | 'AGM' | 'PH' | 'RM' | 'BM' | 'BDE';

interface RoleConfig {
    color: string;
    size: number;
    fs: number;
    label: string;
}

const CFG: Record<Role, RoleConfig> = {
    GM: { color: '#C5A880', size: 82, fs: 15, label: 'General Manager' }, // Accent Gold
    AGM: { color: '#2E4F4F', size: 70, fs: 12, label: 'Asst. General Manager' }, // Deep Forest
    PH: { color: '#2C3E50', size: 62, fs: 12, label: 'Plant Head' }, // Navy
    RM: { color: '#9E5A44', size: 55, fs: 11, label: 'Regional Manager' }, // Terracotta
    BM: { color: '#5F6A6A', size: 50, fs: 11, label: 'Branch Manager' }, // Slate
    BDE: { color: '#8B4513', size: 44, fs: 9, label: 'Business Dev. Executive' }, // Saddle
};

interface TreeNode {
    id: number;
    role: Role;
    name: string;
    children?: TreeNode[];
}

interface LayoutNode extends TreeNode {
    _w: number;
    _x: number;
    _y: number;
    children?: LayoutNode[];
}

const ORG_DATA: TreeNode = {
    id: 1,
    role: 'GM',
    name: 'Y.M.D.T. Yatawara',
    children: [
        {
            id: 2,
            role: 'AGM',
            name: 'P. Perera',
            children: [
                {
                    id: 4,
                    role: 'PH',
                    name: 'S. Silva',
                    children: [
                        {
                            id: 9,
                            role: 'RM',
                            name: 'K. Bandara',
                            children: [
                                {
                                    id: 14,
                                    role: 'BM',
                                    name: 'N. Costa',
                                    children: [
                                        { id: 19, role: 'BDE', name: 'J. Peiris' },
                                        { id: 20, role: 'BDE', name: 'M. Fernando' },
                                    ],
                                },
                                {
                                    id: 15,
                                    role: 'BM',
                                    name: 'L. Gunasekara',
                                    children: [{ id: 21, role: 'BDE', name: 'R. Senanayake' }],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 5,
                    role: 'PH',
                    name: 'D. Rathnayake',
                    children: [
                        {
                            id: 10,
                            role: 'RM',
                            name: 'V. De Silva',
                            children: [
                                {
                                    id: 16,
                                    role: 'BM',
                                    name: 'A. Jayasooriya',
                                    children: [
                                        { id: 22, role: 'BDE', name: 'W. Fonseka' },
                                        { id: 23, role: 'BDE', name: 'T. Samarasinghe' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 6,
                    role: 'PH',
                    name: 'M. Weerasinghe',
                    children: [
                        {
                            id: 11,
                            role: 'RM',
                            name: 'S. Dias',
                            children: [
                                {
                                    id: 17,
                                    role: 'BM',
                                    name: 'N. Perera',
                                    children: [{ id: 24, role: 'BDE', name: 'K. Alwis' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            role: 'AGM',
            name: 'C. Rodrigo',
            children: [
                {
                    id: 7,
                    role: 'PH',
                    name: 'L. Mendis',
                    children: [
                        {
                            id: 12,
                            role: 'RM',
                            name: 'H. Dissanayake',
                            children: [
                                {
                                    id: 18,
                                    role: 'BM',
                                    name: 'P. Ekanayake',
                                    children: [{ id: 25, role: 'BDE', name: 'T. Gamage' }],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 8,
                    role: 'PH',
                    name: 'J. Abeysekara',
                    children: [
                        { id: 13, role: 'RM', name: 'S. Wickramasinghe' },
                    ],
                },
            ],
        },
    ],
};

const H_GAP = 26;
const LEAF_W = 110;
const PAD = 80;

function vgap(role: Role) {
    return CFG[role].size + 85;
}

// --- Layout Engine ---
export default function OrganizationChart() {
    const { nodes, lines, width, height } = useMemo(() => {
        // Deep clone tree to avoid mutating global data
        const root: LayoutNode = JSON.parse(JSON.stringify(ORG_DATA));

        // 1. Measure widths
        const measureW = (n: LayoutNode) => {
            if (!n.children || !n.children.length) {
                n._w = LEAF_W;
                return;
            }
            n.children.forEach(measureW);
            n._w =
                n.children.reduce((s, c) => s + c._w, 0) +
                H_GAP * (n.children.length - 1);
        };
        measureW(root);

        // 2. Compute X/Y layout
        const layout = (n: LayoutNode, cx: number, y: number) => {
            n._x = cx;
            n._y = y;
            if (!n.children || !n.children.length) return;
            const totalW =
                n.children.reduce((s, c) => s + c._w, 0) +
                H_GAP * (n.children.length - 1);
            let x = cx - totalW / 2;
            n.children.forEach((c) => {
                layout(c, x + c._w / 2, y + vgap(n.role));
                x += c._w + H_GAP;
            });
        };
        layout(root, root._w / 2 + PAD, PAD);

        // 3. Flatten nodes
        const allNodes: LayoutNode[] = [];
        const flatten = (n: LayoutNode) => {
            allNodes.push(n);
            n.children?.forEach(flatten);
        };
        flatten(root);

        // 4. Compute SVG lines
        const linesData: React.ReactNode[] = [];
        let lineKey = 0;

        const drawLines = (n: LayoutNode) => {
            if (!n.children || !n.children.length) return;
            const s = CFG[n.role].size;
            const pBot = n._y + s;
            const cTop = n.children[0]._y;
            const midY = Math.round(pBot + (cTop - pBot) * 0.48);
            const col = CFG[n.role].color;

            // Vertical line down to mid
            linesData.push(
                <line
                    key={`l-${lineKey++}`}
                    x1={n._x}
                    y1={pBot}
                    x2={n._x}
                    y2={midY}
                    stroke={col}
                    strokeOpacity={0.25}
                    strokeWidth="1.5"
                />
            );

            // Horizontal bar
            if (n.children.length > 1) {
                const first = n.children[0];
                const last = n.children[n.children.length - 1];

                // SVG gradient definition
                const gradId = `grad-${n.id}`;
                linesData.push(
                    <defs key={`def-${gradId}`}>
                        <linearGradient id={gradId} x1={first._x} y1="0" x2={last._x} y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor={CFG[first.role].color} stopOpacity={0.25} />
                            <stop offset="100%" stopColor={CFG[last.role].color} stopOpacity={0.25} />
                        </linearGradient>
                    </defs>
                );

                linesData.push(
                    <line
                        key={`l-${lineKey++}`}
                        x1={first._x}
                        y1={midY}
                        x2={last._x}
                        y2={midY}
                        stroke={`url(#${gradId})`}
                        strokeWidth="1.5"
                    />
                );
            }

            // Mid down to each child
            n.children.forEach((c) => {
                const cCol = CFG[c.role].color;
                linesData.push(
                    <line
                        key={`l-${lineKey++}`}
                        x1={c._x}
                        y1={midY}
                        x2={c._x}
                        y2={c._y}
                        stroke={cCol}
                        strokeOpacity={0.3}
                        strokeWidth="1.5"
                    />
                );
                // Junction dot
                linesData.push(
                    <circle
                        key={`d-${lineKey++}`}
                        cx={c._x}
                        cy={midY}
                        r="3.5"
                        fill={cCol}
                        fillOpacity={0.6}
                    />
                );
                drawLines(c);
            });
        };
        drawLines(root);

        // 5. Calculate canvas size
        const W = root._w + PAD * 2;
        const H = Math.max(...allNodes.map((n) => n._y + CFG[n.role].size + 90)) + PAD;

        return { nodes: allNodes, lines: linesData, width: W, height: H };
    }, []);

    return (
        <section className="relative overflow-hidden bg-surface py-24 border-y border-line">
            <div className="max-w-content mx-auto px-6 lg:px-10 mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
                    <span className="eyebrow">Organization Chart</span>
                </div>
                <h2 className="font-display text-[42px] sm:text-[56px] leading-[1.05] tracking-tightish max-w-[800px]">
                    The structure behind
                    <br />
                    our <em className="serif-em">island-wide</em> operations.
                </h2>
            </div>

            {/* Scrollable Canvas Container */}
            <div className="w-full overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8 px-4">
                <div
                    style={{ width, height }}
                    className="relative mx-auto bg-bg border border-line rounded-3xl shadow-sm overflow-hidden"
                >
                    {/* SVG Layer for Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {lines}
                    </svg>

                    {/* HTML Layer for Nodes */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        {nodes.map((n) => {
                            const cfg = CFG[n.role];
                            return (
                                <div
                                    key={n.id}
                                    className="absolute flex flex-col items-center pointer-events-auto"
                                    style={{
                                        left: n._x,
                                        top: n._y,
                                        transform: 'translateX(-50%)',
                                        width: cfg.size + 16,
                                    }}
                                >
                                    {/* Avatar Ring */}
                                    <div
                                        className="rounded-full flex items-center justify-center bg-white shadow-sm transition-transform duration-300 hover:scale-110"
                                        style={{
                                            width: cfg.size + 8,
                                            height: cfg.size + 8,
                                            border: `1.5px solid ${cfg.color}30`,
                                        }}
                                    >
                                        <div
                                            className="rounded-full flex items-center justify-center font-bold text-white shadow-inner"
                                            style={{
                                                width: cfg.size,
                                                height: cfg.size,
                                                backgroundColor: cfg.color,
                                                fontSize: cfg.fs,
                                            }}
                                        >
                                            <span className="opacity-90 tracking-wide">
                                                {n.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div
                                        className="mt-2.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest whitespace-nowrap bg-white border shadow-sm"
                                        style={{
                                            color: cfg.color,
                                            borderColor: `${cfg.color}30`,
                                        }}
                                    >
                                        {cfg.label}
                                    </div>

                                    {/* Name */}
                                    <div className="mt-2 text-[11px] font-medium text-ink opacity-80 whitespace-nowrap">
                                        {n.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md border border-line p-5 rounded-2xl shadow-sm z-20">
                        <div className="text-[10px] uppercase tracking-widest text-mute mb-3 font-semibold">
                            Hierarchy Legend
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {Object.entries(CFG).map(([role, cfg]) => (
                                <div key={role} className="flex items-center gap-3">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: cfg.color }}
                                    />
                                    <span className="text-[11px] text-ink/80 font-medium">
                                        {cfg.label} ({role})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
