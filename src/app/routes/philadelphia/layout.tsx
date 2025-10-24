import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NYC to Philadelphia Car Service - Luxury Transportation',
  description: 'NYC to Philadelphia black car service. $350 flat rate, 2-hour direct service, luxury sedans and SUVs. Professional chauffeurs. Book Noble today.',
  keywords: 'NYC to Philadelphia car service, New York to Philly limo, black car Philadelphia, luxury car service Philly, NYC Philadelphia transportation',
  openGraph: {
    title: 'NYC to Philadelphia Car Service - Luxury Transportation | Noble',
    description: 'Premium black car service from NYC to Philadelphia. $350 flat rate, 2-hour direct service, luxury sedans and SUVs.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/routes/philadelphia',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - NYC to Philadelphia Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Philadelphia Car Service",
    description: "Premium black car service from NYC to Philadelphia. $350 flat rate, luxury vehicles.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/philadelphia",
  },
}

export default function PhiladelphiaRouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
