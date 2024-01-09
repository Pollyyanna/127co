import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const loans = await db.query("SELECT * FROM LoanRecords");

  return {
    loans: loans[0],
  };
}