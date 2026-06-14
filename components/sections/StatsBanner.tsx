import type { Stat } from "@/types/content";
import CountUp from "@/components/ui/CountUp";

export default function StatsBanner({
  stats,
}: {
  stats: Stat[];
}) {
  return (
    <>
      <div className="hairline"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-line sm:divide-y-0 sm:divide-x">
        {stats.map((s) => {
          const numeric = Number(String(s.value).replace(/[^0-9.]/g, ""));

          return (
            <div
              key={s.label}
              className="group reveal text-center sm:text-left px-1 sm:px-8 lg:px-10 py-9 sm:py-10 lg:py-14"
            >
              <div className="stat-num text-midnight-blue leading-none">
                {Number.isFinite(numeric) ? <CountUp value={numeric} /> : s.value}
                <em className="serif-em text-sapphire-blue">{s.em}</em>
              </div>

              <div className="num mt-3 xs:mt-4">{s.label}</div>

              {/* gold accent */}
              <span
                aria-hidden
                className="mt-5 block h-px w-10 bg-normal-gold/60 mx-auto sm:mx-0 origin-center sm:origin-left transition-transform duration-500 sm:scale-x-0 sm:group-hover:scale-x-100"
              />
            </div>
          );
        })}
      </div>
      <div className="hairline"></div>
    </>
  );
}
