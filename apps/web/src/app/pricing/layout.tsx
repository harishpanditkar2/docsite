import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed Healthcare Pricing | Free First Consult - Doqor',
  description:
    'View our complete fixed-price healthcare catalog. Start with â‚¹0 free consultation. Dermatology from â‚¹899, Therapy from â‚¹1,499, Orthopedics from â‚¹899. No hidden charges, no surprise fees.',
  keywords: 'fixed pricing healthcare, transparent medical costs, free consultation, dermatology prices, therapy prices, orthopedic prices',
  openGraph: {
    title: 'Fixed Healthcare Pricing | Free First Consult',
    description: 'Transparent fixed prices for healthcare services. Start with a free consultation, see exact costs upfront.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Fixed Healthcare Pricing',
    description: 'No ranges, no hidden fees. Just transparent healthcare pricing.',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
