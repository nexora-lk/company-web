export const CONTACT_INFO = {
  address: 'Maggona, Nawaloka Medical Centre Area, Kalutara, Sri Lanka',
  email: 'info@prestigeglamourgroup.com',
  phones: ['034 2233669', '075 2038613', '075 1693138'],
  whatsapp: '+94751693138',
  officeHours: {
    weekday: 'Monday – Friday: 8:30 AM – 5:30 PM',
    saturday: 'Saturday: 8:30 AM – 1:00 PM',
  },
} as const;

export interface BankAccount {
  bank: string;
  type: 'current' | 'savings';
  holder: string;
  number: string;
  details: string;
}

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bank: 'Seylan Bank PLC',
    type: 'current',
    holder: 'PRESTIGE GLAMOUR COMPANY (PVT) LTD',
    number: '1420-13889829-001',
    details: 'Branch: Wadduwa · Code: 1420 · SWIFT: SEYBLKLX',
  },
  {
    bank: 'Seylan Bank PLC',
    type: 'savings',
    holder: 'PRESTIGE GLAMOUR COMPANY (PVT) LTD',
    number: '1420-13889829-120',
    details: 'Branch: Wadduwa · Code: 1420',
  },
  {
    bank: 'DFCC Bank',
    type: 'current',
    holder: 'Next Investments (Pvt) Ltd',
    number: '101001236707',
    details: 'Branch: Kalutara',
  },
  {
    bank: 'DFCC Bank',
    type: 'savings',
    holder: 'Next Investments (Pvt) Ltd',
    number: '102005862393',
    details: 'Branch: Kalutara',
  },
];
