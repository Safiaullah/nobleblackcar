import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Noble Black Car Service NYC - 24/7 Reservations',
  description: 'Contact Noble Black Car Service for reservations, questions, or corporate accounts. Available 24/7. Call or email for immediate assistance.',
  keywords: 'contact black car service NYC, Noble reservations, NYC limo contact, car service phone number',
  openGraph: {
    title: "Contact Noble Black Car Service - 24/7 Reservations",
    description: "Contact Noble for reservations, questions, or corporate accounts. Available 24/7.",
    url: "https://nobleblackcarservice.com/contact",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Contact Us",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Noble Black Car Service NYC",
    description: "Contact us for reservations, questions, or corporate accounts. Available 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
