

export function calculateScore(totalBet: number, gamesPlayed: number, wins: number): number {
  const betFactor = 0.001;      
  const gameFactor = 10;      
  const winFactor = 50;         

  const scoreFromBets = totalBet * betFactor;
  const scoreFromGames = gamesPlayed * gameFactor;
  const scoreFromWins = wins * winFactor;

  const totalScore = scoreFromBets + scoreFromGames + scoreFromWins;

  return Math.floor(totalScore); 
}