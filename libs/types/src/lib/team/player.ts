export interface Player {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}
export type Captain = Omit<Player, 'position'>
