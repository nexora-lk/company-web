import type { Metadata } from 'next';
import GallerySection from '@/components/sections/services/ngo/gallery';
import HeroSection from '@/components/sections/services/ngo/hero';
import OverviewSection from '@/components/sections/services/ngo/overview';
import ProgramsSection from '@/components/sections/services/ngo/programs';

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
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <ProgramsSection />
        </>
    );
}
