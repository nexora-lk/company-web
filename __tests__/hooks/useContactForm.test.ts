/**
 * Hook Test Example - useContactForm
 * Tests custom hook behavior
 */

import { act, renderHook } from '@testing-library/react';

// Mock hook for testing
const useContactForm = (onSubmit?: (data: any) => Promise<void>) => {
    const [formData, setFormData] = React.useState({
        email: '',
        message: '',
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = React.useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!validate()) {
            return;
        }

        setIsLoading(true);
        try {
            if (onSubmit) {
                await onSubmit(formData);
            }
            setFormData({ email: '', message: '' });
        } catch (error) {
            setErrors({ submit: 'Failed to submit' });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        errors,
        isLoading,
        handleChange,
        handleSubmit,
        validate,
    };
};

import React from 'react';

describe('useContactForm Hook', () => {
    describe('Initial State', () => {
        it('initializes with empty form data', () => {
            const { result } = renderHook(() => useContactForm());

            expect(result.current.formData).toEqual({
                email: '',
                message: '',
            });
            expect(result.current.errors).toEqual({});
            expect(result.current.isLoading).toBe(false);
        });
    });

    describe('Form Data Updates', () => {
        it('updates form data when handleChange is called', () => {
            const { result } = renderHook(() => useContactForm());

            act(() => {
                result.current.handleChange('email', 'test@example.com');
            });

            expect(result.current.formData.email).toBe('test@example.com');

            act(() => {
                result.current.handleChange('message', 'Hello world');
            });

            expect(result.current.formData.message).toBe('Hello world');
        });
    });

    describe('Form Validation', () => {
        it('validates required fields', () => {
            const { result } = renderHook(() => useContactForm());

            act(() => {
                result.current.validate();
            });

            expect(result.current.errors.email).toBe('Email is required');
            expect(result.current.errors.message).toBe('Message is required');
        });

        it('validates email format', () => {
            const { result } = renderHook(() => useContactForm());

            act(() => {
                result.current.handleChange('email', 'invalid-email');
                result.current.handleChange('message', 'Test message');
                result.current.validate();
            });

            expect(result.current.errors.email).toBe('Invalid email format');
        });

        it('returns true when validation passes', () => {
            const { result } = renderHook(() => useContactForm());

            let isValid = false;
            act(() => {
                result.current.handleChange('email', 'test@example.com');
                result.current.handleChange('message', 'Test message');
                isValid = result.current.validate();
            });

            expect(isValid).toBe(true);
            expect(result.current.errors).toEqual({});
        });
    });

    describe('Form Submission', () => {
        it('submits form with valid data', async () => {
            const mockSubmit = jest.fn().mockResolvedValue(undefined);
            const { result } = renderHook(() => useContactForm(mockSubmit));

            await act(async () => {
                result.current.handleChange('email', 'test@example.com');
                result.current.handleChange('message', 'Test message');
                await result.current.handleSubmit();
            });

            expect(mockSubmit).toHaveBeenCalledWith({
                email: 'test@example.com',
                message: 'Test message',
            });
        });

        it('prevents submission with invalid data', async () => {
            const mockSubmit = jest.fn();
            const { result } = renderHook(() => useContactForm(mockSubmit));

            await act(async () => {
                await result.current.handleSubmit();
            });

            expect(mockSubmit).not.toHaveBeenCalled();
        });

        it('sets loading state during submission', async () => {
            const mockSubmit = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 100)));
            const { result } = renderHook(() => useContactForm(mockSubmit));

            act(() => {
                result.current.handleChange('email', 'test@example.com');
                result.current.handleChange('message', 'Test');
            });

            const submitPromise = act(async () => {
                const promise = result.current.handleSubmit();
                // Check loading state immediately after calling handleSubmit
                expect(result.current.isLoading).toBe(true);
                await promise;
            });

            await submitPromise;
            expect(result.current.isLoading).toBe(false);
        });

        it('clears form data after successful submission', async () => {
            const mockSubmit = jest.fn().mockResolvedValue(undefined);
            const { result } = renderHook(() => useContactForm(mockSubmit));

            await act(async () => {
                result.current.handleChange('email', 'test@example.com');
                result.current.handleChange('message', 'Test message');
                await result.current.handleSubmit();
            });

            expect(result.current.formData).toEqual({
                email: '',
                message: '',
            });
        });

        it('handles submission errors', async () => {
            const mockSubmit = jest.fn().mockRejectedValue(new Error('Network error'));
            const { result } = renderHook(() => useContactForm(mockSubmit));

            await act(async () => {
                result.current.handleChange('email', 'test@example.com');
                result.current.handleChange('message', 'Test');
                await result.current.handleSubmit();
            });

            expect(result.current.errors.submit).toBe('Failed to submit');
        });
    });
});
