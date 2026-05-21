import HeroSection from '../../../../components/sections/services/ngo/hero';
import OverviewSection from '../../../../components/sections/services/ngo/overview';
import GallerySection from '../../../../components/sections/services/ngo/gallery';
import ProgramsSection from '../../../../components/sections/services/ngo/programs';

export default function NGOPage() {
    return (
        <>
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <ProgramsSection />
        </>
    );
}
