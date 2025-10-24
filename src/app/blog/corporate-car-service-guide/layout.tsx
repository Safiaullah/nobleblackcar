import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Car Service Guide NYC - Executive Transportation | Noble",
  description: "Complete guide to corporate car service in NYC. How to choose providers, set up accounts, manage employees, and reduce transportation costs.",
  keywords: [
    "corporate car service NYC",
    "executive transportation guide",
    "business car service",
    "corporate account setup",
  ],
  openGraph: {
    title: "Corporate Car Service Guide NYC - Executive Transportation | Noble",
    description: "Complete guide to corporate car service in NYC. Choose providers and reduce costs.",
    url: "https://nobleblackcarservice.com/blog/corporate-car-service-guide",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Guide",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Car Service Guide NYC",
    description: "Complete guide to corporate car service in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/corporate-car-service-guide",
  },
};

export default function CorporateGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
