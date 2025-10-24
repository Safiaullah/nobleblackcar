import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Shuttle Service NYC - Employee Transportation | Noble",
  description: "Corporate shuttle service for NYC businesses. Employee commute programs, event shuttles, airport runs. Reliable, scheduled service with professional drivers.",
  keywords: [
    "corporate shuttle service NYC",
    "employee shuttle program",
    "business shuttle NYC",
    "corporate commute service",
    "office shuttle transportation",
  ],
  openGraph: {
    title: "Corporate Shuttle Service NYC - Employee Transportation | Noble",
    description: "Corporate shuttle service for employee commutes, events, and airport runs.",
    url: "https://nobleblackcarservice.com/corporate/shuttle-service",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Shuttle",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Shuttle Service NYC",
    description: "Reliable corporate shuttle service for NYC businesses.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/corporate/shuttle-service",
  },
};

export default function ShuttleServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
