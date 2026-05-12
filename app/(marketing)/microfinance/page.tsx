'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSteps from '@/components/sections/ProcessSteps'
import CTABanner from '@/components/sections/CTABanner'

const PRODUCTS = [
  { title: 'Agri Micro Loan', desc: 'Tailored financing for small-scale farmers across all 25 districts.', features: ['Up to LKR 500,000', 'Flexible repayment', 'No collateral < 100K', 'Agri insurance included'] },
  { title: 'SME Business Loan', featured: true, desc: 'Working capital for small and medium enterprises ready to scale.', features: ['Up to LKR 2,000,000', 'Competitive rates', '48-hour approval', 'Mentorship support'] },
  { title: 'Housing Micro Loan', desc: 'Affordable housing finance for rural and semi-urban families.', features: ['Up to LKR 1,000,000', 'Up to 36 months', 'Low interest', 'Property insurance'] },
]

const STATS = [
  { value: '5,000+', label: 'SMEs Supported' },
  { value: '25+', label: 'Branches' },
  { value: '10,000+', label: 'Active Borrowers' },
]

const STEPS = [
  { number: '01', title: 'Apply', description: 'Submit at any of our 25 branches — minimal documents required.' },
  { number: '02', title: 'Get Approved', description: 'Decisions in under 48 hours from a dedicated loan officer.' },
  { number: '03', title: 'Receive Funds', description: 'Funds disbursed directly to your bank account.' },
]

export default function MicrofinancePage() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! A loan officer will reach out within 48 hours.')
    setForm({ name: '', phone: '', product: '', message: '' })
  }

  return (
    <>
      <HeroSection
        label="Micro Finance"
        title="Microfinance Solutions"
        subtitle="Empowering rural entrepreneurs with accessible, ethical financial products since 2013."
        primaryBtn={{ label: 'Apply Now', href: '#inquiry' }}
        secondaryBtn={{ label: 'Investment Plans', href: '/investment-plans' }}
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/4624269/4624269-uhd_2560_1440_30fps.mp4"
      />

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-dark-card/90 backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 text-center hover:border-accent/30 transition-all">
                <span className="block text-3xl font-bold text-white mb-1">{s.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Our Products</span>
            <h2 className="text-4xl font-bold text-white mt-4">Micro Finance Products</h2>
            <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">Designed for Sri Lanka&apos;s rural and semi-urban economy.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 ${
                  p.featured
                    ? 'bg-gradient-to-br from-accent/15 to-dark-card border-accent/40 shadow-[0_16px_48px_rgba(0,208,132,0.15)] lg:-translate-y-3'
                    : 'bg-dark-card border-white/[0.08] hover:border-accent/30'
                }`}
              >
                {p.featured && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-accent text-dark text-[10px] font-semibold tracking-[0.2em] uppercase">★ Popular</span>
                )}
                <div className={`p-8 ${p.featured ? '' : 'border-b border-white/[0.06]'}`}>
                  <h3 className="text-2xl font-bold text-white leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="flex flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[15px] text-gray-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent shrink-0"><polyline points="20,6 9,17 4,12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#inquiry" className="mt-auto pt-8">
                    <span className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-dark font-semibold transition-all">
                      Apply Now →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">How It Works</span>
            <h2 className="text-4xl font-bold text-white mt-4">Simple Application Process</h2>
          </div>
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Apply Now</span>
            <h2 className="text-4xl font-bold text-white mt-4">Interested in Micro Finance?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-start">
            <form onSubmit={submit} className="bg-dark-card border border-white/[0.08] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Microfinance Application</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mf-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name *</label>
                  <input id="mf-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mf-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone *</label>
                  <input id="mf-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="034 2233669" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-5">
                <label htmlFor="mf-product" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Product</label>
                <select id="mf-product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="">Select a product</option>
                  <option value="agri">Agri Micro Loan</option>
                  <option value="sme">SME Business Loan</option>
                  <option value="housing">Housing Micro Loan</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="mf-msg" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                <textarea id="mf-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600 resize-y min-h-[120px]" />
              </div>
              <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] text-lg">Apply Now →</button>
            </form>

            <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white pb-4 border-b border-white/[0.08] mb-5">Financial Empowerment Made Simple</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">Whether you&apos;re a farmer, SME owner, or family building a home — our team is ready to support your journey.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:0342233669" className="text-[15px] text-gray-300 hover:text-accent transition-colors">📞 034 2233669</a>
                <a href="mailto:info@prestigeglamourgroup.com" className="text-[15px] text-gray-300 hover:text-accent transition-colors">✉️ info@prestigeglamourgroup.com</a>
                <span className="text-[15px] text-gray-500">📍 25+ Branches across Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Grow Your Business with Next Investments" primaryBtn={{ label: 'Apply Now', href: '#inquiry' }} secondaryBtn={{ label: 'Contact Us', href: '/contact-us' }} />
    </>
  )
}
