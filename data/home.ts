import type {
  Certification,
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
    aside: "— Always",
    title: ["Innovation, ", "tempered", "."],
    body: "We adopt new methods only once they survive a generation of stewardship — then we deploy them at scale across every estate.",
  },
  {
    no: "02",
    aside: "— Soil first",
    title: ["Sustainability as ", "policy", "."],
    body: "Every operation budgets a regeneration line: water tables, soil carbon, and biodiversity audited against the year before.",
  },
  {
    no: "03",
    aside: "— No exceptions",
    title: ["Quality, line by ", "line", "."],
    body: "Every export carton, every loan ticket, every set stone is graded against a global benchmark — and the benchmark is ours.",
  },
  {
    no: "04",
    aside: "— Listening loop",
    title: ["Customers, in ", "conversation", "."],
    body: "We answer the line, we visit the buyer, we walk the field. Reliability is a habit before it is a clause.",
  },
  {
    no: "05",
    aside: "— Public ledger",
    title: ["Integrity, on ", "paper", "."],
    body: "Transparency isn't a virtue we claim — it's the audited disclosures we publish four times a year.",
  },
  {
    no: "06",
    aside: "— Outward",
    title: ["Excellence, ", "global", "."],
    body: "We measure ourselves against Geneva and Tokyo, not Colombo — and we take the island with us when we travel.",
  },
];

export const stats: Stat[] = [
  {
    label: "Years of stewardship",
    value: "28",
    em: ".",
    note: "Founded 1998 · 3rd generation",
  },
  {
    label: "Smallholder partners",
    value: "28",
    em: "K",
    note: "Across 9 provinces of Sri Lanka",
  },
  {
    label: "Saplings distributed",
    value: "21",
    em: "K",
    note: "2025 reforestation programme",
  },
  {
    label: "Loan repayment rate",
    value: "96",
    em: ".4",
    note: "Across 11,200 active borrowers",
  },
];

export const certifications: Certification[] = [
  { name: "KPMG", italic: false },
  { name: "Rainforest Alliance", italic: true },
  { name: "Fairtrade SL", italic: false },
  { name: "GIA", italic: true },
  { name: "ISO 9001:2015", italic: false },
];

export const contactRows: ContactRow[] = [
  { label: "Head office", value: "62 Maitland Crescent, Colombo 07" },
  { label: "Investor desk", value: "invest@prestigeglamour.lk" },
  { label: "Trade enquiries", value: "trade@prestigeglamour.lk" },
  { label: "Telephone", value: "+94 11 207 6651" },
];
