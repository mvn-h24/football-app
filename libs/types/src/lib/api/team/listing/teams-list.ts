import { ResourceMetaList } from '../../resource-meta-list';
import { TeamsListItem } from './team-list-item';

export interface TeamsList extends ResourceMetaList {
  teams: Array<TeamsListItem>;
}
