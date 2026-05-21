// The "[ 0X ] —— EYEBROW" index row that opens almost every section.
// Reproduces the existing markup exactly; only the dynamic bits are props.

type SectionEyebrowProps = {
  /** Shown as `[ {index} ]`, e.g. "01". */
  index: string;
  label: string;
  /** Wrapper classes — defaults match the common in-section spacing. */
  className?: string;
  /** Hairline rule classes — two variants exist in the design. */
  hairlineClassName?: string;
};

export default function SectionEyebrow({
  index,
  label,
  className = "flex items-center gap-3 mb-6",
  hairlineClassName = "hairline-strong w-[120px]",
}: SectionEyebrowProps) {
  return (
    <div className={className}>
      <span className="num">{`[ ${index} ]`}</span>
      <span className={hairlineClassName}></span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}
