'use client';

export default function InvestmentContactForm() {
    return (
        <form className="col-span-12 lg:col-span-7 bg-bg text-ink rounded-[18px] p-8 lg:p-10">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="num">Investment Inquiry · Form</div>
                    <div className="font-display text-[26px] leading-tight mt-1">
                        Tell us where to start.
                    </div>
                </div>
                <span className="pill">
                    <span className="dot"></span>Reply within 1 day
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <label className="block">
                    <div className="num mb-1">01 — Name</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        placeholder="Full name"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">02 — Phone</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        type="tel"
                        placeholder="+94 …"
                        required
                    />
                </label>
                <label className="block md:col-span-2">
                    <div className="num mb-1">03 — Email</div>
                    <input
                        className="field focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        type="email"
                        placeholder="you@company.com"
                        required
                    />
                </label>
                <label className="block">
                    <div className="num mb-1">04 — Model of interest</div>
                    <select
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        required
                    >
                        <option value="">Select model...</option>
                        <option>01 — Cultivation Contribution Projects</option>
                        <option>02 — Gold Spirits of Landing Scheme</option>
                        <option>03 — Real Estate Land Value Appreciation</option>
                        <option>04 — Partner in FMCG Distribution &amp; Processing</option>
                        <option>Mixed / please advise</option>
                    </select>
                </label>
                <label className="block">
                    <div className="num mb-1">05 — Ticket size</div>
                    <select
                        className="field bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        required
                    >
                        <option value="">Select amount...</option>
                        <option>LKR 250,000 — 1M</option>
                        <option>LKR 1M — 5M</option>
                        <option>LKR 5M — 25M</option>
                        <option>LKR 25M+</option>
                    </select>
                </label>
                <label className="block md:col-span-2 mt-3">
                    <div className="num mb-1">06 — Message</div>
                    <textarea
                        className="field resize-none focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                        rows={3}
                        placeholder="A few lines on your investment goals."
                        required
                    ></textarea>
                </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[12px] text-mute">
                    By submitting you agree to our quiet handling of your details.
                </span>
                <button
                    type="submit"
                    className="btn btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                    Submit enquiry <span className="arrow">→</span>
                </button>
            </div>
        </form>
    );
}
