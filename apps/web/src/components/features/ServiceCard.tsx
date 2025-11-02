'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCity, getCityDisplayName } from '@/lib/city-context';

interface ServiceCardProps {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  icon: string;
  priceRange: string;
  consultationFee: number;
  heroImage?: string;
  showMostBooked?: boolean;
}

/**
 * ServiceCard component displays a service with icon, name, tagline, and pricing
 * Used on homepage, services page, and service category pages
 */
export function ServiceCard({
  name,
  slug,
  tagline,
  icon,
  priceRange,
  consultationFee,
  heroImage,
  showMostBooked = false,
}: ServiceCardProps) {
  const { city } = useCity();
  const cityDisplayName = getCityDisplayName(city);
  
  return (
    <Link href={`/services/${slug}`}>
      <Card variant="hover-lift" className="h-full relative flex flex-col overflow-hidden group">
        {/* Background Image with Overlay */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={`${name} background`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark overlay with gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </div>
        )}
        
        {/* Content - positioned above background */}
        <div className="relative z-10 flex flex-col h-full">
          {showMostBooked && (
            <div className="absolute top-4 right-4" aria-label="Most booked service">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-jade-100 text-jade-700 text-xs font-semibold rounded-full shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Booked
              </span>
            </div>
          )}
          <CardHeader>
            <div className="mb-3 text-5xl drop-shadow-lg">
              {icon}
            </div>
            <CardTitle as="h3" className="text-white">
              {name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-white/90 text-sm mb-4 line-clamp-2 min-h-[40px] font-medium">{tagline}</p>
            <div className="space-y-3 mt-auto">
              <div className="text-sm">
                <p className="text-white/70 text-xs mb-1">First Consultation</p>
                <p className="font-semibold text-lime-400">Free (₹0)</p>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-white hover:bg-lime-400 border-2 border-white text-forest-900 font-semibold hover:border-lime-400 hover:text-forest-900"
                  onClick={(e) => {
                    // Prevent Link navigation, let parent Link handle it
                    e.stopPropagation();
                  }}
                >
                  View Packages
                </Button>
                <p className="text-xs text-white/80 text-center font-medium">
                  Start free—talk to a doctor
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
