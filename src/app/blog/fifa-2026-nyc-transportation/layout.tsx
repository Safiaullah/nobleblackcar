import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 NYC Transportation | MetLife Stadium Car Service",
  description: "FIFA World Cup 2026 transportation in NYC and MetLife Stadium. Black car service for matches, hotels, airports. Book early for guaranteed service.",
  keywords: [
    "FIFA 2026 NYC transportation",
    "World Cup car service",
    "MetLife Stadium black car",
    "FIFA 2026 matches NYC",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 NYC Transportation | MetLife Stadium Car Service",
    description: "FIFA World Cup 2026 transportation. Black car service for matches and airports.",
    url: "https://nobleblackcarservice.com/blog/fifa-2026-nyc-transportation",
    type: "article",
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
    title: "FIFA World Cup 2026 NYC Transportation",
    description: "FIFA World Cup 2026 transportation in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/fifa-2026-nyc-transportation",
  },
};

export default function FIFA2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
