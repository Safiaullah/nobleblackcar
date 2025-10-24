import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Transparent Flat Rates',
  description: 'Noble Black Car Service pricing: flat-rate airport transfers from $85, hourly service, corporate rates, luxury vehicles. No surge charges or hidden fees.',
  keywords: 'black car service pricing NYC, airport transfer rates, limo service cost, corporate car service rates, hourly chauffeur pricing, luxury car rental NYC',
  openGraph: {
    title: 'Pricing - Transparent Flat Rates | Noble',
    description: 'View Noble Black Car Service pricing. Flat-rate airport transfers from $85, hourly service, corporate rates, and luxury vehicle pricing. No surge charges or hidden fees.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/pricing',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Pricing",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Transparent Flat Rates",
    description: "Flat-rate pricing from $85. No surge charges or hidden fees.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/pricing",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
