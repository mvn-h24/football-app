import {AbstractResource } from "../resource-lable";

export interface Substitution {
  minute: number;
  team: AbstractResource;
  playerOut: AbstractResource;
  playerIn: AbstractResource;
}
