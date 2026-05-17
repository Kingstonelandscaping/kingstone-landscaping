'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import IconStar from '@/components/icons/IconStar';
import TestimonialCard from '@/components/TestimonialCard';
import Reveal from '@/components/motion/Reveal';
import { CUSTOMER_REVIEWS, GOOGLE_MAPS_REVIEWS_URL, REVIEWS } from '@/lib/constants';

const reviewCount = CUSTOMER_REVIEWS.length;
const INITIAL_STORIES_VISIBLE = 3;

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAllStories, setShowAllStories] = useState(false);

  const visibleStories = showAllStories
    ? CUSTOMER_REVIEWS
    : CUSTOMER_REVIEWS.slice(0, INITIAL_STORIES_VISIBLE);
  const hasMoreStories = CUSTOMER_REVIEWS.length > INITIAL_STORIES_VISIBLE;

  return (
    <section className="section-padding section-elevated relative overflow-hidden">
      <div className="absolute inset-0 stone-texture pointer-events-none opacity-40" aria-hidden />
      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-10 md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">
              Google Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              What Our Clients Say
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <IconStar key={i} className="w-6 h-6 text-gold" />
              ))}
              <span className="ml-2 text-lg font-bold text-gold">5.0</span>
              <span className="text-sm text-muted">({reviewCount} reviews)</span>
            </div>
            <p className="text-muted max-w-xl mx-auto text-sm md:text-base">
              Real customer photos and reviews from Google — tap any project to view the original
              review.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {REVIEWS.map((review, idx) => (
            <Link
              key={review.image}
              href={review.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`review-card group ${activeIndex === idx ? 'review-card-active' : ''}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex(null)}
              aria-label={`View Google review ${idx + 1}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-charcoal">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-[1.02]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <IconStar key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground text-[11px] sm:text-xs font-medium opacity-90 group-hover:opacity-100">
                    View on Google →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book text-base"
          >
            Read All Google Reviews
          </Link>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">
                Customer Stories
              </p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Trusted by Homeowners Across North Georgia
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStories.map((review, idx) => (
              <Reveal key={`${review.name}-${idx}`} delay={idx * 0.06}>
                <TestimonialCard
                  name={review.name}
                  text={review.text}
                  rating={review.rating}
                  {...('subtitle' in review && review.subtitle
                    ? { subtitle: review.subtitle }
                    : {})}
                />
              </Reveal>
            ))}
          </div>

          {hasMoreStories && (
            <div className="text-center mt-8">
              <button
                type="button"
                onClick={() => setShowAllStories((prev) => !prev)}
                className="btn-outline text-base min-h-[44px] px-8"
                aria-expanded={showAllStories}
              >
                {showAllStories
                  ? 'Show fewer reviews'
                  : `View more reviews (${CUSTOMER_REVIEWS.length - INITIAL_STORIES_VISIBLE} more)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
