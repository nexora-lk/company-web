type SectionEyebrowProps = {
  index: string;
  label: string;
  className?: string;
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
