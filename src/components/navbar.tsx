"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

const emojis = ["🔥", "🚀", "🌟", "🌈", "🎉", "🎈", "🎊", "🎁", "🎀", "🪅"];

export function Navbar() {
  const pathname = usePathname();

  const [emoji, setEmoji] = useState(emojis[0]);

  return (
    <header>
      <nav className="bg-neutral-700 p-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1
            className="text-xl font-semibold text-white select-none cursor-pointer"
            onClick={() =>
              setEmoji(emojis[Math.floor(Math.random() * emojis.length)])
            }
          >
            {emoji}
          </h1>
          <div>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn("text-white px-2 py-1 rounded-md text-sm", {
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
