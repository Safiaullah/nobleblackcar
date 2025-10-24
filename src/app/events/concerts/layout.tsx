import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Concert Transportation | MSG Car Service | Noble",
  description: "Premium concert transportation in NYC. Door-to-door service to Madison Square Garden, Barclays Center, and all NYC venues. Skip parking hassles.",
  keywords: [
    "concert transportation NYC",
    "Madison Square Garden car service",
    "Barclays Center transportation",
    "VIP concert rides",
    "event car service NYC",
  ],
  openGraph: {
    title: "NYC Concert Transportation | MSG Car Service | Noble",
    description: "Premium concert transportation in NYC. Door-to-door service to Madison Square Garden, Barclays Center, and all venues.",
    url: "https://nobleblackcarservice.com/events/concerts",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Concert Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concert Transportation NYC - VIP Event Car Service",
    description: "Premium concert transportation in NYC. Skip parking hassles with luxury door-to-door service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/events/concerts",
  },
};

export default function ConcertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
