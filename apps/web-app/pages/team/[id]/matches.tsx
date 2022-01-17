import { useTeamMatches } from '@football-app/app/api-client';
import {
  Calendar,
  ContentLayout,
  ErrorMessage,
  Preloader,
} from '@football-app/app/ui';

function ReadTeamMatches() {
  const team = useTeamMatches();
  if (team === false) {
    return <ErrorMessage className="m-5" message={'server wrong response'} />;
  }
  return (
    <ContentLayout className="self-center my-5">
      {team === undefined ? (
        <Preloader />
      ) : (
        <div>
          {team.matches.map((match) => (
            <div key={match.id}>
              {match.competition.name} <strong>{match.utcDate}</strong>
            </div>
          ))}
          <Calendar />
        </div>
      )}
    </ContentLayout>
  );
}
export default ReadTeamMatches;
