'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'

const offices = [
  { name: 'Head Office — Maggona', address: 'Nawaloka Medical Centre Area, Maggona, Kalutara', phone: '034 2233669' },
  { name: 'Kalutara Regional', address: 'Kalutara District Office', phone: '075 2038613' },
  { name: 'Peliyagoda Regional', address: 'Peliyagoda Office', phone: '075 1693138' },
  { name: 'Kandy Regional', address: 'Kandy District Office', phone: '034 2233669' },
  { name: 'Ampara Regional', address: 'Ampara District Office', phone: '034 2233669' },
  { name: 'Baduraliya Branch', address: 'Baduraliya, Kalutara', phone: '034 2233669' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <HeroSection label="Contact" title="Get in Touch" subtitle="We'd love to hear from you. Reach out to schedule a consultation or ask any questions." size="small" align="center" backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" backgroundVideo="https://videos.pexels.com/video-files/4825819/4825819-uhd_2560_1440_30fps.mp4" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12">
            {/* Form */}
            <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                    <input id="contact-name" type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                    <input id="contact-email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone Number</label>
                  <input id="contact-phone" type="tel" placeholder="+1 (122) 800 88 08" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea id="contact-message" placeholder="Tell us about your financial goals..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="px-4 py-3.5 bg-dark border border-white/[0.08] rounded-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-600 resize-y min-h-[120px]" />
                </div>
                <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] text-lg">Send Message</button>
              </form>
            </div>

            {/* Info */}
            <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 h-fit">
              <h4 className="text-lg font-semibold text-white pb-4 border-b border-white/[0.08] mb-5">Contact Information</h4>
              <div className="flex flex-col gap-4">
                {[
                  { l: 'Address', v: 'Maggona, Nawaloka Medical Centre Area, Kalutara, Sri Lanka' },
                  { l: 'Email', v: 'info@prestigeglamourgroup.com', h: 'mailto:info@prestigeglamourgroup.com' },
                  { l: 'Phone', v: '034 2233669', h: 'tel:0342233669' },
                  { l: 'Hours', v: 'Mon–Fri 8:30–17:30 · Sat 8:30–13:00' },
                ].map((item, i) => (
                  <div key={i}>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-1">{item.l}</span>
                    {item.h ? <a href={item.h} target={item.l === 'Address' ? '_blank' : undefined} rel="noopener noreferrer" className="text-[15px] text-gray-300 hover:text-accent transition-colors">{item.v}</a> : <span className="text-[15px] text-gray-300">{item.v}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <div key={i} className="p-6 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 transition-all">
                <h4 className="text-lg font-semibold text-white mb-2">{office.name}</h4>
                <p className="text-sm text-gray-400 mb-3">{office.address}</p>
                <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-accent hover:underline">{office.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
