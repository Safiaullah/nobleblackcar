import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stewart Airport Car Service | SWF Hudson Valley NY | Noble",
  description: "Premium car service to Stewart Airport (SWF). Serving Hudson Valley, Orange County, Westchester. Professional chauffeurs available 24/7.",
  keywords: [
    "stewart airport car service",
    "swf car service",
    "new york stewart airport transportation",
    "stewart airport limo",
    "hudson valley airport car service",
    "orange county airport service",
    "car service to stewart airport",
    "swf airport transfer"
  ],
  openGraph: {
    title: "Stewart Airport Car Service | SWF Hudson Valley Transportation",
    description: "Professional car service to New York Stewart International Airport. Serving Hudson Valley, Orange County, Westchester. Luxury vehicles, 24/7 service.",
    url: "https://nobleblackcarservice.com/airports/stewart",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Stewart Airport Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stewart Airport Car Service | SWF Hudson Valley",
    description: "Professional car service to New York Stewart International Airport. Hudson Valley, Orange County service. 24/7 availability.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/airports/stewart",
  },
};

export default function StewartAirportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
