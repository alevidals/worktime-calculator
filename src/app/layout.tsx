import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Work Time Tracker",
  description: "A simple work time tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <main className="mt-4 max-w-2xl mx-auto">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
