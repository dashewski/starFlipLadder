import { db } from "../infra/db";
import { calculateScore } from "../utils/scoreGenerate";
import { formatEther } from "ethers";



const insertOrUpdateUser = db.prepare(`
  INSERT INTO usersTable (address, totalBet, games, wins, totalScore)
  VALUES (?, ?, ?, ?, ?)
  ON CONFLICT(address) DO UPDATE SET
    totalBet = totalBet + excluded.totalBet,
    games = games + excluded.games,
    wins = wins + excluded.wins,
    totalScore = totalScore + excluded.totalScore
`);

export function addOrUpdateUser(
  address: string,
  totalBet: number,
  games: number,
  wins: number
) {
  try {
    const score = calculateScore(totalBet, games, wins);
    insertOrUpdateUser.run(address, formatEther(totalBet), games, wins, score);
  } catch (err) {
    console.error("DB error:", err);
  }
}
