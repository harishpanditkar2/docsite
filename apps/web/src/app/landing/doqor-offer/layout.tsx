import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Limited Time Offer: ₹‚¹499 Doctor Consultation | Save 50% - Doqor',
  description: 'Expert dermatology consultation for just ₹‚¹499 (normally ₹‚¹999). Limited slots available. See visible improvement in 30 days - Money back guarantee*. Individual results may vary.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LandingOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
