import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

/**
 * Mock Service Worker Setup
 * Define API handlers for testing here
 */

export const handlers = [
    // Services API
    http.get('/api/services', () => {
        return HttpResponse.json([
            {
                id: 1,
                name: 'Plantation',
                category: 'Agriculture',
                description: 'Premium highland crop cultivation',
            },
            {
                id: 2,
                name: 'Microfinance',
                category: 'Finance',
                description: 'Small business lending solutions',
            },
            {
                id: 3,
                name: 'Gems & Jewellery',
                category: 'Luxury',
                description: 'Premium gemstone and jewelry services',
            },
        ]);
    }),

    // Contact Form Submission
    http.post('/api/contact', async ({ request }) => {
        const body = await request.json();

        if (!body.email || !body.message) {
            return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        return HttpResponse.json(
            { success: true, message: 'Contact form submitted' },
            { status: 201 }
        );
    }),

    // Investment Inquiry
    http.post('/api/investment', async ({ request }) => {
        const body = await request.json();

        if (!body.name || !body.email || !body.amount) {
            return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        return HttpResponse.json({ success: true, investmentId: 'INV-123456' }, { status: 201 });
    }),

    // Error handler - not found
    http.get('/api/not-found', () => {
        return HttpResponse.json({ error: 'Not found' }, { status: 404 });
    }),

    // Error handler - server error
    http.get('/api/error', () => {
        return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }),
];

export const server = setupServer(...handlers);
