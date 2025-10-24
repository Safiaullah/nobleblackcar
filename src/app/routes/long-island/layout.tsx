import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC to Long Island Car Service - Hamptons Transportation | Noble",
  description: "Premium car service from NYC to Long Island and the Hamptons. Flat-rate pricing, luxury vehicles, professional chauffeurs. Perfect for weekend getaways.",
  keywords: [
    "NYC to Long Island car service",
    "Hamptons transportation",
    "Long Island black car",
    "NYC to Southampton",
    "Hamptons car service",
  ],
  openGraph: {
    title: "NYC to Long Island Car Service - Hamptons Transportation | Noble",
    description: "Premium car service from NYC to Long Island and the Hamptons. Flat-rate pricing, luxury vehicles.",
    url: "https://nobleblackcarservice.com/routes/long-island",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Long Island",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Long Island Car Service",
    description: "Premium car service to Long Island and the Hamptons.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/long-island",
  },
};

export default function LongIslandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
