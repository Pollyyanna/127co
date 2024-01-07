import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();
  const request = await db.query("SELECT * FROM REQUEST");

  return {
    request: request[0],
  };
}