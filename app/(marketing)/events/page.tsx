import HeroSection from '@/components/sections/events/hero';
import FeaturedSection from '@/components/sections/events/featured';
import AllProgrammesSection from '../../../components/sections/events/all_programmes';
import BankAccountDetailsSection from '../../../components/sections/events/bank_account_details';
import Banersection from '../../../components/sections/events/baner';

export default function EventPage() {
    return (
        <>
            <HeroSection />
            <FeaturedSection />
            <AllProgrammesSection />
            <BankAccountDetailsSection />
            <Banersection />
        </>
    );
}
