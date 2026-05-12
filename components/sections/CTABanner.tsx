'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface CTABannerProps {
  title?: string
  subtitle?: string
  primaryBtn?: { label: string; href: string }
  secondaryBtn?: { label: string; href: string }
  variant?: 'default' | 'accent' | 'dark'
}

export default function CTABanner({
  title = "You'll Know What",
  subtitle,
  primaryBtn = { label: 'Schedule a Call', href: '/get-a-consultation' },
  secondaryBtn,
  variant = 'default',
}: CTABannerProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelector('.cta-content'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  const bgClass = variant === 'accent'
    ? 'bg-gradient-to-br from-accent-dark to-accent'
    : variant === 'dark'
    ? 'bg-dark'
    : 'bg-dark-alt'

  const titleColor = variant === 'accent' ? 'text-dark' : 'text-white'
  const subtitleColor = variant === 'accent' ? 'text-dark/70' : 'text-gray-400'

  return (
    <section ref={ref} className={`relative py-24 text-center overflow-hidden ${bgClass}`}>
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-accent/[0.08]" />
      <div className="absolute -bottom-36 -right-24 w-96 h-96 rounded-full border border-accent/[0.06]" />

      <div className="cta-content relative z-10 max-w-7xl mx-auto px-6">
        <h2 className={`text-[clamp(2rem,4vw,3rem)] font-bold mb-4 ${titleColor}`}>{title}</h2>
        {subtitle && <p className={`text-[17px] max-w-xl mx-auto mb-8 leading-relaxed ${subtitleColor}`}>{subtitle}</p>}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={primaryBtn.href}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] hover:-translate-y-1 text-lg"
          >
            {primaryBtn.label}
          </Link>
          {secondaryBtn && (
            <Link
              href={secondaryBtn.href}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              {secondaryBtn.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
