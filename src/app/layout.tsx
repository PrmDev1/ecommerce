import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jost : NextFontWithVariable = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Nike Store - Ecommerce",
  description: "An e-commerce platform for Nike shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
