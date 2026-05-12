import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  white?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  white = false,
  children,
}: SectionHeaderProps) {
  const classes = [
    'section-header',
    centered ? 'centered' : '',
    white ? 'white' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className="label">{label}</span>
      <h2>{title}</h2>
      <div className="gold-line" />
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}
