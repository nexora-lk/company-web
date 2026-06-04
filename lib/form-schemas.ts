import { z, ZodError } from 'zod';

// Careers Application Form Schema
export const careersApplicationSchema = z.object({
    user_name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    user_email: z.string().email('Invalid email address'),
    user_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    applied_role: z.string().min(1, 'Please specify the position'),
    user_experience: z.string().min(1, 'Please select years of experience'),
    user_location: z.string().min(2, 'Please specify your location'),
    user_message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export type CareersApplicationFormData = z.infer<typeof careersApplicationSchema>;

// Home Contact Form Schema
export const homeContactFormSchema = z.object({
    user_name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    user_email: z.string().email('Invalid email address'),
    user_country: z.string().min(2, 'Please specify your country'),
    user_role: z.string().min(1, 'Please select your role'),
    user_message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
    user_phone: z.string().optional(),
    user_model: z.string().optional(),
    user_ticket_size: z.string().optional(),
});

// Home Contact Form Type (exported but not in use currently - may be used later)
export type HomeContactFormData = z.infer<typeof homeContactFormSchema>;

// Investment Contact Form Schema
export const investmentContactFormSchema = z.object({
    user_name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    user_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    user_email: z.string().email('Invalid email address'),
    user_model: z.string().min(1, 'Please select an investment model'),
    user_ticket_size: z.string().min(1, 'Please select a ticket size'),
    user_message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
    user_country: z.string().optional(),
    user_role: z.string().optional(),
});

// Investment Contact Form Type (exported but not in use currently - may be used later)
export type InvestmentContactFormData = z.infer<typeof investmentContactFormSchema>;

// Utility function to extract field errors from ZodError
export function extractFieldErrors(error: ZodError): Record<string, string> {
    const errors: Record<string, string> = {};
    error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        errors[path] = issue.message;
    });
    return errors;
}


