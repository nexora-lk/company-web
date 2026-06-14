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
    const bgClass = dark 
        ? 'bg-midnight-blue text-ondark shadow-2xl' 
        : 'bg-surface border border-line text-ink';
    
    const numColor = dark ? 'text-ondark/60!' : 'text-mute';
    const durationColor = dark ? 'text-light-gold!' : 'text-sapphire-blue';
    const textOpac = dark ? 'text-ondark/80' : 'text-mute';
    const hairlineClass = dark ? 'bg-midnight-blue' : 'bg-bg';
    const dtClass = dark ? 'text-ondark/50' : 'text-mute';
    const titleColor = dark ? 'text-white' : 'text-midnight-blue';

    return (
        <article className={`model-card rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 reveal transition-all duration-300 hover:shadow-xl ${bgClass}`}>
            <div className="flex items-start justify-between">
                <span className={`num text-[10px] sm:text-[11px] font-medium tracking-wider uppercase ${numColor}`}>Model · {num}</span>
                <span className={`num text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${durationColor}`}>{duration}</span>
            </div>
            <h3 className={`font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tightish ${titleColor}`}>
                {title}
            </h3>
            <p className={`${textOpac} text-[13.5px] sm:text-[14.5px] leading-[1.7] font-light`}>
                {description}
            </p>
            <div className={`hairline h-px w-full my-2 sm:my-0 ${hairlineClass}`}></div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-[13px] sm:text-[13.5px]">
                <div className="col-span-1 sm:contents">
                    <dt className={`${dtClass} sm:col-span-1`}>Min. ticket</dt>
                    <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2 font-medium">{minTicket}</dd>
                </div>
                <div className="col-span-1 sm:contents">
                    <dt className={`${dtClass} sm:col-span-1`}>Target IRR</dt>
                    <dd className="font-display text-[16px] sm:text-[18px] sm:col-span-2 font-medium">{targetIrr}</dd>
                </div>
            </dl>
        </article>
    );
}

export default ModelCard;