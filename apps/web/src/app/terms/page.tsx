import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Doqor',
  description: 'Terms and conditions for using Doqor healthcare platform and services.',
};

export default function TermsPage() {
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
                Terms of Service
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            Last updated: November 2, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Doqor's platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-gray-700 mb-4">
              These terms constitute a legally binding agreement between you and Doqor Healthcare Private Limited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Services Description</h2>
            <p className="text-gray-700 mb-4">
              Doqor provides a digital healthcare platform that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Connects patients with verified healthcare professionals</li>
              <li>Facilitates online consultations via video, phone, or chat</li>
              <li>Provides transparent pricing for medical services</li>
              <li>Offers a free first consultation with our in-house doctors</li>
              <li>Enables appointment scheduling and health record management</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We are a platform facilitating healthcare services, not a direct healthcare provider. Doctors on our platform are independent professionals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Eligibility</h2>
            <p className="text-gray-700 mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Be at least 18 years old, or have parental/guardian consent</li>
              <li>Be a resident of India</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate health information to doctors</li>
              <li>Attend scheduled appointments or cancel with appropriate notice</li>
              <li>Pay applicable fees for services rendered</li>
              <li>Not misuse the platform for fraudulent or illegal activities</li>
              <li>Not share your account credentials with others</li>
              <li>Respect the privacy and dignity of healthcare providers</li>
              <li>Not attempt to diagnose or treat yourself based solely on information from our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Medical Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> While we connect you with qualified healthcare professionals, our platform does not provide medical advice directly. 
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Consultations are not a substitute for in-person medical examination in emergency situations</li>
              <li>Doctors may recommend in-person visits when necessary</li>
              <li>In case of medical emergency, call emergency services (108/102) immediately</li>
              <li>We do not guarantee specific medical outcomes</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For complete details, see our <Link href="/disclaimer" className="text-lime-600 hover:text-lime-700 font-semibold">Medical Disclaimer</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Pricing and Payments</h2>
            <p className="text-gray-700 mb-4">
              <strong>Free First Consultation:</strong> Your first consultation with our in-house doctor is free of charge.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Specialist Services:</strong> If specialist care is recommended:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>You will see exact pricing before confirming your booking</li>
              <li>Payment is required only after you consent to the treatment plan</li>
              <li>Prices are fixed and transparent with no hidden fees</li>
              <li>Refunds are subject to our <Link href="/refunds" className="text-lime-600 hover:text-lime-700 font-semibold">Refund Policy</Link></li>
            </ul>
            <p className="text-gray-700 mb-4">
              All payments are processed securely through third-party payment gateways. We do not store your payment card details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on the Doqor platform, including text, graphics, logos, and software, is owned by Doqor or licensed to us and is protected by intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Reverse engineer or extract source code from our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our <Link href="/privacy" className="text-lime-600 hover:text-lime-700 font-semibold">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 mb-4">
              We comply with applicable data protection laws, including the Information Technology Act, 2000 and related rules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Cancellation and Refunds</h2>
            <p className="text-gray-700 mb-4">
              You may cancel appointments subject to the following:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Free cancellation up to 24 hours before scheduled appointment</li>
              <li>Cancellations within 24 hours may incur charges</li>
              <li>No-shows are non-refundable</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For complete refund terms, see our <Link href="/refunds" className="text-lime-600 hover:text-lime-700 font-semibold">Refund Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Doqor is not liable for medical outcomes or treatment decisions made by independent healthcare providers</li>
              <li>We provide the platform "as is" without warranties of any kind</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid by you in the past 12 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Suspend or terminate your account for violation of these terms</li>
              <li>Remove content that violates our policies</li>
              <li>Discontinue services with or without notice</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us. Upon termination, your access to services will cease, but certain provisions of these terms will survive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in [City], India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these terms from time to time. We will notify you of material changes via email or through our platform. Your continued use after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service:
            </p>
            <ul className="list-none mb-4 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:legal@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">legal@doqor.com</a></li>
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
