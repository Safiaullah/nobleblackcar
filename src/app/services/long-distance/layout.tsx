import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long Distance Car Service NYC - Boston, Philadelphia, DC | Noble',
  description: 'Long-distance black car service from NYC to Boston, Philadelphia, Washington DC, and beyond. Flat-rate pricing, luxury vehicles, professional chauffeurs.',
  keywords: 'NYC to Boston car service, New York to Philadelphia limo, long distance black car, NYC to DC car service',
  openGraph: {
    title: "Long Distance Car Service NYC - Boston, Philadelphia, DC",
    description: "Long-distance black car service from NYC. Flat-rate pricing and luxury vehicles to major cities.",
    url: "https://nobleblackcarservice.com/services/long-distance",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Long Distance Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Distance Car Service NYC",
    description: "Long-distance black car service to Boston, Philadelphia, DC, and beyond.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/long-distance",
  },
}

export default function LongDistanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
