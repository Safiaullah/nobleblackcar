import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hourly Car Service NYC - Black Car by the Hour | Noble',
  description: 'Hourly black car service in NYC. 3-hour minimum. Perfect for multiple stops, business meetings, events. Professional chauffeur at your disposal. Competitive hourly rates.',
  keywords: 'hourly car service NYC, black car by the hour, NYC chauffeur service, car service multiple stops',
  openGraph: {
    title: "Hourly Car Service NYC - Black Car by the Hour",
    description: "Hourly black car service. Perfect for multiple stops, business meetings, and events. Professional chauffeur at your disposal.",
    url: "https://nobleblackcarservice.com/services/hourly",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Hourly Chauffeur Service",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hourly Car Service NYC",
    description: "Hourly black car service for multiple stops and business meetings.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/hourly",
  },
}

export default function HourlyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
