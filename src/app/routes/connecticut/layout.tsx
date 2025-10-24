import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC to Connecticut Car Service - Greenwich | Noble",
  description: "Premium black car service from NYC to Connecticut. Greenwich, Stamford, New Haven, and more. Flat-rate pricing, luxury vehicles, professional chauffeurs.",
  keywords: [
    "NYC to Connecticut car service",
    "Greenwich car service",
    "Stamford transportation",
    "NYC to New Haven limo",
    "Connecticut black car",
  ],
  openGraph: {
    title: "NYC to Connecticut Car Service - Greenwich | Noble",
    description: "Premium black car service from NYC to Connecticut. Flat-rate pricing, luxury vehicles.",
    url: "https://nobleblackcarservice.com/routes/connecticut",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Connecticut",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Connecticut Car Service",
    description: "Premium black car service from NYC to Connecticut destinations.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/connecticut",
  },
};

export default function ConnecticutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
