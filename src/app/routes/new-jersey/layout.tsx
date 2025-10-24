import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC to New Jersey Car Service - Newark & Beyond | Noble",
  description: "Premium black car service from NYC to New Jersey. Newark, Jersey City, Princeton, and more. Flat-rate pricing, luxury vehicles, professional chauffeurs.",
  keywords: [
    "NYC to New Jersey car service",
    "Newark car service",
    "Jersey City transportation",
    "NYC to Princeton limo",
    "New Jersey black car",
  ],
  openGraph: {
    title: "NYC to New Jersey Car Service - Newark & Beyond | Noble",
    description: "Premium black car service from NYC to New Jersey. Flat-rate pricing, luxury vehicles.",
    url: "https://nobleblackcarservice.com/routes/new-jersey",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - New Jersey",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to New Jersey Car Service",
    description: "Premium black car service from NYC to New Jersey destinations.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/new-jersey",
  },
};

export default function NewJerseyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
