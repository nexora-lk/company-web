import type { NavLink, FooterColumn } from "@/types/navigation";

export const brand = {
  name: "PGGC",
  tagline: "Group · Est. 2013",
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
      { label: "Gems", href: "/services/gems" },
      { label: "FMCG", href: "/services/fmcg" },
      { label: "NGO Projects", href: "/services/ngo" },
      { label: "Real Estate", href: "/services/real-estate" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Investment Plans", href: "/investment" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Plantation", href: "/services/plantation" },
      { label: "Micro Finance", href: "/services/microfinance" },
      { label: "Gems", href: "/services/gems" },
      { label: "FMCG", href: "/services/fmcg" },
      { label: "NGO Projects", href: "/services/ngo" },
      { label: "Real Estate", href: "/services/real-estate" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      // { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/about/careers" },
      { label: "Investment Plans", href: "/investment" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/prestigeglamourgroup" },
      { label: "Instagram", href: "https://www.instagram.com/prestigeglamourgroup" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/prestigeglamourgroup" },
      { label: "WhatsApp", href: "https://wa.me/message/VEY2QR5CQY6OJ1" },
    ],
  },
];