export interface ScorePart {
  homeTeam: number;
  awayTeam: number;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: ScorePart;
  halfTime: ScorePart;
  extraTime: ScorePart;
  penalties: ScorePart;
}
