import Footer from '@/components/layout/Footer';
import Interactions from '@/components/layout/Interactions';
import Navbar from '@/components/layout/Navbar';
import PageTransition from '@/components/layout/PageTransition';
import Reveal from '@/components/layout/Reveal';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Instrument_Serif, Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const instrument = Instrument_Serif({
    weight: '400',
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-instrument',
    display: 'swap',
    preload: true,
});

const newsreader = Newsreader({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    variable: '--font-newsreader',
    display: 'swap',
    preload: true,
});

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
    display: 'swap',
    preload: true,
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
    preload: true,
});

export const metadata: Metadata = {
    title: "Prestige Glamour — Cultivating Sri Lanka's enduring industries",
    description:
        'Prestige Glamour Group steward six Sri Lankan businesses — plantation, micro-finance, gem & jewellery, hospitality, real estate and agri-export.',
    keywords: [
        'Sri Lanka conglomerate',
        'plantation',
        'microfinance',
        'gems jewellery',
        'real estate',
        'hospitality',
        'agri-export',
        'investment',
    ],
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com',
    },
    openGraph: {
        title: 'Prestige Glamour Group',
        description: "Six enduring Sri Lankan businesses cultivating tomorrow's industries",
        url: 'https://www.prestigeglamourgroupofcompany.com',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Prestige Glamour — Sri Lanka's Conglomerate",
        description: 'Plantation, microfinance, gems, hospitality, real estate, agri-export',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${instrument.variable} ${newsreader.variable} ${geist.variable} ${manrope.variable}`}
        >
            <head>
                <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
                <meta
                    name="google-site-verification"
                    content="FYgdAmWULb4nRgIMS8lGbU1F7-3muEXQMJLDPIOACIA"
                />
            </head>
            <body className="font-body text-ink">
                <GoogleAnalytics gaId="G-43N120Q5GW" />
                <SpeedInsights />
                <Analytics />
                <SmoothScroll>
                    <Navbar />
                    <PageTransition>{children}</PageTransition>
                    <Footer />
                    <Reveal />
                    <Interactions />
                </SmoothScroll>
            </body>
        </html>
    );
}
