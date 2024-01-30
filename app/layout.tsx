import { type RootLayoutProps } from "@/types";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Interview Questions",
  description: "A collection of interview questions",
};

const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
    <body>{children}</body>
    </html>
  );
};

export default RootLayout;
