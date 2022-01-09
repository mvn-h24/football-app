import { TeamComposition } from '@football-app/types';
import { ApiFetcher, ApiResources } from '../../utils';

export const fetchTeams = () =>
  ApiFetcher<Array<TeamComposition>>(ApiResources.teams).then(
    (res) => res.data
  );
