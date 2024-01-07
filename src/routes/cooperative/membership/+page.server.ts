import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const membership = await db.query("SELECT * FROM MEMBERSHIP");

  return {
    membership: membership[0],
  };
}