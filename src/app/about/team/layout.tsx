import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Professional Chauffeurs & Staff | Noble",
  description: "Meet the Noble team. Professional chauffeurs, dedicated dispatchers, and experienced management committed to excellence in NYC luxury transportation.",
  keywords: [
    "Noble team",
    "professional chauffeurs NYC",
    "black car drivers",
    "luxury transportation staff",
    "Noble employees",
  ],
  openGraph: {
    title: "Our Team - Professional Chauffeurs & Staff | Noble",
    description: "Meet the Noble team. Professional chauffeurs and staff committed to excellence.",
    url: "https://nobleblackcarservice.com/about/team",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Our Team",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Professional Chauffeurs & Staff",
    description: "Meet the Noble team committed to excellence in NYC transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/about/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
