import { CompetitionResourceLabel, Season } from '../competition';
import { TeamResourceLabel } from '../team';
import { MatchState } from './enum';
import { Score } from './details';
import { MatchReferee } from './staff';

export interface MatchInfo {
  id: number;
  competition: CompetitionResourceLabel;
  season: Season;
  utcDate: Date;
  status: MatchState;
  venue: string;
  matchday: number;
  // stage: MatchStage;
  group: null;
  lastUpdated: Date;
  odds: {
    msg: string;
  };
  score: Score;
  homeTeam: TeamResourceLabel;
  awayTeam: TeamResourceLabel;
  referees: Array<MatchReferee>;
}
