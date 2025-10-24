import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NYC to Washington DC Car Service - Luxury Transportation',
  description: 'NYC to Washington DC black car service. $700 flat rate, 4-5 hour service, luxury sedans and SUVs. Professional chauffeurs for government and business.',
  keywords: 'NYC to DC car service, New York to Washington limo, black car DC, luxury car service Washington, NYC DC transportation',
  openGraph: {
    title: 'NYC to Washington DC Car Service | Noble',
    description: 'Premium black car service from NYC to Washington DC. $700 flat rate, luxury transportation for government and business travelers.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/routes/washington-dc',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - NYC to Washington DC Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Washington DC Car Service",
    description: "Premium black car service from NYC to DC. $700 flat rate, luxury vehicles.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/washington-dc",
  },
}

export default function WashingtonDCRouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
