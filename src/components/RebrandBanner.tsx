'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function RebrandBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0f2918] py-2 px-4 animate-slideInDown relative overflow-hidden border-b border-[#2d6a41]/40">
      <div className="absolute inset-0 hero-pattern pointer-events-none text-white" aria-hidden />
      <div className="container-custom flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-16 h-10 md:w-24 md:h-14 flex-shrink-0 hidden sm:block">
            <Image
              src="/images/48BB2803-BAA6-40F9-8955-B72FC5A4BF3D.png"
              alt="Lawn Pups to Kingstone Landscaping rebrand"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </div>
          <p className="text-xs md:text-sm text-gray-200 line-clamp-2 sm:line-clamp-none">
            <strong className="text-white">Kingstone Landscaping</strong> is the rebranded name of{' '}
            <span className="text-[#f97316]">Lawn Pups</span> — same Georgia crew, elevated brand.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
          className="flex-shrink-0 hover:bg-white/10 p-1 rounded transition-colors"
        >
          <X size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}
