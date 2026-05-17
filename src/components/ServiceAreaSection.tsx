'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import BookLink from '@/components/BookLink';
import {
  SERVICE_AREAS,
  SERVICE_MAP_HUBS,
  SERVICE_MAP_RADIUS_MILES,
} from '@/lib/constants';

function MapLoadingPlaceholder() {
  return (
    <div
      className="min-h-[240px] sm:min-h-[280px] md:min-h-[400px] w-full rounded-2xl border border-[#e5e7eb] bg-[#f5f1e8] animate-pulse flex items-center justify-center text-[#6b7280] text-sm"
      aria-hidden
    >
      Loading map…
    </div>
  );
}

const ServiceAreaMap = dynamic(() => import('@/components/ServiceAreaMap'), {
  ssr: false,
  loading: MapLoadingPlaceholder,
});

type ServiceAreaSectionProps = {
  variant?: 'default' | 'compact';
};

export default function ServiceAreaSection({
  variant = 'default',
}: ServiceAreaSectionProps) {
  const isCompact = variant === 'compact';
  const surroundingAreas = SERVICE_AREAS.filter(
    (area) => !SERVICE_MAP_HUBS.some((hub) => hub.name === area),
  );

  return (
    <section
      className={
        isCompact ? 'section-padding section-cream' : 'section-padding bg-white'
      }
      aria-labelledby="service-area-heading"
    >
      <div className="container-custom">
        <div className={isCompact ? 'max-w-5xl mx-auto' : undefined}>
          <h2
            id="service-area-heading"
            className={`font-serif font-bold text-[#1b4d2e] text-center ${
              isCompact ? 'text-2xl mb-2' : 'text-3xl md:text-4xl mb-3'
            }`}
          >
            Where We Serve in North Georgia
          </h2>
          <p
            className={`text-center text-[#6b7280] ${
              isCompact ? 'text-sm mb-6' : 'text-lg mb-10 max-w-2xl mx-auto'
            }`}
          >
            Gainesville, Cumming, Alpharetta &amp; surrounding communities — each
            hub covers about a {SERVICE_MAP_RADIUS_MILES}-mile radius.
          </p>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
            <ServiceAreaMap
              className={isCompact ? 'min-h-[260px] md:min-h-[320px]' : undefined}
            />

            <div className="flex flex-col gap-6">
              <div className="bg-[#f5f1e8] rounded-2xl p-6 border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#1b4d2e] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#f97316] flex-shrink-0" />
                  Primary service hubs
                </h3>
                <ul className="space-y-3">
                  {SERVICE_MAP_HUBS.map((hub) => (
                    <li key={hub.name} className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full bg-[#f97316] flex-shrink-0"
                        aria-hidden
                      />
                      <span className="font-semibold text-[#374151]">{hub.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] flex-1">
                <h3 className="font-semibold text-[#1b4d2e] mb-3">
                  Also serving nearby areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {surroundingAreas.map((area) => (
                    <span
                      key={area}
                      className="text-sm bg-[#f5f1e8] text-[#374151] px-3 py-1 rounded-full border border-[#e5e7eb]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#6b7280] mt-4">
                  Not sure if you&apos;re in our service area? Call or book a free
                  estimate — we&apos;re happy to confirm.
                </p>
              </div>

              {!isCompact && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/services" className="btn-services text-center flex-1">
                    View All Services
                  </Link>
                  <BookLink className="btn-book text-center flex-1" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

