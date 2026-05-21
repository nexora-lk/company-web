/**
 * Component Test Example - Contact Form
 * Tests form rendering, validation, submission
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock form component for testing
const ContactForm = ({ onSubmit }: { onSubmit?: (data: any) => Promise<void> }) => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }
        if (!message) {
            setError('Message is required');
            return;
        }

        setLoading(true);
        try {
            if (onSubmit) {
                await onSubmit({ email, message });
            }
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('Failed to submit form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here"
                />
            </div>
            {error && <p role="alert">{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
};

import React from 'react';

describe('ContactForm Component', () => {
    describe('Rendering', () => {
        it('renders form fields correctly', () => {
            render(<ContactForm />);
            expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
        });

        it('displays all required labels', () => {
            render(<ContactForm />);
            expect(screen.getByText('Email')).toBeInTheDocument();
            expect(screen.getByText('Message')).toBeInTheDocument();
        });
    });

    describe('Form Validation', () => {
        it('shows error when email is empty', async () => {
            const user = userEvent.setup();
            render(<ContactForm />);

            const submitButton = screen.getByRole('button', { name: /send/i });
            await user.click(submitButton);

            expect(screen.getByText('Email is required')).toBeInTheDocument();
        });

        it('shows error for invalid email format', async () => {
            const user = userEvent.setup();
            render(<ContactForm />);

            await user.type(screen.getByLabelText(/email/i), 'invalid-email');
            await user.click(screen.getByRole('button', { name: /send/i }));

            expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
        });

        it('shows error when message is empty', async () => {
            const user = userEvent.setup();
            render(<ContactForm />);

            await user.type(screen.getByLabelText(/email/i), 'test@example.com');
            await user.click(screen.getByRole('button', { name: /send/i }));

            expect(screen.getByText('Message is required')).toBeInTheDocument();
        });
    });

    describe('Form Submission', () => {
        it('submits form with valid data', async () => {
            const user = userEvent.setup();
            const handleSubmit = jest.fn().mockResolvedValue(undefined);
            render(<ContactForm onSubmit={handleSubmit} />);

            await user.type(screen.getByLabelText(/email/i), 'test@example.com');
            await user.type(screen.getByLabelText(/message/i), 'Hello!');
            await user.click(screen.getByRole('button', { name: /send/i }));

            await waitFor(() => {
                expect(handleSubmit).toHaveBeenCalledWith({
                    email: 'test@example.com',
                    message: 'Hello!',
                });
            });
        });

        it('shows loading state during submission', async () => {
            const user = userEvent.setup();
            const handleSubmit = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 100)));
            render(<ContactForm onSubmit={handleSubmit} />);

            await user.type(screen.getByLabelText(/email/i), 'test@example.com');
            await user.type(screen.getByLabelText(/message/i), 'Hello!');
            await user.click(screen.getByRole('button', { name: /send/i }));

            expect(screen.getByRole('button', { name: /sending/i })).toBeInTheDocument();
        });

        it('clears form after successful submission', async () => {
            const user = userEvent.setup();
            const handleSubmit = jest.fn().mockResolvedValue(undefined);
            render(<ContactForm onSubmit={handleSubmit} />);

            const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
            const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

            await user.type(emailInput, 'test@example.com');
            await user.type(messageInput, 'Hello!');
            await user.click(screen.getByRole('button', { name: /send/i }));

            await waitFor(() => {
                expect(emailInput.value).toBe('');
                expect(messageInput.value).toBe('');
            });
        });

        it('handles submission errors', async () => {
            const user = userEvent.setup();
            const handleSubmit = jest.fn().mockRejectedValue(new Error('Network error'));
            render(<ContactForm onSubmit={handleSubmit} />);

            await user.type(screen.getByLabelText(/email/i), 'test@example.com');
            await user.type(screen.getByLabelText(/message/i), 'Hello!');
            await user.click(screen.getByRole('button', { name: /send/i }));

            await waitFor(() => {
                expect(screen.getByText('Failed to submit form')).toBeInTheDocument();
            });
        });
    });

    describe('Accessibility', () => {
        it('has accessible form labels', () => {
            render(<ContactForm />);
            const emailInput = screen.getByLabelText(/email/i);
            const messageInput = screen.getByLabelText(/message/i);

            expect(emailInput).toHaveAttribute('id', 'email');
            expect(messageInput).toHaveAttribute('id', 'message');
        });

        it('displays error messages with role alert', async () => {
            const user = userEvent.setup();
            render(<ContactForm />);

            await user.click(screen.getByRole('button', { name: /send/i }));

            expect(screen.getByRole('alert')).toBeInTheDocument();
        });

        it('supports keyboard navigation', async () => {
            const user = userEvent.setup();
            render(<ContactForm />);

            const emailInput = screen.getByLabelText(/email/i);
            emailInput.focus();
            expect(emailInput).toHaveFocus();

            await user.tab();
            const messageInput = screen.getByLabelText(/message/i);
            expect(messageInput).toHaveFocus();
        });
    });
});
