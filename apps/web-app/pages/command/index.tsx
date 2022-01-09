import { useTeams } from '@football-app/app/api-client';

function CommandListAll() {
  const teamsResp = useTeams();
  return <>all commands</>;
}
export default CommandListAll;
