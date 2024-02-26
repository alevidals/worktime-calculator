"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signup } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/schemas/auth";
import { Register } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>();

  const form = useForm<Register>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  async function onSubmit(data: Register) {
    try {
      await signup(data);
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error ? <FormMessage>{error}</FormMessage> : null}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
