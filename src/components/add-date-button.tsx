"use client";

import { insertDateSchema } from "@/lib/schemas/dates";
import { InsertDate } from "@/lib/types/dates";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
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
import { Calendar } from "@/components/ui/calendar";
import { z } from "zod";
import { inserDate } from "@/lib/actions/dates";
import { toast } from "sonner";

export function AddDateButton() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<InsertDate>({
    resolver: zodResolver(insertDateSchema),
  });

  async function handleSubmit(data: InsertDate) {
    const { success } = await inserDate(data);

    if (success) {
      toast.success("Date added successfully");
    } else {
      toast.error("Something went wrong");
    }

    setIsOpen(false);
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
            <DialogTitle>Add date</DialogTitle>
            <DialogDescription>
              Fill the form below to add a new date.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-y-4"
            >
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="mx-auto">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Add date</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
