import { Database } from "$lib/server/database";

export async function load() {
  const db = await Database.get();

  const cl_transaction = await db.query("SELECT * FROM CL_TRANSACTION");
  const cs_transaction = await db.query("SELECT * FROM CS_TRANSACTION");
  const cm_payout = await db.query("SELECT * FROM CM_PAYOUT");
  const request = await db.query("SELECT * FROM REQUEST");
  const membership = await db.query("SELECT * FROM MEMBERSHIP");
  const loan_records = await db.query("SELECT * FROM LOANRECORDS");
  const savings_accounts = await db.query("SELECT * FROM SAVINGSACCOUNTS");

  return {
    cl_transactions: cl_transaction[0],
    cs_transaction: cs_transaction[0],
    cm_payout: cm_payout[0],
    request: request[0],
    membership: membership[0],
    loan_records: loan_records[0],
    savings_accounts: savings_accounts[0],
  };
}