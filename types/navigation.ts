export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  ariaLabel?: string;
};
