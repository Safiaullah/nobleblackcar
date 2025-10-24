import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Travel Tips NYC - Executive Transportation Guide | Noble",
  description: "Essential business travel tips for NYC. Airport transfers, corporate car service, productivity hacks, and professional travel strategies.",
  keywords: [
    "NYC business travel tips",
    "executive travel guide",
    "corporate transportation NYC",
    "business traveler NYC",
  ],
  openGraph: {
    title: "Business Travel Tips NYC - Executive Transportation Guide | Noble",
    description: "Essential business travel tips for NYC. Airport transfers and corporate car service strategies.",
    url: "https://nobleblackcarservice.com/blog/business-travel-tips",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Business Travel Tips",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Travel Tips NYC - Executive Guide",
    description: "Essential business travel tips for NYC professionals.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/business-travel-tips",
  },
};

export default function BusinessTravelTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
