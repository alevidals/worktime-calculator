import { cookies } from "next/headers";

export function getSizeCookie() {
  const cookieStore = cookies();

  const size = cookieStore.get("size")?.value || "default";
  return size;
}
