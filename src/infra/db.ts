import Database from "better-sqlite3";

export const db = new Database("db.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS usersTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT UNIQUE,
    score INTEGER DEFAULT 0
    )
  `,
  `  CREATE TABLE IF NOT EXISTS state (
    key TEXT PRIMARY KEY,
    value INTEGER
)`
).run();
