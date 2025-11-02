import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy | Doqor',
  description: 'Learn about Doqor\'s refund and cancellation policy for consultations and healthcare services.',
};

export default function RefundsPage() {
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
                Refund Policy
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Refund Policy</h1>
          <p className="text-gray-600">
            Last updated: November 2, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              At Doqor, we strive to provide quality healthcare services and maintain transparent policies regarding cancellations and refunds. This policy outlines the terms and conditions for refunds of consultations and services booked through our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Free First Consultation</h2>
            <p className="text-gray-700 mb-4">
              Your first consultation with our in-house doctor is completely free. Since no payment is required:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>You can cancel or reschedule at any time without penalty</li>
              <li>No refund is applicable as no payment is collected</li>
              <li>We encourage you to cancel if you cannot attend so we can help other patients</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Specialist Consultations</h2>
            <p className="text-gray-700 mb-4">
              When you book a paid specialist consultation or treatment plan:
            </p>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Cancellation Before Consultation</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>✓ More than 24 hours before appointment:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Full refund (100%) to original payment method</li>
                <li>Processed within 5-7 business days</li>
                <li>No cancellation fee</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ 12-24 hours before appointment:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>80% refund (20% cancellation fee applies)</li>
                <li>Refund processed within 5-7 business days</li>
                <li>Cancellation fee covers administrative costs</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>✗ Less than 12 hours before appointment:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>50% refund (50% cancellation fee applies)</li>
                <li>Doctors allocate time for your appointment</li>
                <li>Last-minute cancellations impact availability for other patients</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-forest-800 mb-3 mt-6">No-Shows</h3>
            <p className="text-gray-700 mb-4">
              If you miss your appointment without prior cancellation:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>No refund</strong> will be issued (100% fee retained)</li>
              <li>Doctors cannot see other patients during your reserved slot</li>
              <li>Please reschedule or cancel in advance if you cannot attend</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Treatment Plans and Packages</h2>
            <p className="text-gray-700 mb-4">
              For multi-session treatment plans (e.g., 30-day acne treatment, weight management programs):
            </p>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Before Treatment Starts</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Cancel within 48 hours of payment for full refund</li>
              <li>Valid only if no consultation or medication has been provided</li>
              <li>Refund processed within 7-10 business days</li>
            </ul>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">After Treatment Starts</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Refunds calculated on pro-rata basis for unused sessions</li>
              <li>Deduction for services already rendered and medications provided</li>
              <li>Minimum 20% administrative fee applies</li>
              <li>No refund if more than 50% of plan is completed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Refund Eligibility - Special Cases</h2>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Technical Issues</h3>
            <p className="text-gray-700 mb-4">
              If your consultation could not be completed due to technical issues on our end:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Full refund or free rescheduling offered</li>
              <li>Report technical issues within 24 hours</li>
              <li>Provide details of the problem encountered</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <em>Note: Technical issues on the patient's end (poor internet, device problems) do not qualify for refunds.</em>
            </p>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Doctor Cancellation</h3>
            <p className="text-gray-700 mb-4">
              If a doctor cancels your appointment:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Option 1: Full refund to original payment method</li>
              <li>Option 2: Free rescheduling with same or different doctor</li>
              <li>Priority booking for next available slot</li>
            </ul>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Service Quality Issues</h3>
            <p className="text-gray-700 mb-4">
              If you're dissatisfied with service quality:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Contact us within 48 hours of consultation</li>
              <li>Provide specific details of the issue</li>
              <li>We will investigate and offer appropriate resolution</li>
              <li>Refunds considered on case-by-case basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Medications already dispensed or shipped</li>
              <li>Diagnostic tests conducted</li>
              <li>Medical records or reports generated</li>
              <li>Completed consultations (excluding quality issues)</li>
              <li>Services where a no-show occurred</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Refund Process</h2>
            <p className="text-gray-700 mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Initiate Request:</strong> Cancel through your account dashboard or contact support</li>
              <li><strong>Provide Details:</strong> Include booking ID and reason for cancellation</li>
              <li><strong>Review:</strong> Our team reviews the request (usually within 24 hours)</li>
              <li><strong>Approval:</strong> You'll receive email confirmation if approved</li>
              <li><strong>Processing:</strong> Refund initiated to original payment method</li>
              <li><strong>Timeline:</strong> Expect refund in 5-10 business days (may vary by bank)</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>ℹ️ Note:</strong> Refund timelines depend on your bank or payment provider. While we initiate refunds promptly, credit to your account may take additional time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Rescheduling vs. Cancellation</h2>
            <p className="text-gray-700 mb-4">
              We encourage rescheduling instead of cancellation when possible:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Free rescheduling:</strong> Available up to 6 hours before appointment</li>
              <li><strong>No fees:</strong> Reschedule as many times as needed (within reason)</li>
              <li><strong>Keep your doctor:</strong> Maintain continuity of care</li>
              <li><strong>Faster process:</strong> No refund processing delays</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Payment Method Considerations</h2>
            <p className="text-gray-700 mb-4">
              Refund processing varies by payment method:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
              <li><strong>UPI:</strong> 3-5 business days</li>
              <li><strong>Net Banking:</strong> 5-7 business days</li>
              <li><strong>Wallets:</strong> 3-5 business days</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Refunds are always issued to the original payment method used for booking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              If you disagree with a refund decision:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
              <li>Contact our support team with your concerns</li>
              <li>Provide any additional evidence or context</li>
              <li>Senior management will review the case</li>
              <li>You'll receive a final decision within 7 business days</li>
            </ol>
            <p className="text-gray-700 mb-4">
              Our goal is fair resolution for all parties. We reserve the right to make final decisions on refund eligibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Refund Policy to reflect changes in our services or regulations. Significant changes will be communicated via email. Your continued use after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For refund requests or questions:
            </p>
            <ul className="list-none mb-4 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:refunds@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">refunds@doqor.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919860151400" className="text-lime-600 hover:text-lime-700 font-semibold">+91 986 015 1400</a></li>
              <li><strong>Support Hours:</strong> Monday-Saturday, 9 AM - 7 PM IST</li>
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
