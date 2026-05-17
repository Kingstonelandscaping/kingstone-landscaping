'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import BookLink from '@/components/BookLink';
import GoldDivider from '@/components/brand/GoldDivider';
import {
  BUSINESS_HOURS,
  COMPANY,
  HEADER_TAGLINE,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
} from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg text-foreground py-12 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 stone-texture opacity-[0.05] pointer-events-none" aria-hidden />
      <div className="container-custom relative z-10">
        <div className="mb-8 pb-8 border-b border-gold/20">
          <p className="text-sm text-gold font-semibold flex items-center gap-2">
            <Star size={16} className="fill-gold text-gold" aria-hidden />
            Formerly known as Lawn Pups
          </p>
          <p className="text-muted text-sm mt-2">
            {COMPANY.name} is the rebranded name of Lawn Pups. Same Georgia team, elevated brand.
          </p>
          <p className="text-foreground/80 text-sm mt-3">{HEADER_TAGLINE}</p>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size="md" />
              <h3 className="font-serif font-bold text-lg text-gold-gradient">{COMPANY.name}</h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Premium landscaping and yard services across Gainesville, Cumming, Alpharetta, and
              surrounding North Georgia communities.
            </p>
            <BookLink className="btn-book text-sm" />
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/80 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/80 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/80 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-foreground/80 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-foreground/80 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-foreground/80 hover:text-gold transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div>
                  <a href={PHONE_TEL_HREF} className="text-foreground/80 hover:text-gold transition-colors block">
                    {COMPANY.phoneDisplayShort}
                  </a>
                  <a
                    href={PHONE_SMS_HREF}
                    className="hover:text-gold transition-colors text-muted text-xs mt-1 inline-block"
                  >
                    Send a text →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-gold" />
                <a href={`mailto:${COMPANY.email}`} className="text-foreground/80 hover:text-gold transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div className="text-foreground/80">
                  <p className="font-medium text-foreground mb-1">{COMPANY.hours}</p>
                  <details className="group">
                    <summary className="cursor-pointer text-muted hover:text-gold text-xs list-none [&::-webkit-details-marker]:hidden">
                      View full schedule
                    </summary>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      {BUSINESS_HOURS.map(({ day, hours }) => (
                        <li key={day} className="flex justify-between gap-4">
                          <span>{day}</span>
                          <span>{hours}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gold" />
                <span className="text-xs text-foreground/80">
                  Gainesville · Cumming · Alpharetta · surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted">
          <p>
            © {currentYear} {COMPANY.name}. Formerly known as {COMPANY.formerName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
