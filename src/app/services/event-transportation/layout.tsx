import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Transportation NYC - Corporate Events, Galas, Parties | Noble',
  description: 'NYC event transportation for corporate events, galas, parties, and special occasions. Multiple vehicles available. Group transportation specialists.',
  keywords: 'event transportation NYC, corporate event car service, gala transportation New York, party limo service NYC',
  openGraph: {
    title: "Event Transportation NYC - Corporate Events, Galas, Parties",
    description: "NYC event transportation for corporate events, galas, and special occasions. Group transportation specialists.",
    url: "https://nobleblackcarservice.com/services/event-transportation",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Event Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Transportation NYC",
    description: "NYC event transportation for corporate events, galas, and parties.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/event-transportation",
  },
}

export default function EventTransportationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
