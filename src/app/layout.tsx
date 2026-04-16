import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = "https://www.metaadsleadengine.com";
const title =
  "Meta Ads Lead Generation Service | Predictable Leads in 30 Days";
const description =
  "Done-for-you Meta Ads lead generation system with high-converting landing pages, WhatsApp follow-up, tracking, and a 30-day qualified leads guarantee.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  keywords: [
    "Meta Ads lead generation",
    "Facebook ads agency",
    "lead generation service",
    "Meta ads for business owners",
    "landing page optimization",
    "WhatsApp lead generation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Meta Ads Lead Engine",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Meta Ads Lead Engine landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
