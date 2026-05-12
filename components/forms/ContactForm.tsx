'use client';

import { useState, type FormEvent, type ReactNode } from 'react';

export interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  halfWidth?: boolean;
}

interface ContactFormProps {
  title: string;
  fields: FormField[];
  submitLabel?: string;
  children?: ReactNode;
}

export default function ContactForm({
  title,
  fields,
  submitLabel = 'Submit Inquiry →',
  children,
}: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  }

  // Group fields into rows for half-width pairs
  const rows: FormField[][] = [];
  let i = 0;
  while (i < fields.length) {
    if (fields[i].halfWidth && i + 1 < fields.length && fields[i + 1].halfWidth) {
      rows.push([fields[i], fields[i + 1]]);
      i += 2;
    } else {
      rows.push([fields[i]]);
      i += 1;
    }
  }

  return (
    <div className="contact-form-card">
      <h3 style={{ marginBottom: 24 }}>{title}</h3>
      <form onSubmit={handleSubmit}>
        {rows.map((row, ri) =>
          row.length === 2 ? (
            <div className="form-row" key={ri}>
              {row.map((field) => (
                <FieldRenderer key={field.name} field={field} />
              ))}
            </div>
          ) : (
            <FieldRenderer key={row[0].name} field={row[0]} />
          )
        )}
        <button
          type="submit"
          className="btn btn-gold btn-lg btn-full"
          disabled={status !== 'idle'}
          style={status === 'sent' ? { background: '#1B6B3A', color: 'white' } : undefined}
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Submitted!' : submitLabel}
        </button>
        <p style={{ marginTop: 12, fontSize: 13, color: '#4A4A6A', textAlign: 'center' }}>
          🔒 Your information is secure and never shared with third parties.
        </p>
      </form>
      {children}
    </div>
  );
}

function FieldRenderer({ field }: { field: FormField }) {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      {field.type === 'select' ? (
        <select className="form-control" name={field.name} required={field.required}>
          <option value="">{field.placeholder || 'Select...'}</option>
          {field.options?.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          className="form-control"
          name={field.name}
          rows={field.rows || 4}
          placeholder={field.placeholder}
          required={field.required}
        />
      ) : (
        <input
          className="form-control"
          name={field.name}
          type={field.type || 'text'}
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
    </div>
  );
}
