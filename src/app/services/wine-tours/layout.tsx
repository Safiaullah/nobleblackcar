import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wine Tours NYC - Long Island & Hudson Valley | Noble",
  description: "Premium wine tour transportation to Long Island and Hudson Valley vineyards. Safe, luxurious rides with professional chauffeurs. Hourly and full-day service.",
  keywords: [
    "wine tours NYC",
    "Long Island wine tours",
    "Hudson Valley wine transportation",
    "vineyard car service",
    "wine tasting transportation",
  ],
  openGraph: {
    title: "Wine Tours NYC - Long Island & Hudson Valley | Noble",
    description: "Premium wine tour transportation to vineyards. Safe, luxurious rides with professional chauffeurs.",
    url: "https://nobleblackcarservice.com/services/wine-tours",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Wine Tours",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Tours NYC - Long Island & Hudson Valley",
    description: "Premium wine tour transportation. Safe, luxurious vineyard visits.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/wine-tours",
  },
};

export default function WineToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
