export interface PlantationLocation {
  name: string;
  crop: string;
  acres: string;
}

export const PLANTATION_LOCATIONS: PlantationLocation[] = [
  { name: 'Puttalam', crop: 'Watermelon', acres: '35 Acres' },
  { name: 'Redebedi Ealla', crop: 'Cassava', acres: '13 Acres' },
  { name: 'Hambantota', crop: 'Ginger', acres: '23 Acres' },
  { name: 'Mihintale', crop: 'TJC Mango', acres: '34 Acres' },
  { name: 'Kandy Haragama', crop: 'Passion Fruits', acres: '17 Acres' },
  { name: 'Madrankkuliya', crop: 'Pomegranate', acres: '15 Acres' },
];

export interface ExpansionPlan {
  name: string;
  acres: string;
  year: string;
  highlighted?: boolean;
}

export const EXPANSION_PLANS: ExpansionPlan[] = [
  { name: 'Radalegoda Plantation', acres: '32 Acres', year: 'Planned 2026' },
  { name: 'Hambantota Ranna Plantation', acres: '102 Acres', year: 'Planned 2026', highlighted: true },
  { name: 'Wathregama Plantation', acres: '18 Acres', year: 'Planned 2026' },
  { name: 'Berwala Plantation', acres: '15 Acres', year: 'Planned 2026' },
  { name: 'Horana Kethbima Plantation', acres: '23 Acres', year: 'Planned 2026' },
];

export interface Crop {
  icon: string;
  name: string;
}

export const CROPS: Crop[] = [
  { icon: '🍉', name: 'Watermelon' },
  { icon: '🍈', name: 'Sweet Melon' },
  { icon: '🌽', name: 'Corn' },
  { icon: '🌽', name: 'Sweet Corn' },
  { icon: '🍈', name: 'Sugar Muskmelon' },
  { icon: '🌿', name: 'Aloe Vera' },
  { icon: '🫚', name: 'Ginger' },
  { icon: '🥔', name: 'Cassava' },
  { icon: '🍍', name: 'Pineapple' },
  { icon: '🍌', name: 'Banana' },
  { icon: '🥭', name: 'Tom & EJC Mango' },
  { icon: '🥭', name: 'Karthakolomban' },
  { icon: '🍈', name: 'Pomegranate' },
  { icon: '🍊', name: 'Jackfruit' },
  { icon: '🥥', name: 'King Coconut' },
];
