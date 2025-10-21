import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Transportation NYC | Luxury Car Service | Noble",
  description: "NYC wedding transportation. Bride & groom getaway cars, bridal party shuttles, guest transport. S-Class fleet, red carpet service. Packages from $450.",
  keywords: [
    "wedding transportation nyc",
    "wedding car service nyc",
    "wedding limo service nyc",
    "bride and groom transportation",
    "bridal party transportation",
    "wedding guest shuttle",
    "luxury wedding car service",
    "wedding getaway car",
    "nyc wedding transportation",
    "wedding day transportation",
    "wedding shuttle service",
    "elegant wedding transportation"
  ],
  openGraph: {
    title: "Wedding Transportation NYC | Luxury Wedding Car Service | Noble",
    description: "Elegant wedding transportation in NYC. Bride & groom getaway cars, bridal party shuttles, guest transportation. Red carpet service, champagne. Packages from $450.",
    url: "https://nobleblackcarservice.com/services/wedding",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Wedding Transportation NYC",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Transportation NYC | Luxury Wedding Car Service",
    description: "Elegant wedding transportation. Bride & groom getaway cars, bridal party shuttles. Red carpet service, champagne. Packages from $450.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/wedding",
  },
};

export default function WeddingTransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
