import { db } from "../infra/db";

const insertOrUpdateStmt = db.prepare(`
  INSERT OR REPLACE INTO state (key, value)
  VALUES ('lastBlock', ?)
`);

export function addBlock(block: number | bigint) {
  try {
    insertOrUpdateStmt.run(block.toString());
    console.log(`Last block updated: ${block}`);
  } catch (err) {
    console.error("DB error:", err);
  }
}

