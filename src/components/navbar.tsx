"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-neutral-700 p-3 max-w-2xl mx-auto rounded-md">
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-semibold text-white">WTT</h1>
          <div>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-white",
                  // "hover:text-primary-500",
                  "px-2",
                  "py-1",
                  "rounded-md",
                  {
                    "underline font-bold": pathname === href,
                  }
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
