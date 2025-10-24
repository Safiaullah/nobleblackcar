import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manhattan Car Service - Black Car Transportation NYC | Noble",
  description: "Premium black car service in Manhattan. 24/7 luxury transportation throughout NYC. Airport transfers, corporate travel, and hourly service available.",
  keywords: [
    "Manhattan car service",
    "black car Manhattan",
    "NYC car service",
    "Manhattan transportation",
    "luxury car service Manhattan",
  ],
  openGraph: {
    title: "Manhattan Car Service - Black Car Transportation NYC | Noble",
    description: "Premium black car service in Manhattan. 24/7 luxury transportation throughout NYC.",
    url: "https://nobleblackcarservice.com/locations/manhattan",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Manhattan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhattan Car Service - Black Car Transportation NYC",
    description: "Premium black car service in Manhattan. 24/7 luxury transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/locations/manhattan",
  },
};

export default function ManhattanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
