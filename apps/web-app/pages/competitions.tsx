import Link from 'next/link';
import { useCompetitions } from '@football-app/app/api-client';
import { ContentLayout, ErrorMessage } from '@football-app/app/ui';

function CompetitionsList() {
  const competitions = useCompetitions();
  return competitions === undefined ? (
    <ErrorMessage className="m-5" message={'server wrong response'} />
  ) : (
    <ContentLayout className="self-center my-5">
      <ul>
        {competitions.competitions.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={{
                pathname: '/competition/[id]',
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
export default CompetitionsList;
