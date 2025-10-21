import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nobleblackcarservice.com'),
  title: {
    default: "NYC Black Car Service | Luxury Airport Transport | Noble",
    template: "%s | Noble Black Car Service"
  },
  description: "Premium NYC black car service since 2015. Luxury airport transfers to JFK, LaGuardia & Newark. Corporate shuttles, executive transport. Book 24/7.",
  keywords: [
    "nyc black car service",
    "black car service nyc",
    "luxury car service manhattan",
    "airport car service nyc",
    "jfk black car service",
    "laguardia car service",
    "newark airport car service",
    "corporate car service nyc",
    "executive car service manhattan",
    "nyc limo service",
    "manhattan black car",
    "airport transfer nyc",
    "luxury transportation services"
  ],
  authors: [{ name: "Noble Black Car Service" }],
  creator: "Noble Black Car Service",
  publisher: "Noble Black Car Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nobleblackcarservice.com",
    siteName: "Noble Black Car Service",
    title: "NYC Black Car Service | Luxury Airport Transportation Since 2015",
    description: "Premium black car service in NYC. Professional airport transfers to JFK, LaGuardia & Newark. Corporate shuttles, executive transportation. Book 24/7.",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Mercedes S-Class luxury sedan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Black Car Service | Luxury Airport Transportation",
    description: "Premium black car service in NYC. Airport transfers to JFK, LaGuardia & Newark. Corporate shuttles. Book 24/7.",
    images: ["/images/mercedes-s-class.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com",
  },
  category: "Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
