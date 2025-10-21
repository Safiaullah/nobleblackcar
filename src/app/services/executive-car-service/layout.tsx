import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Car Service NYC | C-Suite & VIP Transport | Noble",
  description: "NYC executive car service for business leaders. S-Class & 7-Series fleet, professional chauffeurs. C-suite transport, VIP clients. Discretion guaranteed 24/7.",
  keywords: [
    "executive car service nyc",
    "executive car service",
    "executive transportation nyc",
    "c-suite car service",
    "vip car service nyc",
    "luxury executive car service",
    "business executive transportation",
    "executive sedan service",
    "corporate executive car service",
    "executive chauffeur service",
    "premium executive car service",
    "executive black car service"
  ],
  openGraph: {
    title: "Executive Car Service NYC | Premium C-Suite & VIP Transportation | Noble",
    description: "Premium executive car service for business leaders in NYC. Mercedes S-Class & BMW 7-Series fleet. Professional chauffeurs with corporate protocol training. Discretion guaranteed.",
    url: "https://nobleblackcarservice.com/services/executive-car-service",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Executive Car Service NYC",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Car Service NYC | C-Suite & VIP Transportation",
    description: "Premium executive car service. Mercedes S-Class & BMW 7-Series. Professional chauffeurs. Discretion guaranteed. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/executive-car-service",
  },
};

export default function ExecutiveCarServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
