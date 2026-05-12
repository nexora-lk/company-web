import Link from 'next/link';

interface FullCtaProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: 'green' | 'navy';
  children?: React.ReactNode;
}

export default function FullCta({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  variant = 'green',
  children,
}: FullCtaProps) {
  return (
    <section className={`full-cta${variant === 'navy' ? ' navy' : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
        <Link href={buttonHref} className="btn btn-gold btn-lg">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
