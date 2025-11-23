import { db } from "../infra/db";

const insertOrUpdateStmt = db.prepare(`
  INSERT OR IGNORE INTO state (value)
  VALUES (?)
`);

export function addBlock(block: number) {
  try {
    insertOrUpdateStmt.run(block);
    console.log(`Last block updated: ${block}`);
  } catch (err) {
    console.error("DB error:", err);
  }
}
