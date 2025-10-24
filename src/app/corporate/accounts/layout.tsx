import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Accounts - Business Car Service NYC | Noble",
  description: "Set up a corporate account with Noble. Monthly billing, dedicated support, volume discounts. Streamline your company's transportation needs in NYC.",
  keywords: [
    "corporate accounts NYC",
    "business car service accounts",
    "monthly billing car service",
    "corporate transportation NYC",
    "company car service",
  ],
  openGraph: {
    title: "Corporate Accounts - Business Car Service NYC | Noble",
    description: "Set up a corporate account. Monthly billing, dedicated support, volume discounts.",
    url: "https://nobleblackcarservice.com/corporate/accounts",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Corporate Accounts",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Accounts - Business Car Service NYC",
    description: "Streamline your company's transportation with a Noble corporate account.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/corporate/accounts",
  },
};

export default function CorporateAccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
