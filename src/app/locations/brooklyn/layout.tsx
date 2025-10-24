import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brooklyn Car Service - Black Car Transportation NYC | Noble",
  description: "Premium black car service in Brooklyn. 24/7 luxury transportation. Airport transfers, corporate travel, and hourly service available throughout Brooklyn.",
  keywords: [
    "Brooklyn car service",
    "black car Brooklyn",
    "Brooklyn airport service",
    "Brooklyn transportation",
    "luxury car service Brooklyn",
  ],
  openGraph: {
    title: "Brooklyn Car Service - Black Car Transportation NYC | Noble",
    description: "Premium black car service in Brooklyn. 24/7 luxury transportation.",
    url: "https://nobleblackcarservice.com/locations/brooklyn",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Brooklyn",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooklyn Car Service - Black Car Transportation",
    description: "Premium black car service in Brooklyn with 24/7 availability.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/locations/brooklyn",
  },
};

export default function BrooklynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
