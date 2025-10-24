import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manhattan to JFK Routes | Best Routes & Travel Times | Noble Black Car",
  description: "Complete guide to Manhattan to JFK airport routes. Fastest routes from all Manhattan neighborhoods, travel times, traffic patterns, flat-rate pricing.",
  keywords: [
    "Manhattan to JFK routes",
    "fastest route to JFK",
    "JFK airport car service",
    "Manhattan airport transfer",
    "JFK travel time",
  ],
  openGraph: {
    title: "Manhattan to JFK Routes | Best Routes & Travel Times | Noble Black Car",
    description: "Complete guide to Manhattan to JFK routes. Fastest routes and travel times.",
    url: "https://nobleblackcarservice.com/blog/manhattan-to-jfk-routes",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Manhattan to JFK",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhattan to JFK Routes | Best Routes",
    description: "Complete guide to Manhattan to JFK airport routes.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/manhattan-to-jfk-routes",
  },
};

export default function ManhattanJFKRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
