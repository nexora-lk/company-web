'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJsConfig } from '@/lib/emailjs';
import { careersApplicationSchema, extractFieldErrors } from '@/lib/form-schemas';
import { ZodError } from 'zod';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface CareersApplicationFormProps {
    roleTitle?: string;
}

export default function CareersApplicationForm({ roleTitle }: CareersApplicationFormProps) {
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
            user_email: formData.get('user_email'),
            user_phone: formData.get('user_phone'),
            applied_role: formData.get('applied_role'),
            user_experience: formData.get('user_experience'),
            user_location: formData.get('user_location'),
            user_message: formData.get('user_message'),
        };

        // Validate with Zod
        try {
            await careersApplicationSchema.parseAsync(data);
        } catch (error) {
            if (error instanceof ZodError) {
                setFieldErrors(extractFieldErrors(error));
                setStatus('error');
                setErrorMessage('Please correct the errors in the form.');
                return;
            }
        }

        const { serviceId, templateId, publicKey } = getEmailJsConfig('careers');

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
            console.error('Failed to send application:', error);
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
            id="apply-form"
            className="bg-surface rounded-[16px] sm:rounded-[20px] border border-line p-5 sm:p-8 lg:p-12"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-4">
                <div>
                    <div className="num mb-1.5 sm:mb-2">Application</div>
                    <div className="font-display text-[24px] sm:text-[28px] leading-tight">
                        Tell us about yourself.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4">
                <label className="block">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">01 — Full name</div>
                    <input
                        name="user_name"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        placeholder="Your full name"
                        required
                    />
                    {fieldErrors.user_name && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_name}</p>}
                </label>
                <label className="block">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">02 — Email</div>
                    <input
                        name="user_email"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                    {fieldErrors.user_email && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_email}</p>}
                </label>
                <label className="block">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">03 — Phone</div>
                    <input
                        name="user_phone"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        type="tel"
                        placeholder="+94 …"
                        required
                    />
                    {fieldErrors.user_phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_phone}</p>}
                </label>
                <label className="block">
                     <div className="num mb-1 text-[10px] sm:text-[11px]">04 — Position</div>
                     <input
                         name="applied_role"
                         className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                         placeholder="Role you're applying for"
                         defaultValue={roleTitle || ''}
                         required
                     />
                     {fieldErrors.applied_role && <p className="text-red-500 text-xs mt-1">{fieldErrors.applied_role}</p>}
                 </label>
                <label className="block">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">05 — Years of experience</div>
                    <select
                        name="user_experience"
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        required
                    >
                        <option value="">Select…</option>
                        <option value="Fresh graduate">Fresh graduate</option>
                        <option value="1–3 years">1–3 years</option>
                        <option value="3–5 years">3–5 years</option>
                        <option value="5–10 years">5–10 years</option>
                        <option value="10+ years">10+ years</option>
                    </select>
                    {fieldErrors.user_experience && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_experience}</p>}
                </label>
                <label className="block">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">06 — Current location</div>
                    <input
                        name="user_location"
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        placeholder="City, Country"
                        required
                    />
                    {fieldErrors.user_location && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_location}</p>}
                </label>
                <label className="block md:col-span-2 mt-2 sm:mt-4">
                    <div className="num mb-1 text-[10px] sm:text-[11px]">07 — Why do you want to join us?</div>
                    <textarea
                        name="user_message"
                        className="field resize-none focus:outline-2 focus:outline-offset-2 focus:outline-accent text-[13px] sm:text-[14px]"
                        rows={4}
                        placeholder="background, what excites you about working in capital deployment, and what you'd bring to our team managing investor capital."
                        required
                    ></textarea>
                    {fieldErrors.user_message && <p className="text-red-500 text-xs mt-1">{fieldErrors.user_message}</p>}
                </label>
            </div>


            {status === 'success' && (
                <div className="form-success">
                    Thank you! Your application has been received. We&apos;ll review it carefully and get back to you soon.
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
                    {status === 'submitting' ? 'Sending…' : 'Submit application'} <ArrowIcon size={14} className="ml-1" />
                </button>
            </div>
        </form>
    );
}
