import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const screenSizes: Record<string, string> = {
  default: "max-w-xl",
  l: "max-w-3xl",
  xl: "max-w-5xl",
};

export const gridSizes: Record<string, string> = {
  default: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
  l: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
  xl: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4",
};
