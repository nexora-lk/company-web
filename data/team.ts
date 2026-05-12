export interface Director {
  initials: string;
  name: string;
  role: string;
  department: string;
  qualifications: string[];
}

export const DIRECTORS: Director[] = [
  {
    initials: 'YT',
    name: 'Mr. Y.M.D.T Yatawara',
    role: 'Chairman',
    department: 'Gem Business · Local & Foreign Affairs',
    qualifications: [
      'BSc. (Sp. Marketing Management, 2nd Lower)',
      'MBA — University of Mainz, Johannes Gutenberg',
      'SP in International Business Management & Entrepreneurship',
    ],
  },
  {
    initials: 'NA',
    name: 'Mr. Nilanga Amunugama',
    role: 'Managing Director',
    department: 'HR & Finance',
    qualifications: [
      'BCOM (Sp.) — University of Jayewardenepura',
      'Chartered Accountant',
      'NILS Labor Productivity',
      'Diploma in Information Technology',
    ],
  },
  {
    initials: 'SS',
    name: 'Mr. Samantha Suwarnasighe',
    role: 'Director',
    department: 'Executive Head of Marketing',
    qualifications: [
      'BSc. in Management',
      'Digital Marketing Postgraduate — CIM, UK',
    ],
  },
  {
    initials: 'KR',
    name: 'Mr. B.K. Kamal Rodrigo',
    role: 'Director',
    department: 'Head of Legal & Developments',
    qualifications: [
      'P.D.S. Sessions 1, 2, 3 — Limra USA',
      'Diploma in Law (External)',
      'Pharmacist',
      'Justice of the Peace (A.I)',
    ],
  },
];

export interface TeamMember {
  initials: string;
  name: string;
  title: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { initials: 'LA', name: 'L. Manisha Amaratunga', title: 'HR & Finance Head' },
  { initials: 'CF', name: 'M. Clement F Fernando', title: 'General Manager' },
  { initials: 'TS', name: 'T. Sivakumaran', title: 'Head Provincial NE' },
  { initials: 'HL', name: 'H.M.D. Leelarathna', title: 'Provincial Head NW/NC' },
  { initials: 'AT', name: 'Anusha Thudugala', title: 'Provincial Head Western' },
  { initials: 'RK', name: 'Ranjith Kumara', title: 'Provincial Head Sabaragamuwa' },
  { initials: 'KK', name: 'K.P.S. Kumara', title: 'Regional Mgr Kalutara' },
  { initials: 'DP', name: 'D.P. Rangana Perera', title: 'Regional Mgr Peliyagoda' },
  { initials: 'KS', name: 'K. Sadeskumar', title: 'Regional Mgr Kandy' },
  { initials: 'DS', name: 'D. Shahan Solomon', title: 'Regional Mgr Ampara' },
  { initials: 'MS', name: 'M.S. Samsudeen', title: 'Provincial Head' },
  { initials: 'KM', name: 'K. Madikumar', title: 'Provincial Head' },
];
