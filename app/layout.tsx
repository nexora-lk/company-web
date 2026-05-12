import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Prestige Glamour Group – Plantation, Investment & Microfinance',
  description:
    'PGG is a diversified Sri Lankan conglomerate spanning plantation, cultivation, microfinance, gem export and FMCG — established in 2013.',
  openGraph: {
    title: 'Prestige Glamour Group – Plantation, Investment & Microfinance',
    description:
      'PGG is a diversified Sri Lankan conglomerate spanning plantation, cultivation, microfinance, gem export and FMCG — established in 2013.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
