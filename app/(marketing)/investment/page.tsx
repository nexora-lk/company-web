import ContactSection from '@/components/sections/investment/contact';
import HeroSection from '@/components/sections/investment/hero';
import ModelsSection from '@/components/sections/investment/models';
import CalculatorSection from '@/components/sections/investment/calculator';
import WhySection from '@/components/sections/investment/why';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Investment Opportunities | Prestige Glamour Group',
    description:
        'Invest with Prestige Glamour Group. Explore proven investment models across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/investment',
    },
    openGraph: {
        title: 'Investment Opportunities',
        description: 'Multiple investment models across six strategic sectors with proven returns.',
        url: 'https://www.prestigeglamourgroupofcompany.com/investment',
        type: 'website',
    },
};

export default function InvestmentPage() {
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
                                name: 'Investment',
                                item: 'https://www.prestigeglamourgroupofcompany.com/investment',
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
                        '@type': 'FinancialService',
                        name: 'Prestige Glamour Group Investment Opportunities',
                        description: 'Investment models across multiple sectors in Sri Lanka.',
                        areaServed: 'LK',
                        provider: {
                            '@type': 'Organization',
                            name: 'Prestige Glamour Group',
                        },
                    }),
                }}
            />
            <HeroSection />
            <WhySection />
            <ModelsSection />
            <CalculatorSection />
            <ContactSection />
        </>
    );
}
