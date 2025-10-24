import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety - Our Commitment to Your Security | Noble",
  description: "Safety is our priority. Learn about Noble's safety protocols, driver screening, vehicle maintenance, and commitment to secure luxury transportation in NYC.",
  keywords: [
    "car service safety NYC",
    "Noble safety standards",
    "safe transportation NYC",
    "driver background checks",
    "vehicle safety protocols",
  ],
  openGraph: {
    title: "Safety - Our Commitment to Your Security | Noble",
    description: "Safety is our priority. Professional drivers, well-maintained vehicles, and strict protocols.",
    url: "https://nobleblackcarservice.com/about/safety",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Safety",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety - Our Commitment to Your Security",
    description: "Safety is our priority at Noble Black Car Service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/about/safety",
  },
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
