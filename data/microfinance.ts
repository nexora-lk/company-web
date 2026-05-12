export interface MicrofinanceProduct {
  icon: string;
  title: string;
  desc: string;
  features: string[];
  featured: boolean;
}

export const MICROFINANCE_PRODUCTS: MicrofinanceProduct[] = [
  {
    icon: '🌾',
    title: 'Agri Micro Loan',
    desc: 'Tailored financing for small-scale farmers.',
    features: ['Up to LKR 500,000', 'Flexible repayment', 'No collateral < 100K', 'Agri insurance'],
    featured: false,
  },
  {
    icon: '💼',
    title: 'SME Business Loan',
    desc: 'Working capital for small and medium enterprises.',
    features: ['Up to LKR 2,000,000', 'Competitive rates', '48h approval', 'Mentorship'],
    featured: true,
  },
  {
    icon: '🏠',
    title: 'Housing Micro Loan',
    desc: 'Affordable housing loans for rural families.',
    features: ['Up to LKR 1,000,000', 'Up to 36 months', 'Low interest', 'Insurance'],
    featured: false,
  },
];
