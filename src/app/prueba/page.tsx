import { getIssuesByAccountId } from "@/lib/jira";

export default async function PruebaPage() {
  const issues = await getIssuesByAccountId("5eba60f8c112750babb70044");

  return (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          {issue.key} - {issue.name}
        </li>
      ))}
    </ul>
  );
}
