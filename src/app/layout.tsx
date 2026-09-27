import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import BackgroundAnimations from "@/components/BackgroundAnimations";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Likith Naga Sai Adusumalli | Full Stack Engineer",
  description:
    "Portfolio of Likith Naga Sai Adusumalli - Frontend-focused Full Stack Engineer with 4+ years of experience building enterprise banking interfaces (Finacle Core Banking Platform) and modern web applications with React, Next.js, TypeScript, Java, and Spring Boot.",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'dark';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased relative min-h-screen bg-bgcolor text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary transition-colors duration-300 font-sans`}
      >
        <BackgroundAnimations />
        <Navbar />
        <main className="relative z-10">
          <Sections />
        </main>
      </body>
    </html>
  );
}