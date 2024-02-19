"use client";

import { issuesAtom } from "@/lib/store";
import { TrashIcon } from "@radix-ui/react-icons";
import { useSetAtom } from "jotai";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

export function DeleteIssuesButton({ className }: { className?: string }) {
  const setIssues = useSetAtom(issuesAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive" className={className}>
          <TrashIcon className="w-5 h-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete all the
            issues.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setIssues([])}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
