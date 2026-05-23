import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

type PhotoProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    fetchPriority?: 'high' | 'low' | 'auto';
    sizes?: string;
    className?: string;
    crop?: {
        type: 'auto';
        source: true;
    };
};

export default function Photo({
    src,
    alt,
    width = 1600,
    height = 1067,
    priority = false,
    fetchPriority,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    className,
    crop = {
        type: 'auto',
        source: true,
    },
}: PhotoProps) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        return (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                fetchPriority={fetchPriority}
                sizes={sizes}
                className={className}
            />
        );
    }

    return (
        <CldImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            fetchPriority={fetchPriority}
            sizes={sizes}
            className={className}
            crop={crop}
        />
    );
}
