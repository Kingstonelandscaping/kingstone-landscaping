'use client';

import { useEffect, useRef } from 'react';
import {
  MILES_PER_DEGREE_LAT,
  SERVICE_MAP_HUBS,
  SERVICE_MAP_RADIUS_MILES,
  SERVICE_MAP_SOUTH_BOUND_LAT,
} from '@/lib/constants';
import 'leaflet/dist/leaflet.css';

const MILES_TO_METERS = 1609.34;

/** Cap circle size so coverage does not extend south of Alpharetta */
function southCappedRadiusMiles(hubLat: number): number {
  const milesToSouthBound =
    (hubLat - SERVICE_MAP_SOUTH_BOUND_LAT) * MILES_PER_DEGREE_LAT;
  if (milesToSouthBound <= 0) return 0;
  return Math.min(SERVICE_MAP_RADIUS_MILES, milesToSouthBound);
}

const BRAND_GOLD = '#c9a227';
const BRAND_NAVY = '#152238';

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

      const bounds = L.latLngBounds([]);

      SERVICE_MAP_HUBS.forEach((hub) => {
        const position: L.LatLngExpression = [hub.lat, hub.lng];
        const radiusMiles = southCappedRadiusMiles(hub.lat);

        if (radiusMiles > 0) {
          L.circle(position, {
            radius: radiusMiles * MILES_TO_METERS,
            color: BRAND_GOLD,
            weight: 2,
            fillColor: BRAND_GOLD,
            fillOpacity: 0.2,
          }).addTo(map);
        }

        L.circleMarker(position, {
          radius: 8,
          color: '#ffffff',
          weight: 2,
          fillColor: BRAND_NAVY,
          fillOpacity: 1,
        })
          .bindTooltip(hub.name, {
            permanent: false,
            direction: 'top',
            offset: [0, -8],
          })
          .addTo(map);

        bounds.extend([hub.lat, hub.lng]);

        const latDelta = radiusMiles / MILES_PER_DEGREE_LAT;
        const lngDelta =
          radiusMiles /
          (MILES_PER_DEGREE_LAT * Math.cos((hub.lat * Math.PI) / 180));
        bounds.extend([hub.lat + latDelta, hub.lng - lngDelta]);
        bounds.extend([hub.lat + latDelta, hub.lng + lngDelta]);
        bounds.extend([
          Math.max(hub.lat - latDelta, SERVICE_MAP_SOUTH_BOUND_LAT),
          hub.lng,
        ]);
      });

      map.fitBounds(bounds, { padding: [40, 40] });

      const south = SERVICE_MAP_SOUTH_BOUND_LAT - 0.03;
      map.setMaxBounds(
        L.latLngBounds(
          [south, bounds.getWest() - 0.15],
          [bounds.getNorth() + 0.08, bounds.getEast() + 0.15],
        ),
      );
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
      className={`z-0 min-h-[240px] sm:min-h-[280px] md:min-h-[400px] w-full rounded-2xl overflow-hidden border border-gold/20 shadow-lg [&_.leaflet-control-zoom]:border-0 [&_.leaflet-control-zoom_a]:rounded-md ${className ?? ''}`}
      role="img"
      aria-label="Service area map showing coverage around Gainesville, Cumming, and Alpharetta, Georgia"
    />
  );
}
