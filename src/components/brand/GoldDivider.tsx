import { cn } from '@/lib/cn';

interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn('gold-divider my-4', className)} aria-hidden>
      <span className="gold-divider-diamond" />
    </div>
  );
}
