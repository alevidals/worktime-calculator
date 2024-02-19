import { AddIssueButton } from "@/components/add-issue-button";
import { DeleteIssuesButton } from "@/components/delete-issues-button";
import { IssuesTable } from "@/components/issues-table";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Hello Alejandro!</h1>
        <AddIssueButton />
      </div>
      <IssuesTable />
      <div className="fixed bottom-4 right-4 flex items-center gap-x-3">
        <DeleteIssuesButton className="rounded-full" />
      </div>
    </>
  );
}
