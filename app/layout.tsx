import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaCart - Shop Smart",
  description: "Modern Full-Stack E-Commerce Platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}