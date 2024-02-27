"use client";

import { insertDate } from "@/app/(dashboard)/dates/actions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { insertDateSchema } from "@/lib/schemas/dates";
import { InsertDate } from "@/lib/types/dates";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddDateDialog({
  open: isOpen,
  onOpenChange: setIsOpen,
}: Props) {
  const form = useForm<InsertDate>({
    resolver: zodResolver(insertDateSchema),
  });

  async function handleSubmit(data: InsertDate) {
    const response = await insertDate(data);

    if (!response) {
      setIsOpen(false);
      return;
    }

    if (!response.success) {
      toast.error("Something went wrong");
    }
  }

  return (
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
  );
}
