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
  title: "Noble Black Car | Premium 1st Class Transportation Services NYC",
  description: "Providing premium 1st class transportation services since 2015. Airport transfers, corporate shuttles, and luxury car service in NYC. It's not just the ride, it's the experience!",
  keywords: "nyc car service, airport transfer, corporate transportation, luxury car service, black car service nyc, jfk airport transfer, laguardia airport transfer, newark airport transfer",
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
