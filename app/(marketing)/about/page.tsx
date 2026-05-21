import WhoWeAreSection from '@/components/sections/about/who_we_are';
import OverviewSection from '@/components/sections/about/overview';
import TeemSection from '@/components/sections/about/directors';
import DirectorsSection from '@/components/sections/about/directors';
import BranchSection from '@/components/sections/about/branch';
import CareersSection from '@/components/sections/about/careers';
export default function AboutPage() {
    return (
        <>
            <WhoWeAreSection />
            <OverviewSection />
            <DirectorsSection />
            <TeemSection />
            <BranchSection />
            <CareersSection />
        </>
    );
}
