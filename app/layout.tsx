import type { Metadata } from "next";
import { Fredoka, Open_Sans } from "next/font/google";

import { siteMetadata } from "@/config/site";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${openSans.variable} font-sans antialiased`}
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
