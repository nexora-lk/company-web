import type { Certification, Stat } from "@/types/content";

const STAT_BORDER_BY_INDEX = [
  "border-b lg:border-b-0 lg:border-r border-line",
  "border-b lg:border-b-0 lg:border-r border-line",
  "",
];

export default function StatsBanner({
  stats,
  certifications,
}: {
  stats: Stat[];
  certifications: Certification[];
}) {
  return (
    <>
      <div className="hairline"></div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => {
          const border = STAT_BORDER_BY_INDEX[i] ?? "";
          return (
            <div
              key={s.label}
              className={`p-8 lg:p-10${border ? ` ${border}` : ""}`}
            >
              <div className="num mb-6">{s.label}</div>
              <div className="stat-num">
                {s.value}
                <em>{s.em}</em>
              </div>
              <div className="text-[12.5px] text-mute mt-3">{s.note}</div>
            </div>
          );
        })}
      </div>
      <div className="hairline"></div>
    </>
  );
}
