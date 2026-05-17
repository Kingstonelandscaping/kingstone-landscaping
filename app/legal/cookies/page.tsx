import type { Metadata } from 'next';
import { COMPANY, PHONE_TEL_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy | Kingstone Landscaping',
  description: 'Cookie policy for Kingstone Landscaping. Learn about how we use cookies and tracking technologies.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${COMPANY.url}/legal/cookies` },
};

export default function CookiesPage() {
  const lastUpdated = '2026-05-16';

  return (
    <>
      <section className="section-padding container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-2">Cookie Policy</h1>
        <p className="text-muted mb-8">Last updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">What Are Cookies?</h2>
          <p className="text-muted mb-6">
            Cookies are small data files stored on your browser or device. They help websites remember information about your visit, such as your preferences and login status.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-muted mb-4">{COMPANY.name} uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li><strong>Analytics:</strong> Google Analytics cookies help us understand how visitors use our website</li>
            <li><strong>Functionality:</strong> Cookies remember your preferences and login information</li>
            <li><strong>Marketing:</strong> Tracking cookies may be used for retargeting and marketing purposes</li>
            <li><strong>Security:</strong> Cookies help us detect and prevent fraudulent activity</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
            <li><strong>First-Party Cookies:</strong> Set by our domain</li>
            <li><strong>Third-Party Cookies:</strong> Set by partner services (Google, Calendly)</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted mb-6">
            Our website uses third-party services that may set their own cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li><strong>Google Analytics:</strong> For website usage analytics</li>
            <li><strong>Calendly:</strong> For appointment scheduling</li>
            <li><strong>Formspree:</strong> For contact form processing</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Your Cookie Choices</h2>
          <p className="text-muted mb-6">
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-muted">
            <li>View cookie details</li>
            <li>Accept or reject specific cookies</li>
            <li>Delete existing cookies</li>
            <li>Set preferences for future cookies</li>
          </ul>
          <p className="text-muted mb-6 text-sm">
            Note: Disabling cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">GDPR Compliance</h2>
          <p className="text-muted mb-6">
            For users in the EU, we comply with GDPR requirements. We obtain consent before setting non-essential cookies. You can withdraw consent at any time through your cookie preferences.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted mb-6">
            If you have questions about this Cookie Policy:
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
