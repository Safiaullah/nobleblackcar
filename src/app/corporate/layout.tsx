import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Car Service NYC - Business Transportation Solutions',
  description: 'NYC corporate car service with monthly invoicing, dedicated account manager, volume discounts. Trusted by Fortune 500 companies for executive travel.',
  keywords: 'corporate car service NYC, business transportation, executive car service, company car service, corporate accounts, business travel NYC',
  openGraph: {
    title: 'Corporate Car Service NYC - Business Transportation Solutions | Noble',
    description: 'Noble corporate car service for NYC businesses. Monthly invoicing, dedicated account manager, volume discounts, and executive transportation.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/corporate',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Solutions",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Car Service NYC - Business Solutions",
    description: "Corporate car service with monthly invoicing and dedicated account management.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/corporate",
  },
}

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
