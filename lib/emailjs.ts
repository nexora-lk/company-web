export const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    investmentTemplateId:
        process.env.NEXT_PUBLIC_EMAILJS_INVESTMENT_TEMPLATE_ID || '',
} as const;

export function getEmailJsConfig(type: 'home' | 'investment') {
    return {
        serviceId: EMAILJS_CONFIG.serviceId,
        publicKey: EMAILJS_CONFIG.publicKey,
        templateId:
            type === 'investment'
                ? EMAILJS_CONFIG.investmentTemplateId
                : EMAILJS_CONFIG.templateId,
    };
}

