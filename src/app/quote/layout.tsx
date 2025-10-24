import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote - Instant Black Car Service Pricing NYC | Noble',
  description: 'Instant flat-rate pricing for NYC black car service. Airport transfers, corporate travel, hourly service. No hidden fees. Book online 24/7.',
  keywords: 'black car service quote NYC, limo pricing New York, airport transfer quote, corporate car service pricing, instant quote',
  openGraph: {
    title: "Get a Quote - Instant Black Car Service Pricing NYC",
    description: "Instant flat-rate pricing for NYC black car service. No hidden fees. Book online 24/7.",
    url: "https://nobleblackcarservice.com/quote",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Get a Quote",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote - Instant Pricing NYC",
    description: "Instant flat-rate pricing for black car service. No hidden fees.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/quote",
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
