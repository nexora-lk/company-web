'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJsConfig } from '@/lib/emailjs';

export default function InvestmentContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('submitting');
        setErrorMessage('');

        const { serviceId, templateId, publicKey } = getEmailJsConfig('investment');

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
            className="col-span-12 lg:col-span-7 bg-bg text-ink rounded-[18px] p-8 lg:p-10"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="num">Investment Inquiry · Form</div>
                    <div className="font-display text-[26px] leading-tight mt-1">
                        Tell us where to start.
                    </div>
                </div>
                <span className="pill">
                    <span className="dot"></span>Reply within 1 day
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <label className="block">
                    <div className="num mb-1">01 — Name</div>
                    <input
                        name="user_name"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        placeholder="Full name"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">02 — Phone</div>
                    <input
                        name="user_phone"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        type="tel"
                        placeholder="+94 …"
                        required
                    />
                </label>
                <label className="block md:col-span-2">
                    <div className="num mb-1">03 — Email</div>
                    <input
                        name="user_email"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">04 — Model of interest</div>
                    <select
                        name="user_model"
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        required
                    >
                        <option value="">Select model...</option>
                        <option value="01 — Cultivation Contribution Projects">01 — Cultivation Contribution Projects</option>
                        <option value="02 — Gold Spirits of Landing Scheme">02 — Gold Spirits of Landing Scheme</option>
                        <option value="03 — Real Estate Land Value Appreciation">03 — Real Estate Land Value Appreciation</option>
                        <option value="04 — Partner in FMCG Distribution & Processing">04 — Partner in FMCG Distribution &amp; Processing</option>
                        <option value="Mixed / please advise">Mixed / please advise</option>
                    </select>
                </label>
                <label className="block">
                    <div className="num mb-1">05 — Ticket size</div>
                    <select
                        name="user_ticket_size"
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        required
                    >
                        <option value="">Select amount...</option>
                        <option value="LKR 250,000 — 1M">LKR 250,000 — 1M</option>
                        <option value="LKR 1M — 5M">LKR 1M — 5M</option>
                        <option value="LKR 5M — 25M">LKR 5M — 25M</option>
                        <option value="LKR 25M+">LKR 25M+</option>
                    </select>
                </label>
                <label className="block md:col-span-2 mt-3">
                    <div className="num mb-1">06 — Message</div>
                    <textarea
                        name="user_message"
                        className="field resize-none focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        rows={3}
                        placeholder="A few lines on your investment goals."
                        required
                    ></textarea>
                </label>
            </div>

            {status === 'success' && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    Thank you! Your investment inquiry has been sent successfully. We will get back to you shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                    {errorMessage}
                </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[12px] text-mute">
                    By submitting you agree to our quiet handling of your details.
                </span>
                <button
                    type="submit"
                    className="btn btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Submitting...' : 'Submit enquiry'} <span className="arrow">→</span>
                </button>
            </div>
        </form>
    );
}
