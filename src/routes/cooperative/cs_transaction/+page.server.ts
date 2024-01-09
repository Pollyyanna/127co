import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const csTransaction = await db.query("SELECT * FROM CS_Transaction");

  return {
    csTransaction: csTransaction[0],
  };
}