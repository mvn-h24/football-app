import { useRouter } from 'next/router';
import useSWR from 'swr';
import { AppError, Team } from '@football-app/types';
import { AppFetcher, AppResources } from '../../utils';

export function useTeam(): Team | undefined | false {
  const router = useRouter();
  const { id } = router.query;
  const teamResponse = useSWR<Team | AppError>(
    `${AppResources.teams}/${id}`,
    AppFetcher
  );
  if ((teamResponse.data as AppError | undefined)?.status !== undefined) {
    return false;
  }
  return teamResponse.data as Team | undefined;
}
