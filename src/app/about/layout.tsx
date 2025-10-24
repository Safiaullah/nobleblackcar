import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - NYC Black Car Service Excellence',
  description: 'Noble Black Car Service: NYC\'s trusted luxury transportation provider. Professional chauffeurs, premium fleet, and commitment to excellence.',
  keywords: 'about Noble black car service, NYC luxury transportation, professional chauffeur service, black car company NYC, limousine service history',
  openGraph: {
    title: 'About Us - NYC Black Car Service Excellence | Noble',
    description: 'Learn about Noble Black Car Service: NYC\'s trusted luxury transportation provider. Professional chauffeurs, premium fleet, and commitment to excellence since our founding.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/about',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - About Us",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - NYC Black Car Service Excellence",
    description: "NYC's trusted luxury transportation provider with professional chauffeurs and premium fleet.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
