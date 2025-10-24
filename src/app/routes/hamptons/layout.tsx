import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC to Hamptons Car Service | Manhattan to Hamptons",
  description: "Luxury car service from NYC to Hamptons. Southampton, East Hampton, Montauk transportation. Professional chauffeurs, flat rates, Mercedes & Escalade. Book 24/7.",
  keywords: [
    "nyc to hamptons car service",
    "manhattan to hamptons car service",
    "hamptons car service",
    "car service to hamptons",
    "hamptons transportation",
    "nyc hamptons limo service",
    "hamptons black car service"
  ],
  openGraph: {
    title: "NYC to Hamptons Car Service | Luxury Transportation",
    description: "Premium car service from Manhattan to the Hamptons. Southampton, East Hampton, Montauk. Professional service, luxury vehicles, flat rates.",
    url: "https://nobleblackcarservice.com/routes/hamptons",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Hamptons Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC to Hamptons Car Service",
    description: "Premium car service from Manhattan to the Hamptons. Luxury vehicles, flat rates.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/routes/hamptons",
  },
};

export default function HamptonsRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
