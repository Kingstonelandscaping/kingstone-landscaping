import Image from 'next/image';
import { BRAND_LOGO } from '@/lib/constants';
import { cn } from '@/lib/cn';

const sizes = {
  sm: 44,
  md: 56,
  lg: 80,
  xl: 160,
  hero: 256,
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = 'sm',
  className,
  priority = false,
}: BrandLogoProps) {
  const px = sizes[size];

  return (
    <div
      className={cn(
        'relative flex-shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60 bg-charcoal',
        className
      )}
      style={{ width: px, height: px }}
    >
      <Image
        src={BRAND_LOGO}
        alt="Kingstone Landscaping"
        fill
        className="object-contain p-0.5"
        sizes={`${px}px`}
        priority={priority}
      />
    </div>
  );
}
