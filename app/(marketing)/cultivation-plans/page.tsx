'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSteps from '@/components/sections/ProcessSteps'

const PLANS = [
  {
    duration: '6 Months',
    title: 'Short-Term Plan',
    crops: ['Ginger', 'Watermelon', 'Sweet Melon', 'Corn & Sweet Corn'],
    features: ['Full crop management', 'ROI 18–24%', 'Monthly progress reports'],
  },
  {
    duration: '12 Months',
    title: 'Annual Plan',
    featured: true,
    crops: ['Banana (Ambul, Kolikuttu)', 'Pineapple', 'Passion Fruits', 'Pomegranate'],
    features: ['Dedicated land allocation', 'ROI 25–35%', 'Insurance included', 'Priority support'],
  },
  {
    duration: '18 Months',
    title: 'Long-Term Plan',
    crops: ['TJC & Karthakolomban Mango', 'Cassava', 'King Coconut', 'Jackfruit'],
    features: ['Premium parcels', 'ROI 30–45%', 'Full cycle management', 'Export-grade processing'],
  },
]

const CROPS = [
  'Watermelon', 'Sweet Melon', 'Corn', 'Sweet Corn', 'Sugar Muskmelon',
  'Aloe Vera', 'Ginger', 'Cassava', 'Pineapple', 'Banana',
  'Tom & EJC Mango', 'Karthakolomban', 'Pomegranate', 'Jackfruit', 'King Coconut',
]

const STEPS = [
  { number: '01', title: 'Plan Selection', description: 'Choose your cultivation horizon and crop mix.' },
  { number: '02', title: 'Land Allocation', description: 'We allocate verified, surveyed parcels with documented title.' },
  { number: '03', title: 'Cultivation & Growth', description: 'Our agronomy team manages every stage from sowing to harvest.' },
  { number: '04', title: 'Harvest & Returns', description: 'Yields are processed, sold, and returns transferred per agreement.' },
]

export default function CultivationPlansPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', plan: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! Our agronomy team will reach out shortly.')
    setForm({ name: '', phone: '', email: '', plan: '', message: '' })
  }

  return (
    <>
      <HeroSection
        label="Sustainable Agriculture"
        title="Cultivation Plans"
        subtitle="Structured cultivation plans across short, annual and long-term horizons — professionally managed with profit sharing."
        primaryBtn={{ label: 'Start an Inquiry', href: '#inquiry' }}
        secondaryBtn={{ label: 'Our Plantation', href: '/our-plantation' }}
        backgroundImage="https://images.unsplash.com/photo-1769408464828-89aef81cfc8c?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/2784371/2784371-uhd_2560_1440_24fps.mp4"
      />

      {/* Plans */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Our Plans</span>
            <h2 className="text-4xl font-bold text-white mt-4">Choose Your Cultivation Plan</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <div
                key={p.title}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                  p.featured
                    ? 'bg-gradient-to-br from-accent/10 to-dark-card border-accent/40 shadow-[0_16px_48px_rgba(0,208,132,0.15)] lg:-translate-y-3'
                    : 'bg-dark-card border-white/[0.08] hover:border-accent/30'
                }`}
              >
                {p.featured && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-accent text-dark text-[10px] font-semibold tracking-[0.2em] uppercase">★ Popular</span>
                )}
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">{p.duration}</span>
                <h3 className="text-3xl font-bold text-white mt-2 leading-tight">{p.title}</h3>

                <div className="mt-7">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Crops</span>
                  <ul className="mt-3 flex flex-col gap-2">
                    {p.crops.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[15px] text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-6 h-px bg-white/[0.08]" />

                <ul className="flex flex-col gap-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[14px] text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent shrink-0"><polyline points="20,6 9,17 4,12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#inquiry" className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-dark font-semibold transition-all">
                  Select This Plan →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crops */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Crop Portfolio</span>
            <h2 className="text-4xl font-bold text-white mt-4">Crops We Cultivate</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {CROPS.map((c) => (
              <div key={c} className="p-5 bg-dark-card border border-white/[0.08] rounded-xl text-center hover:border-accent/30 hover:-translate-y-1 transition-all">
                <span className="text-sm text-gray-300">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">How It Works</span>
            <h2 className="text-4xl font-bold text-white mt-4">Cultivation Process</h2>
          </div>
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Get Started</span>
            <h2 className="text-4xl font-bold text-white mt-4">Interested in a Cultivation Plan?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-start">
            <form onSubmit={submit} className="bg-dark-card border border-white/[0.08] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Cultivation Plan Inquiry</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cp-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name *</label>
                  <input id="cp-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cp-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone *</label>
                  <input id="cp-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="034 2233669" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-5">
                <label htmlFor="cp-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
                <input id="cp-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-1.5 mb-5">
                <label htmlFor="cp-plan" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Preferred Plan</label>
                <select id="cp-plan" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="">Select a plan</option>
                  <option value="short">Short-Term</option>
                  <option value="annual">Annual</option>
                  <option value="long">Long-Term</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="cp-msg" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                <textarea id="cp-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600 resize-y min-h-[120px]" placeholder="Tell us about your goals…" />
              </div>
              <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] text-lg">Submit Inquiry</button>
            </form>

            <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white pb-4 border-b border-white/[0.08] mb-5">Start Your Cultivation Journey</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">Our agronomists will walk you through plan structure, land options, projected returns and all legal documentation.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:0342233669" className="text-[15px] text-gray-300 hover:text-accent transition-colors">📞 034 2233669</a>
                <a href="mailto:info@prestigeglamourgroup.com" className="text-[15px] text-gray-300 hover:text-accent transition-colors">✉️ info@prestigeglamourgroup.com</a>
                <span className="text-[15px] text-gray-500">📍 Maggona, Kalutara</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
