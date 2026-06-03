export const EMAILJS_CONFIG = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 't5Rn1TRyGUEFmzt-S',
    
    // Investment & Home Inquiries
    inquiryServiceId: process.env.NEXT_PUBLIC_EMAILJS_INQUIRY_SERVICE_ID || 'service_ub5a6yi',
    inquiryTemplateId: process.env.NEXT_PUBLIC_EMAILJS_INQUIRY_TEMPLATE_ID || 'template_3x2tt7a',

    // Careers Applications
    careersServiceId: process.env.NEXT_PUBLIC_EMAILJS_CAREERS_SERVICE_ID || 'service_bcn13rs',
    careersTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CAREERS_TEMPLATE_ID || 'template_engu2do',
} as const;

export function getEmailJsConfig(type: 'home' | 'investment' | 'careers') {
    const isCareers = type === 'careers';
    
    return {
        publicKey: EMAILJS_CONFIG.publicKey,
        serviceId: isCareers ? EMAILJS_CONFIG.careersServiceId : EMAILJS_CONFIG.inquiryServiceId,
        templateId: isCareers ? EMAILJS_CONFIG.careersTemplateId : EMAILJS_CONFIG.inquiryTemplateId,
    };
}
