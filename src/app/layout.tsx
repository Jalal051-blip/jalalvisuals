import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JalalVisuals | Videograf & Fotograf",
  description:
    "Professionelle videoer og billeder til e-commerce virksomheder, servicevirksomheder og marketingbureauer. Se mit arbejde og kontakt mig i dag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0d0f1e] text-white">
        {children}
      </body>
    </html>
  );
}
