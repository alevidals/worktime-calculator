import { JIRA_TOKEN } from "./config";
import { formatJiraIssues } from "./issues";
import { ExternalJiraIssue, GetUserDataJiraResponse } from "./types";

export async function getUserInfoByEmail(email: string) {
  const response = await fetch(
    `https://aktios.atlassian.net/rest/api/3/user/search?query=${email}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${JIRA_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching user info");
  }

  const data: GetUserDataJiraResponse = await response.json();

  if (data.length === 0 || data.length > 1) {
    throw new Error("User not found");
  }

  return data[0];
}

export async function getIssuesByAccountId(accountId: string) {
  const url = new URL("https://aktios.atlassian.net/rest/api/3/search");
  url.searchParams.append("jql", 'assignee = "5eba60f8c112750babb70044"');

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Basic ${JIRA_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching issues");
  }

  const data: ExternalJiraIssue = await response.json();

  console.log(data);

  const formatedIssues = formatJiraIssues(data.issues);

  return formatedIssues;
}
