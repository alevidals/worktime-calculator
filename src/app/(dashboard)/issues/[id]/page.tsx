import { AddIssueButton } from "@/components/add-issue-button";
import { IssuesTable } from "@/components/issues-table";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: {
    id: string;
  };
};

export default async function IssuesPage({ params: { id } }: Props) {
  const supabase = createClient();

  const { data } = await supabase
    .from("issues")
    .select("id, name, start_time, end_time")
    .eq("date_id", id)
    .order("start_time", { ascending: true });

  return (
    <>
      <div className="mb-4">
        <AddIssueButton dateId={id} />
      </div>
      {data ? <IssuesTable issues={data} /> : <p>No issues found</p>}
    </>
  );
}
