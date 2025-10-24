import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Transportation NYC | Noble",
  description: "Professional corporate event transportation in NYC. Multi-vehicle coordination for conferences, galas, team building. Flat-rate pricing, 24/7 service.",
  keywords: [
    "corporate event transportation NYC",
    "conference shuttle service",
    "gala transportation",
    "business event car service",
    "corporate group transport",
  ],
  openGraph: {
    title: "Corporate Event Transportation NYC | Noble",
    description: "Professional corporate event transportation. Multi-vehicle coordination for conferences and galas.",
    url: "https://nobleblackcarservice.com/blog/corporate-event-transportation",
    type: "article",
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
    description: "Professional corporate event transportation in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/corporate-event-transportation",
  },
};

export default function CorporateEventTransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
