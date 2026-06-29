import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/nav";
import { FooterGate } from "@/components/footer-gate";
import { RouteAttribute } from "@/components/route-attribute";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cps.co.za"),
  title: {
    default: "CPS - Cornerstone Performance Solutions",
    template: "%s · CPS",
  },
  description:
    "Accredited banking, insurance and leadership qualifications, plus the proprietary CPSLearn platform - built for South African professionals and the companies who employ them.",
  openGraph: {
    title: "CPS - Cornerstone Performance Solutions",
    description:
      "Education that moves careers and businesses forward. Accredited qualifications and a proprietary learning platform.",
    type: "website",
    siteName: "Cornerstone Performance Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPS - Cornerstone Performance Solutions",
    description:
      "Education that moves careers and businesses forward. Accredited qualifications and a proprietary learning platform.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0C1C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <RouteAttribute />
        <Nav />
        <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
          {children}
        </div>
        <FooterGate />
      </body>
    </html>
  );
}
