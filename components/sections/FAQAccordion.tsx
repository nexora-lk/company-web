'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-2 max-w-3xl">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-colors ${openIndex === i ? 'border-accent/30' : 'border-white/[0.08]'}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left text-white bg-dark-card hover:bg-dark-surface transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-base font-semibold pr-4">{item.question}</span>
            <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === i ? 'bg-accent border-accent text-dark rotate-0' : 'border-white/[0.08] text-accent'}`}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d={openIndex === i ? 'M4 8h8' : 'M8 4v8M4 8h8'}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-350 ${openIndex === i ? 'max-h-[300px]' : 'max-h-0'}`}>
            <div className="px-5 pb-5 bg-dark-card">
              <p className="text-[15px] leading-relaxed text-gray-400">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
