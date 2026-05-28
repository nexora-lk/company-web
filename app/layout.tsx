import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PageTransition from '@/components/layout/PageTransition';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Manrope } from 'next/font/google';
import './globals.css';

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

// Force entire site to be static — CDN serves pre-built HTML
export const dynamic = 'force-static';
export const revalidate = 86400; // Never revalidate — rebuild to update

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
    icons: {
        icon: [
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
        shortcut:
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
        apple: [
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '57x57',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '114x114',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
            <head>
                <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
                <link rel="dns-prefetch" href="https://res.cloudinary.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <meta
                    name="google-site-verification"
                    content="FYgdAmWULb4nRgIMS8lGbU1F7-3muEXQMJLDPIOACIA"
                />
            </head>
            <body className="font-body text-ink">
                <a
                    href="#main-content"
                    className="absolute -top-full left-0 z-9999 bg-ink text-bg px-4 py-2 focus:top-0"
                >
                    Skip to main content
                </a>
                <SmoothScroll>
                    <Navbar />
                    <PageTransition>{children}</PageTransition>
                    <Footer />
                </SmoothScroll>
                {/* Analytics deferred below content — non-blocking */}
                <GoogleAnalytics gaId="G-43N120Q5GW" />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
