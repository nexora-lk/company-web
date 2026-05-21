import '@testing-library/jest-dom';

// Mock environment variables
process.env.NEXT_PUBLIC_SITE_URL = 'https://www.prestigeglamourgroupofcompany.com';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
        return [];
    }
    unobserve() {}
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

// Mock next/router
jest.mock('next/router', () => ({
    useRouter: () => ({
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
        push: jest.fn(),
        replace: jest.fn(),
        reload: jest.fn(),
        back: jest.fn(),
        prefetch: jest.fn(),
        beforePopState: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
    }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
        };
    },
    usePathname() {
        return '/';
    },
    useSearchParams() {
        return new URLSearchParams();
    },
}));

// Suppress specific console warnings
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
    console.error = (...args) => {
        if (
            typeof args[0] === 'string' &&
            (args[0].includes('Warning: ReactDOM.render') ||
                args[0].includes('Not implemented') ||
                args[0].includes('useLayoutEffect'))
        ) {
            return;
        }
        originalError.call(console, ...args);
    };

    console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('componentWillReceiveProps')) {
            return;
        }
        originalWarn.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
    console.warn = originalWarn;
});

// Global test timeout
jest.setTimeout(10000);
