

export function calculateScore(totalBet: number, gamesPlayed: number, wins: number): number {
  const betFactor = 0.001;      // 1 point за 1000 единиц ставки
  const gameFactor = 10;        // 10 points за игру
  const winFactor = 50;         // 50 points за выигрыш

  const scoreFromBets = totalBet * betFactor;
  const scoreFromGames = gamesPlayed * gameFactor;
  const scoreFromWins = wins * winFactor;

  const totalScore = scoreFromBets + scoreFromGames + scoreFromWins;

  return Math.floor(totalScore); 
}