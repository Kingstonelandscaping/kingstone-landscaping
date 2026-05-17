import Image from 'next/image';
import { BRAND_LOGO } from '@/lib/constants';
import { cn } from '@/lib/cn';

/** Source asset is 1312×1199 — slightly wider than tall */
const LOGO_ASPECT = 1312 / 1199;

const sizes = {
  sm: 44,
  md: 56,
  lg: 80,
  xl: 160,
  hero: 256,
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizes;
  /** Circle for nav/icons; rounded shows the full logo without cropping text */
  shape?: 'circle' | 'rounded';
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = 'sm',
  shape = 'circle',
  className,
  priority = false,
}: BrandLogoProps) {
  const px = sizes[size];
  const isRounded = shape === 'rounded';
  const height = isRounded && size === 'hero' ? 240 : px;
  const width = isRounded ? Math.round(height * LOGO_ASPECT) : px;

  return (
    <div
      className={cn(
        'relative shrink-0 overflow-hidden bg-black ring-2 ring-gold/60',
        isRounded ? 'rounded-2xl' : 'rounded-full',
        className
      )}
      style={{ width, height }}
    >
      <Image
        src={BRAND_LOGO}
        alt="Kingstone Landscaping"
        fill
        className={isRounded ? 'object-contain p-1' : 'object-cover'}
        sizes={`${width}px`}
        priority={priority}
      />
    </div>
  );
}
