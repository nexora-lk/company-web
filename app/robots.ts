import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ['Googlebot', 'Googlebot-Image'],
                allow: ['/'],
                disallow: [],
            },
            {
                userAgent: ['Bingbot', 'Slurp'],
                allow: ['/'],
                disallow: [],
            },
            {
                userAgent: '*',
                allow: ['/'],
                disallow: ['/_next/', '/api/', '/private/', '/*.json', '/admin/'],
                crawlDelay: 1,
            },
        ],
        sitemap: 'https://www.prestigeglamourgroupofcompany.com/sitemap.xml',
        host: 'https://www.prestigeglamourgroupofcompany.com',
    };
}
