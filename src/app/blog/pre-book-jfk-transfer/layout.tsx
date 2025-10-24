import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Pre-Book JFK Transfer | Guaranteed Pickup & Pricing | Noble",
  description: "Benefits of pre-booking JFK airport transfer. Guaranteed pickup, flat-rate pricing, flight tracking, no surge pricing. Book 48+ hours in advance.",
  keywords: [
    "pre-book JFK transfer",
    "JFK airport reservation",
    "guaranteed JFK pickup",
    "JFK car service booking",
  ],
  openGraph: {
    title: "Why Pre-Book JFK Transfer | Guaranteed Pickup & Pricing | Noble",
    description: "Benefits of pre-booking JFK airport transfer. Guaranteed pickup, flat-rate pricing, flight tracking.",
    url: "https://nobleblackcarservice.com/blog/pre-book-jfk-transfer",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Pre-Book JFK Transfer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Pre-Book JFK Transfer | Guaranteed Pickup & Pricing",
    description: "Benefits of pre-booking JFK airport transfer. Guaranteed pickup and flat-rate pricing.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/pre-book-jfk-transfer",
  },
};

export default function PreBookJFKTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
