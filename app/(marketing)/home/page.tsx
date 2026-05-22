import AboutSection from '@/components/sections/home/about';
import ContactSection from '@/components/sections/home/contact';
import GallerySection from '@/components/sections/home/gallery';
import HeroSection from '@/components/sections/home/hero';
import ImpactSection from '@/components/sections/home/impact';
import ServicesSection from '@/components/sections/home/services';
import ValuesSection from '@/components/sections/home/values';
import VisionSection from '@/components/sections/home/vision';

export default function HomePage() {
    return (
        <main role="main">
            <HeroSection />
            <AboutSection />
            <ValuesSection />
            <VisionSection />
            <ServicesSection />
            <GallerySection />
            <ImpactSection />
            <ContactSection />
        </main>
    );
}
