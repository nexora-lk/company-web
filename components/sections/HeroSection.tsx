'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'

interface HeroSectionProps {
  label?: string
  title: string
  subtitle?: string
  primaryBtn?: { label: string; href: string }
  secondaryBtn?: { label: string; href: string }
  align?: 'left' | 'center'
  size?: 'default' | 'large' | 'small'
  backgroundImage?: string
  backgroundVideo?: string
  children?: React.ReactNode
}

export default function HeroSection({
  label,
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  align = 'left',
  size = 'default',
  backgroundImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  backgroundVideo,
  children,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(contentRef.current!.querySelector('.hero-label') || [], {
        y: 20, opacity: 0, duration: 0.5, delay: 0.2,
      })
      .from(contentRef.current!.querySelector('.hero-title') || [], {
        y: 40, opacity: 0, duration: 0.7,
      }, '-=0.2')
      .from(contentRef.current!.querySelector('.hero-subtitle') || [], {
        y: 30, opacity: 0, duration: 0.6,
      }, '-=0.3')
      .from(contentRef.current!.querySelector('.hero-actions') || [], {
        y: 20, opacity: 0, duration: 0.5,
      }, '-=0.2')
    })

    return () => ctx.revert()
  }, [])

  const minH = size === 'large' ? 'min-h-screen' : size === 'small' ? 'min-h-[50vh]' : 'min-h-[85vh]'
  const pt = size === 'large' ? 'pt-44 pb-28' : size === 'small' ? 'pt-40 pb-20' : 'pt-40 pb-24'
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  const maxW = align === 'center' ? 'max-w-4xl' : 'max-w-3xl'

  return (
    <section ref={heroRef} className={`relative flex items-center ${minH} ${pt} overflow-hidden`}>
      {/* Background Media — video preferred, image as poster fallback */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark/70 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[1]" />

      {/* Decorative Elements */}
      <div className="absolute top-[30%] right-[-100px] w-[400px] h-px bg-gradient-to-r from-accent to-transparent opacity-30 -rotate-[30deg] z-[1]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full border border-accent/[0.08] z-[1] animate-float" />
      <div className="absolute top-1/4 left-[-100px] w-[300px] h-[300px] rounded-full border border-accent/[0.05] z-[1]" />

      {/* Content */}
      <div ref={contentRef} className={`relative z-[2] max-w-7xl mx-auto px-6 w-full ${alignCls}`}>
        <div className={maxW}>
          {label && (
            <span className="hero-label inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5 px-4 py-1.5 border border-accent/30 rounded-full">
              {label}
            </span>
          )}
          <h1 className="hero-title text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className={`hero-subtitle text-lg leading-relaxed text-gray-400 mb-10 ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}>
              {subtitle}
            </p>
          )}
          {(primaryBtn || secondaryBtn) && (
            <div className={`hero-actions flex gap-4 flex-wrap ${align === 'center' ? 'justify-center' : ''}`}>
              {primaryBtn && (
                <Link
                  href={primaryBtn.href}
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] hover:-translate-y-1 text-lg"
                >
                  {primaryBtn.label}
                </Link>
              )}
              {secondaryBtn && (
                <Link
                  href={secondaryBtn.href}
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 text-lg"
                >
                  {secondaryBtn.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
