'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
      document.body.classList.add('cookie-banner-visible');
    }
    return () => {
      document.body.classList.remove('cookie-banner-visible');
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    document.body.classList.remove('cookie-banner-visible');
    setIsVisible(false);
    // Initialize GA4 tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#1B4D2E] shadow-2xl animate-slideInUp">
      <div className="container-custom py-4 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <Cookie className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
          <div className="text-sm md:text-base text-gray-700">
            <p className="font-semibold mb-1">We Use Cookies</p>
            <p className="text-gray-600">
              We use cookies to enhance your browsing experience, analyze traffic, and personalize content.
              By clicking "Accept All", you consent to our cookie usage.{' '}
              <Link
                href="/legal/cookies"
                className="text-[#1B4D2E] hover:underline font-semibold"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <button
          onClick={handleAccept}
          className="btn-primary whitespace-nowrap flex-shrink-0 w-full md:w-auto min-h-[44px]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
