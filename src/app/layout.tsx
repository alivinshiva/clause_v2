import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { MouseSpotlight } from "@/components/MouseSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clause Holdings",
  description: "Intelligence infrastructure for the modern enterprise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <BackgroundEffects />
        <MouseSpotlight />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <footer className="relative z-10 border-t border-clause-steel/20 bg-clause-white">
          <div className="container mx-auto px-4 py-6 text-center text-clause-steel">
            © {new Date().getFullYear()} Clause Holdings. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}