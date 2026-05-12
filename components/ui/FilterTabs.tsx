'use client';

import { useState, type ReactNode } from 'react';

interface FilterTabsProps {
  tabs: string[];
  children: (activeFilter: string) => ReactNode;
}

export default function FilterTabs({ tabs, children }: FilterTabsProps) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {children(active)}
    </>
  );
}
