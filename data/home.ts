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

export const certifications: Certification[] = [
  { name: "KPMG", italic: false },
  { name: "Rainforest Alliance", italic: true },
  { name: "Fairtrade SL", italic: false },
  { name: "GIA", italic: true },
  { name: "ISO 9001:2015", italic: false },
];

export const contactRows: ContactRow[] = [
  { label: "Head office", value: "No 61,Daluwaththa,Payagala" },
  { label: "Email", value: "info@prestigeglamourgroupofcompany.com " },
  { label: "Telephone", value: "+94 75 169 3138" + " / " + "+94 75 203 8613"}
];
