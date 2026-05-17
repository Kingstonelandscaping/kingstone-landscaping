'use client';

import { useEffect, useRef } from 'react';
import {
  SERVICE_MAP_HUBS,
  SERVICE_MAP_RADIUS_MILES,
} from '@/lib/constants';
import 'leaflet/dist/leaflet.css';

const MILES_TO_METERS = 1609.34;

const BRAND_GREEN = '#1b4d2e';
const BRAND_ORANGE = '#f97316';

type ServiceAreaMapProps = {
  className?: string;
};

export default function ServiceAreaMap({ className }: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;

    const initMap = async () => {
      const L = (await import('leaflet')).default;

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const radiusMeters = SERVICE_MAP_RADIUS_MILES * MILES_TO_METERS;
      const bounds = L.latLngBounds([]);

      SERVICE_MAP_HUBS.forEach((hub) => {
        const position: L.LatLngExpression = [hub.lat, hub.lng];

        L.circle(position, {
          radius: radiusMeters,
          color: BRAND_GREEN,
          weight: 2,
          fillColor: BRAND_GREEN,
          fillOpacity: 0.2,
        }).addTo(map);

        L.circleMarker(position, {
          radius: 8,
          color: '#ffffff',
          weight: 2,
          fillColor: BRAND_ORANGE,
          fillOpacity: 1,
        })
          .bindTooltip(hub.name, {
            permanent: false,
            direction: 'top',
            offset: [0, -8],
          })
          .addTo(map);

        bounds.extend([hub.lat, hub.lng]);
      });

      map.fitBounds(bounds, { padding: [40, 40] });
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`z-0 min-h-[240px] sm:min-h-[280px] md:min-h-[400px] w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg [&_.leaflet-control-zoom]:border-0 [&_.leaflet-control-zoom_a]:rounded-md ${className ?? ''}`}
      role="img"
      aria-label="Service area map showing coverage around Gainesville, Cumming, and Alpharetta, Georgia"
    />
  );
}
