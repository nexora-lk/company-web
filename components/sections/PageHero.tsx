import Link from 'next/link';
import type { ReactNode } from 'react';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  pills?: string[];
  children?: ReactNode;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
  pills,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="breadcrumb">
          <Link href="/">Home</Link> / {breadcrumbLabel}
        </p>
        <span className="hero-badge">{badge}</span>
        <h1 className="hero-lg">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        {pills && pills.length > 0 && (
          <div className="hero-pills">
            {pills.map((pill) => (
              <span key={pill} className="pill pill-white">
                {pill}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
