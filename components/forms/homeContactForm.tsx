'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJsConfig } from '@/lib/emailjs';

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('submitting');
        setErrorMessage('');

        const { serviceId, templateId, publicKey } = getEmailJsConfig('home');

        if (!serviceId || !templateId || !publicKey) {
            console.warn('EmailJS configuration is unavailable. Please verify your EmailJS setup.');
            setStatus('error');
            setErrorMessage('EmailJS is not fully configured. Please configure the service ID, template ID, and public key in your .env file.');
            return;
        }

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, {
                publicKey: publicKey,
            });
            setStatus('success');
            formRef.current.reset();
        } catch (error: unknown) {
            console.error('Failed to send email:', error);
            setStatus('error');
            const message =
                error && typeof error === 'object' && 'text' in error && typeof error.text === 'string'
                    ? error.text
                    : error instanceof Error
                        ? error.message
                        : 'Something went wrong. Please try again later.';
            setErrorMessage(message);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 bg-surface rounded-[16px] sm:rounded-[20px] border border-line p-5 sm:p-8 lg:p-12 reveal"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-4 reveal">
                <div>
                    <div className="num mb-1.5 sm:mb-2">Inquiry</div>
                    <div className="font-display text-[24px] sm:text-[28px] leading-tight">
                        A quick form, hand-read.
                    </div>
                </div>
                <span className="pill self-start sm:self-auto text-[11px] sm:text-[12px] reveal">
                    <span className="dot"></span>Reply within 1 working day
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4">
                <label className="block reveal">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">01 — Your name</div>
                    <input
                        name="user_name"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        placeholder="Full name"
                        required
                    />
                </label>
                <label className="block reveal">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">02 — Email</div>
                    <input
                        name="user_email"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                </label>
                <label className="block reveal">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">03 — Country</div>
                    <input
                        name="user_country"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        placeholder="Where are you writing from?"
                        required
                    />
                </label>
                <label className="block reveal">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">04 — I am a…</div>
                    <select
                        name="user_role"
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        required
                    >
                        <option value="">Select...</option>
                        <option value="Investor">Investor</option>
                        <option value="Trade buyer">Trade buyer</option>
                        <option value="Co-operative partner">Co-operative partner</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label className="block md:col-span-2 mt-2 sm:mt-4 reveal">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">05 — What would you like to discuss?</div>
                    <textarea
                        name="user_message"
                        className="field resize-none focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        rows={3}
                        placeholder="A few lines is enough — we'll pick up the phone."
                        required
                    ></textarea>
                </label>
            </div>

            {/* Hidden fields for optional inquiry variables */}
            <input type="hidden" name="user_phone" value="" />
            <input type="hidden" name="user_model" value="" />
            <input type="hidden" name="user_ticket_size" value="" />

            {status === 'success' && (
                <div className="form-success">
                    Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="form-error">
                    {errorMessage}
                </div>
            )}

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[11px] sm:text-[12px] text-mute order-2 sm:order-1 text-center sm:text-left">
                    By submitting, you agree to our processing of your details.
                </span>
                <button
                    type="submit"
                    className="btn btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-accent w-full sm:w-auto order-1 sm:order-2 justify-center"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send enquiry'} <span className="arrow">→</span>
                </button>
            </div>
        </form>
    );
}
