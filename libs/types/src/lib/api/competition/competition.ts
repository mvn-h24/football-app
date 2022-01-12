import { Season, SeasonMeta } from './index';
import { CompetitionResourceLabel } from './competition-resource-label';

export interface Competition extends CompetitionResourceLabel {
  code: string | null;
  emblemUrl: string | null;
  plan: string;
  currentSeason: Season;
  seasons: Array<SeasonMeta>;
  lastUpdated: Date;
}

export interface CompetitionListItem extends Omit<Competition, 'seasons'> {
  numberOfAvailableSeasons: number | null;
}
