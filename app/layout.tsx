import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zean Chen",
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 text-black dark:text-white`}>
        <Navbar />
        <main className="py-8">
          {children}
        </main>
      </body>
    </html>
  );
}