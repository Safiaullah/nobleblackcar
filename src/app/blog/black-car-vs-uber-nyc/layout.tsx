import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Car vs Uber NYC: Complete Comparison 2025",
  description: "Compare black car service and Uber in NYC. Cost analysis, reliability, professionalism, and when each service makes sense for your needs.",
  keywords: [
    "black car vs uber NYC",
    "uber vs black car service",
    "NYC transportation comparison",
    "professional car service vs rideshare",
  ],
  openGraph: {
    title: "Black Car vs Uber NYC: Complete Comparison 2025",
    description: "Compare black car service and Uber in NYC. Cost analysis, reliability, and professionalism.",
    url: "https://nobleblackcarservice.com/blog/black-car-vs-uber-nyc",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Black Car vs Uber",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Car vs Uber NYC: Complete Comparison 2025",
    description: "Compare black car service and Uber in NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/black-car-vs-uber-nyc",
  },
};

export default function BlackCarVsUberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
