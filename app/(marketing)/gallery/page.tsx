import HeroSection from '@/components/sections/gallery/hero';
import Album1Section from '@/components/sections/gallery/album1';
import Album2Section from '@/components/sections/gallery/album2';
import Album3Section from '@/components/sections/gallery/album3';
import Album4Section from '@/components/sections/gallery/album4';
import BanerSection from '@/components/sections/gallery/baner';
export default function GalleryPage() {
    return (
        <>
            <HeroSection />
            <Album1Section />
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="hairline"></div>
            </div>
            <Album2Section />
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="hairline"></div>
            </div>
            <Album3Section />
            <div className="max-w-content mx-auto px-6 lg:px-10">
                <div className="hairline"></div>
            </div>
            <Album4Section />
            <BanerSection />
            <div className="lb" id="lb">
                <span className="lb-close" id="lbClose">
                    ✕
                </span>
                <img loading="lazy" decoding="async" id="lbImg" alt="" />
                <div className="lb-cap" id="lbCap"></div>
            </div>
        </>
    );
}
