import ProductCategoriesSection from '@/components/sections/services/gems/product-categories';
import RoughGemsSection from '@/components/sections/services/gems/rough-gems';
import type { Metadata } from 'next';
import OverviewSection from '@/components/sections/services/gems/overview';
import GemServicesSection from '@/components/sections/services/gems/services';
import WhyChooseUsSection from '@/components/sections/services/gems/why-choose-us';
import ServiceHero from '@/components/sections/ServiceHero';

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
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117604/jacek-dylag-agsdDgRW2Ps-unsplash_v5jrs0.jpg"
                ariaLabel="Gem & Jewelry Services"
                eyebrow="PGGC Gems · Est. 2013"
                heading={
                    <>
                        Working Capital in Sri Lankan gemstones.
                        <br />
                        <em className="serif-em">High-yield. Short-cycle. </em>
                        <br />
                        2,500 years of heritage.
                    </>
                }
                descriptions={[
                    "PGG Gems is a certified gem mining and export business serving 14 countries globally. Partners co-fund gem mining " +
                    "and export cycles, receiving distributions on completion.",
                ]}
                stats={[
                    { label: "Export countries", value: "14", em: ".", note: "Across 4 continents" },
                    { label: "Certified stones", value: "6.2K", em: "+", note: "Since 2013" },
                    { label: "Mining Operations", value: "10", em: "+", note: "Active sites" },
                    { label: "Heritage", value: "14", em: "y", note: "Years of trading since 2013" },
                    ]}
            />
            <OverviewSection />
            <ProductCategoriesSection />
            <RoughGemsSection />
            <GemServicesSection />
            <WhyChooseUsSection />
        </>
    );
}