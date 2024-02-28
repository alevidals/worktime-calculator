import { getSizeCookie } from "@/app/(dashboard)/utils.server";
import { cn, screenSizes } from "@/lib/utils";
import Link from "next/link";
import { HeaderLink } from "./header-link";
import { NavbarDropdown } from "./navbar-dropdown";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

export function Navbar() {
  const size = getSizeCookie();

  return (
    <header
      className={cn(
        "transition-all duration-200 ease-in-out",
        screenSizes[size],
        "mx-auto rounded-xl bg-foreground py-3 px-4 h-14",
      )}
    >
      <nav className="flex items-center justify-between max-w-3xl mx-auto h-full">
        <Link href="/" className="text-sm font-semibold text-white select-none">
          WTC
        </Link>
        <div>
          {links.map(({ href, label }) => (
            <HeaderLink key={href} href={href} label={label} />
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <NavbarDropdown size={size} />
        </div>
      </nav>
    </header>
  );
}
