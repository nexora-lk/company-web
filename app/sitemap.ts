import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';


const baseUrl = 'https://www.prestigeglamourgroupofcompany.com';

// Central route source (ONLY place you maintain)
// Format: { path, priority, changeFrequency }
const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about/careers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/corporate', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cultivation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/investment', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/plantation', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/microfinance', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/gems', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/fmcg', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/ngo', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/real-estate', priority: 0.85, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
