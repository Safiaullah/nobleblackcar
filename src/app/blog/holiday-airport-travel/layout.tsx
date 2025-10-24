import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday Airport Travel Tips NYC - Thanksgiving, Christmas | Noble",
  description: "Navigate NYC holiday airport travel. Tips for Thanksgiving, Christmas, New Year. Avoid crowds, book early, arrive stress-free.",
  keywords: [
    "holiday airport travel NYC",
    "Thanksgiving airport tips",
    "Christmas travel NYC",
    "holiday car service",
  ],
  openGraph: {
    title: "Holiday Airport Travel Tips NYC - Thanksgiving, Christmas | Noble",
    description: "Navigate NYC holiday airport travel. Tips for Thanksgiving, Christmas, and New Year.",
    url: "https://nobleblackcarservice.com/blog/holiday-airport-travel",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Holiday Travel",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Airport Travel Tips NYC",
    description: "Navigate NYC holiday airport travel stress-free.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/holiday-airport-travel",
  },
};

export default function HolidayTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
