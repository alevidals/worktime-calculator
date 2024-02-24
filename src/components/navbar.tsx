import { HeaderLink } from "./header-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/summary", label: "Summary" },
];

export function Navbar() {
  return (
    <header className="max-w-xl mx-auto rounded-full bg-foreground py-3 px-4">
      <nav>
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1 className="text-sm font-semibold text-white select-none cursor-pointer">
            WTC
          </h1>
          <div>
            {links.map(({ href, label }) => (
              <HeaderLink key={href} href={href} label={label} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
