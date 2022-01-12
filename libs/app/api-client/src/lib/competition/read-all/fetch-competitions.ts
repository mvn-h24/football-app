import { ApiFetcher, ApiResources } from '../../utils';
import { CompetitionsList } from '@football-app/types';

export const fetchCompetitions = () =>
  ApiFetcher<CompetitionsList>(ApiResources.competitions).then(
    (res) => res.data
  );
