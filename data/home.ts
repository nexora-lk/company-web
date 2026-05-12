export interface Service {
  category: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
  metric: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    category: 'plantation',
    tag: 'Agriculture',
    icon: '🌿',
    title: 'Plantation & Cultivation',
    description: 'Cultivating high-value crops like ginger, banana, and mango across Sri Lanka for local and export markets.',
    metric: '✔ 137+ Active Acres Under Management',
    href: '/our-plantation',
  },
  {
    category: 'finance',
    tag: 'Finance',
    icon: '💰',
    title: 'Micro Finance — Next Investment',
    description: 'Providing inclusive financial support for rural entrepreneurs and small-scale farmers through tailored loan products. Est. 2013.',
    metric: '✔ 5,000+ SMEs Supported',
    href: '/microfinance',
  },
  {
    category: 'gems',
    tag: 'Luxury Export',
    icon: '💎',
    title: 'Gem & Jewelry Export',
    description: 'Certified gem trading and export business offering authentic Sri Lankan gemstones to global markets including Dubai, Japan, and Europe.',
    metric: '✔ 20+ Export Destinations',
    href: '/events',
  },
  {
    category: 'fmcg',
    tag: 'Consumer Goods',
    icon: '📦',
    title: 'FMCG — PGG Fresh Foods',
    description: 'Processing and distributing value-added fresh fruits and herbal products under the PGG Fresh Foods brand.',
    metric: '✔ 50+ Product SKUs',
    href: '/events',
  },
  {
    category: 'ngo',
    tag: 'Social Impact',
    icon: '🤝',
    title: 'NGO & Social Projects',
    description: 'Driving social change through education, rehabilitation, and income generation projects funded by global partners.',
    metric: '✔ 25+ Active Projects',
    href: '/corporate-information',
  },
  {
    category: 'realestate',
    tag: 'Property',
    icon: '🏗️',
    title: 'Agri Real Estate',
    description: 'Developing and managing commercial agricultural lands and estate projects to maximize asset value and investor returns.',
    metric: '✔ 200+ Acres Developed',
    href: '/investment-plans',
  },
];

export interface CoreValue {
  num: string;
  icon: string;
  title: string;
  description: string;
}

export const CORE_VALUES: CoreValue[] = [
  { num: '01', icon: '💡', title: 'Innovation', description: 'We embrace creativity and continuous improvement to drive transformative solutions across all sectors.' },
  { num: '02', icon: '🌱', title: 'Sustainability', description: 'Our operations prioritize environmental stewardship and long-term socio-economic impact.' },
  { num: '03', icon: '⭐', title: 'Quality', description: 'We deliver only high-standard products and services that meet global benchmarks.' },
  { num: '04', icon: '😊', title: 'Customer Satisfaction', description: 'We are committed to exceeding customer expectations through responsiveness, reliability, and value.' },
  { num: '05', icon: '🛡️', title: 'Integrity', description: 'We uphold transparency, fairness, and ethical practices in all business dealings.' },
  { num: '06', icon: '🌍', title: 'Global Excellence', description: 'We aim for internationally recognized performance, partnerships, and market reach.' },
];

export const HIGHLIGHTS = [
  { icon: '🌿', text: 'Sustainable Agriculture' },
  { icon: '🌍', text: 'Global Market Access' },
  { icon: '❤️', text: 'Community Upliftment' },
  { icon: '🛡️', text: 'Ethical Business Practices' },
] as const;

export const TRUST_BADGES = [
  { icon: '🔒', text: '100% Transparent' },
  { icon: '📜', text: 'Legally Registered' },
  { icon: '📈', text: 'Proven Returns' },
  { icon: '🤝', text: 'Dedicated Support' },
] as const;
