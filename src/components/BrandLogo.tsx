import Image from 'next/image';
import { cn } from '@/lib/cn';

const LOGO_SRC = '/images/brand/logo-crest.png';

const sizes = {
  sm: 44,
  md: 56,
  lg: 80,
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({ size = 'sm', className, priority = false }: BrandLogoProps) {
  const px = sizes[size];

  return (
    <div
      className={cn(
        'relative flex-shrink-0 overflow-hidden ring-2 ring-gold/50 bg-charcoal',
        className
      )}
      style={{ width: px, height: px }}
    >
      <Image
        src={LOGO_SRC}
        alt="Kingstone Landscaping"
        fill
        className="object-contain p-0.5"
        sizes={`${px}px`}
        priority={priority}
      />
    </div>
  );
}
