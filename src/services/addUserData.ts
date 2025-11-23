import { db } from "../infra/db";

const insertOrUpdateStmt = db.prepare(`
  INSERT INTO usersTable (address, score)
  VALUES (?, ?)
  ON CONFLICT(address) DO UPDATE SET score = score + excluded.score
`);

export function addScore(address: string, points: number) {
  try {
    insertOrUpdateStmt.run(address, points);
    console.log(`Added ${points} points to ${address}`);
  } catch (err) {
    console.error("DB error:", err);
  }
}
