import type { MetadataRoute } from 'next';
import { BRAND_LOGO, COMPANY } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: 'Kingstone',
    description: COMPANY.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: BRAND_LOGO,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/brand/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
