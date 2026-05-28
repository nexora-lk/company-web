import ProductCategoriesSection from '@/components/sections/services/gems/product-categories';
import RoughGemsSection from '@/components/sections/services/gems/rough-gems';
import type { Metadata } from 'next';
import GallerySection from '@/components/sections/services/gems/gallery';
import OverviewSection from '@/components/sections/services/gems/overview';
import GemServicesSection from '@/components/sections/services/gems/services';
import WhyChooseUsSection from '@/components/sections/services/gems/why-choose-us';
import HeroSection from "@/components/sections/services/gems/hero";

export const metadata: Metadata = {
    title: 'Gems & Jewellery Services | Premium Sapphires | Sri Lanka',
    description:
        'Premium Sri Lankan gemstones and jewelry. Certified sapphires, precious gems, and custom jewelry craftsmanship from Prestige Glamour Group.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/gems',
    },
    openGraph: {
        title: 'Gems & Jewellery - Premium Sapphires & Precious Stones',
        description:
            'Premium gemstones and jewelry services featuring certified Sri Lankan sapphires.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/gems',
        type: 'website',
    },
};

export default function GemsPage() {
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
                                name: 'Gems & Jewellery',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/gems',
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
                        name: 'Prestige Glamour - Gems & Jewellery',
                        description:
                            'Premium gemstone and jewelry services specializing in Sri Lankan sapphires.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/gems',
                        areaServed: 'LK',
                        knowsAbout: [
                            'Sapphires',
                            'Precious Gems',
                            'Jewelry',
                            'Gemstone Certification',
                        ],
                        serviceType: 'Jewelry & Gems',
                    }),
                }}
            />
            <HeroSection/>
            <OverviewSection />
            <GallerySection />
            <ProductCategoriesSection />
            <RoughGemsSection />
            <GemServicesSection />
            <WhyChooseUsSection />
        </>
    );
}
