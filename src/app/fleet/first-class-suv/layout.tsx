import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Class SUV - Cadillac Escalade, Suburban | Noble",
  description: "Book our luxury SUV fleet. Cadillac Escalade and Suburban. Premium group transportation for up to 6 passengers with luggage. NYC's finest black car service.",
  keywords: [
    "luxury SUV NYC",
    "Cadillac Escalade rental",
    "Suburban car service NYC",
    "group transportation NYC",
    "luxury SUV service",
  ],
  openGraph: {
    title: "First Class SUV - Cadillac Escalade, Suburban | Noble",
    description: "Luxury SUVs for premium group transportation. Up to 6 passengers with luggage.",
    url: "https://nobleblackcarservice.com/fleet/first-class-suv",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - First Class SUV",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Class SUV - Cadillac Escalade, Suburban",
    description: "Luxury SUVs for premium group transportation in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet/first-class-suv",
  },
};

export default function FirstClassSUVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
