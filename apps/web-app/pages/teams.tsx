import Link from 'next/link';
import { useTeams } from '@football-app/app/api-client';
import { ContentLayout, ErrorMessage } from '@football-app/app/ui';

function TeamsList() {
  const teamsResp = useTeams();
  return teamsResp === undefined ? (
    <ErrorMessage className="m-5" message={'server wrong response'} />
  ) : (
    <ContentLayout className="self-center my-5">
      <ul>
        {teamsResp.teams.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={{
                pathname: `/team/[id]`,
                query: { id },
              }}
              passHref
            >
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
}
export default TeamsList;
