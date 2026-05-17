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
      <section className="section-dark relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slideInUp">
            <p className="text-[#f97316] font-semibold tracking-wide uppercase text-sm mb-4">
              Lawn Care &amp; Landscaping · North Georgia
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white text-balance">
              A Sharper Yard. More Curb Appeal. Less Stress.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {COMPANY.name}, formerly {COMPANY.formerName} — premium lawn care and landscaping in
              Gainesville, Cumming, Alpharetta, and surrounding North Georgia.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="trust-chip">Free estimates</span>
              <span className="trust-chip">No contracts</span>
              <span className="trust-chip">Same trusted crew</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookLink className="btn-book text-lg font-semibold px-8 w-full sm:w-auto" />
              <Link
                href="/services"
                className="btn-services text-lg font-semibold px-8 w-full sm:w-auto text-center"
              >
                View Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>
                Prefer to call?{' '}
                <a href={PHONE_TEL_HREF} className="text-[#f97316] hover:underline">
                  {COMPANY.phoneDisplayShort}
                </a>
              </span>
              <span className="hidden sm:inline text-gray-500" aria-hidden>
                ·
              </span>
              <a
                href={PHONE_SMS_HREF}
                className="inline-flex items-center gap-1.5 text-[#f97316] hover:underline min-h-[44px] sm:min-h-0"
              >
                <MessageSquare size={16} aria-hidden />
                Text us
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2918] border-y border-[#2d6a41]/50 py-4">
        <div className="container-custom">
          <p className="text-center text-sm text-gray-300">
            <span className="text-white font-medium">{HEADER_TAGLINE}</span>
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-4 text-balance">
            Sound Familiar?
          </h2>
          <p className="text-center text-[#6b7280] mb-12 max-w-2xl mx-auto">
            If you own property in Georgia, you have probably said at least one of these. You are not
            alone — we hear it every week.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {PAIN_POINTS.map((item) => (
              <blockquote
                key={item.label}
                className="card p-6 border-l-4 border-l-[#e85d04] bg-[#f5f1e8]/50"
              >
                <p className="text-[#374151] italic mb-3">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-[#1b4d2e]">{item.label}</p>
              </blockquote>
            ))}
          </div>
          <p className="text-center">
            <BookLink className="btn-book text-lg">
              Let&apos;s fix yours — {BOOK_CTA}
            </BookLink>
          </p>
        </div>
      </section>

      <section className="section-padding section-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center mb-12">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1b4d2e]">{SERVICE_AREAS.length}</p>
              <p className="text-xs sm:text-sm text-[#6b7280]">Cities served</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1b4d2e]">{SERVICES.length}</p>
              <p className="text-xs sm:text-sm text-[#6b7280]">Core services</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1b4d2e]">$45</p>
              <p className="text-xs sm:text-sm text-[#6b7280]">Mowing from</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1b4d2e]">Free</p>
              <p className="text-xs sm:text-sm text-[#6b7280]">On-site estimates</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-12">
            Lawn Care Services in Atlanta Georgia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                priority={index < 3}
              />
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-services text-lg">
              View All Services &amp; Pricing
            </Link>
            <BookLink className="btn-book text-lg" />
          </div>
        </div>
      </section>

      <ServiceAreaSection />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-12">
            Why Choose Kingstone Landscaping?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-[#e85d04] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#1b4d2e] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6b7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-[#1b4d2e] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-[#1b4d2e] mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ReviewsSection />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-12">
            Landscaping Tips &amp; Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card p-6 block hover:shadow-lg"
              >
                <h3 className="font-semibold text-[#1b4d2e] mb-2">{article.title}</h3>
                <p className="text-sm text-[#6b7280]">{article.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-outline text-lg">
              Read All Articles
            </Link>
            <BookLink className="btn-book text-lg" />
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding section-cream">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1b4d2e] mb-12">
            Frequently Asked Questions
          </h2>
          <div>
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      <section className="section-padding section-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your free on-site estimate today. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <BookLink className="btn-book text-lg font-semibold px-8 w-full sm:w-auto" />
            <a
              href={PHONE_TEL_HREF}
              className="btn-outline text-lg font-semibold border-white text-white hover:bg-white hover:text-[#1b4d2e] inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
            >
              <Phone size={20} />
              {COMPANY.phoneDisplayShort}
            </a>
            <a
              href={PHONE_SMS_HREF}
              className="btn-outline text-lg font-semibold border-white text-white hover:bg-white hover:text-[#1b4d2e] inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
            >
              <MessageSquare size={20} />
              Text Us
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex gap-3">
              <Clock size={24} className="text-[#f97316] flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Hours</p>
                <p className="text-gray-300 text-sm">{COMPANY.hours}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={24} className="text-[#f97316] flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Service Areas</p>
                <p className="text-gray-300 text-sm">
                  {SERVICE_AREAS.slice(0, 4).join(', ')} &amp; more
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={24} className="text-[#f97316] flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Questions?</p>
                <a
                  href={PHONE_TEL_HREF}
                  className="text-gray-300 text-sm hover:text-[#f97316]"
                >
                  {COMPANY.phoneDisplayShort}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
