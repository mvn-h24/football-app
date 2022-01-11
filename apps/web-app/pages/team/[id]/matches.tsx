import { useRouter } from 'next/router';

function ReadTeamMatches() {
  const router = useRouter();
  console.log(router.query);
  //useTeam(slug);
  return <></>;
}
export default ReadTeamMatches;
