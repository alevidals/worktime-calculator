import { DeleteDateButton } from "@/components/delete-date-button";
import { UpdateDateButton } from "@/components/update-date-button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type Props = {
  dateId: string;
};

export async function DateActionsButton({ dateId }: Props) {
  const supabase = createClient();

  const { data } = await supabase
    .from("dates")
    .select("date")
    .eq("id", dateId)
    .single();

  if (!data) {
    redirect("/");
  }

  return (
    <div className="space-x-4">
      <UpdateDateButton dateId={dateId} date={data.date} />
      <DeleteDateButton dateId={dateId} />
    </div>
  );
}
