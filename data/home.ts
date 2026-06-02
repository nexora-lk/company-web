import type {
  ContactRow,
  MarqueeItem,
  Stat,
  Value,
} from "@/types/content";

export const marqueeItems: MarqueeItem[] = [
  { label: "Plantation", italic: false },
  { label: "Micro-finance", italic: true },
  { label: "Gem & Jewellery", italic: false },
  { label: "Hospitality", italic: true },
  { label: "Real Estate", italic: false },
  { label: "Agri-Export", italic: true },
];

export const values: Value[] = [
  {
    no: "01",
    title: "Transparency First.",
    body: "Every investor receives quarterly audited reports. We publish what we earn, what we spend, and what we return. No exceptions.",
  },
  {
    no: "02",
    title: "Real Assets Only.",
    body: "We do not invest in speculation. Every rupee you place with us goes into land, crops, gems, or operating businesses — things you can see and visit.",
  },
  {
    no: "03",
    title: "Returns on Schedule.",
    body: "We pay on time, every time. Our 14-year track record shows consistent returns across all seven investment divisions, regardless of market conditions.",
  },
  {
    no: "04",
    title: "Investor Access.",
    body: "You can visit any operation at any time. Walk the plantations, see the gem workshops, meet the microfinance teams. Your investment is never hidden behind a desk.",
  },
  {
    no: "05",
    title: "Audited Accounts.",
    body: "Our financials are independently audited quarterly. Every investor receives the same report. Numbers are not rounded — they are exact.",
  },
  {
    no: "06",
    title: "Global Quality, Local Heart.",
    body: "We employ Sri Lankan people, grow Sri Lankan crops, and cut Sri Lankan gems — then deliver global-quality returns to investors from 30+ countries.",
  },
];

export const stats: Stat[] = [
  {
    label: "Years of operation",
    value: "14",
    em: ".",
    note: "Founded 2012",
  },
  {
    label: "Total Employees",
    value: "800",
    em: "+",
    note: "",
  },
  {
    label: "Number of branches",
    value: "23",
    em: ".",
    note: "",
  },
];

export const contactRows: ContactRow[] = [
  { label: "Head office", value: "No 61,Daluwaththa,Payagala" },
  { label: "Email", value: "info@prestigeglamourgroupofcompany.com " },
  { label: "Telephone", value: "+94 75 169 3138" + " / " + "+94 75 203 8613"}
];
