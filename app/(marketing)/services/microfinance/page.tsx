import type { Metadata } from 'next';
import GallerySection from '../../../../components/sections/services/microfinance/gallery';
import HeroSection from '../../../../components/sections/services/microfinance/hero';
import OverviewSection from '../../../../components/sections/services/microfinance/overview';
import ProductsSection from '../../../../components/sections/services/microfinance/products';

export const metadata: Metadata = {
    title: 'Microfinance Services | Small Business Loans | Sri Lanka',
    description:
        'Accessible microfinance solutions for small businesses, traders, and entrepreneurs in Sri Lanka. Flexible credit products and financial services.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/microfinance',
    },
    openGraph: {
        title: 'Microfinance & Small Business Lending',
        description:
            'Accessible financial solutions for entrepreneurs and small businesses across Sri Lanka.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/microfinance',
        type: 'website',
    },
};

export default function MicrofinancePage() {
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
                                name: 'Microfinance',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/microfinance',
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
                        name: 'Prestige Glamour - Microfinance Services',
                        description: 'Microfinance lending for small businesses and entrepreneurs.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/microfinance',
                        areaServed: 'LK',
                        knowsAbout: [
                            'Microfinance',
                            'Small Business Loans',
                            'Credit Products',
                            'Financial Services',
                        ],
                        serviceType: 'Financial Services',
                    }),
                }}
            />
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <ProductsSection />
        </>
    );
}
