import { Navbar } from "@/components/navbar";

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-4 max-w-2xl mx-auto">{children}</div>
    </>
  );
}
