"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/actions/auth";
import Link from "next/link";

export function NavbarDropdown() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold">
        AV
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>Profile</DropdownMenuLabel> */}
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold">
    //   AV
    // </div>
  );
}
