import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/content/blog/posts';
import BookLink from '@/components/BookLink';
import { COMPANY } from '@/lib/constants';
import { generateBlogPostSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    alternates: { canonical: `${COMPANY.url}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogSchema = generateBlogPostSchema({
    title: post.title,
    description: post.metaDescription,
    author: post.author,
    publishedDate: post.publishedDate,
    slug: post.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY.url },
    { name: 'Blog', url: `${COMPANY.url}/blog` },
    { name: post.title, url: `${COMPANY.url}/blog/${post.slug}` },
  ]);

  return (
    <>
      <section className="bg-gradient-to-br from-bg to-charcoal text-white py-16 md:py-20">
        <div className="container-custom max-w-3xl">
          <p className="text-gold text-sm mb-2">
            {post.readTime} read • {post.publishedDate}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{post.title}</h1>
          <p className="text-muted">By {post.author}</p>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-custom max-w-3xl prose-blog">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-12 p-6 bg-charcoal rounded-lg">
            <h2 className="text-xl font-serif font-bold text-gold mb-2">
              Need Professional Help?
            </h2>
            <p className="text-muted mb-4">
              Kingstone Landscaping, formerly Lawn Pups, serves Gainesville, Cumming, Alpharetta,
              and surrounding Georgia areas.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookLink className="btn-book" />
              <Link href="/services" className="btn-services">
                View Services
              </Link>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-block mt-8 text-gold font-semibold hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
