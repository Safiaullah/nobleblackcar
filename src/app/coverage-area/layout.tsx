import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coverage Area - NYC & Tri-State Service | Noble Black Car",
  description: "Noble serves all of NYC and the tri-state area. Manhattan, Brooklyn, Queens, Long Island, New Jersey, Connecticut, and beyond. 24/7 luxury car service.",
  keywords: [
    "NYC car service coverage",
    "tri-state car service",
    "NYC transportation area",
    "Noble service area",
    "black car coverage NYC",
  ],
  openGraph: {
    title: "Coverage Area - NYC & Tri-State Service | Noble Black Car",
    description: "Serving all of NYC and the tri-state area with 24/7 luxury car service.",
    url: "https://nobleblackcarservice.com/coverage-area",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Coverage Area",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coverage Area - NYC & Tri-State Service",
    description: "Serving all of NYC and the tri-state area with luxury car service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/coverage-area",
  },
};

export default function CoverageAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
