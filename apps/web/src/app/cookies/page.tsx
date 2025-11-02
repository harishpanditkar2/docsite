import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Doqor',
  description: 'Learn how Doqor uses cookies and similar tracking technologies.',
};

export default function CookiesPage() {
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
                Cookie Policy
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">
            Last updated: November 2, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, improve your experience, and provide insights into how the site is used.
            </p>
            <p className="text-gray-700 mb-4">
              Doqor uses cookies and similar technologies (such as web beacons and local storage) to enhance your experience on our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-3">1. Essential Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies are necessary for the platform to function properly. They enable core features like:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>User authentication and account access</li>
                <li>Security features and fraud prevention</li>
                <li>Shopping cart and booking functionality</li>
                <li>Load balancing and server routing</li>
              </ul>
              <p className="text-gray-700">
                <strong>Can be disabled:</strong> No (required for platform operation)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-3">2. Performance Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies collect information about how you use our platform, helping us improve performance:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>Click patterns and navigation paths</li>
                <li>Error messages and technical issues</li>
                <li>Loading speeds and performance metrics</li>
              </ul>
              <p className="text-gray-700">
                <strong>Can be disabled:</strong> Yes (via browser settings)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-3">3. Functional Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies remember your preferences and choices:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Language and region preferences</li>
                <li>City selection for pricing display</li>
                <li>Display settings (font size, layout preferences)</li>
                <li>Previously viewed services or doctors</li>
              </ul>
              <p className="text-gray-700">
                <strong>Can be disabled:</strong> Yes (may affect user experience)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-3">4. Analytics Cookies</h3>
              <p className="text-gray-700 mb-2">
                We use analytics tools (like Google Analytics) to understand user behavior:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Number of visitors and demographics</li>
                <li>Traffic sources (search engines, social media, direct)</li>
                <li>Popular services and content</li>
                <li>Conversion tracking for bookings</li>
              </ul>
              <p className="text-gray-700">
                <strong>Can be disabled:</strong> Yes (via browser settings or opt-out tools)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-3">5. Advertising Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies may be used to show relevant ads on other websites:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Retargeting ads for users who visited our platform</li>
                <li>Interest-based advertising</li>
                <li>Ad performance measurement</li>
              </ul>
              <p className="text-gray-700">
                <strong>Can be disabled:</strong> Yes (via browser settings or ad preference tools)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use services from trusted third parties that may set their own cookies:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Google Analytics:</strong> Website analytics and user behavior insights</li>
              <li><strong>Payment Gateways:</strong> Secure payment processing (Razorpay, etc.)</li>
              <li><strong>Social Media Platforms:</strong> Social sharing and login features</li>
              <li><strong>Communication Tools:</strong> Chat widgets and customer support</li>
            </ul>
            <p className="text-gray-700 mb-4">
              These third parties have their own privacy policies governing cookie use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">How to Control Cookies</h2>
            <p className="text-gray-700 mb-4">
              You have several options to control or delete cookies:
            </p>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block third-party cookies</li>
              <li>Set preferences for cookie acceptance</li>
            </ul>

            <h3 className="text-xl font-semibold text-forest-800 mb-3">Opt-Out Tools</h3>
            <p className="text-gray-700 mb-4">
              For analytics and advertising cookies, you can use:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:text-lime-700 underline">Browser Add-on</a></li>
              <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:text-lime-700 underline">Opt-out Tool</a></li>
              <li><strong>Your Online Choices (EU):</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:text-lime-700 underline">Preference Center</a></li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Note:</strong> Disabling essential cookies may prevent you from using certain features of our platform, including booking appointments and accessing your account.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Cookie Duration</h2>
            <p className="text-gray-700 mb-4">
              Cookies may be session-based (deleted when you close your browser) or persistent (stored for a set period):
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Session cookies:</strong> Used for authentication and navigation (deleted after session)</li>
              <li><strong>Persistent cookies:</strong> Used for preferences and analytics (typically 1-24 months)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy to reflect changes in technology or regulations. Significant updates will be communicated via email or platform notifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies:
            </p>
            <ul className="list-none mb-4 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:privacy@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">privacy@doqor.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919860151400" className="text-lime-600 hover:text-lime-700 font-semibold">+91 986 015 1400</a></li>
            </ul>
            <p className="text-gray-700 mb-4">
              For broader privacy concerns, see our <Link href="/privacy" className="text-lime-600 hover:text-lime-700 font-semibold">Privacy Policy</Link>.
            </p>
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
