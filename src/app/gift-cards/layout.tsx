import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards - Noble Black Car Service NYC | Perfect Gift",
  description: "Give the gift of luxury transportation. Noble gift cards for black car service in NYC. Perfect for corporate gifts, holidays, and special occasions.",
  keywords: [
    "car service gift cards",
    "Noble gift certificates",
    "luxury transportation gift",
    "corporate gift cards NYC",
    "black car gift cards",
  ],
  openGraph: {
    title: "Gift Cards - Noble Black Car Service NYC | Perfect Gift",
    description: "Give the gift of luxury transportation with Noble gift cards.",
    url: "https://nobleblackcarservice.com/gift-cards",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Gift Cards",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Cards - Noble Black Car Service",
    description: "Give the gift of luxury transportation with Noble gift cards.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/gift-cards",
  },
};

export default function GiftCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
