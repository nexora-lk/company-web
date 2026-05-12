'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'

const EVENTS = [
  { date: 'Mar 12, 2026', title: 'Ginger Cultivation Launch — Hambantota', location: 'Hambantota, Southern Province', tags: ['Plantation', 'Launch'], desc: 'Inauguration of the 23-acre ginger cultivation project supporting local farmers and export-grade processing.', img: 'https://images.unsplash.com/photo-1687804990570-4b77a3dbdfe3?w=1200&q=80' },
  { date: 'Feb 28, 2026', title: 'Microfinance Branch Opening — Kaduwela', location: 'Kaduwela, Western Province', tags: ['Finance', 'Opening'], desc: 'Our 25th branch opens to serve SMEs and farmers across the greater Colombo region.', img: 'https://images.unsplash.com/photo-1740812517506-0deafbf82f03?w=1200&q=80' },
  { date: 'Feb 15, 2026', title: 'Annual Gem Fair Participation — Dubai', location: 'Dubai World Trade Centre', tags: ['Gems', 'Exhibition'], desc: 'Ceylon\'s finest sapphires and rubies showcased to international buyers and luxury jewelers.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80' },
  { date: 'Jan 20, 2026', title: 'FMCG Product Launch — PGG Fresh Foods', location: 'Colombo, Sri Lanka', tags: ['FMCG', 'Launch'], desc: 'Debut of our farm-fresh consumer line, bringing plantation produce directly to retail shelves.', img: 'https://images.unsplash.com/photo-1760533852055-724d3a50dcbd?w=1200&q=80' },
  { date: 'Dec 5, 2025', title: 'Community Development Workshop', location: 'Puttalam, North Western', tags: ['NGO', 'Community'], desc: 'Farmer training and livelihood support for 200+ families in our Puttalam watermelon network.', img: 'https://images.unsplash.com/photo-1769408464828-89aef81cfc8c?w=1200&q=80' },
  { date: 'Nov 10, 2025', title: 'Real Estate Investor Meetup', location: 'Kandy, Central', tags: ['Real Estate', 'Investor'], desc: 'Closed-door briefing on our 200-acre agri-real-estate pipeline and structured returns.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80' },
]

const FILTERS = ['All', 'Launch', 'Opening', 'Community', 'Exhibition', 'Investor']

const BANK_ACCOUNTS = [
  { bank: 'Seylan Bank PLC', type: 'Current', holder: 'PRESTIGE GLAMOUR COMPANY (PVT) LTD', number: '1420-13889829-001', branch: 'Wadduwa · Code 1420 · SWIFT SEYBLKLX' },
  { bank: 'Seylan Bank PLC', type: 'Savings', holder: 'PRESTIGE GLAMOUR COMPANY (PVT) LTD', number: '1420-13889829-120', branch: 'Wadduwa · Code 1420' },
  { bank: 'DFCC Bank', type: 'Current', holder: 'Next Investments (Pvt) Ltd', number: '101001236707', branch: 'Kalutara' },
  { bank: 'DFCC Bank', type: 'Savings', holder: 'Next Investments (Pvt) Ltd', number: '102005862393', branch: 'Kalutara' },
]

export default function EventsPage() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return EVENTS
    return EVENTS.filter((e) => e.tags.some((t) => t.toLowerCase().includes(active.toLowerCase())))
  }, [active])

  return (
    <>
      <HeroSection
        label="Events & News"
        title="Events"
        subtitle="Stay updated with our latest launches, branch openings, exhibitions and community programs."
        size="small"
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4"
      />

      {/* Filter */}
      <section className="sticky top-0 z-30 bg-dark/95 backdrop-blur-md border-b border-white/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                active === f
                  ? 'bg-accent text-dark'
                  : 'border-2 border-white/15 text-gray-300 hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Upcoming & Recent</span>
            <h2 className="text-4xl font-bold text-white mt-4">Upcoming & Recent Events</h2>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">No events in this category yet.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((e) => (
                <article key={e.title} className="group flex flex-col bg-dark-card border border-white/[0.08] rounded-2xl overflow-hidden hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-dark/85 backdrop-blur-sm text-xs font-semibold text-accent">
                      {e.date}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-accent transition-colors">{e.title}</h3>
                    <span className="mt-2 text-xs text-gray-500">📍 {e.location}</span>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">{e.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-accent-bg text-accent">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Foundation */}
      <section className="py-20 bg-dark-alt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 via-dark-card to-dark-card border border-accent/20 p-10 lg:p-14">
            <div className="grid md:grid-cols-3 gap-6 items-center relative">
              <div className="md:col-span-2">
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Foundation</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mt-4 leading-tight">Ceylon Charity Foundation</h3>
                <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
                  Our charitable foundation supports education, healthcare and livelihood programs across Sri Lanka — funded by a portion of every profit cycle.
                </p>
              </div>
              <Link href="/investment-plans" className="px-7 py-3.5 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full text-center transition-all">
                Support Our Cause →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Payment Info</span>
            <h2 className="text-4xl font-bold text-white mt-4">Bank Account Details</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BANK_ACCOUNTS.map((b) => (
              <div key={b.number} className="p-6 bg-dark-card border border-white/[0.08] rounded-2xl hover:border-accent/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-accent">{b.bank}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-white/[0.06] px-2 py-1 rounded-full">{b.type}</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">{b.holder}</p>
                <p className="font-mono text-base text-white mt-4 break-all">{b.number}</p>
                <p className="text-[11px] text-gray-500 mt-1">{b.branch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join Our Next Event" subtitle="Subscribe to receive updates about upcoming launches, openings and community programs." primaryBtn={{ label: 'Contact Us', href: '/contact-us' }} />
    </>
  )
}
