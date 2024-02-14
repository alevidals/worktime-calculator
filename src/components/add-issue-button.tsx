"use client";

import { getSecondsFromTimeRange } from "@/lib/issues";
import { addIssueSchema } from "@/lib/schema";
import { issuesAtom } from "@/lib/store";
import { AddIssue, Issue } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export function AddIssueButton() {
  const [isOpen, setIsOpen] = useState(false);
  const setIssues = useSetAtom(issuesAtom);

  const form = useForm<AddIssue>({
    resolver: zodResolver(addIssueSchema),
  });

  function handleSubmit(data: AddIssue) {
    const workTime = getSecondsFromTimeRange({
      startTime: data.startTime,
      endTime: data.endTime,
    });

    const newIssue: Issue = {
      id: uuid(),
      name: data.name,
      startTime: data.startTime,
      endTime: data.endTime,
      workTime,
    };

    toast.success("Issue added successfully");

    setIssues((prev) => [...prev, newIssue]);

    setIsOpen(false);
    form.reset();
  }

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add issue</DialogTitle>
            <DialogDescription>
              Fill the form below to add a new issue to the list.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-4">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Add registry</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
