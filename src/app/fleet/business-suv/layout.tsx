import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business SUV - Honda Pilot, Toyota Highlander | Noble",
  description: "Book our business SUV fleet. Honda Pilot and Toyota Highlander. Comfortable group transportation for up to 6 passengers. Great for families and small groups in NYC.",
  keywords: [
    "business SUV NYC",
    "Honda Pilot car service",
    "Toyota Highlander rental",
    "family SUV service NYC",
    "affordable SUV transportation",
  ],
  openGraph: {
    title: "Business SUV - Honda Pilot, Toyota Highlander | Noble",
    description: "Comfortable business SUVs for group transportation. Up to 6 passengers.",
    url: "https://nobleblackcarservice.com/fleet/business-suv",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Business SUV",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business SUV - Honda Pilot, Toyota Highlander",
    description: "Comfortable business SUVs for group transportation in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet/business-suv",
  },
};

export default function BusinessSUVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
