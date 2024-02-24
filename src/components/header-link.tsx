"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export function HeaderLink({ href, label }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn("text-background px-2 py-1 rounded-md text-sm", {
        "underline font-bold": pathname === href,
      })}
    >
      {label}
    </Link>
  );
}
