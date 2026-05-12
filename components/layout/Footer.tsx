import Link from 'next/link'

const footerLinks = [
  { label: 'Corporate Information', href: '/corporate-information' },
  { label: 'Our Plantation', href: '/our-plantation' },
  { label: 'Cultivation Plans', href: '/cultivation-plans' },
  { label: 'Investment Plans', href: '/investment-plans' },
  { label: 'Microfinance', href: '/microfinance' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ', href: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.08]">
      {/* CTA Strip */}
      <div className="bg-dark-alt py-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-10">
          <Link
            href="/get-a-consultation"
            className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:-translate-y-0.5 shrink-0"
          >
            Free Consultation
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-10">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Our Phone</span>
              <a href="tel:0342233669" className="text-[15px] text-gray-300 hover:text-accent transition-colors">034 2233669</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Email</span>
              <a href="mailto:info@prestigeglamourgroup.com" className="text-[15px] text-gray-300 hover:text-accent transition-colors">info@prestigeglamourgroup.com</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Hours</span>
              <span className="text-[15px] text-gray-300">Mon-Fri: 8:30am-5:30pm</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Address</span>
              <span className="text-[15px] text-gray-300">
                Maggona, Nawaloka Medical Centre Area, Kalutara, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12">
          <Link href="/" className="text-white">
            <span className="text-2xl font-bold tracking-tight">PGG</span>
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[15px] text-gray-500 hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-500">© 2026 Prestige Glamour Group. All Rights Reserved</p>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="text-[13px] text-gray-500 hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-[13px] text-gray-500 hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex gap-3">
            {[
              <svg key="tw" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
              <svg key="li" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
              <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
            ].map((icon, i) => (
              <a key={i} href="#" aria-label="Social" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.08] text-gray-500 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
