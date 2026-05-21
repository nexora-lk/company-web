const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    collectCoverageFrom: [
        'app/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        'hooks/**/*.{js,jsx,ts,tsx}',
        'lib/**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/__tests__/**',
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 75,
            functions: 80,
            lines: 80,
        },
        './components': {
            statements: 75,
            branches: 70,
            functions: 75,
            lines: 75,
        },
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
};

module.exports = createJestConfig(customJestConfig);
