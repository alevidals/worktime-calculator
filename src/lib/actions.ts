"use server";

import { getUserInfoByEmail } from "./jira";
import { Login } from "./types";

export async function login(data: Login) {
  const userData = getUserInfoByEmail(data.email);

  return userData;
}
