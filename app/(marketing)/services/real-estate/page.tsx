import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/ServiceHero';
import OverviewSection from '@/components/sections/services/real-estate/overview';

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
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117668/real-estate-hero_z5rass.jpg"
                ariaLabel="Real Estate Services"
                eyebrow="PGG Properties · Land & Heritage · Est. 2008"
                heading={
                    <>
                        Real land. Real<em className="serif-em"> development.</em>
                        <br />
                        Real returns from Sri Lankan property.
                    </>
                }
                descriptions={[
                    "PGG Properties specialises in acquiring undervalued agricultural and development land, improving it through infrastructure and development, ",
                    "and selling to buyers at a premium. Your capital participates in specific land projects and receives a share of the sale profit. Min. LKR 500,000."
                ]}
                stats={[
                    { label: "Total land bank", value: "840", em: "A", note: "Acres managed" },
                    { label: "Heritage", value: "04", em: ".", note: "Colonial estates" },
                    { label: "Developing", value: "100", em: "+", note: "Active properties" },
                    { label: "Appreciation", value: "14", em: "%", note: "Avg. annual yield" }
                ]}
            />
            <OverviewSection />
        </>
    );
}

