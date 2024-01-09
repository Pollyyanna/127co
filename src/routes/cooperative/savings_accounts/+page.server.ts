import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const savings = await db.query("SELECT * FROM SAVINGSACCOUNTS");

  return {
    savings: savings[0],
  };
}