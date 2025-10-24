import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Noble Black Car Service FAQ: booking, pricing, fleet, airport transfers, cancellations, and corporate accounts in NYC. Get answers to common questions.',
  keywords: 'black car service FAQ, NYC car service questions, airport transfer info, limo service pricing, corporate car service, booking black car NYC',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Noble',
    description: 'Find answers to common questions about Noble Black Car Service. Learn about booking, pricing, fleet, airport transfers, cancellations, and corporate accounts in NYC.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/faq',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - FAQ",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions",
    description: "Find answers about booking, pricing, fleet, and airport transfers.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
