import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/content/blog/posts';
import { COMPANY } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Kingstone Landscaping Tips & Advice',
  description: 'Expert landscaping tips, lawn care guides, and hardscaping inspiration from Kingstone Landscaping.',
  alternates: { canonical: `${COMPANY.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4D2E] to-[#2D6A41] text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Kingstone Landscaping Blog — Georgia Lawn Care Tips
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert insights on lawn care, design trends, and seasonal maintenance from your trusted local Georgia landscaping team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card p-6 hover:shadow-xl transition-all group"
              >
                <div className="mb-4">
                  <p className="text-sm text-[#D4AF37] font-semibold">
                    {article.publishedDate}
                  </p>
                  <p className="text-xs text-gray-500">{article.readTime} read</p>
                </div>
                <h2 className="text-xl font-serif font-bold text-[#1B4D2E] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center text-[#1B4D2E] font-semibold text-sm">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[#1B4D2E] text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Get Landscaping Tips Delivered
          </h2>
          <p className="text-gray-200 mb-6">
            Subscribe to our newsletter for seasonal lawn care tips, design inspiration, and exclusive offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button type="submit" className="btn-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
