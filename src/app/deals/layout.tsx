import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Offers & Deals - Noble Black Car Service NYC',
  description: 'Current promotions and special offers for Noble Black Car Service. Corporate discounts, new client offers, and seasonal deals on NYC luxury transportation.',
  keywords: 'black car service deals NYC, limo discounts New York, airport transfer offers, corporate transportation discounts',
  openGraph: {
    title: "Special Offers & Deals - Noble Black Car Service NYC",
    description: "Current promotions and special offers. Corporate discounts, new client offers, and seasonal deals.",
    url: "https://nobleblackcarservice.com/deals",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Special Offers & Deals",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers & Deals - Noble NYC",
    description: "Current promotions and special offers on luxury NYC transportation.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/deals",
  },
}

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
