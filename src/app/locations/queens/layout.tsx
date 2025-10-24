import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Queens Car Service - Black Car Transportation NYC | Noble",
  description: "Premium black car service in Queens. 24/7 luxury transportation. Airport transfers to JFK and LaGuardia, corporate travel, and hourly service available.",
  keywords: [
    "Queens car service",
    "black car Queens",
    "Queens airport service",
    "Queens transportation",
    "luxury car service Queens",
  ],
  openGraph: {
    title: "Queens Car Service - Black Car Transportation NYC | Noble",
    description: "Premium black car service in Queens. 24/7 luxury transportation.",
    url: "https://nobleblackcarservice.com/locations/queens",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Queens",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queens Car Service - Black Car Transportation",
    description: "Premium black car service in Queens with 24/7 availability.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/locations/queens",
  },
};

export default function QueensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
