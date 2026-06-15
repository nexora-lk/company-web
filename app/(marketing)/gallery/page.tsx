import GalleryGrid from '@/components/sections/gallery/grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | Prestige Glamour Group — Visual Stories',
    description:
        'Browse Prestige Glamour Group photo gallery showcasing operations, projects, and impact across plantation, gems, microfinance, hospitality, real estate sectors.',
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com/gallery',
    },
    openGraph: {
        title: 'Gallery - Visual Stories from Our Operations',
        description: 'Visual showcase of our operations across six business sectors in Sri Lanka.',
        url: 'https://www.prestigeglamourgroupofcompany.com/gallery',
        type: 'website',
    },
};

export default function GalleryPage() {
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
                                name: 'Gallery',
                                item: 'https://www.prestigeglamourgroupofcompany.com/gallery',
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
                        '@type': 'CollectionPage',
                        name: 'Prestige Glamour Group Visual Gallery',
                        description:
                            'Photo gallery showcasing operations across six business sectors.',
                        publisher: {
                            '@type': 'Organization',
                            name: 'Prestige Glamour Group',
                        },
                    }),
                }}
            />
            <GalleryGrid />
        </>
    );
}
