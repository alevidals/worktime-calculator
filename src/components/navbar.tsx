import Link from "next/link";
import { HeaderLink } from "./header-link";
import { NavbarDropdown } from "./navbar-dropdown";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

export function Navbar() {
  return (
    <header className="max-w-xl mx-auto rounded-xl bg-foreground py-3 px-4 h-14">
      <nav className="flex items-center justify-between max-w-3xl mx-auto h-full">
        <Link href="/" className="text-sm font-semibold text-white select-none">
          WTC
        </Link>
        <div>
          {links.map(({ href, label }) => (
            <HeaderLink key={href} href={href} label={label} />
          ))}
        </div>
        <NavbarDropdown />
      </nav>
    </header>
  );
}
