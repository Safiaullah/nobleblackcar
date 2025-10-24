import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Transportation Checklist NYC - Planning Guide | Noble",
  description: "Complete wedding transportation checklist for NYC weddings. Plan bridal party, guest shuttles, and luxury car service. Timeline, tips, and pricing guide.",
  keywords: [
    "wedding transportation checklist",
    "NYC wedding car service",
    "bridal party limo",
    "wedding shuttle planning",
  ],
  openGraph: {
    title: "Wedding Transportation Checklist NYC - Planning Guide | Noble",
    description: "Complete wedding transportation checklist for NYC weddings. Plan bridal party and guest shuttles.",
    url: "https://nobleblackcarservice.com/blog/wedding-transportation-checklist",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Wedding Checklist",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Transportation Checklist NYC",
    description: "Complete wedding transportation checklist for NYC.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/wedding-transportation-checklist",
  },
};

export default function WeddingChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
