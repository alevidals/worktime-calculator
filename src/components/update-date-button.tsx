"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { updateDate } from "@/lib/actions/dates";
import { updateDateSchema } from "@/lib/schemas/dates";
import { UpdateDate } from "@/lib/types/dates";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { useParams } from "next/navigation";

type Props = {
  date: string;
};

export function UpdateDateButton({ date }: Props) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const params = useParams();
  const dateId = params.id as string;

  const form = useForm<UpdateDate>({
    resolver: zodResolver(updateDateSchema),
    defaultValues: {
      date: new Date(date),
    },
  });

  async function handleUpdateDate(data: UpdateDate) {
    const { success } = await updateDate(dateId, data);

    if (success) {
      toast.success("Date updated successfully");
    } else {
      toast.error("Something went wrong");
    }

    setOpen(false);
  }

  return isDesktop ? (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="icon" className="rounded-xl" variant="secondary">
          <Pencil1Icon className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update this date?</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdateDate)}
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
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit">Update</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="icon" className="rounded-xl" variant="secondary">
          <Pencil1Icon className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Update this issue?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete the date
            and all its issues.
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdateDate)}
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
            <Button type="submit" className="mx-4">
              Update
            </Button>
          </form>
        </Form>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
