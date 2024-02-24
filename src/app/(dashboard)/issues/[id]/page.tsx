import { AddIssueButton } from "@/components/add-issue-button";
import { DateActionsButton } from "@/components/date-actions-button";
import { IssuesTable } from "@/components/issues-table";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: {
    id: string;
  };
};

export default async function IssuesPage({ params: { id } }: Props) {
  const supabase = createClient();

  const { data: issues } = await supabase
    .from("issues")
    .select("id, name, start_time, end_time")
    .eq("date_id", id)
    .order("start_time", { ascending: true });

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <AddIssueButton dateId={id} />
        <DateActionsButton dateId={id} />
      </div>
      {issues ? <IssuesTable issues={issues} /> : <p>No issues found</p>}
    </>
  );
}
