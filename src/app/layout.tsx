import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VarsIT | Strony internetowe dla lokalnych firm",
  description:
    "Tworzymy skuteczne strony www dla małych firm. Przejrzyste ceny, szybka realizacja, wsparcie techniczne na telefon. Sprawdź nasze portfolio!",
  keywords: [
    "strony internetowe",
    "tworzenie stron www",
    "strony dla firm",
    "projektowanie stron",
    "serwisy internetowe",
    "strona firmowa",
    "webdesign",
  ],
  openGraph: {
    title: "VarsIT | Profesjonalne strony www",
    description:
      "VarsIT tworzy nowoczesne strony internetowe dla lokalnych biznesów. Nasze strony są szybkie, responsywne i przede wszystkim skuteczne biznesowo.",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/webspot-social-card.png", // Path from your public folder
        width: 1200,
        height: 630,
        alt: "VarsIT - Tworzenie stron internetowych dla lokalnych firm",
      },
      {
        url: "/images/webspot-discord-card.png", // Square format for Discord
        width: 800,
        height: 800,
        alt: "VarsIT - Tworzenie stron internetowych dla lokalnych firm",
      },
    ],
    siteName: "VarsIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "VarsIT | Strony www dla firm",
    description: "Projektujemy strony, które pomagają małym firmom rosnąć",
    images: ["/images/webspot-social-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
