import { cn } from '@/lib/cn';

interface StoneBackgroundProps {
  className?: string;
  showGoldVignette?: boolean;
  showGrid?: boolean;
}

export default function StoneBackground({
  className,
  showGoldVignette = true,
  showGrid = false,
}: StoneBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {showGoldVignette && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201, 162, 39, 0.1) 0%, transparent 55%)',
          }}
          aria-hidden
        />
      )}
      <div className="absolute inset-0 stone-texture animate-texture-parallax" aria-hidden />
      {showGrid && <div className="absolute inset-0 gold-grid-texture" aria-hidden />}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </div>
  );
}
