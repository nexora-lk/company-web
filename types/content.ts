// Shared content types used by data/ modules and section components.

export type MarqueeItem = {
  label: string;
  italic: boolean;
};

export type Value = {
  no: string;
  aside: string;
  /** [before, emphasised, after] — the middle part renders as a serif em. */
  title: [string, string, string];
  body: string;
};

export type Stat = {
  label: string;
  value: string;
  em: string;
  note: string;
};

export type Certification = {
  name: string;
  italic: boolean;
};

export type ContactRow = {
  label: string;
  value: string;
};
