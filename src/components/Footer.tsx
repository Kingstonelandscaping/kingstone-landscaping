'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import BookLink from '@/components/BookLink';
import { BUSINESS_HOURS, COMPANY, HEADER_TAGLINE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2918] text-white py-12">
      <div className="container-custom">
        <div className="mb-8 pb-8 border-b border-[#2d6a41]">
          <p className="text-sm text-[#f97316] font-semibold flex items-center gap-2">
            <Star size={16} className="fill-[#f97316] text-[#f97316]" aria-hidden />
            Formerly known as Lawn Pups
          </p>
          <p className="text-gray-300 text-sm mt-2">
            {COMPANY.name} is the rebranded name of Lawn Pups. Same Georgia team, elevated brand.
          </p>
          <p className="text-gray-200 text-sm mt-3">{HEADER_TAGLINE}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size="md" />
              <h3 className="font-serif font-bold text-lg text-[#f97316]">{COMPANY.name}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premium landscaping and yard services across Gainesville, Cumming, Alpharetta, and
              surrounding North Georgia communities.
            </p>
            <BookLink className="btn-book text-sm" />
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f97316]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f97316] transition-colors text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f97316]">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-[#f97316] transition-colors text-gray-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f97316]">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-[#f97316]" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-[#f97316] transition-colors text-gray-200">
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-[#f97316]" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[#f97316] transition-colors text-gray-200">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0 text-[#f97316]" />
                <div className="text-gray-200">
                  <p className="font-medium text-white mb-1">{COMPANY.hours}</p>
                  <details className="group">
                    <summary className="cursor-pointer text-gray-300 hover:text-white text-xs list-none [&::-webkit-details-marker]:hidden">
                      View full schedule
                    </summary>
                    <ul className="mt-2 space-y-1 text-xs text-gray-300">
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
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#f97316]" />
                <span className="text-xs text-gray-200">
                  Gainesville · Cumming · Alpharetta · surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d6a41] pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} {COMPANY.name}. Formerly known as {COMPANY.formerName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
