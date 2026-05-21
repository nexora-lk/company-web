import type { Metadata } from 'next';
import GallerySection from '../../../../components/sections/services/real-estate/gallery';
import HeroSection from '../../../../components/sections/services/real-estate/hero';
import OverviewSection from '../../../../components/sections/services/real-estate/overview';
import PortfolioSection from '../../../../components/sections/services/real-estate/portfolio';

export const metadata: Metadata = {
    title: 'Real Estate & Hospitality | Premium Properties | Sri Lanka',
    description:
        'Premium real estate and hospitality developments in Sri Lanka. Hotels, resorts, and luxury residential properties by Prestige Glamour Group.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/real-estate',
    },
    openGraph: {
        title: 'Real Estate & Hospitality - Premium Properties',
        description: 'Premium hotels, resorts, and residential developments across Sri Lanka.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/real-estate',
        type: 'website',
    },
};

export default function RealEstatePage() {
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
                                name: 'Services',
                                item: 'https://www.prestigeglamourgroupofcompany.com/#services',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Real Estate',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/real-estate',
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
                        '@type': 'LocalBusiness',
                        name: 'Prestige Glamour - Real Estate & Hospitality',
                        description:
                            'Premium real estate and hospitality property development in Sri Lanka.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/real-estate',
                        areaServed: 'LK',
                        knowsAbout: [
                            'Real Estate',
                            'Hotels',
                            'Resorts',
                            'Hospitality',
                            'Luxury Properties',
                        ],
                        serviceType: 'Real Estate Development',
                    }),
                }}
            />
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <PortfolioSection />
        </>
    );
}
