import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes Sprinter Van - Group Transportation NYC | Noble",
  description: "Book our Mercedes Sprinter van. Luxury group transportation for up to 14 passengers. Perfect for corporate events, airport transfers, and group outings in NYC.",
  keywords: [
    "Mercedes Sprinter rental NYC",
    "group transportation NYC",
    "Sprinter van service",
    "14 passenger van NYC",
    "luxury van rental",
  ],
  openGraph: {
    title: "Mercedes Sprinter Van - Group Transportation NYC | Noble",
    description: "Luxury group transportation for up to 14 passengers in a Mercedes Sprinter.",
    url: "https://nobleblackcarservice.com/fleet/sprinter",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Mercedes Sprinter",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes Sprinter Van - Group Transportation",
    description: "Luxury group transportation for up to 14 passengers.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet/sprinter",
  },
};

export default function SprinterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
