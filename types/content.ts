// Shared content types used by data/ modules and section components.

export type MarqueeItem = {
  label: string;
  italic: boolean;
};

export type Value = {
  no: string;
  title: string;
  body: string;
};

export type Stat = {
  label: string;
  value: string;
  em: string;
  note: string;
};

export type ContactRow = {
  label: string;
  value: string;
};
