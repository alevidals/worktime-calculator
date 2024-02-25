import { TailwindIndicator } from "@/components/tailwind-indicador";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          openSans.className,
        )}
      >
        <main>{children}</main>
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
