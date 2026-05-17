'use client';

import { useEffect, useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import { CALENDLY_URL, COMPANY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '@/lib/constants';

export default function BookingSection() {
  const initialized = useRef(false);

  useEffect(() => {
    const initCalendly = () => {
      if (initialized.current || !window.Calendly) return;
      const parent = document.getElementById('calendly-inline-widget');
      if (!parent) return;
      initialized.current = true;
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: parent,
        prefill: {},
        utm: {},
      });
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const interval = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="calendly" className="section-padding section-light border-t border-gold/20">
      <div className="container-custom">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gold mb-2">
            Book Your Free 30-Minute Estimate
          </h2>
          <p className="text-center text-muted mb-8 max-w-xl mx-auto">
            Pick a time that works for you. We will visit your property and provide a clear quote —
            no pressure.
          </p>
        </Reveal>
        <div className="calendly-wrap">
          <div
            id="calendly-inline-widget"
            className="calendly-inline-widget rounded-xl overflow-hidden"
            data-url={CALENDLY_URL}
            style={{ minWidth: '280px', width: '100%', height: 'min(700px, 85vh)' }}
          />
        </div>
        <p className="text-center text-sm text-muted mt-6 mb-4">Prefer to call or text?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={PHONE_TEL_HREF}
            className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center text-sm min-h-[44px] px-6"
          >
            <Phone size={18} />
            Call {COMPANY.phoneDisplayShort}
          </a>
          <a
            href={PHONE_SMS_HREF}
            className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center text-sm min-h-[44px] px-6"
          >
            <MessageSquare size={18} />
            Text Us
          </a>
        </div>
      </div>
    </section>
  );
}
