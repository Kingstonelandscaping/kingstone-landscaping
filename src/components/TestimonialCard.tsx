'use client';

import { useState } from 'react';
import IconStar from '@/components/icons/IconStar';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  subtitle?: string;
}

const CLAMP_LENGTH = 140;

export default function TestimonialCard({
  name,
  text,
  rating,
  subtitle,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CLAMP_LENGTH;
  const displayText = expanded || !isLong ? text : `${text.slice(0, CLAMP_LENGTH).trim()}…`;

  return (
    <article className="card-premium p-6 h-full flex flex-col">
      <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, i) => (
          <IconStar key={i} className="w-4 h-4 text-gold" />
        ))}
      </div>

      <blockquote className="text-muted text-sm leading-relaxed flex-1 mb-4">
        &ldquo;{displayText}&rdquo;
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gold hover:text-gold-light font-medium mb-4 text-left"
        >
          {expanded ? 'Show less' : 'View more'}
        </button>
      )}

      <footer>
        <p className="font-semibold text-gold">{name}</p>
        {subtitle && <p className="text-xs text-muted mt-0.5">{subtitle}</p>}
      </footer>
    </article>
  );
}
