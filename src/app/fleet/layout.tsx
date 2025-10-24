import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Fleet - Luxury Vehicles',
  description: 'Premium luxury fleet: Mercedes S-Class, BMW 7 Series, Cadillac Escalade, Mercedes Sprinter. Professional NYC black car service with top vehicles.',
  keywords: 'luxury car fleet NYC, Mercedes S-Class rental, BMW 7 Series service, Cadillac Escalade NYC, Mercedes Sprinter van, black car fleet',
  openGraph: {
    title: 'Our Fleet - Luxury Vehicles | Noble',
    description: 'Browse Noble\'s premium fleet of luxury sedans and SUVs. Mercedes S-Class, BMW 7 Series, Cadillac Escalade, and Mercedes Sprinter available for NYC black car service.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/fleet',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Luxury Fleet",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Fleet - Luxury Vehicles",
    description: "Browse our premium fleet of luxury sedans and SUVs for NYC black car service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet",
  },
}

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
