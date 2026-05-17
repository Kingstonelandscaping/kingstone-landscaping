import { Leaf, Scissors, Wind } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { CALENDLY_URL, SERVICE_AREAS_LIST } from '@/lib/constants';
import { cn } from '@/lib/cn';

export type ArticleAdVariant = 'premium' | 'transformation' | 'services';

interface ArticlePromoAdProps {
  variant: ArticleAdVariant;
  className?: string;
}

const variantContent: Record<
  ArticleAdVariant,
  {
    eyebrow: string;
    headline: string;
    subline: string;
    cta: string;
  }
> = {
  premium: {
    eyebrow: 'Kingstone Landscaping',
    headline: 'Premium Lawn Care. Perfectly Simple.',
    subline: '$45 starting price per cut · First cut free · Weekly & bi-weekly plans',
    cta: 'Book a free estimate now',
  },
  transformation: {
    eyebrow: 'The Kingstone Finish',
    headline: 'From overgrown to immaculate.',
    subline:
      'Precision mowing, clean edging, and complete clean-up — the finish your yard deserves.',
    cta: 'Book a free estimate now',
  },
  services: {
    eyebrow: 'Full-service lawn care',
    headline: 'Mowing. Edging. Clean-up.',
    subline: `Serving ${SERVICE_AREAS_LIST} and surrounding areas.`,
    cta: 'Schedule your free estimate',
  },
};

export default function ArticlePromoAd({ variant, className }: ArticlePromoAdProps) {
  const content = variantContent[variant];

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free estimate with Kingstone Landscaping"
      className={cn(
        'group block w-full overflow-hidden rounded-sm border border-gold/40 bg-charcoal',
        'transition-colors hover:border-gold/70 hover:bg-charcoal/90',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        className
      )}
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <BrandLogo size="md" className="mx-auto sm:mx-0 shrink-0" />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold mb-1">
              {content.eyebrow}
            </p>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground leading-snug">
              {content.headline}
            </h2>
            <p className="mt-2 text-sm text-muted font-sans leading-relaxed">{content.subline}</p>

            {variant === 'services' && (
              <ul className="mt-4 space-y-2 text-sm text-foreground/90 font-sans">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Leaf size={16} className="text-gold shrink-0" aria-hidden />
                  Precision mowing
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Scissors size={16} className="text-gold shrink-0" aria-hidden />
                  Clean edging &amp; trimming
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Wind size={16} className="text-gold shrink-0" aria-hidden />
                  Complete clean-up
                </li>
              </ul>
            )}

            {variant === 'premium' && (
              <p className="mt-3 inline-block rounded-sm border border-gold/30 bg-bg/60 px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wide text-gold">
                First cut free
              </p>
            )}

            <span className="mt-4 inline-flex min-h-[44px] items-center justify-center sm:justify-start btn-book px-4 py-2 text-sm font-sans uppercase tracking-wide w-full sm:w-auto pointer-events-none">
              {content.cta}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
