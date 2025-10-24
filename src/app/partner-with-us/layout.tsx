import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us - Join Noble Black Car Network | NYC",
  description: "Partner with Noble Black Car Service. Opportunities for drivers, fleet owners, and businesses. Join NYC's premier luxury transportation network.",
  keywords: [
    "partner with Noble",
    "black car driver jobs",
    "fleet partnership NYC",
    "chauffeur opportunities",
    "car service partnership",
  ],
  openGraph: {
    title: "Partner With Us - Join Noble Black Car Network | NYC",
    description: "Partner with Noble. Opportunities for drivers, fleet owners, and businesses.",
    url: "https://nobleblackcarservice.com/partner-with-us",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Partner With Us",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us - Join Noble Network",
    description: "Partner with Noble Black Car Service. Join NYC's premier network.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/partner-with-us",
  },
};

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
