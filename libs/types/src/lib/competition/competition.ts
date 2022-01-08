import { AbstractResource } from '../resource-lable';
import { CurrentSeason, Season } from '.';

export interface Competition {
  id: number;
  area: AbstractResource;
  name: string;
  code?: any;
  plan: string;
  currentSeason: CurrentSeason;
  seasons: Array<Season>;
  lastUpdated: Date;
}
