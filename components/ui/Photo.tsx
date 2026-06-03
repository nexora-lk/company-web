import Image from 'next/image';

type PhotoProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    quality?: number;
    fetchPriority?: 'high' | 'low' | 'auto';
    sizes?: string;
    className?: string;
};

/**
 * Optimized Image component wrapping next/image with Cloudinary loader.
 * Default sizes are tuned for a standard responsive grid (1 col mobile, 2 col tablet, 3 col desktop).
 */
export default function Photo({
    src,
    alt,
    width,
    height,
    fill = false,
    priority = false,
    quality,
    fetchPriority,
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    className,
}: PhotoProps) {
    // If not using 'fill', we need either dimensions or a very large default to maintain aspect ratio
    const finalWidth = !fill ? (width || 1600) : undefined;
    const finalHeight = !fill ? (height || 1067) : undefined;

    return (
        <Image
            src={src}
            alt={alt}
            width={finalWidth}
            height={finalHeight}
            fill={fill}
            priority={priority}
            quality={quality}
            fetchPriority={fetchPriority}
            sizes={sizes}
            className={className}
        />
    );
}
