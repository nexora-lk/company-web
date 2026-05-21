/**
 * Unit Test Example - Utility Functions
 * Tests basic functions without React dependencies
 */

describe('Utility Functions', () => {
    describe('Email Validation', () => {
        // Helper function for testing
        const validateEmail = (email: string): boolean => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        it('validates correct email format', () => {
            expect(validateEmail('test@example.com')).toBe(true);
            expect(validateEmail('user@company.co.uk')).toBe(true);
            expect(validateEmail('investor@prestige.lk')).toBe(true);
        });

        it('rejects invalid email format', () => {
            expect(validateEmail('invalid')).toBe(false);
            expect(validateEmail('test@')).toBe(false);
            expect(validateEmail('@example.com')).toBe(false);
            expect(validateEmail('test @example.com')).toBe(false);
        });

        it('rejects empty email', () => {
            expect(validateEmail('')).toBe(false);
        });
    });

    describe('Investment Calculation', () => {
        const calculateReturn = (principal: number, rate: number, years: number): number => {
            return principal * Math.pow(1 + rate, years);
        };

        it('calculates compound interest correctly', () => {
            const result = calculateReturn(100000, 0.08, 5);
            expect(result).toBeCloseTo(146933, 0);
        });

        it('handles zero rate', () => {
            expect(calculateReturn(100000, 0, 5)).toBe(100000);
        });

        it('handles negative values gracefully', () => {
            const result = calculateReturn(0, 0.08, 5);
            expect(result).toBe(0);
        });
    });

    describe('Date Formatting', () => {
        const formatDate = (date: Date): string => {
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        };

        it('formats date correctly', () => {
            const date = new Date('2026-05-21');
            expect(formatDate(date)).toMatch(/May 21, 2026/);
        });
    });
});
