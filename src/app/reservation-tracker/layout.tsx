import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Reservation - Noble Black Car Service",
  description: "Track your Noble Black Car Service reservation in real-time. View driver location, vehicle details, and arrival time. Manage your booking online.",
  keywords: [
    "track reservation",
    "car service tracking",
    "track my ride NYC",
    "reservation status",
    "Noble booking tracker",
  ],
  openGraph: {
    title: "Track Your Reservation - Noble Black Car Service",
    description: "Track your reservation in real-time. View driver location and arrival time.",
    url: "https://nobleblackcarservice.com/reservation-tracker",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Reservation Tracker",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Your Reservation",
    description: "Track your Noble reservation in real-time.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/reservation-tracker",
  },
};

export default function ReservationTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
