'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { SEO_REBRAND_IMAGE_PATH } from '@/lib/constants';

export default function RebrandBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-charcoal py-2 px-4 animate-slideInDown relative overflow-hidden border-b border-gold/30">
      <div className="absolute inset-0 stone-texture pointer-events-none opacity-30" aria-hidden />
      <div className="container-custom flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-16 h-10 md:w-24 md:h-14 flex-shrink-0 hidden sm:block">
            <Image
              src={SEO_REBRAND_IMAGE_PATH}
              alt="Lawn Pups to Kingstone Landscaping rebrand"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </div>
          <p className="text-xs md:text-sm text-muted line-clamp-2 sm:line-clamp-none">
            <strong className="text-gold">Kingstone Landscaping</strong> is the rebranded name of{' '}
            <span className="text-foreground">Lawn Pups</span> — same Georgia crew, elevated brand.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
          className="flex-shrink-0 hover:bg-gold/10 p-1 rounded transition-colors text-foreground"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
