import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaGuardia Airport Car Service | LGA Service NYC | Noble",
  description: "LaGuardia car service to all 4 terminals. Closest NYC airport to Manhattan - 9 miles! Flight tracking, meet & greet. From $70. Book 24/7.",
  keywords: [
    "laguardia car service",
    "laguardia airport car service",
    "car service to lga",
    "car service from lga to manhattan",
    "lga limo service",
    "lga airport transportation",
    "black car lga",
    "lga car service manhattan",
    "lga to manhattan car service",
    "lga airport transfer",
    "lga private car service",
    "luxury car service lga"
  ],
  openGraph: {
    title: "LaGuardia Airport Car Service | Professional Black Car to LGA | Noble",
    description: "Premium car service to LaGuardia Airport. Closest to Manhattan - 9 miles. All 4 terminals covered. Flight tracking, meet & greet, flat rates from $70. Available 24/7.",
    url: "https://nobleblackcarservice.com/airports/laguardia",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - LaGuardia Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaGuardia Airport Car Service | Black Car to LGA NYC",
    description: "Professional LGA airport car service. Closest airport to Manhattan. All terminals, flight tracking, meet & greet. From $70. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/laguardia",
  },
};

export default function LaGuardiaAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
