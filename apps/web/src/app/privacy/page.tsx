import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Doqor',
  description: 'Learn how Doqor collects, uses, and protects your personal information and health data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width max-w-4xl py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-forest-700 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                Privacy Policy
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: November 2, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Doqor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare platform and services.
            </p>
            <p className="text-gray-700 mb-4">
              By using Doqor, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-forest-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Date of birth and gender</li>
              <li>Residential address and city</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Health Information</h3>
            <p className="text-gray-700 mb-4">
              With your consent, we collect health-related information including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Medical history and current health concerns</li>
              <li>Symptoms and consultation notes</li>
              <li>Prescriptions and treatment plans</li>
              <li>Test reports and medical documents you upload</li>
            </ul>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Usage Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you use our platform:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our healthcare services</li>
              <li>Schedule and facilitate consultations with doctors</li>
              <li>Process payments and maintain billing records</li>
              <li>Send appointment reminders and important service updates</li>
              <li>Personalize your experience and provide relevant recommendations</li>
              <li>Comply with legal obligations and protect against fraud</li>
              <li>Analyze usage patterns to improve our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Healthcare Providers:</strong> We share relevant health information with doctors you consult through our platform</li>
              <li><strong>Service Providers:</strong> We use trusted third-party services for payment processing, email delivery, and analytics</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In case of merger or acquisition, your information may be transferred (you will be notified)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure server infrastructure with regular security audits</li>
              <li>Access controls limiting employee access to sensitive data</li>
              <li>Regular security training for our team</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> Receive your health records in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, contact us at <a href="mailto:privacy@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">privacy@doqor.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. For more details, see our <Link href="/cookies" className="text-lime-600 hover:text-lime-700 font-semibold">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 18 without parental consent. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our platform. Your continued use of our services after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mb-4 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:privacy@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">privacy@doqor.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919860151400" className="text-lime-600 hover:text-lime-700 font-semibold">+91 986 015 1400</a></li>
              <li><strong>Address:</strong> Doqor Healthcare Private Limited, India</li>
            </ul>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
