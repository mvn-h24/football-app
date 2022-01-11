import { CompetitionListItem } from './index';
import { ResourceMetaList } from '../resource-meta-list';

export interface CompetitionsList extends ResourceMetaList {
  competitions: Array<CompetitionListItem>;
}
