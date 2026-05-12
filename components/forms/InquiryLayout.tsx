import Link from 'next/link';
import ContactForm, { type FormField } from '@/components/forms/ContactForm';

interface InquiryLayoutProps {
  ctaIcon: string;
  ctaTitle: string;
  ctaText: string;
  contactItems: string[];
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  formTitle: string;
  formFields: FormField[];
  formSubmitLabel?: string;
}

export default function InquiryLayout({
  ctaIcon,
  ctaTitle,
  ctaText,
  contactItems,
  ctaButtonLabel = 'Contact Us →',
  ctaButtonHref = '/investment-plans',
  formTitle,
  formFields,
  formSubmitLabel,
}: InquiryLayoutProps) {
  return (
    <div className="inquiry-layout">
      <div className="inquiry-cta-box">
        <div className="cta-icon">{ctaIcon}</div>
        <h3>{ctaTitle}</h3>
        <p>{ctaText}</p>
        {contactItems.map((item) => (
          <p key={item} className="contact-item">
            {item}
          </p>
        ))}
        <Link href={ctaButtonHref} className="btn btn-outline-white inquiry-cta-btn">
          {ctaButtonLabel}
        </Link>
      </div>
      <ContactForm title={formTitle} fields={formFields} submitLabel={formSubmitLabel} />
    </div>
  );
}
