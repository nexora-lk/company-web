import CountUpNumber from '@/components/ui/CountUpNumber';

export default function StatsBanner() {
  const stats = [
    { icon: '🌿', value: '15+', label: 'Plantation Projects' },
    { icon: '👥', value: '50,000+', label: 'Community Members' },
    { icon: '📍', value: '25+', label: 'Branch Locations' },
    { icon: '📈', value: '18–24%', label: 'Investment Returns', static: true },
  ];

  return (
    <section className="stats-banner">
      <div className="container">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            {stat.static ? (
              <div className="stat-number">{stat.value}</div>
            ) : (
              <CountUpNumber target={stat.value} className="stat-number" />
            )}
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
