import { AbstractResource } from '../resource-lable';
import { Player } from '../team';

export interface Booking {
  minute: number;
  team: AbstractResource;
  player: Player;
  card: string;
}
