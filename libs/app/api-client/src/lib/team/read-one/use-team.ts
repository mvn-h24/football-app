import { useRouter } from 'next/router';
import useSWR from 'swr';
import { AppError, Team } from '@football-app/types';
import { AppFetcher, AppResources } from '../../utils';

export function useTeam(): Team | undefined | false {
  const router = useRouter();
  const teamResponse = useSWR<Team | AppError>(
    router.query['id'] === undefined
      ? undefined
      : `${AppResources.teams}/${router.query['id']}`,
    AppFetcher
  );
  if ((teamResponse.data as AppError | undefined)?.status !== undefined) {
    return false;
  }
  return teamResponse.data as Team | undefined;
}
