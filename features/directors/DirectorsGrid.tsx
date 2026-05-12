import { DIRECTORS, type Director } from '@/data/team';

interface DirectorsGridProps {
  variant?: 'full' | 'short';
}

export default function DirectorsGrid({ variant = 'full' }: DirectorsGridProps) {
  // If short, limit to first 3 directors (or use some other logic)
  const directors = variant === 'full' ? DIRECTORS : DIRECTORS.slice(0, 3);

  return (
    <div className="directors-grid">
      {directors.map((d) => (
        <DirectorCard key={d.initials} director={d} variant={variant} />
      ))}
    </div>
  );
}

function DirectorCard({ director, variant }: { director: Director; variant: 'full' | 'short' }) {
  // For short variant, only show the first qualification
  const quals = variant === 'full' ? director.qualifications : director.qualifications.slice(0, 1);

  return (
    <div className="director-card">
      <div className="director-photo">{director.initials}</div>
      <div className="gold-sep" />
      <h3>{director.name}</h3>
      <span className="role-tag">{director.role}</span>
      <p className="dept">{director.department}</p>
      <ul className="quals">
        {quals.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
