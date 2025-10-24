import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Point-to-Point Car Service NYC - Fixed-Rate Transportation | Noble',
  description: 'Premium point-to-point black car service in NYC. Flat-rate pricing for direct transportation between any two locations. Professional drivers, luxury vehicles.',
  keywords: 'point to point car service NYC, direct transportation New York, flat rate black car, NYC private car service',
  openGraph: {
    title: "Point-to-Point Car Service NYC - Fixed-Rate Transportation",
    description: "Premium point-to-point black car service with flat-rate pricing for direct transportation.",
    url: "https://nobleblackcarservice.com/services/point-to-point",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Point-to-Point Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Point-to-Point Car Service NYC",
    description: "Premium point-to-point black car service with flat-rate pricing.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/point-to-point",
  },
}

export default function PointToPointLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
