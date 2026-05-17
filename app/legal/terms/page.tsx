import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | Kingstone Landscaping',
  description: 'Terms of Service for Kingstone Landscaping. Please read before using our services.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${COMPANY.url}/legal/terms` },
};

export default function TermsPage() {
  const lastUpdated = '2026-05-16';

  return (
    <>
      <section className="section-padding container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#1B4D2E] mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">1. Agreement</h2>
          <p className="text-gray-700 mb-6">
            By using {COMPANY.name}'s services, you agree to these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">2. Service Description</h2>
          <p className="text-gray-700 mb-6">
            {COMPANY.name} provides professional landscaping services including lawn care, maintenance, design, hardscaping, and related services in Georgia.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">3. Pricing and Payment</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>All prices are subject to change without notice</li>
            <li>Estimates are provided free and without obligation</li>
            <li>Final pricing will be confirmed before work begins</li>
            <li>Payment terms will be discussed at the time of estimate</li>
            <li>Prices may vary based on job size, materials, and accessibility</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">4. No Contracts or Cancellation Policy</h2>
          <p className="text-gray-700 mb-6">
            {COMPANY.name} operates on a service-by-service basis with no long-term contracts required. Customers may cancel recurring services at any time with 48 hours notice.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">5. Liability Limitation</h2>
          <p className="text-gray-700 mb-6">
            {COMPANY.name} is not liable for damages resulting from weather, acts of nature, or conditions beyond our control. We perform services in a professional and careful manner according to industry standards.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">6. Customer Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>Ensure all underground utilities are marked before service begins</li>
            <li>Provide clear access to work areas</li>
            <li>Verify property boundaries and any restrictions</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">7. Warranty</h2>
          <p className="text-gray-700 mb-6">
            We guarantee our work to be performed in a professional and workmanlike manner. If you are not satisfied, please notify us within 7 days for corrective action.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">8. Website Use</h2>
          <p className="text-gray-700 mb-6">
            You agree to use this website only for lawful purposes and not in any way that violates any applicable law or regulation. Unauthorized access or use is prohibited.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            {COMPANY.name} reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of changes.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#1B4D2E] mt-8 mb-4">10. Contact</h2>
          <p className="text-gray-700 mb-6">
            For questions about these Terms of Service:
          </p>
          <div className="bg-[#F5F1E8] p-6 rounded-lg text-gray-700">
            <p><strong>{COMPANY.name}</strong></p>
            <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-[#1B4D2E] hover:underline">{COMPANY.email}</a></p>
            <p>Phone: <a href={`tel:${COMPANY.phone}`} className="text-[#1B4D2E] hover:underline">{COMPANY.phoneDisplay}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
