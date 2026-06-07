import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/ServiceHero';
import OverviewSection from '@/components/sections/services/ngo/overview';
import ProjectSudeesaSection from '@/components/sections/services/ngo/project-sudeesa';
import FundSection from '@/components/sections/services/ngo/fund';

export const metadata: Metadata = {
    title: 'NGO Programs & Social Impact | Prestige Glamour',
    description:
        'Community development and social impact programs. Education, healthcare, and NGO initiatives across Sri Lanka by Prestige Glamour Group.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/services/ngo',
    },
    openGraph: {
        title: 'NGO Programs & Social Impact Initiatives',
        description: 'Community development, education, and healthcare programs across Sri Lanka.',
        url: 'https://www.prestigeglamourgroupofcompany.com/services/ngo',
        type: 'website',
    },
};

export default function NGOPage() {
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
                                name: 'NGO Programs',
                                item: 'https://www.prestigeglamourgroupofcompany.com/services/ngo',
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
                        name: 'Prestige Glamour - NGO Programs',
                        description: 'Social impact and community development programs.',
                        url: 'https://www.prestigeglamourgroupofcompany.com/services/ngo',
                        areaServed: 'LK',
                        knowsAbout: [
                            'Community Development',
                            'Education',
                            'Healthcare',
                            'Social Impact',
                        ],
                        serviceType: 'NGO Services',
                    }),
                }}
            />
            <ServiceHero
                backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117692/ngo-hero_yiba7x.jpg"
                ariaLabel="NGO Projects"
                eyebrow="PGG Foundation · Community Impact · Est. 2015"
                heading={
                    <>
                        Investing in Sri Lanka&#39;s communities because
                        <br />
                        <em className="serif-em">growth </em> that doesn&#39;t
                        <br />
                        reach the village isn&#39;t real growth.
                    </>
                }
                descriptions={[
                    "The PGG Foundation was established in 2015 to channel 5% of group profits into rural Sri Lanka ",
                    "funding education, plantation programmes, mangrove conservation, and community development projects across 7 districts."
                ]}
                stats={[
                    { label: "Lives impacted", value: "28K", em: "+", note: "Since 2015" },
                    { label: "Active projects", value: "14", em: ".", note: "Across 7 districts" },
                    { label: "Global partners", value: "09", em: "", note: "NGOs & foundations" },
                    { label: "Schools built", value: "06", em: "", note: "Rural centres" }
                ]}
            />
            <OverviewSection />
            <ProjectSudeesaSection />
            <FundSection />
        </>
    );
}