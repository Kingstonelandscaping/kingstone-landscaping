import type { Metadata, Viewport } from 'next';
import { DM_Sans, Cinzel } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RebrandBanner from '@/components/RebrandBanner';
import {
  COMPANY,
  SEO_REBRAND_IMAGE_ALT,
  SEO_REBRAND_IMAGE_HEIGHT,
  SEO_REBRAND_IMAGE_URL,
  SEO_REBRAND_IMAGE_WIDTH,
  siteMetadata,
} from '@/lib/constants';
import {
  generateBrandImageSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  sharedOpenGraphImages,
} from '@/lib/seo';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  applicationName: 'Kingstone Landscaping',
  alternates: {
    canonical: COMPANY.url,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kingstone Landscaping',
    url: COMPANY.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: sharedOpenGraphImages(),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [SEO_REBRAND_IMAGE_URL],
  },
  other: {
    'og:image': SEO_REBRAND_IMAGE_URL,
    'og:image:secure_url': SEO_REBRAND_IMAGE_URL,
    'og:image:width': String(SEO_REBRAND_IMAGE_WIDTH),
    'og:image:height': String(SEO_REBRAND_IMAGE_HEIGHT),
    'og:image:alt': SEO_REBRAND_IMAGE_ALT,
    'og:image:type': 'image/png',
    'twitter:image': SEO_REBRAND_IMAGE_URL,
    'twitter:image:alt': SEO_REBRAND_IMAGE_ALT,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const brandImageSchema = generateBrandImageSchema();

  return (
    <html lang="en" className={`${dmSans.variable} ${cinzel.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href={COMPANY.url} />
        <link rel="image_src" href={SEO_REBRAND_IMAGE_URL} />
        <meta itemProp="image" content={SEO_REBRAND_IMAGE_URL} />
        <meta property="og:image" content={SEO_REBRAND_IMAGE_URL} />
        <meta property="og:image:secure_url" content={SEO_REBRAND_IMAGE_URL} />
        <meta property="og:image:width" content={String(SEO_REBRAND_IMAGE_WIDTH)} />
        <meta property="og:image:height" content={String(SEO_REBRAND_IMAGE_HEIGHT)} />
        <meta property="og:image:alt" content={SEO_REBRAND_IMAGE_ALT} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content={SEO_REBRAND_IMAGE_URL} />
        <meta name="twitter:image:alt" content={SEO_REBRAND_IMAGE_ALT} />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Atlanta" />
        <meta name="geo.position" content="34.2979;-83.8247" />
        <meta name="ICBM" content="34.2979, -83.8247" />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandImageSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-foreground">
        <RebrandBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
