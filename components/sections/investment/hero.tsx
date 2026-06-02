import ServiceHero from '@/components/sections/ServiceHero';

export default function HeroSection() {
    return (
        <ServiceHero
            backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117505/investment-hero_xust91.jpg"
            ariaLabel="Investment Plans"
            eyebrow="For investors · 2026 Round"
            heading={
                <>
                    Real Returns From Real
                    <br />
                    <em className="serif-em">Sri Lankan</em>
                    <br />
                    Operations.
                </>
            }
            descriptions={[
                "Seven investment vehicles across plantation, microfinance, gems, FMCG, real estate, share market, and education — delivering 40-60% annual returns to 3,200+ active investors.",
                "Underwritten by Prestige Glamour Working Capital Solutions, audited by KPMG to ensure transparency and security."
            ]}
            stats={[
                { label: "Target IRR range", value: "18 — 36", em: "%", note: "Across all four models" },
                { label: "Entry level min", value: "200", em: "k", note: "LKR Tier 01 entry" },
                { label: "Compounding", value: "14", em: ".", note: "Founded 2013" },
                { label: "Independent audit", value: "KPMG", em: " SL", note: "Quarterly disclosure" }
            ]}
        />
    );
}
