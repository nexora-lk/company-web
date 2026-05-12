'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <>
      <HeroSection label="Get Started" title="Schedule a Free Consultation" subtitle="Take the first step toward financial freedom. Our team is ready to help." size="small" align="center" backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" backgroundVideo="https://videos.pexels.com/video-files/5849610/5849610-uhd_2560_1440_25fps.mp4" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 items-start">
            <form onSubmit={handleSubmit} className="bg-dark-card border border-white/[0.08] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Book Your Consultation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name *</label>
                  <input id="c-name" type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email *</label>
                  <input id="c-email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</label>
                  <input id="c-phone" type="tel" placeholder="+1 (122) 800 88 08" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-service" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Service</label>
                  <select id="c-service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                    <option value="">Select an interest</option>
                    <option value="investment-plans">Investment Plans</option>
                    <option value="cultivation">Cultivation Plans</option>
                    <option value="microfinance">Microfinance</option>
                    <option value="plantation">Plantation Partnerships</option>
                    <option value="gem-export">Gem Export</option>
                    <option value="corporate">Corporate / Partnership</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="c-msg" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Your Goals</label>
                <textarea id="c-msg" rows={5} placeholder="What are your financial goals?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600 resize-y min-h-[120px]" />
              </div>
              <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] text-lg">Request Consultation</button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="bg-dark-card border border-white/[0.08] rounded-xl p-7">
                <h4 className="text-lg font-semibold text-white pb-4 border-b border-white/[0.08] mb-5">What to Expect</h4>
                {[
                  { n: '1', t: 'Initial Call', d: 'A 30-minute discovery call to understand your needs' },
                  { n: '2', t: 'Assessment', d: 'We review your current financial situation' },
                  { n: '3', t: 'Proposal', d: 'Receive a tailored plan and recommendations' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3.5 mb-4 last:mb-0">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-accent-bg text-accent flex items-center justify-center text-sm font-bold">{s.n}</span>
                    <div>
                      <strong className="block text-[15px] text-white mb-0.5">{s.t}</strong>
                      <p className="text-[13px] text-gray-400">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-dark-card border border-white/[0.08] rounded-xl p-7">
                <h4 className="text-lg font-semibold text-white pb-4 border-b border-white/[0.08] mb-4">Contact Info</h4>
                <div className="flex flex-col gap-3">
                  <a href="tel:0342233669" className="text-[15px] text-gray-300 hover:text-accent transition-colors">📞 034 2233669</a>
                  <a href="mailto:info@prestigeglamourgroup.com" className="text-[15px] text-gray-300 hover:text-accent transition-colors">✉️ info@prestigeglamourgroup.com</a>
                  <span className="text-[15px] text-gray-500">🕐 Mon–Fri 8:30–17:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
