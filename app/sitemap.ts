import type { MetadataRoute } from 'next';
import { COMPANY, SERVICE_LANDING_PAGES } from '@/lib/constants';
import { getAllPostSlugs } from '@/content/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.url;
  const staticPages = ['', '/about', '/services', '/blog', '/contact', '/legal/privacy', '/legal/terms', '/legal/cookies'];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICE_LANDING_PAGES.map((p) => ({
    url: `${base}/services/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
