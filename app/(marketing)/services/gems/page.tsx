import GallerySection from '../../../../components/sections/services/gems/gallery';
import HeroSection from '../../../../components/sections/services/gems/hero';
import OverviewSection from '../../../../components/sections/services/gems/overview';
import ProductCategoriesSection from '@/components/sections/services/gems/product-categories';
import RoughGemsSection from '@/components/sections/services/gems/rough-gems';
import GemServicesSection from '../../../../components/sections/services/gems/services';
import WhyChooseUsSection from '../../../../components/sections/services/gems/why-choose-us';

export default function GemsPage() {
    return (
        <>
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <ProductCategoriesSection />
            <RoughGemsSection />
            <GemServicesSection />
            <WhyChooseUsSection />
        </>
    );
}
