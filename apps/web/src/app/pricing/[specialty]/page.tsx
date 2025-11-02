import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getCatalog } from '@/lib/catalog';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema-builders';
import { MultiSchemaRenderer } from '@/components/schema/SchemaRenderer';

interface PricingSpecialtyPageProps {
  params: {
    specialty: string;
  };
  searchParams: {
    city?: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params, searchParams }: PricingSpecialtyPageProps): Promise<Metadata> {
  const citySlug = searchParams.city || 'pune';
  const catalog = getCatalog(citySlug);
  
  if (!catalog) {
    return {
      title: 'Pricing Not Available - Doqor',
    };
  }

  const specialty = catalog.specialties.find((s) => s.slug === params.specialty);
  
  if (!specialty) {
    return {
      title: 'Specialty Not Found - Doqor',
    };
  }

  return {
    title: `${specialty.title} Pricing in ${catalog.city} | Doqor`,
    description: `Fixed pricing for ${specialty.title} treatments and consultations in ${catalog.city}. Transparent costs with no hidden fees.`,
    openGraph: {
      title: `${specialty.title} Pricing - ${catalog.city}`,
      description: `View transparent pricing for ${specialty.title} services in ${catalog.city}`,
    },
  };
}

export default function PricingSpecialtyPage({ params, searchParams }: PricingSpecialtyPageProps) {
  const citySlug = searchParams.city || 'pune';
  const catalog = getCatalog(citySlug);

  if (!catalog) {
    notFound();
  }

  const specialty = catalog.specialties.find((s) => s.slug === params.specialty);

  if (!specialty) {
    notFound();
  }

  // Structured data
  const organizationSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' },
    { name: specialty.title, url: `/pricing/${params.specialty}` },
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
              <Link href="/pricing" className="hover:text-jade-600 transition-colors">
                Pricing
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                {specialty.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-forest-700 to-jade-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{specialty.title} Pricing</h1>
            <p className="text-xl text-forest-50 mb-6">
              Transparent, fixed pricing in {catalog.city} with no hidden costs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild className="bg-white text-forest-700 hover:bg-mist-50">
                <Link href="/book">Book Free Consultation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="bg-forest-800 text-white hover:bg-forest-900">
                <Link href={`https://wa.me/919860151400?text=I want to know about ${specialty.title} pricing`} target="_blank">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {specialty.items.map((item) => (
                <div key={item.code} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-forest-900 mb-2">{item.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-jade-600">₹{item.price.toLocaleString()}</span>
                        <span className="text-gray-600">/ {item.unit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Includes */}
                  {item.includes && item.includes.length > 0 && (
                    <details className="mb-4">
                      <summary className="cursor-pointer text-sm font-semibold text-forest-700 hover:text-jade-600 transition-colors">
                        ✓ What's Included ({item.includes.length})
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {item.includes.map((include, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                            <span>{include}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  {/* Excludes */}
                  {item.excludes && item.excludes.length > 0 && (
                    <details className="mb-4">
                      <summary className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
                        ✗ Not Included ({item.excludes.length})
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {item.excludes.map((exclude, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-red-500 mr-2 flex-shrink-0">✗</span>
                            <span>{exclude}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  <Button variant="primary" size="md" asChild className="w-full">
                    <Link href={`/book?service=${item.code}`}>
                      Select This Plan
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Free Consultation Banner */}
            <div className="mt-12 bg-gradient-to-r from-lime-50 to-forest-50 rounded-2xl p-8 border-2 border-lime-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-forest-900 mb-3">
                  Start with a Free Consultation
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Not sure which plan is right for you? Book a free consultation with our specialists. 
                  We'll help you choose the best treatment option for your needs.
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/book">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
