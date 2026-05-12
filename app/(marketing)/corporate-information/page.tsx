'use client'

import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'

const COMPANY_OVERVIEW: [string, string][] = [
  ['Company Name', 'Prestige Glamour Company (Pvt) Ltd'],
  ['Registration No.', 'PV 118342'],
  ['Date of Incorporation', '2013'],
  ['Registered Office', 'Maggona, Nawaloka Medical Centre Area, Kalutara'],
  ['Nature of Business', 'Plantation, Cultivation, Microfinance, Gem Export, FMCG, NGO'],
  ['Chairman', 'Mr. Y.M.D.T Yatawara'],
  ['Managing Director', 'Mr. Nilanga Amunugama'],
  ['Auditors', 'M/s. Chartered Accounting Firm'],
  ['Bankers', 'Seylan Bank PLC · DFCC Bank'],
]

const COMPLIANCE = [
  { title: 'Company Registration', desc: 'Companies Act No. 07 of 2007.', status: 'Active' },
  { title: 'Tax Compliance', desc: 'IRD, TIN, VAT current.', status: 'Compliant' },
  { title: 'Labor Compliance', desc: 'EPF / ETF certified.', status: 'Certified' },
  { title: 'BOI Registered', desc: 'Board of Investment of Sri Lanka.', status: 'Active' },
  { title: 'Export License', desc: 'National Gem & Jewellery Authority.', status: 'Licensed' },
  { title: 'Microfinance License', desc: 'Next Investments (Pvt) Ltd licensed entity.', status: 'Licensed' },
]

const DIRECTORS = [
  { initials: 'YT', name: 'Mr. Y.M.D.T Yatawara', role: 'Chairman', function: 'Gem Business · Local & Foreign Affairs', qualifications: 'BSc (Sp. Marketing Management); MBA Univ. of Mainz, Johannes Gutenberg; SP in Int\'l Business Mgmt & Entrepreneurship' },
  { initials: 'NA', name: 'Mr. Nilanga Amunugama', role: 'Managing Director', function: 'HR & Finance', qualifications: 'BCOM (Sp.) Univ. of Jayewardenepura; Chartered Accountant; NILS Labor Productivity; Diploma in IT' },
  { initials: 'SS', name: 'Mr. Samantha Suwarnasighe', role: 'Director', function: 'Executive Head of Marketing', qualifications: 'BSc in Mgmt; Digital Marketing Postgrad CIM, UK' },
  { initials: 'KR', name: 'Mr. B.K. Kamal Rodrigo', role: 'Director', function: 'Head of Legal & Developments', qualifications: 'P.D.S. Sessions 1, 2, 3 Limra USA; Diploma in Law (External); Pharmacist; Justice of the Peace (A.I)' },
]

const TEAM = [
  { initials: 'LA', name: 'L. Manisha Amaratunga', role: 'HR & Finance Head' },
  { initials: 'CF', name: 'M. Clement F Fernando', role: 'General Manager' },
  { initials: 'TS', name: 'T. Sivakumaran', role: 'Head Provincial NE' },
  { initials: 'HL', name: 'H.M.D. Leelarathna', role: 'Provincial Head NW/NC' },
  { initials: 'AT', name: 'Anusha Thudugala', role: 'Provincial Head Western' },
  { initials: 'RK', name: 'Ranjith Kumara', role: 'Provincial Head Sabaragamuwa' },
  { initials: 'KK', name: 'K.P.S. Kumara', role: 'Regional Mgr Kalutara' },
  { initials: 'DP', name: 'D.P. Rangana Perera', role: 'Regional Mgr Peliyagoda' },
  { initials: 'KS', name: 'K. Sadeskumar', role: 'Regional Mgr Kandy' },
  { initials: 'DS', name: 'D. Shahan Solomon', role: 'Regional Mgr Ampara' },
  { initials: 'MS', name: 'M.S. Samsudeen', role: 'Provincial Head' },
  { initials: 'KM', name: 'K. Madikumar', role: 'Provincial Head' },
]

const CSR = [
  { title: 'Education & Development', desc: 'Scholarships, school infrastructure, and skills training for rural youth.' },
  { title: 'Environmental Stewardship', desc: 'Reforestation, organic farming and watershed protection programs.' },
  { title: 'Entrepreneurship Support', desc: 'Seed grants and mentorship for women and youth-led enterprises.' },
  { title: 'Community Health & Welfare', desc: 'Medical camps, maternal health, and elderly care across our branches.' },
]

export default function CorporateInformationPage() {
  return (
    <>
      <HeroSection
        label="Est. 2013 · Sri Lanka"
        title="Corporate Information"
        subtitle="Transparency, governance, and accountability — the foundation of our business."
        size="small"
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        backgroundVideo="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
      />

      {/* Overview Table */}
      <section className="py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Company Overview</span>
            <h2 className="text-4xl font-bold text-white mt-4">Legal & Registration Details</h2>
          </div>
          <dl className="rounded-2xl bg-dark-card border border-white/[0.08] divide-y divide-white/[0.06] overflow-hidden">
            {COMPANY_OVERVIEW.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 md:grid-cols-3 gap-2 px-7 py-5">
                <dt className="text-xs tracking-[0.2em] uppercase text-accent">{k}</dt>
                <dd className="text-gray-300 md:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Compliance</span>
            <h2 className="text-4xl font-bold text-white mt-4">Regulatory Compliance & Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE.map((c) => (
              <div key={c.title} className="p-7 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 hover:-translate-y-1 transition-all">
                <h4 className="text-lg font-semibold text-white mb-2.5">{c.title}</h4>
                <p className="text-[15px] text-gray-400 leading-relaxed">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent-bg px-3 py-1 rounded-full">
                  ✓ {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Board of Directors</span>
            <h2 className="text-4xl font-bold text-white mt-4">Our Leadership Board</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {DIRECTORS.map((d) => (
              <div key={d.initials} className="p-7 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 transition-all">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-accent-bg text-accent flex items-center justify-center text-xl font-bold">{d.initials}</div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white">{d.name}</h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{d.role}</span>
                    <p className="text-sm text-gray-300 mt-2">{d.function}</p>
                    <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">{d.qualifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">Management Team</span>
            <h2 className="text-4xl font-bold text-white mt-4">Regional & Provincial Heads</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m) => (
              <div key={m.initials} className="flex items-center gap-4 p-5 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 transition-all">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent-bg text-accent flex items-center justify-center text-sm font-bold">{m.initials}</div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white truncate">{m.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent px-4 py-1.5 border border-accent/30 rounded-full">CSR & Social Impact</span>
            <h2 className="text-4xl font-bold text-white mt-4">Corporate Social Responsibility</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/[0.06]">
              <img src="https://images.unsplash.com/photo-1687804990570-4b77a3dbdfe3?w=1200&q=80" alt="Community programs" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {CSR.map((c) => (
                <div key={c.title} className="p-6 bg-dark-card border border-white/[0.08] rounded-xl hover:border-accent/30 transition-all">
                  <h4 className="text-base font-semibold text-white leading-tight">{c.title}</h4>
                  <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Partner with PGG?"
        subtitle="Reach our investment team to discuss partnerships, supply, or institutional opportunities."
        primaryBtn={{ label: 'Contact Our Team', href: '/investment-plans' }}
        secondaryBtn={{ label: 'Contact Us', href: '/contact-us' }}
      />
    </>
  )
}
