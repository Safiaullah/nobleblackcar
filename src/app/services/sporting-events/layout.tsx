import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sporting Events Transportation NYC - Yankees, Mets, Knicks | Noble",
  description: "Premium transportation to NYC sporting events. Yankees, Mets, Knicks, Rangers games. Skip traffic and parking. Luxury car service to all venues.",
  keywords: [
    "sporting events transportation NYC",
    "Yankees game car service",
    "Mets transportation",
    "Knicks game rides",
    "Madison Square Garden car service",
  ],
  openGraph: {
    title: "Sporting Events Transportation NYC - Yankees, Mets, Knicks | Noble",
    description: "Premium transportation to NYC sporting events. Skip traffic and parking with luxury car service.",
    url: "https://nobleblackcarservice.com/services/sporting-events",
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
    description: "Premium transportation to all NYC sporting events. Skip traffic and parking hassles.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/sporting-events",
  },
};

export default function SportingEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
