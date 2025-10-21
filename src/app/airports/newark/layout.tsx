import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newark Airport Car Service | EWR to Manhattan | Noble",
  description: "Newark Airport car service to all 3 terminals. EWR to Manhattan transport, flight tracking, tolls included. Flat rates from $85. Book 24/7.",
  keywords: [
    "newark airport car service",
    "ewr car service",
    "car service to newark airport",
    "newark to manhattan car service",
    "newark airport limo service",
    "ewr airport transportation",
    "black car newark airport",
    "newark car service manhattan",
    "ewr to manhattan car service",
    "newark airport transfer",
    "newark private car service",
    "luxury car service newark"
  ],
  openGraph: {
    title: "Newark Airport Car Service | Professional Black Car to EWR | Noble",
    description: "Premium car service to Newark Airport. All 3 terminals covered. Flight tracking, meet & greet, all tolls included. Flat rates from $85. Available 24/7.",
    url: "https://nobleblackcarservice.com/airports/newark",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Newark Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newark Airport Car Service | Black Car to EWR NYC",
    description: "Professional EWR airport car service. All terminals, flight tracking, tolls included, meet & greet. From $85. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/newark",
  },
};

export default function NewarkAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
