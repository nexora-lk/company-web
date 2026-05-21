import type { NavLink, FooterColumn } from "@/types/navigation";

export const brand = {
  name: "Prestige Glamour Group of Company",
  tagline: "Group · Est. 2012",
  monogram: "P",
} as const;

/** Primary navbar links. Anchors are home-relative so they resolve from any route. */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Plantation", href: "/services/plantation" },
      { label: "Micro Finance", href: "/services/microfinance" },
      { label: "Gem & Jewelry", href: "/services/gems" },
      { label: "FMCG", href: "/services/fmcg" },
      { label: "NGO Projects", href: "/services/ngo" },
      { label: "Real Estate", href: "/services/real-estate" },
    ]
  },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Investment Plans", href: "/investment" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Portfolio",
    links: [
      { label: "Plantation", href: "/services/plantation" },
      { label: "Micro Finance", href: "/services/microfinance" },
      { label: "Gem & Jewelry", href: "/services/gems" },
      { label: "FMCG", href: "/services/fmcg" },
      { label: "NGO Projects", href: "/services/ngo" },
      { label: "Real Estate", href: "/services/real-estate" },
    ],
  },
  {
    title: "Group",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/corporate" },
      { label: "Careers", href: "/corporate" },
      { label: "Press room", href: "/events" },
      { label: "Investor relations", href: "/investment" },
    ],
  },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Modern Slavery Statement", href: "#" },
];
