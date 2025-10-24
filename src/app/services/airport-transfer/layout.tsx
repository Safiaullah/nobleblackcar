import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Airport Car Service | JFK, LGA, EWR Transfers | Noble",
  description: "Premium NYC airport car service to JFK, LaGuardia, Newark & all NYC airports. Flight tracking, meet & greet service, 24/7 availability. Competitive flat rates. Book now!",
  keywords: [
    "nyc airport car service",
    "airport car service nyc",
    "airport transfer nyc",
    "jfk car service",
    "laguardia car service",
    "newark airport car service",
    "airport limo service nyc",
    "airport transportation nyc",
    "airport shuttle nyc",
    "private airport transfer",
    "luxury airport car service",
    "professional airport transfer"
  ],
  openGraph: {
    title: "NYC Airport Car Service | Airport Transfers to JFK, LGA, EWR | Noble Black Car",
    description: "Professional airport car service in NYC. Flight tracking, meet & greet service, competitive flat rates. Service to JFK, LaGuardia, Newark, Teterboro. Book 24/7.",
    url: "https://nobleblackcarservice.com/services/airport-transfer",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - NYC Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Airport Car Service | Professional Airport Transfers",
    description: "Premium airport car service to all NYC airports. Flight tracking, meet & greet service, competitive flat rates. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/airport-transfer",
  },
};

export default function AirportTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
