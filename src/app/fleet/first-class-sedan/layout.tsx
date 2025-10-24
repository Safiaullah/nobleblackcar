import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Class Sedan - Mercedes S-Class, BMW 7 Series | Noble",
  description: "Book our luxury sedan fleet. Mercedes S-Class and BMW 7 Series. Premium executive transportation with the finest vehicles and professional chauffeurs in NYC.",
  keywords: [
    "luxury sedan NYC",
    "Mercedes S-Class rental",
    "BMW 7 Series car service",
    "first class sedan NYC",
    "executive car service",
  ],
  openGraph: {
    title: "First Class Sedan - Mercedes S-Class, BMW 7 Series | Noble",
    description: "Luxury sedans for premium executive transportation in NYC.",
    url: "https://nobleblackcarservice.com/fleet/first-class-sedan",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - First Class Sedan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Class Sedan - Mercedes S-Class, BMW 7 Series",
    description: "Luxury sedans for premium executive transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet/first-class-sedan",
  },
};

export default function FirstClassSedanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
