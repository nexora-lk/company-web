import type { Stat } from "@/types/content";

export default function StatsBanner({
  stats,
}: {
  stats: Stat[];
}) {
  return (
    <>
      <div className="hairline"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => {
          // Adjust border logic for grid
          const borderClasses = `
            ${i === 0 ? 'border-b sm:border-r lg:border-r' : ''}
            ${i === 1 ? 'border-b sm:border-b-0 lg:border-r' : ''}
            ${i === 2 ? 'border-b sm:border-r lg:border-b-0 lg:border-r-0' : ''}
            border-line
          `.replace(/\s+/g, ' ').trim();

          return (
            <div
              key={s.label}
              className={`p-6 xs:p-8 lg:p-10 reveal ${borderClasses}`}
            >
              <div className="num mb-4 xs:mb-6">{s.label}</div>
              <div className="stat-num text-midnight-blue text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                {s.value}
                <em className="serif-em text-sapphire-blue ml-1">{s.em}</em>
              </div>
              <div className="text-[11px] xs:text-[12px] lg:text-[13px] text-mute mt-2 xs:mt-3 font-light">
                {s.note}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hairline"></div>
    </>
  );
}
