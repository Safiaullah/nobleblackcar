import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials - NYC Black Car Service Reviews | Noble",
  description: "Read real reviews from our satisfied clients. See why businesses and travelers trust Noble Black Car Service for professional transportation in NYC.",
  keywords: [
    "black car service reviews NYC",
    "NYC limo testimonials",
    "customer reviews",
    "client feedback",
    "Noble black car reviews",
  ],
  openGraph: {
    title: "Client Testimonials - NYC Black Car Service Reviews | Noble",
    description: "Read real reviews from our satisfied clients. See why businesses and travelers trust Noble Black Car Service.",
    url: "https://nobleblackcarservice.com/testimonials",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Client Testimonials",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials - NYC Black Car Service Reviews",
    description: "Read real reviews from our satisfied clients. See why businesses and travelers trust Noble Black Car Service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/testimonials",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
