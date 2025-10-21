import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JFK Airport Car Service | Black Car to JFK NYC | Noble Black Car",
  description: "Premium JFK airport car service to all 8 terminals. Professional chauffeurs, flight tracking, meet & greet. Flat rates from $85 to Manhattan. Book 24/7.",
  keywords: [
    "jfk black car service",
    "jfk airport car service",
    "car service to jfk",
    "car service from jfk to manhattan",
    "jfk limo service",
    "jfk airport transportation",
    "black car jfk",
    "jfk car service manhattan",
    "jfk to manhattan car service",
    "jfk airport transfer",
    "jfk private car service",
    "luxury car service jfk"
  ],
  openGraph: {
    title: "JFK Airport Car Service | Professional Black Car to JFK | Noble",
    description: "Premium car service to JFK Airport. All 8 terminals covered. Flight tracking, meet & greet, flat rates from $85. Available 24/7.",
    url: "https://nobleblackcarservice.com/airports/jfk",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - JFK Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JFK Airport Car Service | Black Car to JFK NYC",
    description: "Professional JFK airport car service. All terminals, flight tracking, meet & greet. From $85. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/jfk",
  },
};

export default function JFKAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
