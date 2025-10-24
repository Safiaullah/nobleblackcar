import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Airport Transportation Guide: JFK, LaGuardia & Newark 2025",
  description: "Complete guide to getting to/from NYC airports. Compare taxis, rideshare, black car service, trains, and shuttles for JFK, LGA, and EWR.",
  keywords: [
    "NYC airport transportation",
    "JFK airport transport",
    "LaGuardia airport options",
    "Newark airport guide",
    "best way to airports NYC",
  ],
  openGraph: {
    title: "NYC Airport Transportation Guide: JFK, LaGuardia & Newark 2025",
    description: "Complete guide to getting to/from NYC airports. Compare all transportation options.",
    url: "https://nobleblackcarservice.com/blog/nyc-airport-transportation-guide",
    type: "article",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Airport Guide",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Airport Transportation Guide 2025",
    description: "Complete guide to getting to/from NYC airports.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog/nyc-airport-transportation-guide",
  },
};

export default function NYCAirportGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
