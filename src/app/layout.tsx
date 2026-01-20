import type { Metadata, Viewport } from "next";
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
  title: "Likith Adusumalli | Full-Stack Developer",
  description:
    "Portfolio of Likith Adusumalli - Specialized in MERN, Next.js, Go, and Java. Building scalable web applications with seamless frontend experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-bgcolor text-foreground overflow-x-hidden`}
      >
        {/* <BackgroundAnimations /> */}
        <Navbar />
        <main className="relative z-10">
          <Sections />
        </main>
      </body>
    </html>
  );
}