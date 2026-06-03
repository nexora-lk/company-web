type SectionEyebrowProps = {
  index?: string;
  label: string;
  className?: string;
  hairlineClassName?: string;
};

export default function SectionEyebrow({
  index,
  label,
  className = "flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6 lg:mb-8 reveal",
  hairlineClassName = "hairline-strong w-16 xs:w-20 sm:w-24 lg:w-[120px]",
}: SectionEyebrowProps) {
  return (
    <div className={className}>
      {index && <span className="num mr-1 sm:mr-2 text-[10px] xs:text-[11px] sm:text-xs">[{index}]</span>}
      <span className={hairlineClassName}></span>
      <span className="eyebrow text-[9px] xs:text-[10px] sm:text-[11px] lg:text-xs tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}
