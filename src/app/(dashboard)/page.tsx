import { AddDateButton } from "@/components/add-date-button";
import { DatesGrid } from "@/components/dates-grid";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data: dates } = await supabase
    .from("dates")
    .select(
      `
    id,
    date,
    issues (
      id
    )
  `,
    )
    .order("date", { ascending: true });

  return (
    <>
      <div className="mb-4">
        <AddDateButton />
      </div>
      {dates && dates?.length === 0 ? (
        <p>No dates found</p>
      ) : (
        <DatesGrid dates={dates} />
      )}
    </>
  );
}
