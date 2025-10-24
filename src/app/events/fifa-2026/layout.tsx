import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 NYC Car Service | Noble",
  description: "Official transportation for FIFA World Cup 2026 in NYC. Luxury car service to MetLife Stadium. Book now for guaranteed service during the tournament.",
  keywords: [
    "FIFA 2026 transportation",
    "World Cup car service NYC",
    "MetLife Stadium transportation",
    "FIFA NYC 2026",
    "World Cup luxury rides",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 NYC Car Service | Noble",
    description: "Official luxury transportation for FIFA World Cup 2026. Book now for guaranteed service.",
    url: "https://nobleblackcarservice.com/events/fifa-2026",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - FIFA 2026",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Transportation NYC",
    description: "Official luxury transportation for FIFA World Cup 2026 in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/events/fifa-2026",
  },
};

export default function FIFA2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
