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
            className="col-span-12 md:col-span-1 lg:col-span-7 bg-bg text-ink rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl p-4 sm:p-5 md:p-7 lg:p-8 xl:p-10 shadow-lg"
        >
            <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-10">
                <div className="num text-xs sm:text-sm md:text-sm lg:text-base uppercase tracking-wider font-semibold mb-2 sm:mb-3">Investment Inquiry Form</div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                    Tell us where to start.
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7">
                <label className="block">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">01 — Name</div>
                    <input
                        name="user_name"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        placeholder="Full name"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">02 — Phone</div>
                    <input
                        name="user_phone"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        type="tel"
                        placeholder="+94 …"
                        required
                    />
                </label>
                <label className="block md:col-span-2">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">03 — Email</div>
                    <input
                        name="user_email"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">04 — Model</div>
                    <select
                        name="user_model"
                        className="field bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
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
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">05 — Ticket size</div>
                    <select
                        name="user_ticket_size"
                        className="field bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        required
                    >
                        <option value="">Select amount...</option>
                        <option value="LKR 250,000 — 1M">LKR 250,000 — 1M</option>
                        <option value="LKR 1M — 5M">LKR 1M — 5M</option>
                        <option value="LKR 5M — 25M">LKR 5M — 25M</option>
                        <option value="LKR 25M+">LKR 25M+</option>
                    </select>
                </label>
                <label className="block md:col-span-2 mt-1 sm:mt-2 md:mt-3">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">06 — Message</div>
                    <textarea
                        name="user_message"
                        className="field resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        rows={4}
                        placeholder="A few lines on your investment goals..."
                        required
                    ></textarea>
                </label>
            </div>

            {status === 'success' && (
                <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-lg md:rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="inline-block mr-2">✓</span>Thank you! Your investment inquiry has been sent successfully. We will get back to you shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-lg md:rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-700 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="inline-block mr-2">✕</span>{errorMessage}
                </div>
            )}

            <div className="mt-7 sm:mt-8 md:mt-10 lg:mt-11 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <span className="text-xs sm:text-xs md:text-sm lg:text-base text-mute text-center sm:text-left leading-relaxed font-light">
                    By submitting, you agree to our quiet handling of your details.
                </span>
                <button
                    type="submit"
                    className="btn btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
                    disabled={status === 'submitting'}
                >
                    <span className="whitespace-nowrap">{status === 'submitting' ? 'Submitting...' : 'Submit enquiry'}</span>
                    <span className="arrow transition-transform duration-300 group-disabled:translate-x-0">→</span>
                </button>
            </div>
        </form>
    );
}
