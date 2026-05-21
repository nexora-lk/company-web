/**
 * Test Fixtures - Reusable test data
 */

export const mockServices = [
    {
        id: 1,
        name: 'Plantation',
        category: 'Agriculture',
        image: '/services/plantation.jpg',
    },
    {
        id: 2,
        name: 'Microfinance',
        category: 'Finance',
        image: '/services/microfinance.jpg',
    },
    {
        id: 3,
        name: 'Gems & Jewellery',
        category: 'Luxury',
        image: '/services/gems.jpg',
    },
];

export const mockContactFormData = {
    valid: {
        email: 'test@example.com',
        message: 'I am interested in your services',
    },
    invalid: {
        email: 'invalid-email',
        message: '',
    },
};

export const mockInvestmentFormData = {
    valid: {
        name: 'John Doe',
        email: 'john@example.com',
        amount: 100000,
        sector: 'plantation',
        duration: 12,
    },
    invalid: {
        name: '',
        email: 'invalid',
        amount: -100,
        sector: '',
        duration: 0,
    },
};

export const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'user@example.com',
    role: 'investor',
};

export const mockNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Investment', href: '/investment' },
    { label: 'Contact', href: '/#contact' },
];
