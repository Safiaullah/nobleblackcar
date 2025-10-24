import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - NYC Car Service Tips & Guides',
  description: 'Expert advice on black car service in NYC. Transportation tips, airport guides, travel advice, and industry insights from Noble Black Car Service.',
  keywords: 'NYC transportation blog, black car service tips, airport travel guides, luxury car service advice',
  openGraph: {
    title: 'Blog - NYC Car Service Tips & Guides | Noble',
    description: 'Expert advice on black car service in NYC. Transportation tips, airport guides, and travel advice.',
    type: 'website',
    url: 'https://nobleblackcarservice.com/blog',
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Blog & Transportation Tips",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - NYC Car Service Tips & Guides",
    description: "Expert advice on black car service in NYC. Transportation tips and airport guides.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
