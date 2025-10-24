import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Transportation NYC - Hospital & Appointment Rides | Noble',
  description: 'NYC non-emergency medical transportation. Hospital appointments, treatments, specialist visits. Compassionate service with wheelchair accessible vehicles.',
  keywords: 'medical transportation NYC, hospital rides New York, non-emergency medical transport, wheelchair accessible car service NYC',
  openGraph: {
    title: "Medical Transportation NYC - Hospital & Appointment Rides",
    description: "NYC non-emergency medical transportation with compassionate service and wheelchair accessible vehicles.",
    url: "https://nobleblackcarservice.com/services/medical-transportation",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Medical Transportation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Transportation NYC",
    description: "Non-emergency medical transportation with compassionate service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/services/medical-transportation",
  },
}

export default function MedicalTransportationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
