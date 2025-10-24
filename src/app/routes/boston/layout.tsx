import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NYC to Boston Car Service - Luxury Ground Transportation',
  description: 'NYC to Boston black car service. $650 flat rate, luxury sedans and SUVs, professional chauffeurs. 4-hour direct service. Book Noble today.',
  keywords: 'NYC to Boston car service, New York to Boston limo, black car Boston, luxury car service Boston, NYC Boston transportation',
  openGraph: {
    title: 'NYC to Boston Car Service - Luxury Ground Transportation | Noble',
    description: 'Premium black car service from NYC to Boston. $650 flat rate, luxury sedans and SUVs, professional chauffeurs. 4-hour direct service to Boston.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/routes/boston',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - NYC to Boston Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Boston Car Service",
    description: "Premium black car service from NYC to Boston. $650 flat rate, luxury vehicles.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/boston",
  },
}

export default function BostonRouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
