import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import BookingSection from '@/components/BookingSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ServiceCard from '@/components/ServiceCard';
import ReviewsSection from '@/components/ReviewsSection';
import FAQItem from '@/components/FAQItem';
import IconCheck from '@/components/icons/IconCheck';
import BookLink from '@/components/BookLink';
import HomeHero from '@/components/home/HomeHero';
import PremiumSection from '@/components/brand/PremiumSection';
import GoldDivider from '@/components/brand/GoldDivider';
import Reveal from '@/components/motion/Reveal';
import {
  BOOK_CTA,
  COMPANY,
  HEADER_TAGLINE,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
  SERVICES,
  WHY_CHOOSE_US,
  HOW_IT_WORKS,
  FAQS,
  BLOG_ARTICLES,
  PAIN_POINTS,
  SERVICE_AREAS,
  siteMetadata,
} from '@/lib/constants';
import { generateFAQSchema, sharedOpenGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  alternates: { canonical: COMPANY.url },
  openGraph: {
    url: COMPANY.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: sharedOpenGraphImages(),
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      <HomeHero />

      <section className="bg-charcoal border-y border-gold/20 py-4 relative overflow-hidden">
        <div className="absolute inset-0 gold-grid-texture pointer-events-none" aria-hidden />
        <div className="container-custom relative z-10">
          <GoldDivider className="mb-3" />
          <p className="text-center text-sm text-muted">
            <span className="text-foreground font-medium">{HEADER_TAGLINE}</span>
          </p>
        </div>
      </section>

      <PremiumSection variant="light" padding>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-4 text-balance">
            Sound Familiar?
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            If you own property in Georgia, you have probably said at least one of these. You are not
            alone — we hear it every week.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {PAIN_POINTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <blockquote className="card-premium p-6 border-l-4 border-l-gold h-full">
                <p className="text-muted italic mb-3">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-gold">{item.label}</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <p className="text-center">
          <BookLink className="btn-book text-lg">
            Let&apos;s fix yours — {BOOK_CTA}
          </BookLink>
        </p>
      </PremiumSection>

      <PremiumSection variant="elevated" padding>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center mb-12">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gold">{SERVICE_AREAS.length}</p>
              <p className="text-xs sm:text-sm text-muted">Cities served</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gold">{SERVICES.length}</p>
              <p className="text-xs sm:text-sm text-muted">Core services</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gold">$45</p>
              <p className="text-xs sm:text-sm text-muted">Mowing from</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gold">Free</p>
              <p className="text-xs sm:text-sm text-muted">On-site estimates</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-12">
            Lawn Care Services in Atlanta Georgia
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <ServiceCard {...service} priority={index < 3} />
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-services text-lg">
            View All Services &amp; Pricing
          </Link>
          <BookLink className="btn-book text-lg" />
        </div>
      </PremiumSection>

      <ServiceAreaSection />

      <PremiumSection variant="light" padding>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-12">
            Why Choose Kingstone Landscaping?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-3 text-bg">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection variant="elevated" padding>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-12">
            How It Works
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <div className="relative">
                <div className="w-12 h-12 bg-navy text-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-2 ring-gold/40">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PremiumSection>

      <ReviewsSection />

      <PremiumSection variant="light" padding>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-12">
            Landscaping Tips &amp; Articles
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.slice(0, 3).map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${article.slug}`}
                className="card card-hover p-6 block h-full"
              >
                <h3 className="font-semibold text-gold mb-2">{article.title}</h3>
                <p className="text-sm text-muted">{article.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog" className="btn-outline text-lg">
            Read All Articles
          </Link>
          <BookLink className="btn-book text-lg" />
        </div>
      </PremiumSection>

      <PremiumSection variant="elevated" padding id="faq">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gold mb-12">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="max-w-2xl mx-auto">
          {FAQS.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <FAQItem {...faq} />
            </Reveal>
          ))}
        </div>
      </PremiumSection>

      <BookingSection />

      <PremiumSection variant="dark" showShards shardIntensity="light" padding>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-foreground">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto text-center">
            Book your free on-site estimate today. No obligation, no pressure.
          </p>
        </Reveal>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <BookLink className="btn-book text-lg font-semibold px-8 w-full sm:w-auto" />
          <a
            href={PHONE_TEL_HREF}
            className="btn-secondary text-lg font-semibold px-8 inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
          >
            <Phone size={20} />
            {COMPANY.phoneDisplayShort}
          </a>
          <a
            href={PHONE_SMS_HREF}
            className="btn-outline text-lg font-semibold px-8 inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
          >
            <MessageSquare size={20} />
            Text Us
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="flex gap-3">
            <Clock size={24} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Hours</p>
              <p className="text-muted text-sm">{COMPANY.hours}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin size={24} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Service Areas</p>
              <p className="text-muted text-sm">
                {SERVICE_AREAS.slice(0, 4).join(', ')} &amp; more
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone size={24} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Questions?</p>
              <a href={PHONE_TEL_HREF} className="text-muted text-sm hover:text-gold">
                {COMPANY.phoneDisplayShort}
              </a>
            </div>
          </div>
        </div>
      </PremiumSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
