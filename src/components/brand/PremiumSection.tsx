import { cn } from '@/lib/cn';
import StoneBackground from './StoneBackground';
import ShardBurst from './ShardBurst';

interface PremiumSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'elevated' | 'light';
  showShards?: boolean;
  shardIntensity?: 'full' | 'light';
  padding?: boolean;
  id?: string;
}

export default function PremiumSection({
  children,
  className,
  variant = 'dark',
  showShards = false,
  shardIntensity = 'full',
  padding = true,
  id,
}: PremiumSectionProps) {
  const variantClass =
    variant === 'elevated'
      ? 'section-elevated'
      : variant === 'light'
        ? 'section-light'
        : 'section-dark';

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        variantClass,
        padding && 'section-padding',
        className
      )}
    >
      {variant === 'dark' && <StoneBackground showGrid={showShards} />}
      {variant === 'elevated' && (
        <div className="absolute inset-0 stone-texture opacity-[0.06] pointer-events-none" aria-hidden />
      )}
      {showShards && <ShardBurst intensity={shardIntensity} />}
      <div className="container-custom relative z-10">{children}</div>
    </section>
  );
}
