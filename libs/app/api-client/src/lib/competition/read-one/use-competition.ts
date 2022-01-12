import { useRouter } from 'next/router';
import useSWR from 'swr';
import { AppError, Competition } from '@football-app/types';
import { AppFetcher, AppResources } from '../../utils';

export function useCompetition(): Competition | undefined | false {
  const router = useRouter();
  const { id } = router.query;
  const competitionResponse = useSWR<Competition | AppError>(
    `${AppResources.competition}/${id}`,
    AppFetcher
  );
  if (
    (competitionResponse.data as AppError | undefined)?.status !== undefined
  ) {
    return false;
  }
  return competitionResponse.data as Competition | undefined;
}
