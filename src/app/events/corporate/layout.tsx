import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Transportation NYC | Noble",
  description: "Professional transportation for corporate events in NYC. Conferences, meetings, company parties. Reliable service for executives and employees. Group transportation available.",
  keywords: [
    "corporate event transportation",
    "business event car service NYC",
    "conference transportation",
    "company event rides",
    "corporate shuttle NYC",
  ],
  openGraph: {
    title: "Corporate Event Transportation NYC | Noble",
    description: "Professional transportation for corporate events, conferences, and meetings.",
    url: "https://nobleblackcarservice.com/events/corporate",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Events",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Transportation NYC",
    description: "Professional transportation for corporate events and conferences.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/events/corporate",
  },
};

export default function CorporateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
