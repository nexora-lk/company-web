import ContactSection from '@/components/sections/home/contact';
import HeroSection from '@/components/sections/home/hero';
import AboutSection from '@/components/sections/home/about';
import ValuesSection from '@/components/sections/home/values';
import VisionSection from '@/components/sections/home/vision';
import ServicesSection from '@/components/sections/home/services';
import GallerySection from '@/components/sections/home/gallery';
import ImpactSection from '@/components/sections/home/impact';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ValuesSection />
            <VisionSection />
            <ServicesSection />
            <GallerySection />
            <ImpactSection />
            <ContactSection />
        </>
    );
}
