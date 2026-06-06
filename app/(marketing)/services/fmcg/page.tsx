import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/ServiceHero';
import OverviewSection from '@/components/sections/services/fmcg/overview';
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
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780124967/fmcg-hero_ow6agn.jpg"
                ariaLabel="FMCG Services"
                eyebrow="PGG Fresh Foods · Farm to Fork · Est. 2019"
                heading={
                    <>
                        From our own plantations.
                        <br />
                        <em className="serif-em">Processed.</em> Distributed.
                        <br />
                        Returning profits to investors.
                    </>
                }
                descriptions={[
                    "PGG Fresh Foods processes and distributes value-added products made from our own plantation harvests. This vertical integration ",
                    "we grow it, we make it, we sell it — is what gives investors in this division a competitive edge. Min. LKR 500,000 | Returns: 40-55% annually."
                ]}
                stats={[
                    { label: "Product lines", value: "18", em: "+", note: "Fresh & natural products" },
                    { label: "Retail partners", value: "20", em: "", note: "Across Sri Lanka" },
                    { label: "Processing", value: "5", em: "", note: "tonnes/day" },
                    { label: "Export revenue", value: "42", em: "", note: "Of total sales · 2025" }
                ]}
            />
            <OverviewSection />
            <FutureProductsSection />
        </>
    );
}

