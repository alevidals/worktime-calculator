"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { AddDateDialog } from "./add-date-dialog";

export function AddDateButton() {
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
      <AddDateDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
