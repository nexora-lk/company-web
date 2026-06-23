'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJsConfig } from '@/lib/emailjs';
import { investmentContactFormSchema, extractFieldErrors } from '@/lib/form-schemas';
import { ZodError } from 'zod';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function InvestmentContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('submitting');
        setErrorMessage('');
        setFieldErrors({});

        // Extract form data
        const formData = new FormData(formRef.current);
        const data: Record<string, unknown> = {
            user_name: formData.get('user_name'),
            user_phone: formData.get('user_phone'),
            user_email: formData.get('user_email'),
            user_model: formData.get('user_model'),
            user_ticket_size: formData.get('user_ticket_size'),
            user_message: formData.get('user_message'),
            user_country: formData.get('user_country') || undefined,
            user_role: formData.get('user_role') || undefined,
        };

        // Validate with Zod
        try {
            await investmentContactFormSchema.parseAsync(data);
        } catch (error) {
            if (error instanceof ZodError) {
                setFieldErrors(extractFieldErrors(error));
                setStatus('error');
                setErrorMessage('Please correct the errors in the form.');
                return;
            }
        }

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
            className="col-span-12 md:col-span-1 lg:col-span-7 bg-bg text-ink rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl p-4 sm:p-5 md:p-7 lg:p-8 xl:p-10 shadow-lg reveal"
        >
            <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-10 reveal">
                <div className="num text-xs sm:text-sm md:text-sm lg:text-base uppercase tracking-wider font-semibold mb-2 sm:mb-3">Working Capital Inquiry Form</div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-midnight-blue">
                    Tell us where to start.
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7">
                <label className="block reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">01 — Name</div>
                    <input
                        name="user_name"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        placeholder="Full name"
                        required
                    />
                    {fieldErrors.user_name && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_name}</p>}
                </label>
                <label className="block reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">02 — Phone</div>
                    <input
                        name="user_phone"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        type="tel"
                        placeholder="+94 …"
                        required
                    />
                    {fieldErrors.user_phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_phone}</p>}
                </label>
                <label className="block md:col-span-2 reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">03 — Email</div>
                    <input
                        name="user_email"
                        className="field focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                    {fieldErrors.user_email && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_email}</p>}
                </label>
                <label className="block reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">04 — WHICH DIVISION INTERESTS YOU? </div>
                    <select
                        name="user_model"
                        className="field bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        required
                    >
                        <option value="">Select model...</option>
                        <option value="01 — Plantation Operations">01 — Plantation Operations</option>
                        <option value="02 — Real Estate Development">02 — Real Estate Development</option>
                        <option value="03 — Gems & Precious Stones">03 — Gems & Precious Stones</option>
                        <option value="04 — Consumer Goods - FMCG">04 — Consumer Goods - FMCG</option>
                        <option value="Not sure yet - guide me">Not sure yet - guide me</option>
                    </select>
                    {fieldErrors.user_model && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_model}</p>}
                </label>
                <label className="block reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">05 — HOW MUCH WOULD YOU LIKE TO WORKING CAPITAL?</div>
                    <select
                        name="user_ticket_size"
                        className="field bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        required
                    >
                        <option value="">Select amount...</option>
                        <option value="LKR 200,000 - 500,000 (Entry level)">LKR 200,000 - 500,000 (Entry level)</option>
                        <option value="LKR 500,000 - 1 Million">LKR 500,000 - 1 Million</option>
                        <option value="LKR 5 Million+">LKR 5 Million+</option>
                        <option value="Prefer to discuss">Prefer to discuss</option>
                    </select>
                    {fieldErrors.user_ticket_size && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_ticket_size}</p>}
                </label>
                <label className="block md:col-span-2 mt-1 sm:mt-2 md:mt-3 reveal">
                    <div className="num mb-2 sm:mb-2.5 text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-wider font-semibold">06 — YOUR WORKING CAPITAL GOALS</div>
                    <textarea
                        name="user_message"
                        className="field resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3"
                        rows={4}
                        placeholder="investment goals, timeline, preferred return model (annual or monthly), and any questions we should address. We'll be in touch within 24 hours."
                        required
                    ></textarea>
                    {fieldErrors.user_message && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_message}</p>}
                </label>
            </div>

            {/* Hidden fields for inquiry variables not in solutions form */}
            <input type="hidden" name="user_country" value="" />
            <input type="hidden" name="user_role" value="" />

            {status === 'success' && (
                <div className="form-success">
                    Thank you! Your investment inquiry has been sent successfully. We will get back to you shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="form-error">
                    {errorMessage}
                </div>
            )}

            <div className="mt-7 sm:mt-8 md:mt-10 lg:mt-11 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6 reveal">
                <span className="text-xs sm:text-xs md:text-sm lg:text-base text-mute text-center sm:text-left leading-relaxed font-light">
                    By submitting, you agree to our quiet handling of your details.
                </span>
                <button
                    type="submit"
                    className="btn btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
                    disabled={status === 'submitting'}
                >
                    <span className="whitespace-nowrap">{status === 'submitting' ? 'Submitting...' : 'Submit enquiry'}</span>
                    <ArrowIcon size={14} className="transition-transform duration-300" />
                </button>
            </div>
        </form>
    );
}
