import { TeamInfo } from '../team';
import { Season } from '../competition';
import { AbstractResource } from '../resource-lable';
import { Booking, Goal, Referee, Score, Substitution } from '.';

export interface Match {
  id: number;
  competition: AbstractResource;
  season: Season;
  utcDate: Date;
  status: string;
  minute?: any;
  attendance: number;
  venue: string;
  matchday?: any;
  stage: string;
  group: string;
  lastUpdated: Date;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  score: Score;
  goals: Array<Goal>;
  bookings: Array<Booking>;
  substitutions: Array<Substitution>;
  referees: Array<Referee>;
}
