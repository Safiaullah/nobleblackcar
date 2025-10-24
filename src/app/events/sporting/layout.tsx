import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Sporting Events Car Service | Yankees | Noble",
  description: "Premium transportation to NYC sporting events. Yankees Stadium, Madison Square Garden, Citi Field. Skip parking with luxury door-to-door service.",
  keywords: [
    "sporting events transportation NYC",
    "Yankees game car service",
    "Knicks transportation",
    "Mets game rides",
    "sports event car service NYC",
  ],
  openGraph: {
    title: "NYC Sporting Events Car Service | Yankees | Noble",
    description: "Premium transportation to all NYC sporting events. Skip parking hassles.",
    url: "https://nobleblackcarservice.com/events/sporting",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Sporting Events",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sporting Events Transportation NYC",
    description: "Premium transportation to NYC sporting events.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/events/sporting",
  },
};

export default function SportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
