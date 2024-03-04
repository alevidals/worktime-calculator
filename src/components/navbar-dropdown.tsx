"use client";

import { signOut } from "@/app/(auth)/actions";
import { SizeSelector } from "@/components/size-selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  size: string;
};

export function NavbarDropdown({ size }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  async function handleSignOut() {
    await signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold">
        <PersonIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isDesktop ? (
          <>
            <SizeSelector size={size} />
            <Separator className="mb-1" />
          </>
        ) : null}
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
