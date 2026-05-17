import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import BookingSection from '@/components/BookingSection';
import ContactForm from '@/components/ContactForm';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import BookLink from '@/components/BookLink';
import { BOOK_CTA, BUSINESS_HOURS, COMPANY, SERVICE_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Kingstone Landscaping Georgia | Book Free Estimate',
  description:
    'Book a free estimate with Kingstone Landscaping (formerly Lawn Pups). Use our online calendar, call (770) 330-9282, or send an inquiry.',
  alternates: { canonical: `${COMPANY.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-dark relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            Contact Kingstone Landscaping in Georgia
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Kingstone Landscaping, formerly Lawn Pups — book online or reach out. No obligation, no
            pressure.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>

      <BookingSection />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1b4d2e] mb-8">
                Contact Information
              </h2>

              <div className="mb-8">
                <div className="flex gap-3 items-start mb-3">
                  <Phone size={24} className="text-[#d4af37] mt-1" />
                  <div>
                    <p className="font-semibold text-[#1b4d2e]">Call or Text</p>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-lg text-[#1b4d2e] hover:text-[#d4af37] font-bold block"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                    <a
                      href={`sms:${COMPANY.phone}`}
                      className="text-sm text-[#2d6a41] hover:underline"
                    >
                      Send a text message
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-3 items-start mb-3">
                  <Mail size={24} className="text-[#d4af37] mt-1" />
                  <div>
                    <p className="font-semibold text-[#1b4d2e]">Email</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-[#1b4d2e] hover:text-[#d4af37]"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-3 items-start mb-3">
                  <Clock size={24} className="text-[#d4af37] mt-1" />
                  <div>
                    <p className="font-semibold text-[#1b4d2e]">Hours</p>
                    <p className="text-[#374151] mb-2">{COMPANY.hours}</p>
                    <ul className="text-sm text-[#6b7280] space-y-0.5">
                      {BUSINESS_HOURS.map(({ day, hours }) => (
                        <li key={day}>
                          {day}: {hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-3 items-start">
                  <MapPin size={24} className="text-[#d4af37] mt-1" />
                  <div>
                    <p className="font-semibold text-[#1b4d2e] mb-2">Service Areas</p>
                    <p className="text-sm text-[#374151]">
                      {SERVICE_AREAS.join(', ')}, and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#f5f1e8] rounded-2xl p-8 border border-[#e5e7eb]">
                <h2 className="text-2xl font-serif font-bold text-[#1b4d2e] mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-[#6b7280] mb-6">
                  Prefer email over the calendar? Fill out the form and we will get back to you.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaSection variant="compact" />

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-serif font-bold text-[#1b4d2e] mb-6">Have Questions?</h2>
          <p className="text-lg text-[#374151] mb-8">
            Check out our FAQ section or book your free estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#faq" className="btn-outline">
              View FAQs
            </Link>
            <BookLink className="btn-book" />
          </div>
        </div>
      </section>
    </>
  );
}
