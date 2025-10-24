import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Sedan - Toyota Avalon, Honda Accord | Noble",
  description: "Business sedan fleet: Toyota Avalon and Honda Accord. Professional, comfortable transportation for airport transfers and business travel in NYC.",
  keywords: [
    "business sedan NYC",
    "Toyota Avalon car service",
    "Honda Accord rental NYC",
    "affordable black car NYC",
    "business class sedan",
  ],
  openGraph: {
    title: "Business Sedan - Toyota Avalon, Honda Accord | Noble",
    description: "Professional, comfortable business sedans for airport and business travel.",
    url: "https://nobleblackcarservice.com/fleet/business-sedan",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Business Sedan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Sedan - Toyota Avalon, Honda Accord",
    description: "Professional business sedans for comfortable NYC transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/fleet/business-sedan",
  },
};

export default function BusinessSedanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
