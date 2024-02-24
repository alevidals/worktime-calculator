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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
