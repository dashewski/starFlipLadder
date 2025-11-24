export function calculateScore(totalBet: number, gamesPlayed: number, wins: number): number {
  const betFactor = 0.0000000000001;      
  const gameFactor = 2;      
  const winFactor = 5;         

  const scoreFromBets = totalBet * betFactor;
  const scoreFromGames = gamesPlayed * gameFactor;
  const scoreFromWins = wins * winFactor;

  const totalScore = scoreFromBets + scoreFromGames + scoreFromWins;

  return Math.floor(totalScore); 
}