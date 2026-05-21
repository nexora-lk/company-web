import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  /** Set on the LCP / above-the-fold hero image of a page. */
  priority?: boolean;
  /** Responsive sizes hint; falls back to a sensible site-wide default. */
  sizes?: string;
  className?: string;
};

/**
 * Optimized remote image. Wraps next/image so every photo on the site gets
 * AVIF/WebP, responsive srcset and lazy-loading via the Next image optimizer
 * (configured in next.config.ts). Visual sizing is still driven entirely by
 * the surrounding CSS (`.ph img`, `w-full h-full object-cover`, etc.); the
 * intrinsic width/height below only set the aspect ratio to avoid layout shift.
 */
export default function Photo({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1067}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
