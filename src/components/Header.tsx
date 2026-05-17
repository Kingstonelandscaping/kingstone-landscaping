'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import BookLink from '@/components/BookLink';
import IconNavHome from '@/components/icons/nav/IconNavHome';
import IconNavServices from '@/components/icons/nav/IconNavServices';
import IconNavAbout from '@/components/icons/nav/IconNavAbout';
import IconNavBlog from '@/components/icons/nav/IconNavBlog';
import IconNavContact from '@/components/icons/nav/IconNavContact';
import { COMPANY, HEADER_TAGLINE, PHONE_TEL_HREF } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home', Icon: IconNavHome },
  { href: '/services', label: 'Services', Icon: IconNavServices },
  { href: '/about', label: 'About', Icon: IconNavAbout },
  { href: '/blog', label: 'Blog', Icon: IconNavBlog },
  { href: '/contact', label: 'Contact', Icon: IconNavContact },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-header">
      <nav className="container-custom flex items-center justify-between gap-2 py-3 md:py-4 bg-bg/90 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 sm:flex-initial group overflow-hidden"
        >
          <BrandLogo size="sm" priority className="shrink-0" />
          <span className="min-w-0 leading-tight truncate flex flex-col">
            <span className="brand-wordmark-kingstone text-sm sm:text-base md:text-lg">
              Kingstone
            </span>
            <span className="brand-wordmark-landscaping hidden sm:block">Landscaping</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-muted hover:text-gold hover:bg-gold/10 font-medium transition-all"
            >
              <link.Icon className="w-4 h-4 text-gold/80" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={PHONE_TEL_HREF}
            className="btn-ghost hidden lg:inline-flex items-center gap-1 text-foreground"
          >
            <Phone size={16} />
            <span>{COMPANY.phoneDisplay}</span>
          </a>
          <BookLink className="btn-book text-sm px-3 sm:px-4">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Free Estimate</span>
          </BookLink>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold hover:bg-gold/10 p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className="bg-charcoal border-y border-gold/20 py-2 px-4">
        <p className="container-custom text-center text-xs sm:text-sm text-foreground font-medium leading-snug line-clamp-3 sm:line-clamp-none">
          {HEADER_TAGLINE}
        </p>
      </div>

      {isOpen && (
        <div className="md:hidden bg-charcoal border-t border-gold/20 animate-slideInDown">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-muted hover:text-gold hover:bg-gold/10 font-medium py-3 px-3 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <link.Icon className="w-5 h-5 text-gold/80" />
                {link.label}
              </Link>
            ))}
            <div onClick={() => setIsOpen(false)}>
              <BookLink className="btn-book flex items-center justify-center py-3 mt-2 w-full" />
            </div>
            <a
              href={PHONE_TEL_HREF}
              className="btn-outline flex items-center justify-center gap-2 py-3 min-h-[44px] w-full"
            >
              <Phone size={18} />
              {COMPANY.phoneDisplayShort}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
