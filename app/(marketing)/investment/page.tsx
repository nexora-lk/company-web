import ContactSection from '@/components/sections/investment/contact';
import ModelsSection from '@/components/sections/investment/models';
import CalculatorSection from '@/components/sections/investment/calculator';
import WhySection from '@/components/sections/investment/why';
import type { Metadata } from 'next';
import ServiceHero from "@/components/sections/ServiceHero";

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
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117505/investment-hero_xust91.jpg"
                ariaLabel="Investment Plans"
                eyebrow="For investors · 2026 Round"
                heading={
                    <>
                        Real Returns From Real
                        <br />
                        <em className="serif-em">Sri Lankan</em>
                        <br />
                        Operations.
                    </>
                }
                descriptions={[
                    "Seven investment vehicles across plantation, microfinance, gems, FMCG, real estate, share market, and education — delivering 40-60% annual returns to 3,200+ active investors.",
                    "Underwritten by Prestige Glamour Working Capital Solutions, audited by KPMG to ensure transparency and security."
                ]}
                stats={[
                    { label: "Target Returns", value: "60", em: "%", note: "Annually" },
                    { label: "Entry level min", value: "2", em: "", note: "Lakhs LKR" },
                    { label: "Compounding", value: "14", em: ".", note: "Founded 2013" },
                    { label: "Independent audit", value: "KPMG", em: " ", note: "Quarterly disclosure SL" }
                ]}
            />
            <WhySection />
            <ModelsSection />
            <CalculatorSection />
            <ContactSection />
        </>
    );
}
