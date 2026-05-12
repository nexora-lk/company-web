export interface EventItem {
  date: string;
  title: string;
  location: string;
  desc: string;
  tags: string[];
  category: string;
}

export const EVENTS: EventItem[] = [
  {
    date: 'Mar 12, 2026',
    title: 'Ginger Cultivation Launch — Hambantota',
    location: '📍 Hambantota, Southern Province',
    desc: 'Official launch of the 23-acre ginger cultivation project with investor orientation and site walkthrough.',
    tags: ['Plantation', 'Launch'],
    category: 'plantation',
  },
  {
    date: 'Feb 28, 2026',
    title: 'Microfinance Branch Opening — Kaduwela',
    location: '📍 Kaduwela, Western Province',
    desc: 'Grand opening of the Next Investments Kaduwela branch, providing accessible microfinance to local entrepreneurs.',
    tags: ['Finance', 'Opening'],
    category: 'microfinance',
  },
  {
    date: 'Feb 15, 2026',
    title: 'Annual Gem Fair Participation — Dubai',
    location: '📍 Dubai World Trade Centre',
    desc: 'PGG Gem Division represented at the international gem and jewelry fair showcasing Sri Lankan gemstones.',
    tags: ['Gems', 'Exhibition'],
    category: 'gems',
  },
  {
    date: 'Jan 20, 2026',
    title: 'FMCG Product Launch — PGG Fresh Foods',
    location: '📍 Colombo, Sri Lanka',
    desc: 'Introducing the new line of herbal teas and dehydrated fruit products under the PGG Fresh Foods brand.',
    tags: ['FMCG', 'Launch'],
    category: 'fmcg',
  },
  {
    date: 'Dec 5, 2025',
    title: 'Community Development Workshop',
    location: '📍 Puttalam, North Western Province',
    desc: 'Free entrepreneurship workshop for rural farmers, covering modern cultivation techniques and financial planning.',
    tags: ['NGO', 'Community'],
    category: 'plantation',
  },
  {
    date: 'Nov 10, 2025',
    title: 'Real Estate Investor Meetup',
    location: '📍 Kandy, Central Province',
    desc: 'Exclusive presentation of upcoming agri-real estate projects with guided land tours for prospective investors.',
    tags: ['Real Estate', 'Investor'],
    category: 'realestate',
  },
];
