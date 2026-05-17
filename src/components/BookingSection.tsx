'use client';

import { useEffect, useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CALENDLY_URL, COMPANY } from '@/lib/constants';

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
    <section id="calendly" className="section-padding bg-white border-t border-[#e5e7eb]">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1b4d2e] mb-2">
          Book Your Free 30-Minute Estimate
        </h2>
        <p className="text-center text-[#6b7280] mb-8 max-w-xl mx-auto">
          Pick a time that works for you. We will visit your property and provide a clear quote — no
          pressure.
        </p>
        <div
          id="calendly-inline-widget"
          className="calendly-inline-widget rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm"
          data-url={CALENDLY_URL}
          style={{ minWidth: '280px', width: '100%', height: 'min(700px, 85vh)' }}
        />
        <p className="text-center text-sm text-[#6b7280] mt-6 mb-4">Prefer to call or text?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${COMPANY.phone}`}
            className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center text-sm"
          >
            <Phone size={18} />
            Call {COMPANY.phoneDisplay}
          </a>
          <a
            href={`sms:${COMPANY.phone}`}
            className="btn-ghost flex items-center gap-2 w-full sm:w-auto justify-center border border-[#e5e7eb]"
          >
            <MessageSquare size={18} />
            Text Us
          </a>
        </div>
      </div>
    </section>
  );
}
