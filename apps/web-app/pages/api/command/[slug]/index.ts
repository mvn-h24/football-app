import { fetchTeam } from '@football-app/app/api-client';
import { AppError, TeamComposition } from '@football-app/types';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const endpoint = (
  req: NextApiRequest,
  res: NextApiResponse<TeamComposition | AppError>
) =>
  fetchTeam(Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug)
    .then((apiResponse) => {
      if (apiResponse.status === 200) {
        res.json(apiResponse.data);
      } else {
        res.status(404).json({
          status: apiResponse.status,
          description: apiResponse.statusText,
        });
      }
      return res;
    })
    .catch((reason: AxiosError) =>
      res.status(500).json({
        status: reason.response.status,
        description: reason.response.data.message,
      })
    );

export default endpoint;
