"use client";

import {
  CalendarIcon,
  ExitIcon,
  FaceIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { AddDateDialog } from "./add-date-dialog";

import { signOut } from "@/app/(auth)/actions";
import { usePathname, useRouter } from "next/navigation";
import { AddIssueDialog } from "./add-issue-dialog";

type Option = "add-date" | "add-issue";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState<Option>();

  const pathname = usePathname();
  const router = useRouter();

  const isIssuesPage = pathname.includes("issues");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOption("add-date");
        setOpen(false);
      }

      if (isIssuesPage && e.key === "i" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOption("add-issue");
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isIssuesPage]);

  return (
    <>
      <p className="text-sm text-muted-foreground fixed bottom-4 right-4">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Dates">
            <CommandItem
              onSelect={() => {
                setOption("add-date");
                setOpen(false);
              }}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Add date</span>
              <CommandShortcut>⌘ + D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          {isIssuesPage ? (
            <>
              <CommandSeparator />
              <CommandGroup heading="Issues">
                <CommandItem
                  onSelect={() => {
                    setOption("add-issue");
                    setOpen(false);
                  }}
                >
                  <FaceIcon className="mr-2 h-4 w-4" />
                  <span>Add issue</span>
                  <CommandShortcut>⌘ + I</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </>
          ) : null}
          <CommandSeparator />
          <CommandGroup heading="Account">
            <CommandItem
              onSelect={() => {
                router.push("/profile");
                setOpen(false);
              }}
            >
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                await signOut();
              }}
            >
              <ExitIcon className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <AddDateDialog
        open={option === "add-date"}
        onOpenChange={(open) => {
          if (!open) {
            setOption(undefined);
          }
        }}
      />
      <AddIssueDialog
        open={option === "add-issue"}
        onOpenChange={(open) => {
          if (!open) {
            setOption(undefined);
          }
        }}
      />
    </>
  );
}
