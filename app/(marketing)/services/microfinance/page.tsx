import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/ServiceHero';
import OverviewSection from '@/components/sections/services/microfinance/overview';
import ModelsSection from '@/components/sections/services/microfinance/models';

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
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117535/microfinace-hero_qjut63.jpg"
                ariaLabel="Microfinance Services"
                eyebrow="PGG Microfinance · Next Investment (Pvt) Ltd · Est. 2013"
                heading={
                    <>
                        Invest in rural
                        <br />
                        lending.<em className="serif-em">Earn</em>
                        <br />
                        steady monthly returns.
                    </>
                }
                descriptions={[
                    "PGG Microfinance — registered as Next Investment (Pvt) Ltd — operates a high-performance rural lending portfolio across 23 branches. " ,
                    "With 11,200+ active borrowers, a 96.4% repayment rate, and consistent investor returns, it is one of our most reliable investment vehicles."
                ]}
                stats={[
                    { label: "SMEs supported", value: "100", em: "+", note: "Target by 2026" },
                    { label: "Active borrowers", value: "11.2K", em: "", note: "Deployment goal" },
                    { label: "Borrower focus", value: "Predominantly women", em: "", note: "" },
                    { label: "Branch network", value: "23", em: ".", note: "Across nine provinces" }
                ]}
            />
            <OverviewSection />
            <ModelsSection />
        </>
    );
}
