import useSWR from 'swr';
import { AppFetcher, AppResources } from '../../utils';

export function useTeams() {
  return useSWR(AppResources.command, AppFetcher).data;
}
