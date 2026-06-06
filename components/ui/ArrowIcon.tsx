'use client';

import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';

type ArrowType = 'right' | 'up-right' | 'left';

interface ArrowIconProps {
  type?: ArrowType;
  size?: number;
  className?: string;
}

/**
 * Standardized arrow icon component using lucide-react
 * Replaces text arrows (→, ↗, ←) with consistent icons
 */
export default function ArrowIcon({
  type = 'right',
  size = 16,
  className = '',
}: ArrowIconProps) {
  const iconProps = {
    size,
    className: `inline transition-transform duration-300 ${className}`,
  };

  switch (type) {
    case 'up-right':
      return <ArrowUpRight {...iconProps} />;
    case 'left':
      return <ArrowLeft {...iconProps} />;
    case 'right':
    default:
      return <ArrowRight {...iconProps} />;
  }
}

