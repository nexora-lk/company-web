import BranchSection from '@/components/sections/about/branch';
import CareersSection from '@/components/sections/about/careers';
import {
    default as DirectorsSection,
    default as TeemSection,
} from '@/components/sections/about/directors';
import OverviewSection from '@/components/sections/about/overview';
import WhoWeAreSection from '@/components/sections/about/who_we_are';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Prestige Glamour Group — Sri Lankan Conglomerate',
    description:
        'Discover Prestige Glamour Group — an 8,400-person Sri Lankan conglomerate spanning plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/about',
    },
    openGraph: {
        title: 'About Prestige Glamour Group',
        description:
            'Sri Lankan conglomerate stewards six businesses across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
        url: 'https://www.prestigeglamourgroupofcompany.com/about',
        type: 'website',
        images: [
            {
                url: 'https://www.prestigeglamourgroupofcompany.com/og-about.jpg',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: 'https://www.prestigeglamourgroupofcompany.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'About Us',
                                item: 'https://www.prestigeglamourgroupofcompany.com/about',
                            },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Prestige Glamour Group',
                        url: 'https://www.prestigeglamourgroupofcompany.com',
                        description:
                            'Sri Lankan conglomerate stewards six businesses across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
                        sameAs: ['https://www.prestigeglamourgroupofcompany.com'],
                        numberOfEmployees: { '@type': 'QuantitativeValue', value: 8400 },
                        areaServed: 'LK',
                        knowsAbout: [
                            'Plantation',
                            'Microfinance',
                            'Gems & Jewellery',
                            'Hospitality',
                            'Real Estate',
                            'Agri-Export',
                        ],
                    }),
                }}
            />
            <WhoWeAreSection />
            <OverviewSection />
            <DirectorsSection />
            <TeemSection />
            <BranchSection />
            <CareersSection />
        </>
    );
}
