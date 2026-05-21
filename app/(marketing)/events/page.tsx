import FeaturedSection from '@/components/sections/events/featured';
import HeroSection from '@/components/sections/events/hero';
import type { Metadata } from 'next';
import AllProgrammesSection from '../../../components/sections/events/all_programmes';
import Banersection from '../../../components/sections/events/baner';
import BankAccountDetailsSection from '../../../components/sections/events/bank_account_details';

export const metadata: Metadata = {
    title: 'Upcoming Events & Programs | Prestige Glamour Group',
    description:
        'Attend investor events, stakeholder programs, and seminars at Prestige Glamour Group. Register for exclusive networking and business opportunities in Sri Lanka.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/events',
    },
    openGraph: {
        title: 'Events & Programs',
        description: 'Investor events, stakeholder programs, and exclusive seminars.',
        url: 'https://www.prestigeglamourgroupofcompany.com/events',
        type: 'website',
    },
};

export default function EventPage() {
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
                                name: 'Events & Programs',
                                item: 'https://www.prestigeglamourgroupofcompany.com/events',
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
                        '@type': 'EventSeries',
                        name: 'Prestige Glamour Group Events & Programs',
                        description: 'Investor events, stakeholder programs, and seminars.',
                        organizer: {
                            '@type': 'Organization',
                            name: 'Prestige Glamour Group',
                        },
                    }),
                }}
            />
            <HeroSection />
            <FeaturedSection />
            <AllProgrammesSection />
            <BankAccountDetailsSection />
            <Banersection />
        </>
    );
}
