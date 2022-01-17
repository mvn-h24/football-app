export const AppResources = {
  teams: '/api/team',
  team: {
    matches: (id: string | number) => `/api/team/${id}/matches`,
    details: (id: string | number) => `/api/team/${id}`,
  },
  competition: '/api/competition',
};
