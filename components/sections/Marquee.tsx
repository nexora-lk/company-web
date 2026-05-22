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
      className="flex items-center gap-16 px-8 shrink-0"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          <span
            className={
              item.italic
                ? "font-display text-[28px] italic"
                : "font-display text-[28px]"
            }
          >
            {item.label}
          </span>
          <span className="text-xl">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: MarqueeItem[] }) {
  return (
    <div className="border-y border-line bg-bg overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-6 gap-16 text-mute">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
