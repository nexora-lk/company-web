export interface InvestmentModel {
  icon: string;
  title: string;
  duration: string;
  desc: string;
  terms: Record<string, string>;
  featured: boolean;
}

export const INVESTMENT_MODELS: InvestmentModel[] = [
  {
    icon: '🌿',
    title: 'Agri-Land Partnership',
    duration: '12–18 Months',
    desc: 'Invest in dedicated agricultural land parcels with full PGG crop management and profit-sharing.',
    terms: { 'Min. Investment': 'LKR 500,000', 'Expected ROI': '18–30%', 'Payout': 'At harvest' },
    featured: false,
  },
  {
    icon: '💰',
    title: 'Capital Contribution Model',
    duration: '6–12 Months',
    desc: 'Contribute capital to PGG cultivation projects and receive returns based on crop performance.',
    terms: { 'Min. Investment': 'LKR 200,000', 'Expected ROI': '15–24%', 'Payout': 'Monthly / End of term' },
    featured: true,
  },
  {
    icon: '🏗️',
    title: 'Agri-Real Estate',
    duration: '24–36 Months',
    desc: 'Long-term investment in agricultural land development with capital appreciation and rental returns.',
    terms: { 'Min. Investment': 'LKR 1,000,000', 'Expected ROI': '25–45%', 'Payout': 'Bi-annual' },
    featured: false,
  },
  {
    icon: '💎',
    title: 'Gem Export Investment',
    duration: '6 Months',
    desc: 'Fund authenticated gemstone procurement and export operations with PGG\'s established trading network.',
    terms: { 'Min. Investment': 'LKR 300,000', 'Expected ROI': '20–35%', 'Payout': 'Per transaction' },
    featured: false,
  },
];

export const INVESTMENT_REASONS = [
  { icon: '📈', title: 'Proven Track Record', desc: 'Over a decade of consistent returns and growth across multiple sectors.' },
  { icon: '🔒', title: 'Full Transparency', desc: 'Regular reports, legal agreements, and audited financial statements.' },
  { icon: '🌿', title: 'Sustainable Impact', desc: 'Your investment supports sustainable agriculture and community development.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Personal investment manager assigned to every investor for ongoing guidance.' },
];
