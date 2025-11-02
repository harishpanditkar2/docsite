import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema-builders';
import { MultiSchemaRenderer } from '@/components/schema/SchemaRenderer';
import servicesData from '@/data/services.json';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found - Doqor',
    };
  }

  return {
    title: `${service.name} | Doqor`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      images: [service.heroImage],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Structured data
  const organizationSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-mist-50 to-white">
      <MultiSchemaRenderer schemas={[organizationSchema, breadcrumbSchema]} />

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
              <Link href="/services" className="hover:text-jade-600 transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                {service.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-forest-700 to-jade-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block bg-lime-100 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {service.icon} Specialty
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
                <p className="text-xl text-forest-50 mb-6">{service.tagline}</p>
                <p className="text-forest-100 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="lg" asChild className="bg-white text-forest-700 hover:bg-mist-50">
                    <Link href="/book">Book Free Consultation</Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild className="bg-forest-800 text-white hover:bg-forest-900">
                    <Link href={`https://wa.me/919860151400?text=I want to know more about ${service.name}`} target="_blank">
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What We Offer */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-forest-900 mb-6">What We Treat</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{service.description}</p>
              
              {service.conditions && service.conditions.length > 0 && (
                <div className="grid md:grid-cols-2 gap-3">
                  {service.conditions.map((condition, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center">
                        <span className="text-forest-700 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">{condition}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Consultation Fee</h2>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-jade-600">₹{service.consultationFee}</span>
                <span className="text-gray-600">per consultation</span>
              </div>
              <p className="text-gray-700">
                Your first consultation is always free! This fee applies only if you choose to continue with specialist care.
              </p>
            </div>

            {/* Pricing CTA */}
            <div className="bg-gradient-to-r from-lime-50 to-forest-50 rounded-2xl p-8 border-2 border-lime-200 text-center">
              <h3 className="text-2xl font-bold text-forest-900 mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Book your free first consultation today. Our specialists will assess your needs 
                and create a personalized treatment plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/book">Book Free Consultation</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
