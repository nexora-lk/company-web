/**
 * Integration Test Example - Contact Form Feature
 * Tests complete workflow: user fills form → validates → submits → success
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from '../../setup/mswServer';

// Mock component representing the contact feature
const ContactFeature = () => {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const enquiry = formData.get('message') as string;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message: enquiry }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setStatus('success');
            setMessage('Thank you! We will contact you soon.');
            e.currentTarget.reset();
        } catch (error) {
            setStatus('error');
            setMessage('Failed to submit. Please try again.');
        }
    };

    return (
        <div>
            <h1>Get in Touch</h1>
            {status === 'success' && (
                <div role="status" className="success">
                    {message}
                </div>
            )}
            {status === 'error' && (
                <div role="alert" className="error">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="your@email.com" required />
                <textarea name="message" placeholder="Your message" required />
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

import React from 'react';

describe('Contact Form Integration', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    describe('Successful Submission Flow', () => {
        it('completes full user workflow: fill → validate → submit → success', async () => {
            const user = userEvent.setup();
            render(<ContactFeature />);

            // User sees the form
            expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();

            // User fills in the form
            await user.type(screen.getByPlaceholderText('your@email.com'), 'john@example.com');
            await user.type(
                screen.getByPlaceholderText('Your message'),
                'I am interested in plantation services'
            );

            // User submits the form
            await user.click(screen.getByRole('button', { name: /send message/i }));

            // Form shows loading state
            expect(screen.getByRole('button', { name: /sending/i })).toBeInTheDocument();

            // Success message appears
            await waitFor(() => {
                expect(screen.getByRole('status')).toBeInTheDocument();
                expect(screen.getByText(/thank you/i)).toBeInTheDocument();
            });
        });
    });

    describe('Error Handling', () => {
        it('displays error message when API call fails', async () => {
            const user = userEvent.setup();

            // Override handler to return error
            server.use(
                http.post('/api/contact', () => {
                    return HttpResponse.json({ error: 'Server error' }, { status: 500 });
                })
            );

            render(<ContactFeature />);

            await user.type(screen.getByPlaceholderText('your@email.com'), 'john@example.com');
            await user.type(screen.getByPlaceholderText('Your message'), 'Test message');
            await user.click(screen.getByRole('button', { name: /send message/i }));

            await waitFor(() => {
                expect(screen.getByRole('alert')).toBeInTheDocument();
                expect(screen.getByText(/failed to submit/i)).toBeInTheDocument();
            });
        });
    });

    describe('Form Validation', () => {
        it('requires both email and message fields', async () => {
            const user = userEvent.setup();
            render(<ContactFeature />);

            const submitButton = screen.getByRole('button', { name: /send message/i });

            // Try to submit without filling required fields
            // HTML5 validation will prevent submission
            expect(screen.getByPlaceholderText('your@email.com')).toHaveAttribute('required');
            expect(screen.getByPlaceholderText('Your message')).toHaveAttribute('required');
        });
    });

    describe('Accessibility', () => {
        it('has proper ARIA labels and roles', () => {
            render(<ContactFeature />);

            expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
            expect(screen.getByPlaceholderText('your@email.com')).toHaveAttribute('required');
        });

        it('announces status changes', async () => {
            const user = userEvent.setup();
            render(<ContactFeature />);

            await user.type(screen.getByPlaceholderText('your@email.com'), 'john@example.com');
            await user.type(screen.getByPlaceholderText('Your message'), 'Test');
            await user.click(screen.getByRole('button', { name: /send message/i }));

            await waitFor(() => {
                expect(screen.getByRole('status')).toBeInTheDocument();
            });
        });
    });
});
