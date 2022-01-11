import { MatchInfo } from './match-info';
import { Head2head } from './details';

export interface Match {
  'head-2-head': Head2head;
  match: MatchInfo;
}
