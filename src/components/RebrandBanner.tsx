'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function RebrandBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-charcoal py-2 px-4 animate-slideInDown relative overflow-hidden border-b border-gold/30">
      <div className="absolute inset-0 stone-texture pointer-events-none opacity-30" aria-hidden />
      <div className="container-custom flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3 min-w-0">
          <BrandLogo size="sm" className="flex-shrink-0 hidden sm:block" />
          <p className="text-xs md:text-sm text-muted line-clamp-2 sm:line-clamp-none">
            <strong className="text-gold">Kingstone Landscaping</strong> is the rebranded name of{' '}
            <span className="text-foreground">Lawn Pups</span> — same Georgia crew, elevated brand.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
          className="flex-shrink-0 hover:bg-gold/10 p-1 rounded-sm transition-colors text-foreground"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
