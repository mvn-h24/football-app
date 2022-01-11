import { ResourceMetaList } from '../resource-meta-list';
import { AreaListItem } from './area';

export interface AreasList extends ResourceMetaList {
  areas: Array<AreaListItem>;
}
