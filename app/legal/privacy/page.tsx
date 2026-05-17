import type { Metadata } from 'next';
import { COMPANY, PHONE_TEL_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kingstone Landscaping',
  description: 'Privacy policy for Kingstone Landscaping. Learn how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${COMPANY.url}/legal/privacy` },
};

export default function PrivacyPage() {
  const lastUpdated = '2026-05-16';

  return (
    <>
      <section className="section-padding container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-2">Privacy Policy</h1>
        <p className="text-muted mb-8">Last updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Introduction</h2>
          <p className="text-muted mb-6">
            {COMPANY.name} (formerly {COMPANY.formerName}) ("we", "us", "our", or "Company") operates the website and services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our services.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Information Collection and Use</h2>
          <p className="text-muted mb-6">
            We collect several different types of information for various purposes to provide and improve our services:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li>Name, email address, and phone number (from contact forms)</li>
            <li>Information about your landscaping project or inquiry</li>
            <li>Log data from website visits (IP address, browser type, pages viewed)</li>
            <li>Cookie and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Use of Data</h2>
          <p className="text-muted mb-6">{COMPANY.name} uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li>To provide and maintain our services</li>
            <li>To respond to customer inquiries and requests</li>
            <li>To send promotional and marketing communications (with consent)</li>
            <li>To monitor and analyze usage and trends</li>
            <li>To detect, prevent and address security issues</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Cookies</h2>
          <p className="text-muted mb-6">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted mb-6">
            Our website may contain links to third-party services (Google Analytics, Calendly) that are not operated by us. We are not responsible for the privacy practices of these services. Please review their privacy policies.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Your Rights</h2>
          <p className="text-muted mb-6">
            You have the right to access, update, or delete your personal information. Please contact us at {COMPANY.email} to exercise these rights.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted mb-6">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-charcoal p-6 rounded-lg text-muted">
            <p><strong>{COMPANY.name}</strong></p>
            <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-gold hover:underline">{COMPANY.email}</a></p>
            <p>Phone: <a href={PHONE_TEL_HREF} className="text-gold hover:underline">{COMPANY.phoneDisplayShort}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
