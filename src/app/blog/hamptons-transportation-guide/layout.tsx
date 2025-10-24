import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamptons Transportation Guide | NYC to Hamptons Car Service | Noble",
  description: "Complete guide to Hamptons transportation from NYC. Black car service to Southampton, East Hampton, Montauk. Flat-rate pricing, luxury vehicles.",
  keywords: [
    "Hamptons transportation",
    "NYC to Hamptons car service",
    "Southampton black car",
    "East Hampton luxury transport",
  ],
  openGraph: {
    title: "Hamptons Transportation Guide | NYC to Hamptons Car Service | Noble",
    description: "Complete guide to Hamptons transportation. Black car service to Southampton and East Hampton.",
    url: "https://nobleblackcarservice.com/blog/hamptons-transportation-guide",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Hamptons Guide",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamptons Transportation Guide",
    description: "Complete guide to Hamptons transportation from NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/hamptons-transportation-guide",
  },
};

export default function HamptonsGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
