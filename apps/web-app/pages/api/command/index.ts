import { fetchTeams } from '@football-app/app/api-client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(await fetchTeams());
}
