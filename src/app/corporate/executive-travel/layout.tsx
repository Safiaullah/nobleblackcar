import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Travel NYC - C-Suite Transportation | Noble",
  description: "Premium executive car service for C-level executives. Discreet, reliable, luxury transportation. Dedicated account management and priority service in NYC.",
  keywords: [
    "executive travel NYC",
    "C-suite transportation",
    "executive car service",
    "VIP transportation NYC",
    "CEO car service",
  ],
  openGraph: {
    title: "Executive Travel NYC - C-Suite Transportation | Noble",
    description: "Premium executive car service. Discreet, reliable luxury transportation with priority service.",
    url: "https://nobleblackcarservice.com/corporate/executive-travel",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Executive Travel",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Travel NYC - C-Suite Transportation",
    description: "Premium executive car service with discreet, reliable transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/corporate/executive-travel",
  },
};

export default function ExecutiveTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
