import Database from "better-sqlite3";

export const db = new Database("db.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS usersTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT UNIQUE,
    totalBet INTEGER DEFAULT 0,
    games INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    totalScore INTEGER DEFAULT 0
    )
`
).run();

db.prepare(
  `  CREATE TABLE IF NOT EXISTS state (
    key TEXT PRIMARY KEY,
    value TEXT
)`
).run();
