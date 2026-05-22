'use client';

export default function ContactForm() {
    return (
        <form className="col-span-12 lg:col-span-7 bg-surface rounded-[20px] border border-line p-8 lg:p-12">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <div className="num mb-2">Inquiry · 01</div>
                    <div className="font-display text-[28px] leading-tight">
                        A quick form, hand-read.
                    </div>
                </div>
                <span className="pill">
                    <span className="dot"></span>Reply within 1 working day
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <label className="block">
                    <div className="num mb-1">01 — Your name</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        placeholder="Full name"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">02 — Email</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">03 — Country</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        placeholder="Where are you writing from?"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">04 — I am a…</div>
                    <select
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        required
                    >
                        <option value="">Select...</option>
                        <option>Investor</option>
                        <option>Trade buyer</option>
                        <option>Co-operative partner</option>
                        <option>Journalist</option>
                        <option>Other</option>
                    </select>
                </label>
                <label className="block md:col-span-2 mt-4">
                    <div className="num mb-1">05 — What would you like to discuss?</div>
                    <textarea
                        className="field resize-none focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        rows={3}
                        placeholder="A few lines is enough — we'll pick up the phone."
                        required
                    ></textarea>
                </label>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[12px] text-mute">
                    By submittsubmit" className="btn btn-primary focus:outline-2
                    focus:outline-offset-2 focus:outline-accentg of your details.
                </span>
                <button type="button" className="btn btn-primary">
                    Send enquiry <span className="arrow">→</span>
                </button>
            </div>
        </form>
    );
}
