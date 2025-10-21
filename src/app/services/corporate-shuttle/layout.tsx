import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Shuttle Service NYC | Employee Transport | Noble",
  description: "NYC corporate shuttle service for businesses. Employee airport transfers, office transport. Volume discounts, monthly billing, account management.",
  keywords: [
    "corporate shuttle service nyc",
    "corporate transportation nyc",
    "employee shuttle service",
    "corporate airport shuttle",
    "business shuttle service",
    "office shuttle service nyc",
    "executive shuttle service",
    "corporate car service nyc",
    "company shuttle service",
    "employee transportation service",
    "corporate event transportation",
    "business transportation nyc"
  ],
  openGraph: {
    title: "Corporate Shuttle Service NYC | Employee Transport | Noble",
    description: "NYC corporate shuttle service for businesses. Employee airport transfers, office transport. Volume discounts, monthly billing, account management.",
    url: "https://nobleblackcarservice.com/services/corporate-shuttle",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Shuttle Service NYC",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Shuttle Service NYC | Employee Transport",
    description: "NYC corporate shuttle for businesses. Employee airport transfers, office transport. Volume discounts, monthly billing, account management.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/corporate-shuttle",
  },
};

export default function CorporateShuttleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
