import { addBlock } from "./addBlockDB";
import { addOrUpdateUser } from "./addUserDB";
import { fetchBetLogs } from "./fetchEvents";

export async function setStats(fromBlock: number, toBlock: number) {
  const bets = await fetchBetLogs(fromBlock, toBlock);

  bets.forEach((bet) => {
    const totalBet = Number(bet.amount) 
    const games = 1;
    const wins = bet.won ? 1 : 0;

    addOrUpdateUser(bet.player, totalBet, games, wins);
  });

  addBlock(toBlock);
}
