import type { Metadata } from 'next';
import Link from 'next/link';
import IconCheck from '@/components/icons/IconCheck';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import BookLink from '@/components/BookLink';
import { COMPANY, WHY_CHOOSE_US } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Kingstone Landscaping | Formerly Lawn Pups',
  description: 'Learn about Kingstone Landscaping, formerly Lawn Pups. Georgia-based family landscaping company serving Atlanta and surrounding areas with excellence.',
  alternates: { canonical: `${COMPANY.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4D2E] to-[#2D6A41] text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About Kingstone Landscaping
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Georgia's trusted landscaping company, formerly known as Lawn Pups.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1B4D2E] mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Kingstone Landscaping started as a local, family-run business dedicated to transforming outdoor spaces across Georgia. With years of experience in lawn care, hardscaping, and landscape design, we've built a reputation for reliability, quality, and customer care.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            What sets us apart is our commitment to long-term customer relationships. We don't believe in contracts or hidden fees. We believe in doing great work and earning your trust—one project at a time.
          </p>
        </div>
      </section>

      {/* Rebrand Story */}
      <section className="section-padding bg-[#F5F1E8]">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 border-l-4 border-[#D4AF37]">
            <h2 className="text-3xl font-serif font-bold text-[#1B4D2E] mb-6">
              Why We Rebranded from Lawn Pups to Kingstone Landscaping
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              After years of serving Georgia families and businesses, we decided it was time to evolve our brand to better reflect our comprehensive expertise and elevated service offerings.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>But here's what didn't change:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <IconCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The same Georgia team that&apos;s been serving your community</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our commitment to quality and customer satisfaction</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our no-contract, transparent pricing philosophy</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our focus on building lasting customer relationships</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Kingstone Landscaping represents the next chapter of growth—with the same values and team you've come to know and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center text-[#1B4D2E] mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((value, idx) => (
              <div key={idx} className="card p-6 text-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1b4d2e]">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#1B4D2E] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1B4D2E] to-[#2D6A41] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover the Kingstone Landscaping difference. Get your free estimate today.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>
    </>
  );
}
