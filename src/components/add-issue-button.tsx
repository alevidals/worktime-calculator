"use client";

import { insertIssueSchema } from "@/lib/schemas/issues";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { InsertIssue } from "@/lib/types/issue";
import { insertIssue } from "@/lib/actions/issues";

type Props = {
  dateId: string;
};

export function AddIssueButton({ dateId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<InsertIssue>({
    resolver: zodResolver(insertIssueSchema),
    defaultValues: {
      name: "",
      start_time: "",
      end_time: "",
      date_id: dateId,
    },
  });

  async function handleSubmit(data: InsertIssue) {
    const { success } = await insertIssue({
      ...data,
      date_id: dateId,
    });

    if (success) {
      toast.success("Issue added successfully");
    } else {
      toast.error("Something went wrong");
    }

    setIsOpen(false);
    form.reset();
  }

  return (
    <>
      <Button
        size="icon"
        className="rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-4 w-4" />
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
                  name="start_time"
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
                  name="end_time"
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
