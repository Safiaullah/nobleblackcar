import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Sightseeing Tours - Private City Tours | Noble",
  description: "Private NYC sightseeing tours with custom itineraries and luxury vehicles. See Times Square, Central Park, and all major attractions with Noble.",
  keywords: [
    "NYC sightseeing tours",
    "private city tours NYC",
    "New York tour car service",
    "custom NYC tours",
    "luxury sightseeing NYC",
  ],
  openGraph: {
    title: "NYC Sightseeing Tours - Private City Tours | Noble",
    description: "Private sightseeing tours with luxury vehicles and knowledgeable chauffeurs.",
    url: "https://nobleblackcarservice.com/services/sightseeing-tours",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Sightseeing Tours",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Sightseeing Tours - Private City Tours",
    description: "Private sightseeing tours of NYC in luxury vehicles.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/sightseeing-tours",
  },
};

export default function SightseeingToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
