import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Westchester Airport Car Service | HPN White Plains NY",
  description: "Premium car service to Westchester County Airport (HPN). White Plains, Rye, Greenwich service. Professional chauffeurs, luxury vehicles, 24/7 availability.",
  keywords: [
    "westchester airport car service",
    "hpn car service",
    "white plains airport transportation",
    "westchester county airport car service",
    "car service to hpn",
    "westchester airport limo",
    "white plains airport car service"
  ],
  openGraph: {
    title: "Westchester Airport Car Service | HPN Transportation",
    description: "Professional car service to Westchester County Airport. Serving White Plains, Rye, Greenwich. Luxury vehicles, 24/7 service.",
    url: "https://nobleblackcarservice.com/airports/westchester",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Westchester Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westchester Airport Car Service | HPN",
    description: "Professional car service to Westchester County Airport. Luxury vehicles, 24/7 service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/westchester",
  },
};

export default function WestchesterAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
