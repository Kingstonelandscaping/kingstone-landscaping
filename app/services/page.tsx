import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BookLink from '@/components/BookLink';
import PremiumSection from '@/components/brand/PremiumSection';
import StoneBackground from '@/components/brand/StoneBackground';
import Reveal from '@/components/motion/Reveal';
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
        <StoneBackground />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Kingstone Landscaping Services in Georgia
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Complete lawn care and hardscaping solutions for residential properties across Georgia.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>

      <PremiumSection variant="light" padding>
        {SERVICES.map((service, idx) => (
          <article
            key={service.id}
            id={service.id}
            className={`mb-16 pb-16 border-b border-gold/20 last:border-b-0 flex flex-col gap-8 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <Reveal className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-gold mb-4">{service.name}</h2>
              <p className="text-lg text-muted mb-6">{service.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gold mb-4">Pricing</h3>
                <div className="space-y-2">
                  {service.pricing.map((tier, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 bg-charcoal p-3 rounded-lg border border-gold/10"
                    >
                      <span className="font-semibold text-foreground">{tier.size}</span>
                      <span className="text-gold font-bold">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3">
                  *Pricing may vary based on job size and materials
                </p>
              </div>

              <BookLink className="btn-book" />
            </Reveal>

            <div className="md:w-1/2">
              {'image' in service && service.image ? (
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gold/20">
                  <Image
                    src={service.image}
                    alt={`${service.name} — Kingstone Landscaping Georgia`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="card-premium rounded-2xl p-8 text-center h-72 md:h-96 flex flex-col items-center justify-center">
                  <p className="text-5xl md:text-6xl text-gold font-bold mb-2">{service.price}</p>
                  <p className="text-muted">Starting at</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </PremiumSection>

      <PremiumSection variant="dark" padding>
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted">
              Book your free on-site estimate online. No obligations, no pressure.
            </p>
            <BookLink className="btn-book text-lg" />
          </div>
        </Reveal>
      </PremiumSection>

      <PremiumSection variant="elevated" padding>
        <Reveal>
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">
            Service Areas in Georgia
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_LANDING_PAGES.map((page, i) => (
            <Reveal key={page.slug} delay={i * 0.05}>
              <Link href={`/services/${page.slug}`} className="card p-4 text-center block h-full">
                <span className="font-semibold text-gold">{page.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </PremiumSection>
    </>
  );
}
