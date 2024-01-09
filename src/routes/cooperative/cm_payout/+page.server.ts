import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const cmPayout = await db.query("SELECT * FROM CM_Payout");

  return {
    cmPayout: cmPayout[0],
  };
}