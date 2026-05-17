import Image from 'next/image';
import { cn } from '@/lib/cn';

const LOGO_SRC = '/images/brand/logo.png';

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
        'relative flex-shrink-0 rounded-full overflow-hidden ring-2 ring-[#e85d04]/40 bg-[#1b4d2e]',
        className
      )}
      style={{ width: px, height: px }}
    >
      <Image
        src={LOGO_SRC}
        alt="Kingstone Landscaping"
        fill
        className="object-cover"
        sizes={`${px}px`}
        priority={priority}
      />
    </div>
  );
}
