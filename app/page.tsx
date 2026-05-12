'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTABanner from '@/components/sections/CTABanner'
import FAQAccordion from '@/components/sections/FAQAccordion'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '13+', label: 'Years of Operation' },
  { value: '137+', label: 'Active Acres' },
  { value: '25+', label: 'Microfinance Branches' },
  { value: '5,000+', label: 'SMEs Supported' },
]

const sectors = [
  { title: 'Our Plantation', desc: '137+ acres of professionally managed land across Sri Lanka.', image: 'https://images.unsplash.com/photo-1760533852055-724d3a50dcbd?w=1200&q=80', href: '/our-plantation' },
  { title: 'Cultivation Plans', desc: 'Short, annual and long-term cultivation horizons with profit sharing.', image: 'https://images.unsplash.com/photo-1769408464828-89aef81cfc8c?w=1200&q=80', href: '/cultivation-plans' },
  { title: 'Investment Plans', desc: 'Agri-partnerships, capital contributions and gem export tranches.', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80', href: '/investment-plans' },
  { title: 'Microfinance', desc: 'Ethical loans for farmers, SMEs and rural families since 2013.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80', href: '/microfinance' },
]

const groupLinks = [
  { title: 'Corporate Information', desc: 'Legal, governance, compliance and board of directors.', href: '/corporate-information', metric: 'PV 118342' },
  { title: 'Events', desc: 'Launches, branch openings, exhibitions and community programs.', href: '/events', metric: 'Latest Updates' },
  { title: 'Gallery', desc: 'Photos of events, branches and plantation sites.', href: '/gallery', metric: '5 Categories' },
  { title: 'Microfinance', desc: 'Agri, SME and housing micro-loans across 25+ branches.', href: '/microfinance', metric: '5,000+ SMEs' },
]

const faqItems = [
  { question: 'What does Prestige Glamour Group do?', answer: 'PGG is a diversified Sri Lankan group with operations across plantation, cultivation, microfinance, gem export, FMCG, and NGO activities — established in 2013.' },
  { question: 'How do I invest with PGG?', answer: 'We offer four structured investment models: Agri-Land Partnership, Capital Contribution, Agri-Real Estate, and Gem Export. Visit the Investment Plans page or contact our team.' },
  { question: 'Where are your plantations located?', answer: 'We currently manage 137+ active acres across Puttalam, Hambantota, Mihintale, Kandy Haragama, Madrankkuliya and Redebedi Ealla, with 5 new sites planned for 2026.' },
  { question: 'Is PGG regulated?', answer: 'Yes. We operate under the Companies Act No. 07 of 2007, are BOI registered, hold export licenses from the National Gem & Jewellery Authority, and our microfinance arm (Next Investments) is licensed.' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const sectorsRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(heroRef.current.querySelector('.hero-tag'), { y: 20, opacity: 0, duration: 0.5, delay: 0.3 })
          .from(heroRef.current.querySelector('.hero-h1'), { y: 50, opacity: 0, duration: 0.8 }, '-=0.2')
          .from(heroRef.current.querySelector('.hero-sub'), { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
          .from(heroRef.current.querySelector('.hero-btns'), { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
      }
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll('.stat-card'), { y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } })
      }
      if (aboutRef.current) {
        gsap.from(aboutRef.current.querySelector('.about-img'), { x: -80, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' } })
        gsap.from(aboutRef.current.querySelector('.about-text'), { x: 80, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' } })
      }
      if (sectorsRef.current) {
        gsap.from(sectorsRef.current.querySelectorAll('.sector-card'), { y: 60, opacity: 0, scale: 0.95, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectorsRef.current, start: 'top 80%' } })
      }
      if (groupRef.current) {
        gsap.from(groupRef.current.querySelectorAll('.svc-card'), { y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: groupRef.current, start: 'top 80%' } })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="https://images.unsplash.com/photo-1760533852055-724d3a50dcbd?w=1920&q=80">
          <source src="https://videos.pexels.com/video-files/2784371/2784371-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50 z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[1]" />
        <div className="relative z-[2] max-w-7xl mx-auto px-6 py-40 w-full">
          <div className="max-w-2xl">
            <span className="hero-tag inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/80 mb-6">Est. 2013 · Sri Lanka</span>
            <h1 className="hero-h1 text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Cultivating Land.<br />Empowering Lives.
            </h1>
            <p className="hero-sub text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
              Prestige Glamour Group — a diversified Sri Lankan conglomerate spanning plantation, cultivation, microfinance, gem export and FMCG.
            </p>
            <div className="hero-btns flex gap-4 flex-wrap">
              <Link href="/investment-plans" className="px-8 py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] hover:-translate-y-1 text-lg">Invest With Us</Link>
              <Link href="/corporate-information" className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-lg">Corporate Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="stat-card bg-dark-card/90 backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 text-center hover:border-accent/30 transition-all">
                <span className="block text-3xl font-bold text-white mb-1">{s.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section ref={aboutRef} className="py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-img relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/[0.06]">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" alt="PGG leadership" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div>
          <div className="about-text">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full mb-5">Who We Are</span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">A Diversified Sri Lankan Conglomerate Since 2013</h2>
            <p className="text-gray-400 leading-relaxed mb-4">Prestige Glamour Company (Pvt) Ltd is a Sri Lankan group with operations spanning plantation, cultivation, microfinance, gem export, FMCG and community development. Registered in 2013 (PV 118342), we have grown from a single agricultural venture into a multi-arm conglomerate trusted by farmers, investors and partners alike.</p>
            <p className="text-gray-400 leading-relaxed mb-6">Headquartered in Maggona, Kalutara, with 25+ microfinance branches and 137+ acres under active cultivation, our board brings decades of experience across finance, marketing, law and entrepreneurship.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/corporate-information" className="px-6 py-3 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all">Corporate Information</Link>
              <Link href="/our-plantation" className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all">Our Plantation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-28 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Our Portfolio</span>
            <h2 className="text-4xl font-bold text-white mt-4">Investment Sectors</h2>
            <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">Diversified exposure across the productive economy of Sri Lanka, managed with institutional discipline.</p>
          </div>
          <div ref={sectorsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((s, i) => (
              <Link key={i} href={s.href} className="sector-card group relative rounded-2xl overflow-hidden aspect-[16/9] block">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-300">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP LINKS */}
      <section className="py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Explore the Group</span>
            <h2 className="text-4xl font-bold text-white mt-4">More From PGG</h2>
          </div>
          <div ref={groupRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupLinks.map((s, i) => (
              <Link key={i} href={s.href} className="svc-card group relative flex flex-col bg-dark-card border border-white/[0.08] rounded-xl p-7 hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h4 className="text-lg font-semibold text-white mb-2">{s.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-3">{s.desc}</p>
                <span className="text-xs font-semibold text-accent/70 uppercase tracking-wider">{s.metric}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Partner with PGG?" subtitle="Whether you want to invest, apply for microfinance, or explore partnerships — our team is ready." primaryBtn={{ label: 'Invest With Us', href: '/investment-plans' }} secondaryBtn={{ label: 'Contact Us', href: '/contact-us' }} />

      {/* FAQ */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">FAQ</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Common Questions</h2>
            <p className="text-gray-400">Everything you need to know about working with PGG.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
