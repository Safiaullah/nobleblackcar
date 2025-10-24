import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Premium Black Car Solutions',
  description: 'Noble NYC black car services: airport transfers, corporate shuttles, executive service, weddings, events, and hourly chauffeur. Premium luxury transportation.',
  keywords: 'black car services NYC, airport transfer, corporate shuttle, executive car service, wedding transportation, hourly chauffeur, limousine service',
  openGraph: {
    title: 'Our Services - Premium Black Car Solutions | Noble',
    description: 'Explore Noble\'s comprehensive black car services in NYC: airport transfers, corporate shuttles, executive car service, weddings, events, and hourly chauffeur service.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/services',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Our Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Premium Black Car Solutions",
    description: "Airport transfers, corporate shuttles, executive service, weddings, and events.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
