'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import Lightbox from '@/features/gallery/Lightbox'

const IMG = {
  office1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  office2: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
  team: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
  ceremony: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
  meeting: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
  ribbon: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80',
  branchFront: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1200&q=80',
  guests: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  interior: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
  outdoor: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
}

type GalleryItem = { title: string; img: string; featured?: boolean }
type GalleryCategory = { title: string; subtitle?: string; items: GalleryItem[] }

const CATEGORIES: GalleryCategory[] = [
  {
    title: 'Head Office New Building Shift',
    subtitle: 'Corporate Milestone',
    items: [
      { title: 'Head Office', img: IMG.office1, featured: true },
      { title: 'Office Interior', img: IMG.interior },
      { title: 'Team Photo', img: IMG.team },
      { title: 'Opening Ceremony', img: IMG.ceremony },
      { title: 'Staff Meeting', img: IMG.meeting },
    ],
  },
  {
    title: 'Baduraliya Branch Opening',
    items: [
      { title: 'Baduraliya Branch', img: IMG.branchFront },
      { title: 'Ribbon Cutting', img: IMG.ribbon },
      { title: 'Ceremony', img: IMG.ceremony },
      { title: 'Guests', img: IMG.guests },
    ],
  },
  {
    title: 'Avissawella Branch Opening',
    items: [
      { title: 'Avissawella', img: IMG.branchFront },
      { title: 'Branch Front', img: IMG.outdoor },
      { title: 'Team', img: IMG.team },
      { title: 'Interior', img: IMG.interior },
    ],
  },
  {
    title: 'Ehaliyagoda Branch Opening',
    items: [
      { title: 'Ehaliyagoda 1', img: IMG.ribbon },
      { title: 'Ehaliyagoda 2', img: IMG.ceremony },
      { title: 'Ehaliyagoda 3', img: IMG.guests },
      { title: 'Ehaliyagoda 4', img: IMG.interior },
    ],
  },
  {
    title: 'Kaduwela Branch Opening',
    items: [
      { title: 'Kaduwela 1', img: IMG.branchFront },
      { title: 'Kaduwela 2', img: IMG.ribbon },
      { title: 'Kaduwela 3', img: IMG.team },
      { title: 'Kaduwela 4', img: IMG.meeting },
    ],
  },
]

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState(0)
  const active = CATEGORIES[activeCat]
  const lightboxImages = active.items.map((it) => ({ src: it.img, alt: it.title, caption: `${active.title} — ${it.title}` }))

  return (
    <>
      <HeroSection
        label="Photo Gallery"
        title="Gallery"
        subtitle="Explore our journey through photos of events, branches and plantation sites across Sri Lanka."
        size="small"
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4"
      />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Our Gallery</span>
            <h2 className="text-4xl font-bold text-white mt-4">Capturing Our Journey</h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/[0.08]">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActiveCat(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCat === i
                    ? 'bg-accent text-dark'
                    : 'border-2 border-white/15 text-gray-300 hover:border-accent hover:text-accent'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {active.subtitle && (
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">{active.subtitle}</span>
          )}
          <h3 className="text-2xl font-bold text-white mt-2 mb-8">{active.title}</h3>

          <Lightbox images={lightboxImages}>
            {(open) => (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {active.items.map((it, i) => (
                  <button
                    key={`${active.title}-${i}`}
                    type="button"
                    onClick={() => open(i)}
                    className={`group relative block overflow-hidden rounded-2xl border border-white/[0.08] hover:border-accent/40 transition-colors ${it.featured ? 'sm:col-span-2 sm:row-span-2 aspect-square' : 'aspect-[4/5]'}`}
                  >
                    <img src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                      <span className="text-sm font-semibold text-white drop-shadow">{it.title}</span>
                      <span className="w-9 h-9 rounded-full bg-dark/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </Lightbox>
        </div>
      </section>
    </>
  )
}
