import { Season } from './index';
import { CompetitionResourceLabel } from './competition-resource-label';

export interface Competition extends CompetitionResourceLabel {
  code: string | null;
  emblemUrl: string | null;
  plan: string;
  lastUpdated: Date;
  currentSeason: Season;
  seasons: Array<Season>;
}

export interface CompetitionListItem extends Competition {
  numberOfAvailableSeasons: number | null;
}
