import React from 'react';

interface ModelCardProps {
    num: string;
    duration: string;
    title: React.ReactNode;
    description: React.ReactNode;
    minTicket: string;
    targetIrr: string;
    dark?: boolean;
}

function ModelCard({
    num,
    duration,
    title,
    description,
    minTicket,
    targetIrr,
    dark = false,
}: ModelCardProps) {
    const bgClass = dark ? 'bg-ink text-ondark' : 'bg-bg border border-line';
    const numColor = dark ? 'text-ondark/70!' : '';
    const durationColor = dark ? 'text-ondark/70!' : 'text-accent';
    const textOpac = dark ? 'opacity-80' : 'text-mute';
    const hairlineClass = dark ? 'bg-[rgba(241,236,224,0.18)]!' : '';
    const dtClass = dark ? 'opacity-60' : 'text-mute';

    return (
        <article className={`model-card rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal ${bgClass}`}>
            <div className="flex items-start justify-between">
                <span className={`num text-[10px] sm:text-[11px] ${numColor}`}>Model · {num}</span>
                <span className={`num text-[10px] sm:text-[11px] ${durationColor}`}>{duration}</span>
            </div>
            <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish">
                {title}
            </h3>
            <p className={`${textOpac} text-[13.5px] sm:text-[14.5px] leading-[1.7]`}>
                {description}
            </p>
            <div className={`hairline my-2 sm:my-0 ${hairlineClass}`}></div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px]">
                <div className="col-span-1 sm:contents">
                    <dt className={`${dtClass} sm:col-span-1`}>Min. ticket</dt>
                    <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">{minTicket}</dd>
                </div>
                <div className="col-span-1 sm:contents">
                    <dt className={`${dtClass} sm:col-span-1`}>Target IRR</dt>
                    <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2">{targetIrr}</dd>
                </div>
            </dl>
        </article>
    );
}

export default ModelCard;