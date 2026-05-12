export interface GalleryItem {
  title: string;
  category?: string;
  featured?: boolean;
}

export interface GalleryCategory {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    title: 'Head Office New Building Shift',
    subtitle: 'Corporate Milestone',
    items: [
      { title: 'Head Office', category: 'Head Office', featured: true },
      { title: 'Office Interior' },
      { title: 'Team Photo' },
      { title: 'Opening Ceremony' },
      { title: 'Staff Meeting' },
    ],
  },
  {
    title: 'Baduraliya Branch Opening',
    items: [
      { title: 'Baduraliya Branch' },
      { title: 'Ribbon Cutting' },
      { title: 'Ceremony' },
      { title: 'Guests' },
    ],
  },
  {
    title: 'Avissawella Branch Opening',
    items: [
      { title: 'Avissawella' },
      { title: 'Branch Front' },
      { title: 'Team' },
      { title: 'Interior' },
    ],
  },
  {
    title: 'Ehaliyagoda Branch Opening',
    items: [
      { title: 'Ehaliyagoda 1' },
      { title: 'Ehaliyagoda 2' },
      { title: 'Ehaliyagoda 3' },
      { title: 'Ehaliyagoda 4' },
    ],
  },
  {
    title: 'Kaduwela Branch Opening',
    items: [
      { title: 'Kaduwela 1' },
      { title: 'Kaduwela 2' },
      { title: 'Kaduwela 3' },
      { title: 'Kaduwela 4' },
    ],
  },
];
