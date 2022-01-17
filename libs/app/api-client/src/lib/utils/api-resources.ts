export const ApiResources = {
  teams: '/teams',
  team: {
    matches: (id: string | number) => `/teams/${id}/matches`,
    details: (id: string | number) => `/teams/${id}`,
  },
  competitions: '/competitions',
};
