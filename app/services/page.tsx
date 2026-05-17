import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BookLink from '@/components/BookLink';
import { COMPANY, SERVICES, SERVICE_LANDING_PAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Professional Landscaping Services | Kingstone Landscaping Georgia',
  description:
    'Discover our comprehensive landscaping services: lawn care, edging, bush trimming, yard cleanup, mulching & landscape design in Georgia. Book a free estimate online.',
  keywords:
    'landscaping services Georgia, lawn care services, landscape design, hardscaping, mulching, brush removal',
  alternates: { canonical: `${COMPANY.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-dark relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            Kingstone Landscaping Services in Georgia
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Complete lawn care and hardscaping solutions for residential properties across Georgia.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              className={`mb-16 pb-16 border-b border-[#e5e7eb] last:border-b-0 flex flex-col gap-8 ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-[#1b4d2e] mb-4">
                  {service.name}
                </h2>
                <p className="text-lg text-[#374151] mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg text-[#1b4d2e] mb-4">Pricing</h3>
                  <div className="space-y-2">
                    {service.pricing.map((tier, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 bg-[#f5f1e8] p-3 rounded-lg"
                      >
                        <span className="font-semibold text-[#1b4d2e]">{tier.size}</span>
                        <span className="text-[#d4af37] font-bold">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#6b7280] mt-3">
                    *Pricing may vary based on job size and materials
                  </p>
                </div>

                <BookLink className="btn-book" />
              </div>

              <div className="md:w-1/2">
                {'image' in service && service.image ? (
                  <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={`${service.name} — Kingstone Landscaping Georgia`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="bg-[#f5f1e8] rounded-2xl p-8 text-center h-72 md:h-96 flex flex-col items-center justify-center">
                    <p className="text-5xl md:text-6xl text-[#d4af37] font-bold mb-2">
                      {service.price}
                    </p>
                    <p className="text-[#6b7280]">Starting at</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Book your free on-site estimate online. No obligations, no pressure.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>

      <section className="section-padding section-cream">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-[#1b4d2e] mb-6 text-center">
            Service Areas in Georgia
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_LANDING_PAGES.map((page) => (
              <Link
                key={page.slug}
                href={`/services/${page.slug}`}
                className="card p-4 text-center hover:shadow-lg"
              >
                <span className="font-semibold text-[#1b4d2e]">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
