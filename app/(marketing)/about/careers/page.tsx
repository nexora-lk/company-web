import type { Metadata } from 'next';
import HeroBanner from "@/components/sections/about/careers/HeroBanner";
import CultureValues from "@/components/sections/about/careers/CultureValues";
import OpenRoles from "@/components/sections/about/careers/OpenRoles";
import BottomCTA from "@/components/sections/about/careers/BottomCTA";

export const metadata: Metadata = {
    title: 'Careers | Join Prestige Glamour Group — Open Roles in Sri Lanka',
    description:
        'Explore career opportunities at Prestige Glamour Group. Join a team of 8,400+ across plantation, microfinance, gems, hospitality, real estate, and agri-export sectors in Sri Lanka.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/about/careers',
    },
    openGraph: {
        title: 'Careers at Prestige Glamour Group',
        description:
            'Join a leading Sri Lankan conglomerate. Explore open roles across six diverse business divisions.',
        url: 'https://www.prestigeglamourgroupofcompany.com/about/careers',
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

export default function CareersPage() {
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
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Careers',
                                item: 'https://www.prestigeglamourgroupofcompany.com/about/careers',
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
                        '@type': 'WebPage',
                        name: 'Careers at Prestige Glamour Group',
                        description:
                            'Explore career opportunities across six business divisions in Sri Lanka.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/about/careers',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'Prestige Glamour Group',
                            url: 'https://www.prestigeglamourgroupofcompany.com',
                        },
                    }),
                }}
            />
            <HeroBanner/>
            <CultureValues/>
            <OpenRoles/>
            <BottomCTA/>
        </>
    );
}
