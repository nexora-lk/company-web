import type { Value } from '@/types/content';
import { ArrowUpRight } from 'lucide-react';

export default function ValueGrid({ values }: { values: Value[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
                // Precise border management for 1, 2, and 3 column layouts
                const borderClasses = `
          border-b border-line
          ${i % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'}
          ${i % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
          ${i >= values.length - 1 ? 'border-b-0' : ''}
          ${i >= values.length - 2 ? 'sm:border-b-0' : ''}
          ${i >= values.length - 3 ? 'lg:border-b-0' : ''}
        `
                    .replace(/\s+/g, ' ')
                    .trim();

                return <ValueCard key={v.no} value={v} borderClasses={borderClasses} />;
            })}
        </div>
    );
}

function ValueCard({ value, borderClasses }: { value: Value; borderClasses: string }) {
    return (
        <article
            className={`value-card bg-surface group relative overflow-hidden p-6 xs:p-8 lg:p-10 reveal ${borderClasses}`}
        >
            {/* Accent top bar that grows on hover */}
            <span aria-hidden className="value-bar" />

            <div className="relative">
                <div className="flex items-center justify-between mb-8 xs:mb-10 lg:mb-12">
                    <span className="grid place-items-center w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-mute text-ink font-body text-[12px] font-semibold tracking-[0.04em] tabular-nums transition-all duration-[450ms] ease-out group-hover:border-ink group-hover:bg-ink group-hover:text-white group-hover:scale-105">
                        {value.no}
                    </span>
                    <ArrowUpRight
                        size={20}
                        className="text-mute opacity-0 -translate-x-1.5 translate-y-1.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-ink"
                    />
                </div>

                <h3 className="font-display text-[26px] xs:text-[28px] sm:text-[30px] lg:text-[34px] leading-[1.05] tracking-tightish text-black transition-colors duration-300">
                    {value.title}
                </h3>
                <p className="mt-3 xs:mt-4 text-[13.5px] xs:text-[14px] lg:text-[14.5px] text-mute leading-relaxed font-light">
                    {value.body}
                </p>
            </div>
        </article>
    );
}
