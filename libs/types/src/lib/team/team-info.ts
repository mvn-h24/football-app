import { Captain, Coach, Player } from '.';

export interface TeamInfo {
  id: number;
  name: string;
  coach: Coach;
  captain: Captain;
  lineup: Array<Player>;
  bench: Array<Player>;
}
