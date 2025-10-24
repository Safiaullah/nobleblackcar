import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teterboro Airport Car Service | TEB Private Jet Transfer",
  description: "Premium car service to Teterboro Airport (TEB). Private jet transfers, luxury sedans & SUVs. Professional chauffeurs, 24/7 availability. Serving NYC, NJ & CT.",
  keywords: [
    "teterboro airport car service",
    "teb car service",
    "teterboro private jet transfer",
    "car service to teterboro",
    "teterboro limo service",
    "private jet transportation teterboro",
    "teb airport transfer",
    "luxury car service teterboro",
    "teterboro airport transportation",
    "private aviation car service"
  ],
  openGraph: {
    title: "Teterboro Airport Car Service | TEB Private Jet Transfer | Noble",
    description: "Premium car service to Teterboro Airport. Private jet transfers with luxury vehicles. Professional service for corporate executives and VIP clients. 24/7 availability.",
    url: "https://nobleblackcarservice.com/airports/teterboro",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Teterboro Airport Private Jet Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teterboro Airport Car Service | TEB Private Jet Transfer",
    description: "Premium car service to Teterboro Airport. Private jet transfers, luxury vehicles, professional chauffeurs. 24/7 service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/teterboro",
  },
};

export default function TeterboroAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
