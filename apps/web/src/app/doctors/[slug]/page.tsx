import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { buildPhysicianSchema, buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema-builders';
import { MultiSchemaRenderer } from '@/components/schema/SchemaRenderer';
import doctorsData from '@/data/doctors.sample.json';

interface DoctorPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all doctors
export async function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    slug: doctor.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const doctor = doctorsData.find((d) => d.slug === params.slug);

  if (!doctor) {
    return {
      title: 'Doctor Not Found - Doqor',
    };
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} in ${doctor.city} | Doqor`,
    description: doctor.bio,
    openGraph: {
      title: `Dr. ${doctor.name} - ${doctor.specialty}`,
      description: doctor.bio,
      images: [doctor.image],
    },
  };
}

export default function DoctorProfilePage({ params }: DoctorPageProps) {
  const doctor = doctorsData.find((d) => d.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  // Structured data
  const physicianSchema = buildPhysicianSchema({
    name: doctor.name,
    title: doctor.title,
    specialty: doctor.specialty,
    bio: doctor.bio,
    image: doctor.image,
    slug: doctor.slug,
    education: doctor.education,
    rating: doctor.rating,
    reviewCount: doctor.reviewCount,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Doctors', url: '/doctors' },
    { name: doctor.name, url: `/doctors/${doctor.slug}` },
  ]);

  const organizationSchema = buildOrganizationSchema();

  return (
    <div className="min-h-screen bg-gradient-to-b from-mist-50 to-white">
      <MultiSchemaRenderer schemas={[organizationSchema, physicianSchema, breadcrumbSchema]} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-jade-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/doctors" className="hover:text-jade-600 transition-colors">
                Doctors
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                Dr. {doctor.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Doctor Profile */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <img
                    src={doctor.image}
                    alt={`Dr. ${doctor.name}`}
                    className="w-48 h-48 rounded-full object-cover border-4 border-forest-100"
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="inline-block bg-lime-100 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {doctor.specialty}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-forest-900 mb-2">
                    Dr. {doctor.name}
                  </h1>
                  <p className="text-xl text-jade-600 font-medium mb-4">{doctor.title}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="text-lg font-semibold text-forest-900">{doctor.experience} years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-lg font-semibold text-forest-900">
                        ⭐ {doctor.rating} ({doctor.reviewCount} reviews)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="text-lg font-semibold text-forest-900">{doctor.city}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="lg" asChild>
                      <Link href="/book">Book Free Consultation</Link>
                    </Button>
                    <Button variant="secondary" size="lg" asChild>
                      <Link href={`https://wa.me/919860151400?text=I want to consult with Dr. ${doctor.name}`} target="_blank">
                        WhatsApp Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">About Dr. {doctor.name}</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
            </div>

            {/* Education */}
            {doctor.education && doctor.education.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-forest-900 mb-4">Education</h2>
                <ul className="space-y-2">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-jade-600 mr-2">🎓</span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">Languages</h2>
              <div className="flex flex-wrap gap-3">
                {doctor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-forest-50 text-forest-700 rounded-full font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultation Fee */}
            <div className="bg-gradient-to-r from-forest-700 to-jade-600 text-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Consultation Fee</h2>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold">₹{doctor.consultationFee}</span>
                <span className="text-xl">per consultation</span>
              </div>
              <p className="text-forest-50 mb-6">
                Your first consultation is free! This fee applies only if you choose to continue with specialist care.
              </p>
              <Button variant="secondary" size="lg" asChild className="bg-white text-forest-700 hover:bg-mist-50">
                <Link href="/book">Start with Free Consultation</Link>
              </Button>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">Next Available</h2>
              <p className="text-xl text-green-600 font-semibold mb-4">{doctor.nextAvailable}</p>
              <p className="text-gray-600 mb-6">
                Book now to secure your free first consultation with Dr. {doctor.name}.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/book">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
