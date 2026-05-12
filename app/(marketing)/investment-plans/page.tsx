'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSteps from '@/components/sections/ProcessSteps'
import CTABanner from '@/components/sections/CTABanner'

const MODELS = [
  { title: 'Agri-Land Partnership', duration: '12–18 Months', minInvestment: 'LKR 500,000', roi: '18–30%', payout: 'At harvest', desc: 'Partner with us on dedicated plantation parcels and share in the upside of professionally managed agriculture.' },
  { title: 'Capital Contribution Model', duration: '6–12 Months', minInvestment: 'LKR 200,000', roi: '15–24%', payout: 'Monthly / End of term', featured: true, desc: 'Liquid, short-duration capital contribution backed by our diversified operations and audited financials.' },
  { title: 'Agri-Real Estate', duration: '24–36 Months', minInvestment: 'LKR 1,000,000', roi: '25–45%', payout: 'Bi-annual', desc: 'Ownership-grade exposure to developed agricultural land assets with structured exit pathways.' },
  { title: 'Gem Export Investment', duration: '6 Months', minInvestment: 'LKR 300,000', roi: '20–35%', payout: 'Per transaction', desc: 'Tranche-by-tranche participation in Ceylon\'s premium gem export shipments.' },
]

const REASONS = [
  { title: 'Proven Track Record', desc: 'Over a decade of consistent returns across cycles and crop seasons.' },
  { title: 'Full Transparency', desc: 'Regular investor reports, legal agreements, and audited financial statements.' },
  { title: 'Sustainable Impact', desc: 'Every rupee supports sustainable agriculture and community livelihoods.' },
  { title: 'Dedicated Support', desc: 'A personal investment manager for every active investor — no call centres.' },
]

const STEPS = [
  { number: '01', title: 'Choose Model', description: 'Pick the investment model that matches your goals and horizon.' },
  { number: '02', title: 'Agreement', description: 'Sign a transparent legal agreement covering terms and returns.' },
  { number: '03', title: 'Fund Transfer', description: 'Transfer funds via secure banking channels — fully traceable.' },
  { number: '04', title: 'Earn Returns', description: 'Receive scheduled returns and quarterly performance reports.' },
]

export default function InvestmentPlansPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', model: '', amount: '', notes: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! Our investment team will contact you shortly.')
    setForm({ name: '', phone: '', email: '', model: '', amount: '', notes: '' })
  }

  return (
    <>
      <HeroSection
        label="Investment Opportunity"
        title="Investment Plans"
        subtitle="Structured investment models — from agri-partnerships to capital contributions — with transparent returns."
        primaryBtn={{ label: 'Invest Now', href: '#contact' }}
        secondaryBtn={{ label: 'Corporate Information', href: '/corporate-information' }}
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4"
      />

      {/* Models */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Investment Models</span>
            <h2 className="text-4xl font-bold text-white mt-4">Choose Your Investment Path</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODELS.map((m) => (
              <div
                key={m.title}
                className={`relative flex flex-col p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  m.featured
                    ? 'bg-gradient-to-br from-accent/15 to-dark-card border-accent/40 shadow-[0_16px_48px_rgba(0,208,132,0.15)]'
                    : 'bg-dark-card border-white/[0.08] hover:border-accent/30'
                }`}
              >
                {m.featured && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-accent text-dark text-[10px] font-semibold tracking-[0.2em] uppercase">★ Popular</span>
                )}
                <h3 className="text-xl font-semibold text-white leading-tight">{m.title}</h3>
                <span className="mt-2 inline-block w-fit px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent-bg">{m.duration}</span>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                <dl className="mt-5 flex flex-col gap-2.5 text-sm border-t border-white/[0.08] pt-4">
                  <div className="flex justify-between"><dt className="text-gray-500">Min Investment</dt><dd className="text-gray-300">{m.minInvestment}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">ROI</dt><dd className="text-accent font-semibold">{m.roi}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-500">Payout</dt><dd className="text-gray-300">{m.payout}</dd></div>
                </dl>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-dark font-semibold text-sm transition-all">
                  Select This Model →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Why Invest With Us</span>
            <h2 className="text-4xl font-bold text-white mt-4">Why Choose PGG?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REASONS.map((r, i) => (
              <div key={r.title} className="p-7 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 hover:-translate-y-1 transition-all">
                <span className="text-3xl font-bold text-accent/40 mb-3 block">0{i + 1}</span>
                <h4 className="text-lg font-semibold text-white mb-2.5">{r.title}</h4>
                <p className="text-[15px] text-gray-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">How It Works</span>
            <h2 className="text-4xl font-bold text-white mt-4">Your Investment Journey</h2>
          </div>
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* Form */}
      <section id="contact" className="py-24 bg-dark-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Invest Now</span>
            <h2 className="text-4xl font-bold text-white mt-4">Submit Your Investment Inquiry</h2>
          </div>
          <form onSubmit={submit} className="bg-dark-card border border-white/[0.08] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-8">Investment Inquiry</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ip-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name *</label>
                <input id="ip-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ip-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone *</label>
                <input id="ip-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="034 2233669" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label htmlFor="ip-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
              <input id="ip-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="you@example.com" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ip-model" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Investment Model</label>
                <select id="ip-model" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="">Select a model</option>
                  <option value="agri-land">Agri-Land Partnership</option>
                  <option value="capital">Capital Contribution</option>
                  <option value="agri-real-estate">Agri-Real Estate</option>
                  <option value="gem">Gem Export Investment</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ip-amount" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Investment Amount (LKR)</label>
                <input id="ip-amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="e.g. 500,000" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-6">
              <label htmlFor="ip-notes" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Additional Notes</label>
              <textarea id="ip-notes" rows={5} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600 resize-y min-h-[120px]" />
            </div>
            <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] text-lg">Submit Investment Inquiry →</button>
          </form>
        </div>
      </section>

      <CTABanner title="Ready to Start Investing?" subtitle="Connect with our investment team to begin." primaryBtn={{ label: 'Contact Our Team', href: '/contact-us' }} secondaryBtn={{ label: 'Corporate Info', href: '/corporate-information' }} />
    </>
  )
}
