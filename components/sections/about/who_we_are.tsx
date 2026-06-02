import ServiceHero from '@/components/sections/ServiceHero';

export default function WhoWeAreSection() {
    return (
        <ServiceHero
            backgroundImage="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780117526/about-hero_lvrtcj.jpg"
            ariaLabel="About Prestige Glamour"
            eyebrow="Who We Are"
            heading={
                <>
                    An investment company built on
                    <em className="serif-em block sm:inline"> real </em>
                    operations 14 years, 23 branches, 3,200+ investors.
                </>
            }
            descriptions={[
                "Prestige Glamour Working Capital Solutions was founded in 2013 with a clear mandate: to create direct investment opportunities in real Sri Lankan businesses — for anyone, from anywhere, with capital to deploy.",
                "Today we operate 7 active divisions from our head office in Payagala, with 23 branches across 8 provinces and 800+ employees on direct payroll."
            ]}
            stats={[
                { label: "Founded", value: "2013", note: "Year established" },
                { label: "Branches", value: "23", em: "+", note: "Across 8 provinces" },
                { label: "Employees", value: "800", em: "+", note: "Direct payroll" },
                { label: "Investors", value: "3,200", em: "+", note: "Active worldwide" }
            ]}
        />
    );
}
