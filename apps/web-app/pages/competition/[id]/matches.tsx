import Link from 'next/link';
import { useCompetition } from '@football-app/app/api-client';
import { ContentLayout, ErrorMessage, Preloader } from '@football-app/app/ui';

function CompetitionReadMatches() {
  const competition = useCompetition();
  if (competition === false) {
    return <ErrorMessage className="m-5" message={'server wrong response'} />;
  }
  return (
    <>
      <ContentLayout className="self-center my-5">
        {competition === undefined ? (
          <Preloader />
        ) : (
          <>
            <h1>Action calendar</h1>
            <Link href={`/competition/${competition.id}`} passHref>
              <a>competition info</a>
            </Link>
          </>
        )}
      </ContentLayout>
    </>
  );
}
export default CompetitionReadMatches;
