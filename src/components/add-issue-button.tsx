"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { AddIssueDialog } from "./add-issue-dialog";

export function AddIssueButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        className="rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
      <AddIssueDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
