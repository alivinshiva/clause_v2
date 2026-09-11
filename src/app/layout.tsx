import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clause Holdings — From Business Problem to Intelligent System",
    template: "%s | Clause Holdings",
  },
  description:
    "Clause helps organisations turn complex workflows, knowledge and growth challenges into responsible AI systems and digital products.",
  keywords: [
    "AI transformation",
    "AI consulting",
    "product engineering",
    "AI workflow automation",
    "responsible AI",
    "AI-enabled growth",
  ],
  openGraph: {
    title: "Clause Holdings — From Business Problem to Intelligent System",
    description:
      "Strategy, product engineering and measurable growth in one connected practice.",
    type: "website",
    siteName: "Clause Holdings",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-clause-white">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
