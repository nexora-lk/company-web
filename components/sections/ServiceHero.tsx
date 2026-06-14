import { ReactNode } from 'react';
import Photo from '@/components/ui/Photo';

interface Stat {
    label: string;
    value: string;
    em?: string;
    note: string;
}

interface ServiceHeroProps {
    backgroundImage: string;
    ariaLabel: string;
    eyebrow: string;
    heading: ReactNode;
    descriptions: string[];
    stats: Stat[];
}

export default function ServiceHero({
    backgroundImage,
    ariaLabel,
    eyebrow,
    heading,
    descriptions,
    stats,
}: ServiceHeroProps) {
    return (
        <section
            className="relative overflow-hidden min-h-[80vh] sm:min-h-screen flex flex-col justify-center bg-ink"
            aria-label={ariaLabel}
        >
            {/* Background Image using next/image for better LCP performance */}
            <div className="absolute inset-0 z-0">
                <Photo
                    src={backgroundImage}
                    alt=""
                    priority
                    fill
                    className="w-full h-full object-cover opacity-60 lg:opacity-100"
                    sizes="100vw"
                />
                {/* Overlay layer - improved for better contrast */}
                <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-black/75"></div>
            </div>

            <div className="relative z-10 max-w-content mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-32 xl:pt-36 pb-12 sm:pb-20 lg:pb-24 xl:pb-28 w-full">
                {/* Section label - improved hierarchy */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 reveal">
                    <span className="hairline-strong flex-1 max-w-20 xs:max-w-30 ml-0 sm:ml-2 bg-white/50!"></span>
                    <span className="eyebrow text-white! text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] font-semibold">
                        {eyebrow}
                    </span>
                </div>

                {/* Main heading - responsive scaling and readability */}
                <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.15] lg:leading-[1.1] xl:leading-[0.95] tracking-tight max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-275 text-white! mb-8 xs:mb-10 sm:mb-12 lg:mb-14 xl:mb-16 reveal">
                    {heading}
                </h1>

                {/* Content container - adjusted for start alignment on large screens */}
                <div className="flex flex-col lg:flex-row items-start justify-start gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
                    {/* Description paragraph - improved typography */}
                    <div className="w-full max-w-full lg:max-w-120 reveal">
                        {descriptions.map((desc, index) => (
                            <p
                                key={index}
                                className={`text-white/90! text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl leading-relaxed sm:leading-[1.75] lg:leading-[1.8] xl:leading-[1.85] font-normal ${
                                    index > 0 ? 'mt-4 xs:mt-6 sm:mt-8' : ''
                                }`}
                            >
                                {desc}
                            </p>
                        ))}
                    </div>

                    {/* Stats grid - adaptive column layout */}
                    <div className="w-full lg:max-w-200 reveal">
                        <div className="mt-6 xs:mt-8 sm:mt-10 lg:mt-0 mb-0 xs:mb-0 sm:mb-0 lg:mb-0 hairline bg-white/20!"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`py-5 xs:py-6 sm:py-8 lg:py-10 border-b border-white/20 sm:border-white/20 ${
                                        index % 2 === 0
                                            ? `pl-0 pr-3 xs:pr-4 sm:pr-6 border-r ${
                                                  index === 0 ? 'lg:pl-0 lg:pr-8' : 'lg:pl-8 lg:pr-8'
                                              }`
                                            : `pl-3 xs:pl-4 sm:pl-6 pr-0 lg:border-r ${
                                                  index === stats.length - 1 ? 'lg:pl-8 lg:pr-0' : 'lg:pl-8 lg:pr-8'
                                              }`
                                    } ${index >= stats.length - 2 ? 'border-b-0' : ''} ${
                                        index === stats.length - 1 ? 'lg:border-r-0' : ''
                                    } lg:border-b-0 reveal`}
                                >
                                    <div className="num text-white/60! mb-1.5 xs:mb-2 sm:mb-3 text-[9px] xs:text-[10px] lg:text-xs uppercase tracking-widest font-semibold">
                                        {stat.label}
                                    </div>
                                    <div className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-none tracking-tight text-white! mb-1.5 xs:mb-2 sm:mb-3">
                                        {stat.value}
                                        {stat.em && (
                                            <em className="serif-em text-sapphire-blue text-lg xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl">
                                                {stat.em}
                                            </em>
                                        )}
                                    </div>
                                    <div className="text-[10px] xs:text-xs lg:text-sm text-white/70! font-light leading-tight">
                                        {stat.note}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hairline bg-white/20! hidden lg:block mt-8 sm:mt-10 lg:mt-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
