import type { Metadata } from 'next';
import GallerySection from '@/components/sections/services/fmcg/gallery';
import HeroSection from '@/components/sections/services/fmcg/hero';
import OverviewSection from '@/components/sections/services/fmcg/overview';
import ProductsSection from '@/components/sections/services/fmcg/products';
import FutureProductsSection from '@/components/sections/services/fmcg/future-products';

export const metadata: Metadata = {
    title: 'FMCG Products & Distribution | Sri Lanka',
    description:
        'Premium FMCG products and retail distribution across Sri Lanka. Fast-moving consumer goods, supply chain solutions, and retail partnerships.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/fmcg',
    },
    openGraph: {
        title: 'FMCG Products & Retail Distribution',
        description: 'Premium FMCG distribution and supply chain solutions across Sri Lanka.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/fmcg',
        type: 'website',
    },
};

export default function FMCGPage() {
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
                                name: 'FMCG',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/fmcg',
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
                        name: 'Prestige Glamour - FMCG Services',
                        description: 'FMCG product distribution and retail solutions in Sri Lanka.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/fmcg',
                        areaServed: 'LK',
                        knowsAbout: [
                            'FMCG',
                            'Retail Distribution',
                            'Consumer Goods',
                            'Supply Chain',
                        ],
                        serviceType: 'FMCG Distribution',
                    }),
                }}
            />
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <ProductsSection />
            <FutureProductsSection />
        </>
    );
}
