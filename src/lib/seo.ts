import {
  BRAND_LOGO,
  COMPANY,
  CUSTOMER_REVIEWS,
  SEO_REBRAND_IMAGE_ALT,
  SEO_REBRAND_IMAGE_HEIGHT,
  SEO_REBRAND_IMAGE_URL,
  SEO_REBRAND_IMAGE_WIDTH,
  SEO_SITE_URLS,
  SERVICE_AREAS,
  SERVICE_MAP_CENTER,
  SERVICE_MAP_GEO_RADIUS_METERS,
  SERVICES,
  siteMetadata,
} from './constants';

const seoBrandImageObject = () => ({
  '@type': 'ImageObject' as const,
  url: SEO_REBRAND_IMAGE_URL,
  width: SEO_REBRAND_IMAGE_WIDTH,
  height: SEO_REBRAND_IMAGE_HEIGHT,
  caption: SEO_REBRAND_IMAGE_ALT,
  contentUrl: SEO_REBRAND_IMAGE_URL,
});

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export const generateMetaTags = (overrides: Partial<MetaTags>): MetaTags => ({
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  ogImage: siteMetadata.ogImage,
  ogType: 'website',
  ...overrides,
});

/** Shared Open Graph / Twitter image config — rebrand graphic on kingstonelandscaping.com */
export const sharedOpenGraphImages = () => [
  {
    url: SEO_REBRAND_IMAGE_URL,
    width: SEO_REBRAND_IMAGE_WIDTH,
    height: SEO_REBRAND_IMAGE_HEIGHT,
    alt: SEO_REBRAND_IMAGE_ALT,
    type: 'image/png',
  },
];

export const generateBrandImageSchema = () => ({
  '@context': 'https://schema.org',
  ...seoBrandImageObject(),
  name: SEO_REBRAND_IMAGE_ALT,
  representativeOfPage: true,
  about: {
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
  },
});

// Local Business Schema
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.name,
  alternateName: [COMPANY.formerName, 'Lawn Pups Georgia', 'Lawn Pups Landscaping'],
  description: COMPANY.description,
  telephone: COMPANY.phoneE164,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Georgia',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SERVICE_MAP_CENTER.lat,
    longitude: SERVICE_MAP_CENTER.lng,
  },
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SERVICE_MAP_CENTER.lat,
        longitude: SERVICE_MAP_CENTER.lng,
      },
      geoRadius: SERVICE_MAP_GEO_RADIUS_METERS,
    },
    ...SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
      addressRegion: 'Georgia',
      addressCountry: 'US',
    })),
  ],
  priceRange: '$45-$400+',
  url: COMPANY.url,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '07:00',
    closes: '19:00',
  },
  image: [SEO_REBRAND_IMAGE_URL, `${COMPANY.url}${BRAND_LOGO}`],
  logo: seoBrandImageObject(),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(CUSTOMER_REVIEWS.length),
    bestRating: '5',
    worstRating: '5',
  },
  review: CUSTOMER_REVIEWS.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
    },
    reviewBody: review.text,
  })),
});

// FAQ Schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Blog Post Schema
export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  slug: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image || siteMetadata.ogImage,
  author: {
    '@type': 'Organization',
    name: post.author,
  },
  datePublished: post.publishedDate,
  dateModified: post.publishedDate,
  url: `${COMPANY.url}/blog/${post.slug}`,
});

// Organization Schema
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  alternateName: [COMPANY.formerName, 'kingstonelandscaping', 'kingstonelandscaping.com'],
  url: COMPANY.url,
  logo: seoBrandImageObject(),
  image: seoBrandImageObject(),
  description: COMPANY.description,
  sameAs: [...SEO_SITE_URLS],
  contact: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phoneE164,
    contactType: 'Customer Service',
  },
});

// Website Search Action Schema
export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: COMPANY.name,
  alternateName: ['kingstonelandscaping.com', 'KingstoneLandscaping.com'],
  url: COMPANY.url,
  image: seoBrandImageObject(),
  publisher: {
    '@type': 'Organization',
    name: COMPANY.name,
    logo: seoBrandImageObject(),
  },
});

// Service Schema
export const generateServiceSchema = (service: (typeof SERVICES)[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  ...('image' in service &&
    service.image && {
      image: `${COMPANY.url}${service.image}`,
    }),
  areaServed: SERVICE_AREAS.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  provider: {
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    telephone: COMPANY.phoneE164,
  },
  priceRange: service.price,
});

/** @deprecated Reviews are included in generateLocalBusinessSchema() */
export const generateReviewSchema = generateLocalBusinessSchema;

// Breadcrumb Schema
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
