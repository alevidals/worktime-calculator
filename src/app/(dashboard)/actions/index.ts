"use server";

import { cookies } from "next/headers";

export async function updateSize(size: string) {
  if (!["default", "l", "xl"].includes(size)) {
    throw new Error("Invalid size");
  }

  const cookieStore = cookies();

  cookieStore.set("size", size, {
    path: "/",
    sameSite: "strict",
  });
}
