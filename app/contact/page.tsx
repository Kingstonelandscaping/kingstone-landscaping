import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import BookingSection from '@/components/BookingSection';
import ContactForm from '@/components/ContactForm';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import BookLink from '@/components/BookLink';
import PremiumSection from '@/components/brand/PremiumSection';
import StoneBackground from '@/components/brand/StoneBackground';
import {
  BUSINESS_HOURS,
  COMPANY,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
  SERVICE_AREAS,
} from '@/lib/constants';

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
        <StoneBackground />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Contact Kingstone Landscaping in Georgia
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Kingstone Landscaping, formerly Lawn Pups — book online or reach out. No obligation, no
            pressure.
          </p>
          <BookLink className="btn-book text-lg" />
        </div>
      </section>

      <BookingSection />

      <PremiumSection variant="light" padding>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gold mb-8">Contact Information</h2>

            <div className="mb-8">
              <div className="flex gap-3 items-start mb-3">
                <Phone size={24} className="text-gold mt-1" />
                <div>
                  <p className="font-semibold text-gold">Call or Text</p>
                  <p className="text-lg text-gold-light font-bold mb-3">
                    {COMPANY.phoneDisplayShort}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={PHONE_TEL_HREF}
                      className="btn-outline flex items-center justify-center gap-2 min-h-[44px] flex-1 text-sm"
                    >
                      <Phone size={18} aria-hidden />
                      Call
                    </a>
                    <a
                      href={PHONE_SMS_HREF}
                      className="btn-outline flex items-center justify-center gap-2 min-h-[44px] flex-1 text-sm"
                    >
                      <MessageSquare size={18} aria-hidden />
                      Text
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex gap-3 items-start mb-3">
                <Mail size={24} className="text-gold mt-1" />
                <div>
                  <p className="font-semibold text-gold">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-gold hover:text-gold-light">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex gap-3 items-start mb-3">
                <Clock size={24} className="text-gold mt-1" />
                <div>
                  <p className="font-semibold text-gold">Hours</p>
                  <p className="text-muted mb-2">{COMPANY.hours}</p>
                  <ul className="text-sm text-muted space-y-0.5">
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
                <MapPin size={24} className="text-gold mt-1" />
                <div>
                  <p className="font-semibold text-gold mb-2">Service Areas</p>
                  <p className="text-sm text-muted">
                    {SERVICE_AREAS.join(', ')}, and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gold mb-2">Send a Message</h2>
              <p className="text-sm text-muted mb-6">
                Prefer email over the calendar? Fill out the form and we will get back to you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </PremiumSection>

      <ServiceAreaSection variant="compact" />

      <PremiumSection variant="elevated" padding>
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-gold mb-6">Have Questions?</h2>
          <p className="text-lg text-muted mb-8">
            Check out our FAQ section or book your free estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#faq" className="btn-outline">
              View FAQs
            </Link>
            <BookLink className="btn-book" />
          </div>
        </div>
      </PremiumSection>
    </>
  );
}
