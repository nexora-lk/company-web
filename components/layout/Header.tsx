'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const navItems: Array<{
  label: string
  href: string
  children?: { label: string; href: string }[]
}> = [
  { label: 'Home', href: '/' },
  { label: 'Corporate', href: '/corporate-information' },
  {
    label: 'Plantation',
    href: '/our-plantation',
    children: [
      { label: 'Our Plantation', href: '/our-plantation' },
      { label: 'Cultivation Plans', href: '/cultivation-plans' },
    ],
  },
  {
    label: 'Investment',
    href: '/investment-plans',
    children: [
      { label: 'Investment Plans', href: '/investment-plans' },
      { label: 'Microfinance', href: '/microfinance' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, { y: -100, opacity: 0, duration: 0.8, ease: 'power3.out' })
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-xl py-3 shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white z-10 group" onClick={() => setMobileOpen(false)}>
          <span className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">PGG</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
                {item.children && (
                  <svg
                    className={`w-2.5 h-2.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-slide-down">
                  <div className="bg-dark-card border border-white/[0.08] rounded-xl p-3 min-w-[220px] shadow-2xl backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2.5 text-[15px] text-gray-300 rounded-lg hover:bg-white/5 hover:text-white hover:pl-4 transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/get-a-consultation"
            className="hidden lg:inline-flex px-6 py-2.5 bg-accent hover:bg-accent-dark text-dark font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:-translate-y-0.5"
          >
            Let&apos;s get started
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-dark z-40 pt-24 px-6 pb-10 overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/[0.08] pb-2">
              <Link
                href={item.href}
                className="block py-3 text-xl font-semibold text-white"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-base text-gray-400 hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/get-a-consultation"
            className="mt-6 w-full text-center py-3.5 bg-accent text-dark font-semibold rounded-full hover:bg-accent-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s get started
          </Link>
        </nav>
      </div>
    </header>
  )
}
