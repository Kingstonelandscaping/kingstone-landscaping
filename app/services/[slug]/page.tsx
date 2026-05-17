import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone } from 'lucide-react';
import IconCheck from '@/components/icons/IconCheck';
import BookLink from '@/components/BookLink';
import {
  BOOK_CTA,
  COMPANY,
  PHONE_TEL_HREF,
  SERVICE_LANDING_PAGES,
  SERVICES,
  SERVICE_AREAS,
} from '@/lib/constants';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title} | Kingstone Landscaping`,
    description: `Professional ${page.keyword} from Kingstone Landscaping, formerly Lawn Pups. Serving ${SERVICE_AREAS.slice(0, 4).join(', ')} & more. Free estimates.`,
    alternates: { canonical: `${COMPANY.url}/services/${slug}` },
  };
}

const SERVICE_COPY: Record<string, { intro: string; details: string[] }> = {
  'lawn-care-atlanta-georgia': {
    intro:
      'Kingstone Landscaping provides reliable lawn mowing, edging, and trimming across Atlanta and North Georgia. Weekly and bi-weekly schedules keep your turf healthy through every season.',
    details: [
      'Small lawns: $45–$55 per visit',
      'Medium lawns: $55–$70 per visit',
      'Large lawns: $70–$90 per visit',
      'Includes mowing, edging, and trimming',
    ],
  },
  'hardscaping-georgia': {
    intro:
      'From patios and walkways to retaining walls and fire pits, our hardscaping team builds outdoor spaces that add lasting value to Georgia homes.',
    details: [
      'Custom design consultation',
      'Pavers, natural stone, and segmental block',
      'Proper drainage and base preparation for Georgia clay',
      'Project-based pricing with free estimates',
    ],
  },
  'landscape-design-atlanta': {
    intro:
      'Transform your property with custom landscape design tailored to Atlanta\'s climate, soil, and your lifestyle.',
    details: [
      'Full property assessment',
      'Plant selection including native Georgia species',
      'Bed layout, hardscape integration, and lighting plans',
      'Installation available through our crew',
    ],
  },
  'irrigation-georgia': {
    intro:
      'Efficient irrigation protects your lawn investment. We install, repair, and optimize systems for Georgia\'s rainfall patterns.',
    details: [
      'New system design and installation',
      'Leak detection and head replacement',
      'Seasonal startup and winterization',
      'Smart controller upgrades',
    ],
  },
  'sod-installation-georgia': {
    intro:
      'Instant curb appeal with professional sod installation. We prepare soil, grade properly, and establish watering plans for success.',
    details: [
      'Bermuda, Zoysia, and Centipede options',
      'Soil prep and grading',
      'Post-install care instructions',
      'Custom quotes by square footage',
    ],
  },
  'seasonal-cleanup-georgia': {
    intro:
      'Spring and fall cleanups restore order to overgrown or debris-filled yards across Gainesville, Cumming, and Alpharetta.',
    details: [
      'Light cleanup: $75–$125',
      'Heavy cleanup: $150–$250',
      'Leaf removal, bed clearing, and debris haul-away',
      'Ideal before holidays or spring growth',
    ],
  },
  'commercial-landscaping-georgia': {
    intro:
      'Dependable commercial lawn care and landscape maintenance for offices, retail, and HOAs across North Georgia.',
    details: [
      'Flexible scheduling around business hours',
      'Consistent crew assignments',
      'Mulch, trimming, and litter removal',
      'Custom maintenance contracts — no hidden fees',
    ],
  },
  'tree-shrub-trimming-georgia': {
    intro:
      'Professional bush trimming and shrub maintenance improves curb appeal and plant health throughout the growing season.',
    details: [
      'Bush trimming: $10–$25 per bush',
      'Bush removal: $40–$75 per bush',
      'Pricing based on size and disposal',
      'Stand-alone or bundled with lawn care',
    ],
  },
};

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = SERVICE_LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const service = SERVICES.find((s) => s.id === page.serviceId);
  const copy = SERVICE_COPY[slug];
  if (!service || !copy) notFound();

  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY.url },
    { name: 'Services', url: `${COMPANY.url}/services` },
    { name: page.title, url: `${COMPANY.url}/services/${slug}` },
  ]);

  return (
    <>
      <section className="bg-gradient-to-br from-[#1B4D2E] to-[#2D6A41] text-white py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <p className="text-[#D4AF37] text-sm mb-2">Kingstone Landscaping • Formerly Lawn Pups</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{page.title}</h1>
          <p className="text-lg text-gray-200 mb-8">{copy.intro}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <BookLink className="btn-book min-h-[44px] w-full sm:w-auto" />
            <a
              href={PHONE_TEL_HREF}
              className="btn-outline border-white text-white hover:bg-white hover:text-[#1B4D2E] flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
            >
              <Phone size={18} />
              {COMPANY.phoneDisplayShort}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mb-6">
            {service.name} — What to Expect
          </h2>
          <ul className="space-y-3 mb-8">
            {copy.details.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-700 items-start">
                <IconCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          {service.pricing && (
            <div className="bg-[#F5F1E8] rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-[#1B4D2E] mb-4">Estimated Pricing</h3>
              <div className="space-y-2">
                {service.pricing.map((tier, i) => (
                  <div key={i} className="flex justify-between text-gray-700">
                    <span>{tier.size}</span>
                    <span className="font-semibold">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mb-4">Service Areas</h2>
          <p className="text-gray-700 mb-8">
            We serve {SERVICE_AREAS.join(', ')}, and surrounding Georgia communities. Not sure if
            you&apos;re in our service area? Just ask at {COMPANY.email} or call {COMPANY.phoneDisplay}.
          </p>
          <div className="flex flex-wrap gap-4">
            <BookLink className="btn-book" />
            <Link href="/services" className="btn-outline">
              All Services
            </Link>
            <Link href="/blog" className="btn-outline">
              Landscaping Tips
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
