"use client";

import { updateSize } from "@/app/(dashboard)/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  size: string;
};

export function SizeSelector({ size }: Props) {
  return (
    <Select value={size} onValueChange={updateSize}>
      <SelectTrigger className="mt-1 mb-2">
        <SelectValue placeholder="Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="l">Large</SelectItem>
        <SelectItem value="xl">Extra Large</SelectItem>
      </SelectContent>
    </Select>
  );
}
