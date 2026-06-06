import type { Metadata } from 'next';
import GallerySection from '@/components/sections/services/plantation/gallery';
import ServiceHero from '@/components/sections/ServiceHero';
import OverviewSection from '@/components/sections/services/plantation/overview';
import PortfolioSection from '@/components/sections/services/plantation/portfolio';
import PlantationInvestmentBanner from '@/components/sections/services/plantation/InvestmentBanner';

export const metadata: Metadata = {
    title: 'Plantation Services | Premium Highland Crops | Prestige Glamour',
    description:
        'Premium plantation management in Sri Lanka highlands. Sustainable cultivation of tea, cinnamon, and export-quality crops with proven track record.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/plantation',
    },
    openGraph: {
        title: 'Plantation Services & Highland Crops',
        description:
            'Premium plantation management with sustainable practices across Sri Lankan highlands.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/plantation',
        type: 'website',
    },
};

export default function PlantationPage() {
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
                                name: 'Plantation',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/plantation',
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
                        name: 'Prestige Glamour - Plantation Services',
                        description: 'Premium highland plantation management in Sri Lanka.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/plantation',
                        areaServed: 'LK',
                        knowsAbout: [
                            'Tea Plantation',
                            'Cinnamon',
                            'Export Crops',
                            'Sustainable Agriculture',
                        ],
                        serviceArea: 'Sri Lanka Highlands',
                    }),
                }}
            />
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117673/plantaation-hero_lcuoit.jpg"
                ariaLabel="Our Plantation"
                eyebrow="Our Plantation"
                heading={
                    <>
                        Real land. Real crops.
                        <em className="serif-em block sm:inline"> Real </em>
                        returns from Sri Lanka&#39;s finest agro-zones.
                    </>
                }
                descriptions={[
                    "Prestige Glamour Working Capital Solutions owns and operates plantation estates across Sri Lanka's key agro-zones.",
                    "Each estate is run by a regional manager, audited quarterly, and open to direct investor participation from LKR 200,000."
                ]}
                stats={[
                    { label: "Estates", value: "07", note: "Currently Operating" },
                    { label: "Crops", value: "06", note: "In production" },
                    { label: "Scale", value: "2.4K", em: "", note: "Currently" },
                    { label: "Export Focus", value: "Primary", em: "", note: "Revenue focus" }
                ]}
            />
            <OverviewSection />
            <GallerySection />
            <PortfolioSection />
            <PlantationInvestmentBanner />
        </>
    );
}
