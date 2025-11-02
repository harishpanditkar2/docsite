import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Doqor',
  description: 'Important medical information and disclaimers for using Doqor healthcare services.',
};

export default function DisclaimerPage() {
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
                Medical Disclaimer
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Medical Disclaimer</h1>
          <p className="text-gray-600">
            Last updated: November 2, 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-lg font-bold text-red-900 mb-2">Medical Emergency Notice</h2>
              <p className="text-red-800">
                <strong>If you are experiencing a medical emergency, do not use this platform.</strong> Call emergency services immediately at <strong>108</strong> or <strong>102</strong>, or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Platform Nature</h2>
            <p className="text-gray-700 mb-4">
              Doqor is a digital healthcare platform that connects patients with independent, licensed healthcare professionals. We facilitate consultations but do not directly provide medical services, diagnosis, or treatment.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Key Points:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We are a technology platform, not a healthcare provider</li>
              <li>Doctors on our platform are independent professionals</li>
              <li>Medical decisions are made by licensed doctors, not by Doqor</li>
              <li>We do not supervise or control medical treatment provided by doctors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">No Medical Advice</h2>
            <p className="text-gray-700 mb-4">
              Information provided on the Doqor platform, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Service descriptions and treatment information</li>
              <li>Health articles and educational content</li>
              <li>FAQs and general health guidance</li>
              <li>Doctor profiles and specialties</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Is NOT intended as medical advice, diagnosis, or treatment.</strong> This content is for informational and educational purposes only.
            </p>
            <p className="text-gray-700 mb-4">
              Always seek the advice of your physician or qualified healthcare provider with questions regarding a medical condition. Never disregard professional medical advice or delay seeking it based on information from our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Online Consultation Limitations</h2>
            <p className="text-gray-700 mb-4">
              While online consultations offer convenience and accessibility, they have inherent limitations:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>No Physical Examination:</strong> Doctors cannot perform hands-on physical examinations</li>
              <li><strong>Technology Dependence:</strong> Quality depends on internet connectivity and device capabilities</li>
              <li><strong>Diagnostic Limitations:</strong> Certain conditions require in-person evaluation</li>
              <li><strong>Emergency Situations:</strong> Not suitable for urgent or life-threatening conditions</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Doctors may recommend in-person consultations, diagnostic tests, or specialist referrals when necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">No Guarantee of Results</h2>
            <p className="text-gray-700 mb-4">
              Healthcare involves inherent uncertainties. We make no guarantees or warranties regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Treatment outcomes or effectiveness</li>
              <li>Cure or improvement of medical conditions</li>
              <li>Absence of side effects or complications</li>
              <li>Accuracy of diagnoses or prognoses</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Individual results vary based on numerous factors including overall health, medical history, adherence to treatment, and individual response to therapies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Doctor Verification</h2>
            <p className="text-gray-700 mb-4">
              While we verify the credentials and licenses of doctors on our platform:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We conduct basic verification of medical licenses and qualifications</li>
              <li>We are not responsible for individual doctor competence or performance</li>
              <li>Doctor ratings and reviews reflect patient opinions, not our endorsements</li>
              <li>You should independently verify credentials if desired</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Doctors on our platform are independent contractors, not our employees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Prescriptions and Medications</h2>
            <p className="text-gray-700 mb-4">
              Regarding prescriptions issued through our platform:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Prescriptions are issued by licensed doctors based on their professional judgment</li>
              <li>Doctors determine appropriate medications considering your medical history</li>
              <li>You are responsible for informing doctors of all medications and allergies</li>
              <li>We are not responsible for medication side effects or interactions</li>
              <li>Always read medication labels and follow doctor instructions carefully</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Important:</strong> If you experience adverse reactions to any medication, stop taking it immediately and contact your doctor or emergency services.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Specialist Referrals</h2>
            <p className="text-gray-700 mb-4">
              When our in-house doctors recommend specialist care:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Referrals are made based on professional medical judgment</li>
              <li>You are free to seek second opinions or alternative specialists</li>
              <li>We provide transparent pricing before you commit to specialist care</li>
              <li>You may decline specialist referrals without prejudice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Information Accuracy</h2>
            <p className="text-gray-700 mb-4">
              While we strive to provide accurate and up-to-date health information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Medical knowledge evolves; information may become outdated</li>
              <li>Content is general in nature and may not apply to your specific situation</li>
              <li>We are not liable for errors or omissions in content</li>
              <li>Always verify important health information with healthcare professionals</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a patient, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Providing accurate and complete medical information to doctors</li>
              <li>Disclosing all medications, supplements, and allergies</li>
              <li>Following treatment plans and medical advice</li>
              <li>Attending follow-up appointments as recommended</li>
              <li>Seeking emergency care when appropriate</li>
              <li>Informing doctors of any adverse reactions or complications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Liability Limitations</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Doqor is not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Medical malpractice or negligence by independent healthcare providers</li>
              <li>Misdiagnosis, delayed diagnosis, or treatment errors</li>
              <li>Adverse reactions to medications or treatments</li>
              <li>Outcomes of medical procedures or therapies</li>
              <li>Consequences of not seeking emergency care when needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our platform may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or practices of external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Medical Disclaimer:
            </p>
            <ul className="list-none mb-4 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@doqor.com" className="text-lime-600 hover:text-lime-700 font-semibold">support@doqor.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919860151400" className="text-lime-600 hover:text-lime-700 font-semibold">+91 986 015 1400</a></li>
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
