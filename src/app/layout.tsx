import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={cn(
          inter.className,
          "p-4 max-w-2xl mx-auto h-screen max-h-screen flex flex-col"
        )}
      >
        <Navbar />
        <main className="mt-4 px-3 overflow-y-scroll scrollbar-hide">
          {children}
        </main>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
