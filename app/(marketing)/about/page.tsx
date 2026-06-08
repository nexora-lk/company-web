import BranchSection from '@/components/sections/about/branch';
import CareersSection from '@/components/sections/about/careers';
import DirectorsSection from '@/components/sections/about/directors';
import OverviewSection from '@/components/sections/about/overview';
import type { Metadata } from 'next';
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
    title: 'About Us | Prestige Glamour Group — Sri Lankan Conglomerate',
    description:
        'Discover Prestige Glamour Group — an 8,400-person Sri Lankan conglomerate spanning plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/about',
    },
    openGraph: {
        title: 'About Prestige Glamour Group',
        description:
            'Sri Lankan conglomerate stewards six businesses across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
        url: 'https://www.prestigeglamourgroupofcompany.com/about',
        type: 'website',
        images: [
            {
                url: 'https://www.prestigeglamourgroupofcompany.com/og-about.jpg',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function AboutPage() {
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
                                name: 'About Us',
                                item: 'https://www.prestigeglamourgroupofcompany.com/about',
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
                        '@type': 'Organization',
                        name: 'Prestige Glamour Group',
                        url: 'https://www.prestigeglamourgroupofcompany.com',
                        description:
                            'Sri Lankan conglomerate stewards six businesses across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors.',
                        sameAs: ['https://www.prestigeglamourgroupofcompany.com'],
                        numberOfEmployees: { '@type': 'QuantitativeValue', value: 8400 },
                        areaServed: 'LK',
                        knowsAbout: [
                            'Plantation',
                            'Microfinance',
                            'Gems & Jewellery',
                            'Hospitality',
                            'Real Estate',
                            'Agri-Export',
                        ],
                    }),
                }}
            />
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780762811/uy_hkd4mb.png"
                ariaLabel="About Prestige Glamour"
                eyebrow="Who We Are"
                heading={
                    <>
                        An investment company built on
                        <em className="serif-em block sm:inline"> real </em>
                        operations 14 years, 23 branches, 3,200+ investors.
                    </>
                }
                descriptions={[
                    "Prestige Glamour Working Capital Solutions was founded in 2013 with a clear mandate: to create direct investment opportunities in real Sri Lankan businesses — for anyone, from anywhere, with capital to deploy.",
                    "Today we operate 7 active divisions from our head office in Payagala, with 23 branches across 8 provinces and 800+ employees on direct payroll."
                ]}
                stats={[
                    { label: "Founded", value: "2013", note: "Year established" },
                    { label: "Branches", value: "27", em: "+", note: "Across 8 provinces" },
                    { label: "Employees", value: "800", em: "", note: "Direct payroll" },
                    { label: "Investors", value: "3.2K", em: "+", note: "Active worldwide" }
                ]}
            />
            <OverviewSection />
            <DirectorsSection />
            <BranchSection />
            <CareersSection />
        </>
    );
}
