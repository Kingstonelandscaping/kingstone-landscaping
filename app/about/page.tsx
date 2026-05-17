import type { Metadata } from 'next';
import IconCheck from '@/components/icons/IconCheck';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import BookLink from '@/components/BookLink';
import PremiumSection from '@/components/brand/PremiumSection';
import Reveal from '@/components/motion/Reveal';
import { COMPANY, WHY_CHOOSE_US } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Kingstone Landscaping | Formerly Lawn Pups',
  description:
    'Learn about Kingstone Landscaping, formerly Lawn Pups. Georgia-based family landscaping company serving Atlanta and surrounding areas with excellence.',
  alternates: { canonical: `${COMPANY.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PremiumSection variant="dark" showShards padding={false} className="py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
          About Kingstone Landscaping
        </h1>
        <p className="text-xl text-muted max-w-2xl">
          Georgia&apos;s trusted landscaping company, formerly known as Lawn Pups.
        </p>
      </PremiumSection>

      <PremiumSection variant="light" padding>
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Our Story</h2>
            <p className="text-lg text-muted mb-4">
              Kingstone Landscaping started as a local, family-run business dedicated to
              transforming outdoor spaces across Georgia. With years of experience in lawn care,
              hardscaping, and landscape design, we&apos;ve built a reputation for reliability,
              quality, and customer care.
            </p>
            <p className="text-lg text-muted mb-6">
              What sets us apart is our commitment to long-term customer relationships. We
              don&apos;t believe in contracts or hidden fees. We believe in doing great work and
              earning your trust—one project at a time.
            </p>
          </div>
        </Reveal>
      </PremiumSection>

      <PremiumSection variant="elevated" padding>
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="card-premium rounded-lg p-8 md:p-12 border-l-4 border-l-gold">
              <h2 className="text-3xl font-serif font-bold text-gold mb-6">
                Why We Rebranded from Lawn Pups to Kingstone Landscaping
              </h2>
              <p className="text-lg text-muted mb-4">
                After years of serving Georgia families and businesses, we decided it was time to
                evolve our brand to better reflect our comprehensive expertise and elevated service
                offerings.
              </p>
              <p className="text-lg text-muted mb-4">
                <strong className="text-foreground">But here&apos;s what didn&apos;t change:</strong>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "The same Georgia team that's been serving your community",
                  'Our commitment to quality and customer satisfaction',
                  'Our no-contract, transparent pricing philosophy',
                  'Our focus on building lasting customer relationships',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <IconCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted">
                Kingstone Landscaping represents the next chapter of growth—with the same values and
                team you&apos;ve come to know and trust.
              </p>
            </div>
          </div>
        </Reveal>
      </PremiumSection>

      <PremiumSection variant="light" padding>
        <Reveal>
          <h2 className="text-3xl font-serif font-bold text-center text-gold mb-12">Our Values</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((value, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <div className="card p-6 text-center h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4 text-bg">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gold mb-2">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PremiumSection>

      <ServiceAreaSection />

      <PremiumSection variant="dark" showShards shardIntensity="light" padding>
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted">
              Discover the Kingstone Landscaping difference. Get your free estimate today.
            </p>
            <BookLink className="btn-book text-lg" />
          </div>
        </Reveal>
      </PremiumSection>
    </>
  );
}
