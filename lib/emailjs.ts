export const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ub5a6yi',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 't5Rn1TRyGUEFmzt-S',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_engu2do',
    investmentTemplateId:
        process.env.NEXT_PUBLIC_EMAILJS_INVESTMENT_TEMPLATE_ID || 'template_3x2tt7a',
    careersTemplateId:
        process.env.NEXT_PUBLIC_EMAILJS_CAREERS_TEMPLATE_ID || 'template_engu2do',
} as const;

export function getEmailJsConfig(type: 'home' | 'investment' | 'careers') {
    return {
        serviceId: EMAILJS_CONFIG.serviceId,
        publicKey: EMAILJS_CONFIG.publicKey,
        templateId:
            type === 'investment'
                ? EMAILJS_CONFIG.investmentTemplateId
                : type === 'careers'
                    ? EMAILJS_CONFIG.careersTemplateId
                    : EMAILJS_CONFIG.templateId,
    };
}
