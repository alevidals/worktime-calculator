import { getSizeCookie } from "@/app/(dashboard)/utils.server";
import { gridSizes } from "@/lib/utils";
import Link from "next/link";
import { CardDate } from "./card-date";

type Props = {
  dates:
    | {
        id: string;
        date: string;
        issues: {
          id: string;
        }[];
      }[]
    | null;
};

export function DatesGrid({ dates }: Props) {
  const size = getSizeCookie();

  return (
    <div className={gridSizes[size]}>
      {dates?.map((date) => (
        <Link
          key={date.id}
          href={`/issues/${date.id}`}
          className="hover:scale-105 duration-300"
        >
          <CardDate date={date.date} issues={date.issues.length} />
        </Link>
      ))}
    </div>
  );
}
