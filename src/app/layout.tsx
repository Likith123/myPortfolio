import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Likith Adusumalli",
  description:
    "My personal portfolio website showcasing my projects and skills.",
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Likith Adusumalli",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    images: ["/portfolio-preview.png"],
  },
  openGraph: {
    title: "Portfolio - Likith Adusumalli",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    images: ["/portfolio-preview.png"],
    siteName: "Likith Adusumalli Portfolio",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout() {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <Navbar />
        <main>
          <Sections />
        </main>
      </body>
    </html>
  );
}
