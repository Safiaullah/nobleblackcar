import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long Island MacArthur Airport Car Service - ISP Transportation',
  description: 'Premium car service to Long Island MacArthur Airport (ISP) in Islip, NY. Reliable black car transportation from NYC, Long Island, and surrounding areas.',
  keywords: 'ISP airport car service, MacArthur airport transportation, Islip airport limo, Long Island airport service',
  openGraph: {
    title: 'Long Island MacArthur Airport Car Service | Noble',
    description: 'Professional car service to Long Island MacArthur Airport (ISP). Reliable transportation from NYC and Long Island.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/airports/islip',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Long Island MacArthur Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Island MacArthur Airport Car Service",
    description: "Professional car service to Long Island MacArthur Airport (ISP).",
    images: ["/images/mercedes-s-class.png"],
  },
}

export default function IslipAirportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
