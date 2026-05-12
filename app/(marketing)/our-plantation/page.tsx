'use client'

import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'

const LOCATIONS = [
  { location: 'Puttalam', crop: 'Watermelon', acres: 35 },
  { location: 'Redebedi Ealla', crop: 'Cassava', acres: 13 },
  { location: 'Hambantota', crop: 'Ginger', acres: 23 },
  { location: 'Mihintale', crop: 'TJC Mango', acres: 34 },
  { location: 'Kandy Haragama', crop: 'Passion Fruits', acres: 17 },
  { location: 'Madrankkuliya', crop: 'Pomegranate', acres: 15 },
]

const EXPANSION = [
  { name: 'Radalegoda Plantation', acres: 32, year: 2026 },
  { name: 'Hambantota Ranna Plantation', acres: 102, year: 2026, highlight: true },
  { name: 'Wathregama Plantation', acres: 18, year: 2026 },
  { name: 'Berwala Plantation', acres: 15, year: 2026 },
  { name: 'Horana Kethbima Plantation', acres: 23, year: 2026 },
]

const STATS = [
  { value: '137+', label: 'Active Acres' },
  { value: '6', label: 'Plantation Sites' },
  { value: '15+', label: 'Crop Varieties' },
  { value: '200+', label: 'Farmers Employed' },
]

export default function OurPlantationPage() {
  return (
    <>
      <HeroSection
        label="Plantation Network"
        title="Our Plantation"
        subtitle="137+ acres of professionally managed agricultural land across Sri Lanka."
        primaryBtn={{ label: 'View Investment Plans', href: '/investment-plans' }}
        secondaryBtn={{ label: 'Cultivation Plans', href: '/cultivation-plans' }}
        backgroundImage="https://images.unsplash.com/photo-1760533852055-724d3a50dcbd?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/2784371/2784371-uhd_2560_1440_24fps.mp4"
      />

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-dark-card/90 backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 text-center hover:border-accent/30 transition-all">
                <span className="block text-3xl font-bold text-white mb-1">{s.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Plantations */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Active Plantations</span>
            <h2 className="text-4xl font-bold text-white mt-4">Current Plantation Locations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((p) => (
              <div key={p.location} className="group p-7 bg-dark-card border border-white/[0.08] rounded-2xl hover:border-accent/30 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-bg text-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="text-3xl font-bold text-accent">{p.acres}<span className="text-base text-gray-500"> ac</span></div>
                </div>
                <h3 className="text-xl font-semibold text-white">{p.location}</h3>
                <span className="mt-2 inline-block text-sm text-gray-400">🌱 {p.crop}</span>
              </div>
            ))}
            <div className="relative p-7 rounded-2xl bg-gradient-to-br from-accent/15 to-dark-card border border-accent/30 flex flex-col justify-center overflow-hidden">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Total Active</span>
              <span className="text-5xl font-bold text-white mt-2">137+ Acres</span>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Across 6 locations spanning Sri Lanka&apos;s most productive provinces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Expansion Pipeline</span>
            <h2 className="text-4xl font-bold text-white mt-4">Upcoming Plantation Projects</h2>
            <p className="text-lg text-gray-400 mt-3 max-w-2xl">Strategic expansion plans for 2026 and beyond.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPANSION.map((e) => (
              <div
                key={e.name}
                className={`p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  e.highlight
                    ? 'bg-gradient-to-br from-accent/15 to-dark-card border-accent/40 shadow-[0_16px_48px_rgba(0,208,132,0.15)]'
                    : 'bg-dark-card border-white/[0.08] hover:border-accent/30'
                }`}
              >
                {e.highlight && (
                  <span className="inline-block px-2.5 py-1 rounded-full bg-accent text-dark text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">Flagship</span>
                )}
                <h3 className="text-xl font-semibold text-white leading-tight">{e.name}</h3>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">Acres</span>
                    <div className="text-3xl font-bold text-accent">{e.acres}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-400">Planned {e.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Invest in Our Plantations" primaryBtn={{ label: 'View Investment Plans', href: '/investment-plans' }} secondaryBtn={{ label: 'Cultivation Plans', href: '/cultivation-plans' }} />
    </>
  )
}
