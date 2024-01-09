import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const clTransaction = await db.query("SELECT * FROM CL_TRANSACTION");

  return {
    clTransaction: clTransaction[0],
  };
}