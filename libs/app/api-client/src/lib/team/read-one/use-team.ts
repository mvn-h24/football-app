import useSWR from 'swr';
import { AppFetcher, AppResources } from '../../utils';

export function useTeam(id: string) {
  return useSWR(`${AppResources.command}/${id}`, AppFetcher).data;
}
