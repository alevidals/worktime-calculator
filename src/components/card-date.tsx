import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "@formkit/tempo";

type Props = {
  date: string;
  issues: number;
};

export function CardDate({ date, issues }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{format(date, "medium", "es")}</CardTitle>
        <CardDescription>{issues} issues</CardDescription>
      </CardHeader>
    </Card>
  );
}
