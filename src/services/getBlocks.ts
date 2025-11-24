import { db } from "../infra/db";
import { provider } from "../infra/provider";

export function getLastBlock(): number | null {
  try {
    const row = db.prepare(`SELECT value FROM state WHERE key = 'lastBlock'`).get();
    if (row) {
      return Number(row.value); 
    } else {
      return 34075993; 
    }
  } catch (err) {
    console.error("DB error:", err);
    return null;
  }
}

export async function getActualBlock() {
  const actualBlock = await provider.getBlockNumber();
  return Number(actualBlock);
}

