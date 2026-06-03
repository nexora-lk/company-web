import { Fragment } from "react";
import type { MarqueeItem } from "@/types/content";

function Row({
  items,
  hidden,
}: {
  items: MarqueeItem[];
  hidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-8 xs:gap-12 sm:gap-16 md:gap-20 px-4 xs:px-6 sm:px-8 shrink-0"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          <span
            className={
              item.italic
                ? "font-display text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] italic"
                : "font-display text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]"
            }
          >
            {item.label}
          </span>
          <span className="text-lg xs:text-xl text-accent/40">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: MarqueeItem[] }) {
  return (
    <div className="border-y border-line bg-bg overflow-hidden reveal">
      <div className="flex marquee-track whitespace-nowrap py-4 xs:py-5 sm:py-6 md:py-8 text-mute">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
