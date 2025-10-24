import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Program - Earn Rewards | Noble Black Car Service",
  description: "Refer friends to Noble Black Car Service and earn rewards. Get discounts on future rides when your referrals book with us. Easy to join.",
  keywords: [
    "referral program",
    "Noble referral rewards",
    "black car service referral",
    "earn rewards NYC",
    "car service discounts",
  ],
  openGraph: {
    title: "Referral Program - Earn Rewards | Noble Black Car Service",
    description: "Refer friends and earn rewards. Get discounts on future rides with Noble Black Car Service.",
    url: "https://nobleblackcarservice.com/referral-program",
    type: "website",
    images: [
      {
        url: "/images/mercedes-s-class.png",
        width: 1200,
        height: 630,
        alt: "Noble Black Car Service - Referral Program",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program - Earn Rewards",
    description: "Refer friends and earn rewards with Noble Black Car Service.",
    images: ["/images/mercedes-s-class.png"],
  },
  alternates: {
    canonical: "https://nobleblackcarservice.com/referral-program",
  },
};

export default function ReferralProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
