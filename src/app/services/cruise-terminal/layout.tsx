import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cruise Terminal Transportation NYC - Manhattan & Brooklyn | Noble",
  description: "NYC cruise terminal car service for Manhattan and Brooklyn ports. Luggage assistance, on-time service. Perfect start to your cruise vacation.",
  keywords: [
    "cruise terminal transportation NYC",
    "Manhattan cruise port car service",
    "Brooklyn cruise terminal",
    "cruise ship transportation",
    "port car service NYC",
  ],
  openGraph: {
    title: "Cruise Terminal Transportation NYC - Manhattan & Brooklyn | Noble",
    description: "Premium car service to NYC cruise terminals. Luggage assistance and on-time service.",
    url: "https://nobleblackcarservice.com/services/cruise-terminal",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Cruise Terminal",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruise Terminal Transportation NYC",
    description: "Premium car service to Manhattan and Brooklyn cruise terminals.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/cruise-terminal",
  },
};

export default function CruiseTerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
