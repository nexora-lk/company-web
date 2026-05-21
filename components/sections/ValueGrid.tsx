import type { Value } from "@/types/content";

// The six "core values" cards. Border classes form a 3-col grid that
// collapses cleanly at each breakpoint — derived from card position so the
// rules live in one place instead of being hand-written six times.

const BORDER_BY_INDEX = [
  "border-b border-line lg:border-r",
  "border-b border-line lg:border-r",
  "border-b border-line",
  "border-b border-line lg:border-r lg:border-b-0",
  "border-b border-line lg:border-r lg:border-b-0",
  "",
];

export default function ValueGrid({ values }: { values: Value[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {values.map((v, i) => {
        const border = BORDER_BY_INDEX[i] ?? "";
        return (
          <article
            key={v.no}
            className={`group p-8 lg:p-10${border ? ` ${border}` : ""}`}
          >
            <div className="flex items-center justify-between mb-12">
              <span className="num">{v.no}</span>
              <span className="num">{v.aside}</span>
            </div>
            <h3 className="font-display text-[34px] leading-[1.05] tracking-tightish">
              {v.title[0]}
              <em className="serif-em">{v.title[1]}</em>
              {v.title[2]}
            </h3>
            <p className="mt-4 text-[14.5px] text-mute leading-[1.7]">
              {v.body}
            </p>
          </article>
        );
      })}
    </div>
  );
}
