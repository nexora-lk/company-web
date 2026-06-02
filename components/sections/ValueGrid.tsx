import type { Value } from "@/types/content";

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
        `.replace(/\s+/g, ' ').trim();

        return (
          <article
            key={v.no}
            className={`group p-6 xs:p-8 lg:p-10 transition-colors duration-300 hover:bg-surface/50 ${borderClasses}`}
          >
            <div className="flex items-center justify-between mb-8 xs:mb-10 lg:mb-12">
              <span className="num text-accent font-semibold">{v.no}</span>
            </div>
            <h3 className="font-display text-[26px] xs:text-[28px] sm:text-[30px] lg:text-[34px] leading-[1.05] tracking-tightish text-ink">
              {v.title}
            </h3>
            <p className="mt-3 xs:mt-4 text-[13.5px] xs:text-[14px] lg:text-[14.5px] text-mute leading-relaxed font-light">
              {v.body}
            </p>
          </article>
        );
      })}
    </div>
  );
}
