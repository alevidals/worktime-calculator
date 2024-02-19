"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

// const emojis = ["🔥", "🚀", "🌟", "🌈", "🎉", "🎈", "🎊", "🎁", "🎀", "🪅"];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="max-w-xl mx-auto rounded-full bg-foreground py-3 px-4">
      <nav>
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1 className="text-sm font-semibold text-white select-none cursor-pointer">
            WTC
          </h1>
          <div>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn("text-background px-2 py-1 rounded-md text-sm", {
                  "underline font-bold": pathname === href,
                })}
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
