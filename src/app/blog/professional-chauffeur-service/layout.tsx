import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Chauffeur Service NYC | Trained Drivers | Noble Black Car",
  description: "NYC professional chauffeur service with vetted, trained drivers. Background-checked, uniformed chauffeurs for executive, corporate, VIP transportation.",
  keywords: [
    "professional chauffeur service NYC",
    "trained drivers NYC",
    "executive chauffeur",
    "VIP driver service",
    "licensed chauffeurs",
  ],
  openGraph: {
    title: "Professional Chauffeur Service NYC | Trained Drivers | Noble Black Car",
    description: "NYC professional chauffeur service with vetted, trained drivers.",
    url: "https://nobleblackcarservice.com/blog/professional-chauffeur-service",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Professional Chauffeurs",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Chauffeur Service NYC",
    description: "Professional chauffeur service with trained, vetted drivers.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/professional-chauffeur-service",
  },
};

export default function ProfessionalChauffeurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
